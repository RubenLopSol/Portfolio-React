import { useState } from 'react'
import { getContactApi, postContactApi } from '../api/contact'

export function useContact(){

    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ contact, setContact ] = useState(null);


    const getContact = async () => {
        try {

            setLoading(true);
            const response = await getContactApi();
            setLoading(false);
            setContact(response);
            
        } catch (error) {
            
            setLoading(false);
            setError(error);
        }
    }

    const postContact = async ( data ) =>{
        try {
            
            setLoading(true);
            await postContactApi(data);
            setLoading(false);


        } catch (error) {
            
            setError(error);
            setLoading(false);
        }
    }


    return {
        loading,
        error,
        contact,
        getContact,
        postContact,

    }
}