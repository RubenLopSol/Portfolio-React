import { useState } from 'react'
import { getWorkApi } from '../api/work'


export function useWork(){

    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ work, setWork ] = useState(null);


    const getWork = async () => {
        try {

            setLoading(true);
            const response = await getWorkApi();
            setLoading(false);
            setWork(response);
            
        } catch (error) {
            
            setLoading(false);
            setError(error);
        }
    }

    return {
        loading,
        error,
        work,
        getWork,

    }
}