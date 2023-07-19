export async function getContactApi(){

    const apiUrl = process.env.REACT_APP_API_URL;

    try {

        const url = `${apiUrl}/api/contact/`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
        
    } catch (error) {
        throw error;
    }
}

export async function postContactApi(data){

    const apiUrl = process.env.REACT_APP_API_URL;

    try {
        
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('message', data.message);
    
        const url = `${apiUrl}/api/contact/`;
        const params = {
            method:"POST",
            body: formData,
        };

        const response = await fetch(url, params);
        const result = await response.json();
        return result;

    } catch (error) {
        throw error;
    }

}