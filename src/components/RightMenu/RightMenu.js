import React from 'react'
import { useTranslation } from 'react-i18next';
import { Menu, Icon } from "semantic-ui-react";
import {Link, useLocation} from "react-router-dom";

import { Content } from '../Content'

import './RightMenu.scss'




export function RightMenu(props) {

  const {children} = props;
  
  const {pathname} = useLocation();

  return (
    <div className='right-menu'>
           <Nav pathname={pathname} />
           
           <div className='client-layout__content'>
           <Content children={children}/>
            
      </div>

      
    </div>
  )
}


function Nav(props){

  const {pathname} = props;
  const { t } = useTranslation();

  return(
    
    <Menu  borderless className='side' vertical>

      <Menu.Item as={Link} to={"/"} active={pathname === "/about_me"}>
        <Icon circular name='home' size='big'/> &nbsp;<strong>{t("Home")}</strong> 
      </Menu.Item>

      <Menu.Item as={Link} to={"/hobies"} active={pathname === "/hobies"}>
        <Icon circular name='bolt' size='big'/> &nbsp; <strong>{t("Hobbies")}</strong> 
      </Menu.Item>

      <Menu.Item as={Link} to={"/education"} active={pathname === "/education"}>
        <Icon circular name='student' size='big'/> &nbsp; <strong>{t("Education")}</strong> 
      </Menu.Item>

      <Menu.Item as={Link} to={"/work_experience"} active={pathname === "/work_experience"}>
        <Icon circular name='chart line' size='big'/> &nbsp; <strong>{t("Work")}</strong> 
      </Menu.Item>

      <Menu.Item as={Link} to={"/projects"} active={pathname === "/projects"}>
        <Icon circular name='archive' size='big'/> &nbsp; <strong>{t("Projects")}</strong> 
      </Menu.Item>

      <Menu.Item as={Link} to={"/contact"} active={pathname === "/contact"}>
        <Icon circular name='mail' size='big'/> &nbsp; <strong>{t("Contact")}</strong> 
      </Menu.Item>


    </Menu>
  )
}