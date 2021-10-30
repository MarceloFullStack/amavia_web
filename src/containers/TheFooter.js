import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={true}>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">Copam</a>
        <span className="mr-2">&copy; 2020 - Informática</span>
      </div>
      <div className="mfs-auto">
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer" className="tw-font-extrabold mr-2">Amávia</a>
        <span className="mr-1 tw-text-xs">©Todos os direiros reservados</span>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
