import React, {useEffect} from 'react'
import { Loader } from "semantic-ui-react";

import { useHobby } from '../../../hooks'
import { CarouselHobies } from '../../../components/Carousel'

import './Hobies.scss'


export function Hobies() {

  const { loading, error, hobby, getHobby } = useHobby();
  

  useEffect(() => {
    async function fetchData() {
      await getHobby();
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
    <div className='hobies' >
      
        <div className='hobies__title'>
          <h1>Hobbies</h1>
        </div>

        <div className='hobies__cards'>
          
          <CarouselHobies hobby={hobby} />


        </div>
      
    </div>
  )
}
