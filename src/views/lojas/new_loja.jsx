import CIcon from "@coreui/icons-react";
import { CCard, CCardHeader, CBadge, CCardBody } from "@coreui/react";
import { useParams } from "react-router";
import { LojasForm } from "./LojasForm";
// import {VendedorForm} from "./components/VendedorForm"
function NewLoja  ()  {
  let { id } = useParams();
  return (
    <><CCard>
      <CCardHeader>
        <CIcon name="cil-people" />
        <CBadge color="success">{`${id ? 'Editar': 'Cadastrar nova'}  loja`}</CBadge>
      </CCardHeader>
      <CCardBody>
        <LojasForm/>
      </CCardBody>
    </CCard></>
  );
};

export default NewLoja;
