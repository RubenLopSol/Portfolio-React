import React, {useState, useContext} from 'react';
import LanguageContext from '../../LanguageContext'
import { useTranslation } from 'react-i18next';

import { Checkbox, Icon } from "semantic-ui-react";
import {useLocation} from "react-router-dom";
import { HideNav } from '../HideNav'
import './HeaderPage.scss'

export function HeaderPage(props) {

  const { language, setLanguage } = useContext(LanguageContext);

  const {pathname} = useLocation();

  const { i18n } = useTranslation();

  const [isEnglish, setIsEnglish] = useState(!i18n.language || i18n.language === 'en');

  const changeLang = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const handleToggleChange = () => {
    const newLanguage = isEnglish ? 'en' : 'es';
    i18n.changeLanguage(newLanguage);
    changeLang(newLanguage);
    setIsEnglish(!isEnglish);
  };

    console.log(language)

  return (
    <div className='header-page'>
      
      <div className='header-page__hide-nav'>

        <HideNav pathname={pathname}/>
        
      </div>
      <div className='header-page__translator'>
        <Icon name='language' size='big' />
       
        <Checkbox 
        toggle
        checked={isEnglish}
        label={isEnglish ? 'Español' : 'English'}
        onChange={handleToggleChange} 
        className='custom-toggle' 
        />
        
      </div>
    </div>
  )
}
