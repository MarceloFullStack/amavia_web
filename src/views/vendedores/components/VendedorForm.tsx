import { CRow, CCol, CFormGroup, CLabel, CInput, CInvalidFeedback, CButton, CForm } from "@coreui/react";
import React from "react";
import UserService from "src/services/auth/user.service";
const initialValues = {
  name: "",
  cpf: "",

};
export const VendedorForm: React.FC = () => {
  const [value, setValue] = React.useState(initialValues);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    UserService.create('employee',value).then(()=>{
      alert('Cadastrado com sucesso')
    }).catch(()=>{
      alert('Erro ao cadastrar')
    });
    console.log(value);
  };

  const onchange = (e: React.ChangeEvent<EventTarget>) => {
    const target = e.target as HTMLTextAreaElement;
    setValue({ ...value, [target.name]: target.value });

  };
  return (
    <CForm className="was-validated">
     <CRow>
        <CCol xs="12" md="6">
          <CFormGroup>
            <CLabel htmlFor="name">Nome</CLabel>
            <CInput
              id="name"
              name="name"
              placeholder="name"
              value={value.name}
              onChange={(ev) => onchange(ev)}
              required
            />
            <CInvalidFeedback>Insira o nome do vendedor</CInvalidFeedback>
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
              required
            />
            <CInvalidFeedback>Envie um CPF válido CPF</CInvalidFeedback>
          </CFormGroup>
        </CCol>
      </CRow>
        <CButton type="submit" color="primary" onClick={handleSubmit}>
          Salvar
        </CButton>

    </CForm>
  );
};
