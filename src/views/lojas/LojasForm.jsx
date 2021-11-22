import {
  CRow,
  CCol,
  CFormGroup,
  CLabel,
  CInput,
  CButton,
  CForm,
} from "@coreui/react";
import useYupValidationResolver from "src/hooks/useYupValidationResolver";
import * as yup from "yup";
import useFetchData from "src/hooks/useFetchData";


const initialValues = {
  nome: "",
  descricao: "",
};

const somenteLetras = /^[a-zA-Z\s]+$/;
const validationSchema = yup
  .object().shape({
    nome: yup.string().matches(somenteLetras, "campo so aceita letras").required("O campo nome é obrigatório"),
    descricao: yup.string().required("O campo descrição é obrigatório"),
  })

export const LojasForm = (item = null) => {
  const resolver = useYupValidationResolver(validationSchema);
  const [control, Controller ,handleSubmit, onSubmit, errors, data, id, load] = useFetchData("lojas", initialValues, resolver);

  if (load) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <CForm onSubmit={handleSubmit(onSubmit)}>
        <CRow>
          <CCol xs="12" md="6">
            <CFormGroup>
              <CLabel htmlFor="nome">Nome</CLabel>
              <Controller
                name="nome"
                control={control}
                defaultValue={data.nome ?? ""}
                render={({ field }, ref) => <CInput {...field} ref={ref} />}
              />
              <p>{errors.nome?.message}</p>
            </CFormGroup>
          </CCol>
          <CCol xs="12" md="6">
            <CFormGroup>
              <CLabel htmlFor="descricao">Descrição</CLabel>
              <Controller
                name="descricao"
                control={control}
                defaultValue={data.descricao ?? ""}
                render={({ field }, ref) => <CInput {...field} ref={ref} />}
              />
              <p>{errors.descricao?.message}</p>
            </CFormGroup>
          </CCol>
        </CRow>
        <CButton type="submit" color="info">
          {id ? "Atualizar" : "Cadastrar"}
        </CButton>
      </CForm>
    </>
  );
};
