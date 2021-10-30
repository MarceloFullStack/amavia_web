import { CToast, CToastBody, CToaster, CToastHeader } from "@coreui/react";

export default function Toast() {
  let toasts = [
    { position: 'bottom-center', autohide: 1500},
  ];
  let toasters = (()=>{
    return toasts.reduce((toasters, toast) => {
      toasters[toast.position] = toasters[toast.position] || []
      toasters[toast.position].push(toast)
      return toasters
    }, {})
  })();

  return (
    <>
      {Object.keys(toasters).map((toasterKey) => (
        <CToaster
          position={toasterKey}
          key={'toaster' + toasterKey}
        >
          {
          toasters[toasterKey].map((toast, key)=>{
            return(
              <CToast
                key={'toast' + key}
                show={true}
                autohide={toast.autohide}
                fade={toast.fade}
                color="dark"
              >
                <CToastHeader closeButton={toast.closeButton}>
                  Erro
                </CToastHeader>
                <CToastBody>
                  {`This is a toast in ${toasterKey} positioned toaster number ${key + 1}.`}
                </CToastBody>
              </CToast>
            )
          })
          }
        </CToaster>
      ))}
    </>
  )

}
