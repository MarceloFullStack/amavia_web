import CIcon from "@coreui/icons-react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from "@coreui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import amavia_bg_login from "src/assets/bg/amavia_bg.png";
import amavia_logo from "src/assets/logo/amavia.png";
import AuthService from 'src/services/auth/auth.service';

const Login = () => {
  const [email, setEmail] = useState("carole.carroll@gmail.com");
  const [password, setPassword] = useState("123");

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    // for (var [key, value] of formData.entries()) {
    //   console.log(key, value);
    //  }
    AuthService.login(formData)
  };
  //get formdata react
  return (
    // <div className="amavia__bg c-app c-default-layout flex-row align-items-center">

    //background image
    <div  className="shadow-2xl c-app c-default-layout flex-row align-items-center"
    style={{
      backgroundImage: `url(${amavia_bg_login})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <CContainer >

        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4  tw-border-r-1 tw-border-t-0 tw-border-b-0 tw-border-l-0" >
                <CCardBody>
                  <CForm className="text-center">
                    <h1 className="amavia__txt">Entrar</h1>
                    <p className="text-muted">Insira seu email e senha</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="email"
                        placeholder="Username"
                        autoComplete="username"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="12" className="tw-flex tw-justify-center">
                        <CButton className="px-4 amavia__bg text-white" onClick={handleSubmit}>
                          Entrar
                        </CButton>
                      </CCol>
                      {/* <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Perdeu sua senha ?</CButton>
                      </CCol> */}
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white tw-bg-white tw-border-none py-5 d-md-down-none"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <img
                      src={amavia_logo}
                      alt="..."
                      height={60}
                      className="tw-object-contain tw-h-24 tw-w-full tw-bg-white tw-p-2 tw-mb-4"
                    />
                    <Link to={{ pathname: "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies" }} target="_blank">
                      <CButton
                        color="primary"
                        className="mt-3 amavia__bg tw-border-none"
                        active
                        tabIndex={-1}
                      >
                        Visitar amavia
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
