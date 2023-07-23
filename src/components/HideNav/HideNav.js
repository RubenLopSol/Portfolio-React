import React, {useState} from 'react'
import {Link} from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { useTranslation } from 'react-i18next';

import menu from '../../assets/menu-hamburguesa.png'

import './HideNav.scss'

export function HideNav(props) {

    const {pathname} = props;
    const { t } = useTranslation();

    const [isMenuOpen, setMenuOpen] = useState(false);
   

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    
  };



  const handleCloseNav = () => {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <div className={`hide-nav ${isMenuOpen ? 'open' : ''}`}>
      <button className="menu-button" onClick={toggleMenu}>
        <img src={menu} alt="menu" />
      </button>
      {isMenuOpen && (
        <Menu  borderless className='menu-item' vertical isMenuOpen={isMenuOpen} >

            <Menu.Item as={Link} to={"/"} active={pathname === "/about_me"} onClick={handleCloseNav}>
            <strong>{t("Home")}</strong> 
            </Menu.Item>

            <Menu.Item as={Link} to={"/hobies"} active={pathname === "/hobies"} onClick={handleCloseNav}>
            <strong>{t("Hobies")}</strong> 
            </Menu.Item>

            <Menu.Item as={Link} to={"/education"} active={pathname === "/education"} onClick={handleCloseNav}>
            <strong>{t("Education")}</strong> 
            </Menu.Item>

            <Menu.Item as={Link} to={"/work_experience"} active={pathname === "/work_experience"} onClick={handleCloseNav}>
            <strong>{t("Work")}</strong> 
            </Menu.Item>

            <Menu.Item as={Link} to={"/projects"} active={pathname === "/projects"} onClick={handleCloseNav}>
            <strong>{t("Projects")}</strong> 
            </Menu.Item>

            <Menu.Item as={Link} to={"/contact"} active={pathname === "/contact"} onClick={handleCloseNav}>
            <strong>{t("Contact")}</strong> 
            </Menu.Item>


        </Menu>
      )}
    </div>
  )
}
