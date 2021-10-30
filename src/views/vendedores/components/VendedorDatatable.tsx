import {
  CDataTable,
  CBadge,
  CButton,
  CCollapse,
  CCardBody,
} from "@coreui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { MascaraCPF } from "src/helpers/helpers";
import UserService from "src/services/auth/user.service";
interface DatatableItems {
  id: number;
  name: string;
  cpf: string;
}
export default function VendedorDatatable() {
  const [items, setItems] = useState<DatatableItems[]>([]);
  const usersData: DatatableItems[] = [
    { id: 0, name: "John Doe", cpf: "2018/01/01" },
    { id: 1, name: "Samppa Nori", cpf: "2018/01/01" },
    { id: 2, name: "Estavan Lykos", cpf: "2018/02/01" },
    { id: 3, name: "Chetan Mohamed", cpf: "2018/02/01" },
    { id: 4, name: "Derick Maximinus", cpf: "2018/03/01" },
    { id: 5, name: "Friderik Dávid", cpf: "2018/01/21" },
    { id: 6, name: "Yiorgos Avraamu", cpf: "2018/01/01" },
    { id: 7, name: "Avram Tarasios", cpf: "2018/02/01" },
    { id: 8, name: "Quintin Ed", cpf: "2018/02/01" },
    { id: 9, name: "Enéas Kwadwo", cpf: "2018/03/01" },
    { id: 10, name: "Agapetus Tadeáš", cpf: "2018/01/21" },
    { id: 11, name: "Carwyn Fachtna", cpf: "2018/01/01" },
    { id: 12, name: "Nehemiah Tatius", cpf: "2018/02/01" },
    { id: 13, name: "Ebbe Gemariah", cpf: "2018/02/01" },
    { id: 14, name: "Eustorgios Amulius", cpf: "2018/03/01" },
    { id: 15, name: "Leopold Gáspár", cpf: "2018/01/21" },
    { id: 16, name: "Pompeius René", cpf: "2018/01/01" },
    { id: 17, name: "Paĉjo Jadon", cpf: "2018/02/01" },
    { id: 18, name: "Micheal Mercurius", cpf: "2018/02/01" },
    { id: 19, name: "Ganesha Dubhghall", cpf: "2018/03/01" },
    { id: 20, name: "Hiroto Šimun", cpf: "2018/01/21" },
    { id: 21, name: "Vishnu Serghei", cpf: "2018/01/01" },
    { id: 22, name: "Zbyněk Phoibos", cpf: "2018/02/01" },
    { id: 23, name: "Aulus Agmundr", cpf: "2018/01/01" },
    { id: 42, name: "Ford Prefect", cpf: "2001/05/25" },
  ];

  useEffect(() => {
    UserService.getAll().then(({ data }) => {
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
      label: "",
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
      <h1 className="text-center m-2 title">Lista de vendedores cadastrados</h1>
      <hr />
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
