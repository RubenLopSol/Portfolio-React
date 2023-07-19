import React from 'react';
import { HeaderPage, LeftMenu, Content, RightMenu} from '../../components'

import './ClientLayout.scss';



export function ClientLayout(props) {

  const {children} = props;

  return (
    <div className='client-layout' >

      <div className='client-layout__header'>
        <HeaderPage />
      </div>

      <div className='client-layout__left'>
        <LeftMenu />
      </div>

      <div className='client-layout__nav'>
        <RightMenu />
      </div>

      <div className='client-layout__content'>
        <Content>
          {children}
        </Content>
      </div>


    </div>
  )
}
