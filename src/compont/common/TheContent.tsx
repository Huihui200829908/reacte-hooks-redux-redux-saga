import React, { Suspense } from 'react'

import { CContainer } from '@coreui/react'

// import { MainContext } from '../../pages/main/index';
  
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheContent = (props: { children: React.ReactNode }) => {

  
  // const theme = useContext(MainContext);

  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
            {props.children}
        </Suspense>
      </CContainer>
    </main>
  )
}

export default React.memo(TheContent)
