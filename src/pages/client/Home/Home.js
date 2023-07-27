import React, {useEffect, useContext} from 'react';

import LanguageContext from '../../../LanguageContext'

import { useTranslation } from 'react-i18next';

import { Loader } from "semantic-ui-react";

import { useAbout } from '../../../hooks'

import './Home.scss';




export function Home() {

  const { t } = useTranslation();

  const { language } = useContext(LanguageContext);

  const { loading, error, about, getAbout } = useAbout();
  
  useEffect(() => {
    async function fetchData() {
      await getAbout();
    }
    fetchData();
  }, []);

  if (loading) {
    return <Loader active>Loading...</Loader>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  return (
    <div className='home'>
      <div className='home__title'>
        <h1>{t('About me')}</h1>
      </div>
      <div className='home__text'>
      {language === "en" ?
        <p>{about[0].description_en}</p> :
        <p>{about[0].description_es}</p>
      
      }
      </div>
    </div>
  );
}
