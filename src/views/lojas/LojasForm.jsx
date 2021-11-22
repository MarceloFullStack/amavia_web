import {
  CRow,
  CCol,
  CFormGroup,
  CLabel,
  CInput,
  CInvalidFeedback,
  CButton,
  CForm,
} from "@coreui/react";
import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import UserService from "src/services/auth/user.service";
import { useForm, Controller } from "react-hook-form";
const initialValues = {
  nome: "",
  descricao: "",
};
export const LojasForm = (item = null) => {
  const { control, handleSubmit, reset } = useForm({mode: 'onBlur'});
  // const onSubmit = (data) => console.log(data);
  const history = useHistory();
  let { id } = useParams();
  const [data, setData] = React.useState(initialValues);
  const [load, setLoad] = React.useState(false);
  const [erroMsg, setErroMsg] = React.useState(null);

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
}, [data]);
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
