import React, {useState, useContext} from 'react';
import LanguageContext from '../../LanguageContext';
import { useTranslation } from 'react-i18next';
import { Table, Button, Icon, Modal } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { map } from 'lodash'

import './ProjectsList.scss'

export function ProjectsList(props) {

    const { project } = props;
    const { language } = useContext(LanguageContext);
    const { t } = useTranslation();
    
    const [open, setOpen] = useState(false);
    const [description, setDescription] = useState('');
  
    const handleOpenModal = (description) => {
      setDescription(description);
      setOpen(true);
    };
  
    const handleCloseModal = () => {
      setOpen(false);
    };

  return (

    <div className='projects-list'>



        <div className='projects-list__table'>

            <Table className='table'>
            <Table.Header className='header'>
                <Table.Row >
                <Table.HeaderCell>{t("Project")}</Table.HeaderCell>
                <Table.HeaderCell><Icon name='info' /></Table.HeaderCell>
                <Table.HeaderCell>{t("Frontend")}</Table.HeaderCell>
                <Table.HeaderCell>{t("Backend")}</Table.HeaderCell>
                <Table.HeaderCell>{t("Deployment")}</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {map(project, (project, index) => (
                <Table.Row key={index} >
                {language==="en" ? 
                    <Table.Cell width={2} className='row'>{project.title_en}</Table.Cell> :
                    <Table.Cell width={2} className='row'>{project.title_es}</Table.Cell> 
                }

                {language==="en" ? 
                    <Table.Cell width={2} className='row'>
                        <Button
                            icon
                            basic
                            color='blue'
                            onClick={() => handleOpenModal(project.description_en)}
                        >
                            <Icon name='info' /> <span>Info</span>
                        </Button>
                    </Table.Cell> :

                    <Table.Cell width={2} className='row'>
                        <Button
                            icon
                            basic
                            color='blue'
                            onClick={() => handleOpenModal(project.description_es)}
                        >
                            <Icon name='info' /> <span>Info</span>
                        </Button>
                    </Table.Cell>
                }
                    <Table.Cell width={2} className='row'>
                    { project.code_front && (
                        <Button icon basic color='yellow' as={Link} to={project.code_front}> <Icon name='file code' /> <span>Front</span> </Button>
                    )}
                    </Table.Cell>
                    <Table.Cell width={2} className='row'>
                    { project.code_back && (
                        <Button icon basic color='yellow' as={Link} to={project.code_back}> <Icon name='file code' /><span>Back</span> </Button>
                    )}
                    </Table.Cell>
                    <Table.Cell width={2} className='row'>
                    { project.deployment && (
                        <Button icon basic color='green' as={Link} to={project.deployment}> <Icon name='play' /> <span>Defloyment</span> </Button>
                    )}
                    </Table.Cell>
                </Table.Row> 
                ))}
            </Table.Body>

            </Table>

        </div>

        <Modal open={open} onClose={handleCloseModal} className='projects-list__modal'>
            <Modal.Header>{t("Description")}</Modal.Header>
            <Modal.Content>{description}</Modal.Content>
            <Modal.Actions>
            <Button color='black' onClick={handleCloseModal}>
                {t("Close")}
            </Button>
            </Modal.Actions>
        </Modal>

    </div>
  )
}


