import { CRow, CCol, CFormGroup, CLabel, CInput, CInvalidFeedback, CButton, CForm } from "@coreui/react";
import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import UserService from "src/services/auth/user.service";
const initialValues = {
  nome: "",
  descricao: "",

};
export const LojasForm = (item = null) => {
  const history = useHistory();
  let { id } = useParams();
  const [value, setValue] = React.useState(initialValues);
  const [load, setLoad] = React.useState(false);
  const [erroMsg, setErroMsg] = React.useState(null);

  useEffect(() => {
    if (id) {
      setLoad(true)
      UserService.getOne("lojas/" ,id).then((response) => {
        setValue(response.data);
      }).then((res)=>{
        setLoad(false);
      });

    }
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      UserService.update(`lojas/${id}`, value).then((response) => {
        console.log(response);
      });
    } else {
      UserService.create('lojas', value).then((response) => {
        console.log(response);
      });

    }
    history.push(`/lojas`)
  };

  const onchange = (e) => {
    const target = e.target;
    setValue({ ...value, [target.name]: target.value });

  };
  const validateName = (e) => {
    const target = e.target;
    if (target.value.length === 0) {
      setErroMsg("O campo nome é obrigatório");
      return false;
    }
    if (target.value.length < 3) {
      setErroMsg("Nome deve ter no mínimo 3 caracteres");
      return false;
    }
    setErroMsg(null)
    return true;
  };

  return (
    <>
    {!load ? (<CForm className={erroMsg && "was-validated"}>
     <CRow>
        <CCol xs="12" md="6">
          <CFormGroup>
            <CLabel htmlFor="nome">Nome</CLabel>
            <CInput
              id="nome"
              name="nome"
              placeholder="nome"
              value={item && value.nome}
              onChange={(ev) => onchange(ev)}
              onBlur={(ev) => validateName(ev)}
            />
            {erroMsg ? <small className="text-danger">{erroMsg}</small> : null}
          </CFormGroup>
        </CCol>
        <CCol xs="12" md="6">
          <CFormGroup>
            <CLabel htmlFor="descricao">Descrição</CLabel>
            <CInput
              id="descricao"
              name="descricao"
              value={value.descricao}
              placeholder="descricao"
              onChange={(ev) => onchange(ev)}
            />
            <CInvalidFeedback>Envie um CPF válido CPF</CInvalidFeedback>
          </CFormGroup>
        </CCol>
      </CRow>
        <CButton type="submit" color="info" onClick={handleSubmit}>
          {id ? "Atualizar" : "Cadastrar"}
        </CButton>

    </CForm>): (<div>Carregando...</div>)}
    </>
  );
};
