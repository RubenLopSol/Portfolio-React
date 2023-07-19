import { useState } from 'react'
import { getprojectApi } from '../api/project'

export function useProject(){

    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ project, setProject ] = useState(null);


    const getProject = async () => {
        try {

            setLoading(true);
            const response = await getprojectApi();
            setLoading(false);
            setProject(response);
            
        } catch (error) {
            
            setLoading(false);
            setError(error);
        }
    }

    return {
        loading,
        error,
        project,
        getProject,

    }
}