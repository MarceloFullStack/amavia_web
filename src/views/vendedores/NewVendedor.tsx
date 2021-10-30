import CIcon from "@coreui/icons-react";
import { CCard, CCardHeader, CBadge, CCardBody } from "@coreui/react";
import React from "react";
import {VendedorForm} from "./components/VendedorForm"
export const NewVendedor: React.FC = () => {
  return (
    <><CCard>
      <CCardHeader>
        <CIcon name="cil-people" />
        <CBadge color="success">Cadastrar novo vendedor</CBadge>
      </CCardHeader>
      <CCardBody>
        <VendedorForm />
      </CCardBody>
    </CCard></>
  );
};
