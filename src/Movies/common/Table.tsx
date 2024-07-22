import React from "react";
import TableHeader, { Columns } from "./TableHeader";
import TableBody from "./TableBody";
import { Movies, SortColumn } from "../MovieTable";

interface Props {
  columns: Columns[];
  sortColumns: SortColumn;
  onSort: (sortColumn: SortColumn) => void;
  data: Movies[];
}
const Table = ({ columns, sortColumns, onSort, data }: Props) => {
  return (
    <table className="table ">
      <TableHeader columns={columns} sortColumn={sortColumns} onSort={onSort} />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default Table;
