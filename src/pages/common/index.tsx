import React from 'react';

import {
    TheContent,
    TheSidebar,
    TheFooter,
    TheHeader
  } from '../../compont/common/index'
export const Common = (props:any) => {
  
  return <div className="container-mian">
    <div className="c-app c-default-layout">
      <TheSidebar />
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body">
          <TheContent>
            {props.children}
          </TheContent>
        </div>
        <TheFooter />
      </div>
    </div>

  </div>
}