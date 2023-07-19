import { useState } from 'react'
import { getEducationApi } from '../api/education'

export function useEducation(){

    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ education, setEducation ] = useState(null);


    const getEducation = async () => {
        try {

            setLoading(true);
            const response = await getEducationApi();
            setLoading(false);
            setEducation(response);
            
        } catch (error) {
            
            setLoading(false);
            setError(error);
        }
    }

    return {
        loading,
        error,
        education,
        getEducation,

    }
}