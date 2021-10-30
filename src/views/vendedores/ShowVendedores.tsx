import CIcon from "@coreui/icons-react";
import { CCard, CCardHeader, CBadge, CCardBody } from "@coreui/react";
import React from "react";
import VendedorDatatable from "./components/VendedorDatatable";

export const ShowVendedores: React.FC = () => {
  return (

      <CCard>
      <CCardHeader>
        <CIcon name="cil-people"/>
        <CBadge color="success">Visualizar vendedores</CBadge>
      </CCardHeader>
      <CCardBody>
      <VendedorDatatable />
      </CCardBody>
    </CCard>
  );
};
