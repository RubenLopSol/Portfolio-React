import React, {useEffect} from 'react'
import { useTranslation } from 'react-i18next';

import { Loader } from "semantic-ui-react";

import { EducationList } from '../../../components/EducationList'
import { useEducation } from '../../../hooks'

import './Education.scss'

export function Education() {

  const { t } = useTranslation();

  const { loading, error, education, getEducation } = useEducation()

  useEffect(() => {
    async function fetchData() {
      await getEducation();
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
    <div className='education'>

      <div className='education__title'>
        <h1>{t("Education")}</h1>
      </div>

      <div className='education__list'>
        <EducationList education={education} />
      </div>

    </div>
  )
}
