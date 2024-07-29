/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "../../../components/input";
import {
  ActionsContent,
  ButtonContainerTable,
  ButtonTable,
  ContainerPage,
} from "./styled";
import { Button } from "../../../components/button";
import Select, { Option } from "../../../components/select";
import { TableDynamic } from "../../../components/tableData";
import { createColumnHelper, PaginationState } from "@tanstack/react-table";
import { numberchipService } from "../../../../app/service/numberchip-service";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useTitleStore from "../../../../app/store/header-title-store";

export function NumberChip() {
  const filter = "";
  const active = 1;
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 1000,
  });

  const onChangeSetTitle = useTitleStore((state) => state.setTitle);
  const onChangeSetSubTitle = useTitleStore((state) => state.setSubtitle);

  const columnHelper = createColumnHelper<any>();

  const columns = [
    columnHelper.accessor("numberchip", {
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Numberchip</span>,
    }),
    columnHelper.accessor("description", {
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Descrição</span>,
    }),
    columnHelper.accessor("broker", {
      cell: (info) => {
        const item = info.getValue();
        return <i>{item?.name}</i>;
      },
      header: () => <span>Broker</span>,
    }),
    columnHelper.accessor("customer", {
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Customer</span>,
    }),
    columnHelper.accessor("project", {
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Projeto</span>,
    }),
    columnHelper.accessor("qualityRating", {
      cell: (info) => (
        <i>{info.getValue() === "UNKNOWN" ? "---" : info.getValue()}</i>
      ),
      header: () => <span>Qualidade</span>,
    }),
    columnHelper.accessor("tier", {
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Tier</span>,
    }),
    columnHelper.accessor("displayName", {
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Display Name</span>,
    }),
    columnHelper.accessor("_id", {
      cell: (info) => {
        const id = info.getValue();
        console.log(id);
        return (
          <ButtonContainerTable>
            <ButtonTable outline color="danger">
              Desativar
            </ButtonTable>
            <ButtonTable outline>Editar</ButtonTable>
          </ButtonContainerTable>
        );
      },
      header: () => <span></span>,
    }),
  ];

  // const queryKey = useMemo(
  //   () => [
  //     "detail-numberchip",
  //     pagination.pageIndex,
  //     pagination.pageSize,
  //     filter,
  //     active,
  //   ],
  //   [pagination.pageIndex, pagination.pageSize, filter, active]
  // );

  const { data: detailNumberchip, isLoading } = useQuery({
    queryKey: [
      "detail-numberchip",
      {
        filter,
        page: pagination?.pageIndex,
        size: pagination.pageSize,
        active,
      },
    ],
    queryFn: () =>
      numberchipService.getDataNumberchip({
        filter,
        page: pagination?.pageIndex,
        size: pagination.pageSize,
        active,
      }),
  });

  useEffect(() => {
    onChangeSetTitle("WhatsApp");
    onChangeSetSubTitle("Numberchip");
  }, []);
  return (
    <ContainerPage>
      <ActionsContent>
        <Input type="text" placeholder="Procurar Numberchip" fullWidth />
        <Select fullWidth>
          <Option value="active">Numberchip Ativos</Option>
          <Option value="inactive">Numberchip Inativos</Option>
        </Select>
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
