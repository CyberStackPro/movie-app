import { ReactElement } from "react";
import { SortColumn } from "../MovieTable";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";

export interface Columns {
  path?: string;
  label?: string;
  key?: string;
  content?: (movie: any) => ReactElement;
}
interface Props {
  sortColumn: SortColumn;
  columns: Columns[];
  onSort: (column: SortColumn) => void;
}
const TableHeader = ({ columns, onSort, sortColumn }: Props) => {
  const raiseSort = (path: string | undefined) => {
    if (!path) return;
    // Create a new object based on current sortColumn state
    const updatedSortColumn = { ...sortColumn };

    if (updatedSortColumn.path === path) {
      // Toggle order if the same column is clicked again
      updatedSortColumn.order =
        updatedSortColumn.order === "asc" ? "desc" : "asc";
    } else {
      // Set new path and reset order to "asc" for a new column
      updatedSortColumn.path = path;
      updatedSortColumn.order = "asc";
    }
    onSort(updatedSortColumn);
  };
  const renderSortIcon = (column: Columns) => {
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc")
      return <AiOutlineSortAscending fontSize={28} />;
    return <AiOutlineSortDescending fontSize={28} />;
  };
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            className="clickable"
            key={column.path || column.key}
            onClick={() => raiseSort(column.path)}
          >
            <span className="inline-flex">
              {column.label}
              {renderSortIcon(column)}
            </span>{" "}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
