import { useState } from 'react'
import { getDataApi } from '../api/data'

export function useData(){

    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ data, setData ] = useState(null);
    

    const getData = async () => {
        try {

            setLoading(true);
            const response = await getDataApi();
            setLoading(false);
            setData(response);
            
        } catch (error) {
            
            setLoading(false);
            setError(error);
        }
    }

    return {
        loading,
        error,
        data,
        getData,

    }
}