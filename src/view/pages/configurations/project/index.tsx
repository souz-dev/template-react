/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "../../../components/input";
import {
  ActionsContent,
  ButtonContainerTable,
  ButtonTable,
  ContainerPage,
} from "./styled";
import { Button } from "../../../components/button";
import { configurationService } from "../../../../app/service/configurations-service";
import useTitleStore from "../../../../app/store/header-title-store";
import { TableDynamic } from "../../../components/tableData";
import { createColumnHelper, PaginationState } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

export function Project() {
  const filter = "";
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const onChangeSetTitle = useTitleStore((state) => state.setTitle);
  const onChangeSetSubTitle = useTitleStore((state) => state.setSubtitle);

  const columnHelper = createColumnHelper<any>();

  const columns = [
    columnHelper.accessor("description", {
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Descrição</span>,
    }),
    columnHelper.accessor("customer", {
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Customer</span>,
    }),
    columnHelper.accessor("WABA", {
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>WABA</span>,
    }),
    columnHelper.accessor("billingCode", {
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Billing Code</span>,
    }),
    columnHelper.accessor("billingType", {
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Billing Type</span>,
    }),
    columnHelper.accessor("codeAccount", {
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Accounts</span>,
    }),
    columnHelper.accessor("codeProject", {
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Project</span>,
    }),
    columnHelper.accessor("codeService", {
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Service</span>,
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

  const { data: detailNumberchip, isLoading } = useQuery({
    queryKey: [
      "detail-numberchip",
      {
        filter,
        page: pagination?.pageIndex,
        size: pagination.pageSize,
      },
    ],
    queryFn: () =>
      configurationService.getDataProject({
        filter,
        page: pagination?.pageIndex,
        size: pagination.pageSize,
      }),
  });

  useEffect(() => {
    onChangeSetTitle("Configurações");
    onChangeSetSubTitle("Projeto");
  }, []);

  return (
    <ContainerPage>
      <ActionsContent>
        <Input type="text" placeholder="Procurar Projeto" fullWidth />
        <Button>Procurar</Button>
        <Button>Adicionar</Button>
      </ActionsContent>
      {isLoading ? (
        <h2>Carregando</h2>
      ) : (
        <TableDynamic
          setPagination={setPagination}
          pagination={pagination}
          columns={columns}
          data={detailNumberchip}
        />
      )}
    </ContainerPage>
  );
}
