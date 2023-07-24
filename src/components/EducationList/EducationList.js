import React, {useState, useContext} from 'react'
import LanguageContext from '../../LanguageContext'
import { useTranslation } from 'react-i18next';

import { map } from 'lodash'
import { Button, Table, Icon, Modal } from "semantic-ui-react";
import { Link } from "react-router-dom";

import './EducationList.scss'

export function EducationList(props) {

  const { education } = props;
  const { language } = useContext(LanguageContext);
  const { t } = useTranslation();


  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [year, setYear] = useState('');
  const [center, setCenter] = useState('');
  
  const handleOpenModal = (description, year, center) => {
    setDescription(description);
    setYear(year);
    setCenter(center);
    setOpen(true);
  };
  
  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <div className='education-list'>
        
        <div className='projects-list__table'>

          <Table className='table'>
          <Table.Header className='header'>
              <Table.Row >
              <Table.HeaderCell>{t("Course")}</Table.HeaderCell>
              <Table.HeaderCell><Icon name='info' /></Table.HeaderCell>
              <Table.HeaderCell>{t("Certificate")}</Table.HeaderCell>

              </Table.Row>
          </Table.Header>

          <Table.Body>
              {map(education.reverse(), (education, index) => (
              <Table.Row key={index} >
                {language==="en" ? 
                  <Table.Cell width={2} className='row'>{education.title_en}</Table.Cell> :
                  <Table.Cell width={2} className='row'>{education.title_es}</Table.Cell>
                }

                {language==="en" ? 
                  <Table.Cell width={2} className='row'>
                      <Button
                          icon
                          basic
                          color='blue'
                          onClick={() => handleOpenModal(education.description_en, education.year, education.center )}
                      >
                          <Icon name='info' /> <span>Info</span>
                      </Button>
                  </Table.Cell> :

                  <Table.Cell width={2} className='row'>
                      <Button
                          icon
                          basic
                          color='blue'
                          onClick={() => handleOpenModal(education.description_es, education.year, education.center )}
                      >
                          <Icon name='info' /> <span>Info</span>
                      </Button>
                  </Table.Cell>
                }

                  <Table.Cell width={2} className='row'>
                  { education.certificate && (
                      <Button icon basic color='yellow' as={Link} to={education.certificate}> <Icon name='file code' /> <span>{t("Certificate")}</span> </Button>
                  )}
                  </Table.Cell>

              </Table.Row> 
              ))}
          </Table.Body>

          </Table>

        </div>

          <Modal open={open} onClose={handleCloseModal} className='projects-list__modal'>
          <Modal.Header>{center} &nbsp; {year}</Modal.Header>
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
