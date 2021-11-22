import {
  CRow,
  CCol,
  CFormGroup,
  CLabel,
  CInput,
  CButton,
  CForm,
} from "@coreui/react";
import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import UserService from "src/services/auth/user.service";
import { useForm, Controller } from "react-hook-form";
import useYupValidationResolver from 'src/hooks/useYupValidationResolver';
import * as yup from "yup";
const initialValues = {
  nome: "",
  descricao: "",

};
const validationSchema = yup.object({
nome: yup.string().required("O campo nome é obrigatório"),
descricao: yup.string().required("O campo descrição é obrigatório"),
}).required();


export const LojasForm = (item = null) => {
  const resolver = useYupValidationResolver(validationSchema);
  const { control, handleSubmit,  reset, formState:{ errors } } = useForm({mode: 'onBlur', resolver});
  const history = useHistory();
  let { id } = useParams();
  const [data, setData] = React.useState(initialValues);
  const [load, setLoad] = React.useState(false);


  useEffect(() => {
    if (id) {
      setLoad(true);
      UserService.getOne("lojas/", id)
        .then((response) => {
          setData(response.data);
        })
        .then((res) => {
          setLoad(false);
        });
    }
  }, [id]);

useEffect(() => {
  reset(data);
}, [data, reset]);
  const onSubmit = (e) => {
    console.log(e)
    // e.preventDefault();
    if (id) {
      UserService.update(`lojas/${id}`, e).then((response) => {
        console.log(response);
      });
    } else {
      UserService.create('lojas', e).then((response) => {
        console.log(response);
      });

    }
    history.push(`/lojas`)
  };

  // const onchange = (e) => {
  //   const target = e.target;
  //   setData({ ...value, [target.name]: target.value });

  // };
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
                render={({ field }, ref) => (
                    <CInput
                    {...field}
                    ref={ref}
                 />

                 )}
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
              render={({ field }, ref) => (
                  <CInput
                  {...field}
                  ref={ref}/>
                  )}
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
