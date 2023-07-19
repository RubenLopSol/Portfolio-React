import React, {useEffect} from 'react';
import { useTranslation } from 'react-i18next';

import { Loader } from "semantic-ui-react";

import { useAbout } from '../../../hooks'

import './Home.scss';




export function Home() {

  const { t } = useTranslation();

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
    <div className='home' style={{ backgroundImage: `url(${about[0].image})`, backgroundSize: 'cover', backgroundPosition: 'center',}}>
      <div className='home__title'>
        <h1>{t('About me')}</h1>
      </div>
      <div className='home__text'>
        <p>{about[0].description}</p>
      </div>
    </div>
  );
}
