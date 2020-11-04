import axios from 'axios';

const instance = axios.create({
    baseURL:"https://tinder-backend-sarvesh.herokuapp.com"

})

export default instance;    

