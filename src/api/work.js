export async function getWorkApi(){

    const apiUrl = process.env.REACT_APP_API_URL;

    try {

        const url = `${apiUrl}/api/work/`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
        
    } catch (error) {
        throw error
    }
}