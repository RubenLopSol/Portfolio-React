import { useState } from 'react'
import { getAboutsApi } from '../api/about'

export function useAbout(){

    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ about, setAbout ] = useState(null);


    const getAbout = async () => {
        try {

            setLoading(true);
            const response = await getAboutsApi();
            setLoading(false);
            setAbout(response);
            
        } catch (error) {
            
            setLoading(false);
            setError(error);
        }
    }

    return {
        loading,
        error,
        about,
        getAbout,

    }
}