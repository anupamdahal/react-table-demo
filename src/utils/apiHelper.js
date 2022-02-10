import axios from 'axios';

const requestData = async (URI, body) => {
  const data = JSON.stringify(body);
  
  const config = {
    method: 'post',
    url: URI,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  return axios(config)
  .then(res => res.data)
}

export default requestData