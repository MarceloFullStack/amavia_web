import {
  CBadge,
  CButton, CCardBody, CCollapse, CDataTable
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import { MascaraCPF } from "src/helpers/helpers";
import UserService from "src/services/auth/user.service";
interface DatatableItems {
  id: number;
  name: string;
  cpf: string;
}
export default function VendedorDatatable() {
  const [items, setItems] = useState<DatatableItems[]>([]);

  useEffect(() => {
    UserService.getAll('employee').then(({ data }) => {
      let dataAdapter = data.map((user: DatatableItems) => {
        return {
          id: user.id,
          name: user.name,
          cpf: MascaraCPF(user.cpf),
        };
      });
      setItems(dataAdapter);
    });

    return () => {
      console.log("cleanup");
    };
  }, []);

  const [details, setDetails] = useState([]);
  // const [items, setItems] = useState(usersData)

  const toggleDetails = (index: never) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };

  const fields = [
    { key: "name", label: "Nome", _style: { width: "40%" } },
    // 'registered',
    { key: "cpf", label: "CPF", _style: { width: "20%" } },
    // { key: 'status', _style: { width: '20%'} },
    {
      key: "show_details",
      label: "Ações",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];

  const getBadge = (status: any) => {
    switch (status) {
      case "Active":
        return "success";
      case "Inactive":
        return "secondary";
      case "Pending":
        return "warning";
      case "Banned":
        return "danger";
      default:
        return "primary";
    }
  };

  return (
    <>
      <CDataTable
        items={items}
        fields={fields}
        columnFilter
        tableFilter={{ label: "Buscar", placeholder: "Buscar..." }}
        // footer
        itemsPerPageSelect={{ label: "Itens por página", placeholder: "" }}
        itemsPerPage={5}
        hover
        sorter
        border
        pagination
        scopedSlots={{
          status: (item: { status: any }) => (
            <td>
              <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
            </td>
          ),
          show_details: (item: any, index: never) => {
            return (
              <td className="py-2">
                <CButton
                  color="info"
                  variant="outline"
                  shape="square"
                  size="sm"
                  onClick={() => {
                    toggleDetails(index);
                  }}
                >
                  {details.includes(index) ? "Ocultar" : "Exibir"}
                </CButton>
              </td>
            );
          },
          details: (
            item: {
              username:
                | boolean
                | React.ReactChild
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
              registered:
                | string
                | number
                | boolean
                | {}
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactNodeArray
                | React.ReactPortal
                | null
                | undefined;
            },
            index: never
          ) => {
            return (
              <CCollapse show={details.includes(index)}>
                <CCardBody>
                  <h4>{item.username}</h4>
                  <p className="text-muted mb-1">Ações: {item.registered}</p>
                  <CButton size="sm" color="info">
                    Ver detalhes
                  </CButton>
                  <CButton size="sm" color="warning" className="ml-1 text-white">
                    Editar usuário
                  </CButton>
                  <CButton size="sm" color="danger" className="ml-1">
                    Deletar usuário
                  </CButton>
                </CCardBody>
              </CCollapse>
            );
          },
        }}
      />
    </>
  );
}
