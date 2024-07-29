/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  PaginationState,
  useReactTable,
} from "@tanstack/react-table";
import styled from "styled-components";
import Table, { TBody, Td, Th, THead, Tr } from "../table";
import { Dispatch } from "react";

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;
interface ITableDynamic {
  columns: ColumnDef<any, any>[];
  data: any[];
  pagination?: PaginationState;
  setPagination: Dispatch<React.SetStateAction<PaginationState>>;
}
export function TableDynamic({
  columns,
  data,
  pagination,
  setPagination,
}: ITableDynamic) {
  const table = useReactTable({
    data,
    columns,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
  });

  return (
    <TableContainer>
      <Table fullWidth>
        <THead>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <Tr key={headerGroup?.id}>
                {headerGroup?.headers.map((header) => (
                  <Th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </Th>
                ))}
              </Tr>
            );
          })}
        </THead>
        <TBody>
          {table.getRowModel().rows.map((row) => (
            <Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </Tr>
          ))}
        </TBody>
      </Table>
      <div className="flex items-center gap-2">
        <button
          className="border rounded p-1"
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </button>
      </div>
    </TableContainer>
  );
}
