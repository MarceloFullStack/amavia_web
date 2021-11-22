import CIcon from "@coreui/icons-react";
import { CCard, CCardHeader, CBadge, CCardBody } from "@coreui/react";
import { LojasForm } from "./LojasForm";
// import {VendedorForm} from "./components/VendedorForm"
function NewLoja  ()  {
  return (
    <><CCard>
      <CCardHeader>
        <CIcon name="cil-people" />
        <CBadge color="success">Cadastrar nova loja</CBadge>
      </CCardHeader>
      <CCardBody>
        <LojasForm/>
      </CCardBody>
    </CCard></>
  );
};

export default NewLoja;
