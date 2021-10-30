import { CToast, CToastBody, CToaster, CToastHeader } from "@coreui/react";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

export default function Toast() {
  const dispatch = useDispatch();
  const toast = useSelector((state) => state.toastReducer.toast);
  useEffect(() => {

    return () => {
      dispatch({ type: "rrr", toast: false })
    }
  }, [])
  return (
    <>
        <CToaster
          position="bottom-center"
          key={'toaster'}
        >
              <CToast
                key={'toast'}
                show={toast}
                autohide={1500}
                fade={true}
                color="dark"
              >
                <CToastHeader closeButton={true}>
                  Erro
                </CToastHeader>
                <CToastBody>
                  {`concluir implementação do toast`}
                </CToastBody>
              </CToast>
        </CToaster>
    </>
  )

}
