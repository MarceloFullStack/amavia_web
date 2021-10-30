import CIcon from "@coreui/icons-react";
import { CCard, CCardHeader, CBadge, CCardBody } from "@coreui/react";
import React from "react";
import VendedorDatatable from "./components/VendedorDatatable";
import { useDispatch } from 'react-redux';

export const ShowVendedores: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <>
    <button onClick={() => dispatch({ type: "rrr", toast: true })}>chamar toast</button>
    <button onClick={() => dispatch({ type: "rrr", toast: false })}>fechar toast</button>
      <CCard>
      <CCardHeader>
        <CIcon name="cil-people"/>
        <CBadge color="success">Visualizar vendedores</CBadge>
      </CCardHeader>
      <CCardBody>
      <VendedorDatatable />
      </CCardBody>
    </CCard>
  </>
  );
};
