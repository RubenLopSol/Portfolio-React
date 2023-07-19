import React, {useEffect} from 'react'
import { useTranslation } from 'react-i18next';

import { Loader } from "semantic-ui-react";

import { ProjectsList } from '../../../components/ProjectsList'
import { useProject } from '../../../hooks'

import './Projects.scss'

export function Projects() {

  const { t } = useTranslation();

  const { loading, error, project, getProject } = useProject();
  
  useEffect(() => {
    async function fetchData() {
      await getProject();
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
    <div className='projects'>

      <div className='projects__title'>
        <h1>{t("Projects")}</h1>
      </div>

      <div className='projects__content'>
        <ProjectsList project={project} />
      </div>
      
    </div>
  )
}
