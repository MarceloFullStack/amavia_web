import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Datatable from "src/GlobalComponents/datatable";
import userService from "src/services/auth/user.service";
import { CCard, CCardHeader } from '@coreui/react';
import { CIcon } from '@coreui/icons-react';
import { CBadge } from '@coreui/react';
import { CCardBody } from '@coreui/react';

function Show() {
  const history = useHistory();
  const [render, setRender] = useState("");

  const [items, setItems] = useState([]);

  const handleEdit= ({id}) =>{
    history.push(`/lojas/new_loja/${id}`)
  }
  const handleDelete= ({id}) =>{
    userService.delete("lojas/" ,id).then((response) => {
      setRender({id})
    }
    )
  }

  useEffect(() => {
    userService
      .getAll("lojas")
      .then(({ data }) => {
        let dataAdapter = data.map((payload) => {
          return {
            id: payload.id,
            nome: payload.nome,
            descricao: payload.descricao,
          };
        });
        setItems(dataAdapter);
        setRender(history.location.pathname)
      })
      .catch(() => {});

    return () => {
      console.log("cleanup");
    };
  }, [render]);

  const fields = [
    { key: "id", label: "Código", _style: { width: "10%" } },
    { key: "nome", label: "Nome", _style: { width: "40%" } },
    { key: "descricao", label: "Descrição", _style: { width: "20%" } },
    {
      key: "edit",
      label: "Editar",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
    {
      key: "delete",
      label: "Deletar",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];
  return (
    <div>
      <CCard>
      <CCardHeader>
        <CIcon name="cil-people" />
        <CBadge color="success">Visualizar Lojas</CBadge>
      </CCardHeader>
      <CCardBody>
      <Datatable
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      items={items}
      fields={fields}
      />
      </CCardBody>
    </CCard>
    </div>
  );
}

export default Show;
