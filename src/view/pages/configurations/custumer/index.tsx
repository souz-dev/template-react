/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "../../../components/input";
import {
  ActionsContent,
  ButtonADD,
  ButtonContainerTable,
  ButtonTable,
  ContainerPage,
} from "./styled";
import { Button } from "../../../components/button";
import { TableDynamic } from "../../../components/tableData";
import { createColumnHelper, PaginationState } from "@tanstack/react-table";
import { configurationService } from "../../../../app/service/configurations-service";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useTitleStore from "../../../../app/store/header-title-store";

export function Custumer() {
  const filter = "";
  const active = 1;
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const onChangeSetTitle = useTitleStore((state) => state.setTitle);
  const onChangeSetSubTitle = useTitleStore((state) => state.setSubtitle);

  const columnHelper = createColumnHelper<any>();

  const columns = [
    columnHelper.accessor("_id", {
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>ID</span>,
    }),
    columnHelper.accessor("description", {
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Descrição</span>,
    }),

    columnHelper.accessor("nan", {
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span></span>,
    }),
    columnHelper.accessor("nan", {
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span></span>,
    }),
    columnHelper.accessor("_id", {
      cell: (info) => {
        const id = info.getValue();
        console.log(id);
        return (
          <ButtonContainerTable>
            <ButtonTable outline>Editar</ButtonTable>
          </ButtonContainerTable>
        );
      },
      header: () => <span></span>,
    }),
  ];

  const { data: detailCustumer, isLoading } = useQuery({
    queryKey: [
      "detail-custumer",
      {
        filter,
        page: pagination?.pageIndex,
        size: pagination.pageSize,
        active,
      },
    ],
    queryFn: () =>
      configurationService.getDataCustumer({
        filter,
        page: pagination?.pageIndex,
        size: pagination.pageSize,
      }),
  });

  useEffect(() => {
    onChangeSetTitle("Configurações");
    onChangeSetSubTitle("Custumer");
  }, []);

  return (
    <ContainerPage>
      <ActionsContent>
        <Input type="text" placeholder="Procurar Custumer" fullWidth />
        <Button>Procurar</Button>
        <ButtonADD>Adicionar custumer</ButtonADD>
      </ActionsContent>
      {isLoading ? (
        <h2>Carregando</h2>
      ) : (
        <TableDynamic
          setPagination={setPagination}
          pagination={pagination}
          columns={columns}
          data={detailCustumer || []}
        />
      )}
    </ContainerPage>
  );
}
