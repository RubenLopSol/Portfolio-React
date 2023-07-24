import React, {useState, useContext} from 'react'
import LanguageContext from '../../LanguageContext';
import { useTranslation } from 'react-i18next';

import { Table, Image, Button, Icon, Modal } from 'semantic-ui-react'
import { map } from 'lodash'

import './WorkList.scss'

export function WorkList(props) {

    const { work } = props;
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
    <div className='work-list'>
        

            <Table fixed >
                
                    <Table.Header className='header'>
                        <Table.Row className='row'>
                            <Table.HeaderCell>{t("Company")}</Table.HeaderCell>
                            <Table.HeaderCell>{t("Description")}</Table.HeaderCell>
                            <Table.HeaderCell>{t("Year")}</Table.HeaderCell>
                            <Table.HeaderCell>{t("Position")}</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

        {map(work, (work, index) => (
                    <Table.Body key={index}>
                        <Table.Row className='row'>
                            <Table.Cell> <Image src={`${work.logo}`}/> <strong>{work.company}</strong>  </Table.Cell>
                        {language==="en" ? 
                            <Table.Cell>
                                <Button
                                    icon
                                    basic
                                    color='blue'
                                    onClick={() => handleOpenModal(work.description_en)}
                                >
                                    <Icon name='info' /> <span>Info</span>
                                </Button>    
                            
                            </Table.Cell> :

                                                        <Table.Cell>
                                <Button
                                    icon
                                    basic
                                    color='blue'
                                    onClick={() => handleOpenModal(work.description_es)}
                                >
                                    <Icon name='info' /> <span>Info</span>
                                </Button>    
                            
                            </Table.Cell>
                        }    
                        
                            <Table.Cell>{work.year}</Table.Cell>
                            <Table.Cell>{work.position}</Table.Cell>
                            
                        </Table.Row>
                    </Table.Body>
        ))}
            </Table> 

            <Modal open={open} onClose={handleCloseModal} className='work-list__modal'>
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
