import _ from "lodash";
import { Movies } from "../MovieTable";
import { Columns } from "./TableHeader";

interface Props {
  data: Movies[];
  columns: Columns[];
}
const TableBody = ({ data, columns }: Props) => {
  //   const getNestedValue = (obj: any, path: string) => {
  //     return path.split(".").reduce((acc, part) => acc && acc[part], obj);
  //     //    if i used lo dash <td>{_.get(item,column.path)}</td>
  //   };
  const renderCell = (item: Movies, column: any) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };
  const createKey = (item: Movies, column: any) => {
    return item._id + (column.path || column.key);
  };
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item._id}>
          {columns.map((column) => (
            <td key={createKey(item, column)}>{renderCell(item, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
