import { useState } from 'react'
import { getHobbyApi } from '../api/hobby'

export function useHobby(){

    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ hobby, setHobby ] = useState(null);


    const getHobby = async () => {
        try {

            setLoading(true);
            const response = await getHobbyApi();
            setLoading(false);
            setHobby(response);
            
        } catch (error) {
            
            setLoading(false);
            setError(error);
        }
    }

    return {
        loading,
        error,
        hobby,
        getHobby,

    }
}