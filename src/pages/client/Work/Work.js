import React, {useEffect} from 'react'
import { useTranslation } from 'react-i18next';
import { Loader } from "semantic-ui-react";


import { WorkList } from '../../../components/WorkList'
import { useWork } from '../../../hooks'

import './Work.scss'

export function Work() {

  const { t } =useTranslation();

  const { loading, error, work, getWork } = useWork();
  
  useEffect(() => {
    async function fetchData() {
      await getWork();
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
    <div className='work'>

      <div className='work__title'>
        <h1>{t('Work Experience')}</h1>
      </div>

      <div className='work__list'>
        <WorkList work={work} />
      </div>

    </div>
  )
}
