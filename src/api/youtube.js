import axios from 'axios';

const KEY='AIzaSyAzuZdKsSd6ciH9EAdrAsfKIvXZGLPdFUA';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
});