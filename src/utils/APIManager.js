// The only place that superagent is referenced now is in here, this file. Other files import from this file, or it's index file, the index.js file. This makes it easy to in future swap out the superagent module for another one; maybe Axios or Fetch.

import axios from 'axios'

axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
  .then(function(response){
    console.log(response.data[0]);
    console.log('1')
  })

module.exports = httpReq
