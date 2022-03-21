/*This app uses the IP Geo Location API (https://rapidapi.com/natkapral/api/ip-geo-location/)
* to receive IP information. I also use Axios to make the request */

import axios from "axios";

const  URL = 'https://ip-geo-location.p.rapidapi.com/ip/';

const options = {
    method: 'GET',
    params: {format: 'json'},
    headers: {
        'x-rapidapi-host': 'ip-geo-location.p.rapidapi.com',
        'x-rapidapi-key': '9c423b25b5msh09bc83daaf52a7bp126415jsnb4521b704b92'
    }
};

//This call get get the user's IP information and displays it on load.
export const getPersonalIPData = async () => {
    try{
        const {data} = await axios.get(URL + 'check',options);
        return data;
    }catch (error){
        console.log(error)
    }
}

//Any submitted IP searches are made with this call
export const getSubmittedIPData = async (submittedIP) => {
    try{
        const {data} = await axios.get(URL + `${submittedIP}`, options);
        return data;
    }catch (error){
        console.log(error)
    }
}