import {
  CBadge,
  CButton, CCardBody, CCollapse, CDataTable
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import { MascaraCPF } from "src/helpers/helpers";
import UserService from "src/services/auth/user.service";
import { VendedorForm } from './VendedorForm';
export default function VendedorDatatable() {
  const [items, setItems] = useState([]);
  const [details, setDetails] = useState([]);
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    UserService.getAll('employee').then(({ data }) => {
      let dataAdapter = data.map((user) => {
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

  // const [items, setItems] = useState(usersData)

  const toggleDetails = (index) => {
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

  const getBadge = (status) => {
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
          status: (item) => (
            <td>
              <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
            </td>
          ),
          show_details: (item, index) => {
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
            item,
            index
          ) => {
            return (
              <CCollapse show={details.includes(index)}>
                <CCardBody>
                {showEdit ? <VendedorForm {...item}/> : null}
                  <p className="text-muted mb-1">Ações:</p>
                  <CButton size="sm" color="info">
                    Ver detalhes
                  </CButton>
                  <CButton size="sm" color="warning" className="ml-1 text-white" onClick={() => setShowEdit(!showEdit)}>
                    {showEdit ? 'Cancelar Edição' : 'Editar'}
                  </CButton>
                  <CButton size="sm" color="danger" className="ml-1" >
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
