import { useState } from 'react'
import { getLogosApi } from '../api/logos'

export function useLogos() {

    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ logos, setLogos ] = useState(null);
    

    const getLogos = async () => {
        try {

            setLoading(true);
            const response = await getLogosApi();
            setLoading(false);
            setLogos(response);
            
        } catch (error) {
            
            setLoading(false);
            setError(error);
        }
    }

    return {
        loading,
        error,
        logos,
        getLogos,

    }
}