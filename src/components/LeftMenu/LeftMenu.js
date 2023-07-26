import React, {useEffect, useState, useContext} from 'react'
import LanguageContext from '../../LanguageContext'
import { Image, Icon, Loader } from "semantic-ui-react";
import { useData, useLogos } from '../../hooks'
import githubLogo from '../../assets/github-mark.png';
import linkedinLogo from '../../assets/icons8-linkedin-96.png'

import { MyCarousel } from '../Carousel/LeftMenu'

import './LeftMenu.scss'

export function LeftMenu() {

  const { language } = useContext(LanguageContext);
  const { loading, error, data, getData } = useData();
  const {logosLoading, logos, getLogos} = useLogos([]);
   

  const [startCarousel, setStartCarousel] = useState(false);
  
  
  useEffect(() => {
    async function fetchData() {
      await getData();
      await getLogos();
      openCarousel();
      
    }
    fetchData();
  }, []);

  const openCarousel = () => setStartCarousel((prev) => !prev);

  if (loading || logosLoading) {
    return <Loader active>Loading...</Loader>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  return (
    <div className='left-menu'>
      { loading ? <p>Cargando</p> :
      <>
        <div className='left-menu__main'>
            
            <Image src={ data[0].image } avatar size='medium' />
            <div className='left-menu__main__name'>
              <h1 className='focus-in-expand'>{data[0].name}</h1>
            {language==="en" ? 
              <h3>{data[0].position_en}</h3> : 
              <h3>{data[0].position_es}</h3>
            }  
            </div>
        </div>
        
       { logos && startCarousel &&
        <MyCarousel startCarousel={startCarousel} logos={logos} />
       }
       
          

        <div className='left-menu__links' >

          <div className='left-menu__links__net'>

            <a href={data[0].linkedin}>
              <img src={linkedinLogo} alt="Linkedin" className='transLeft' />
            </a>

            <a href={data[0].cv} download>
              <span>CV</span> <Icon name='cloud download' size='huge' color='black' className='transDown'/>
            </a>
            
            <a href={data[0].gitHub}>
              <img src={githubLogo} alt="gitHub"  className='transRight'/>
            </a>

          </div>


        </div>
      </>}
    </div>
    
  )
}
