import { useState } from 'react'
import { getLogosApi } from '../api/logos'

export function useLogos() {

    const [ logosLoading, setLogosLoading ] = useState(true);
    const [ logosError, setLogosError ] = useState(false);
    const [ logos, setLogos ] = useState(null);
    

    const getLogos = async () => {
        try {

            setLogosLoading(true);
            const response = await getLogosApi();
            setLogosLoading(false);
            setLogos(response);
            
        } catch (error) {
            
            setLogosLoading(false);
            setLogosError(error);
        }
    }

    return {
        logosLoading,
        logosError,
        logos,
        getLogos,

    }
}