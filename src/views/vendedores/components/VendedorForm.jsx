import { CRow, CCol, CFormGroup, CLabel, CInput, CInvalidFeedback, CButton, CForm } from "@coreui/react";
import React, { useEffect } from "react";
import UserService from "src/services/auth/user.service";
const initialValues = {
  name: "",
  cpf: "",

};
export const VendedorForm = (item = null) => {
  const {id} = item;

  const [value, setValue] = React.useState(initialValues);
  const [load, setLoad] = React.useState(false);
  const [erroMsg, setErroMsg] = React.useState(null);

  useEffect(() => {
    if (id) {
      setLoad(true)
      UserService.getOne('vendedores/', id).then((response) => {
        setValue(response.data);
      }).then(()=>{
        setLoad(false);
      });

    }
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      UserService.update(`vendedores/${id}`, value).then((response) => {
        console.log(response);
      });
    } else {
      UserService.create('vendedores', value).then((response) => {
        console.log(response);
      });

    }
    console.log(value);
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
            <CLabel htmlFor="name">Nome</CLabel>
            <CInput
              id="name"
              name="name"
              placeholder="name"
              value={item && value.name}
              onChange={(ev) => onchange(ev)}
              onBlur={(ev) => validateName(ev)}
            />
            {erroMsg ? <small className="text-danger">{erroMsg}</small> : null}
          </CFormGroup>
        </CCol>
        <CCol xs="12" md="6">
          <CFormGroup>
            <CLabel htmlFor="CPF">CPF</CLabel>
            <CInput
              id="CPF"
              name="cpf"
              value={value.cpf}
              placeholder="CPF"
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
