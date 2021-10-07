const axios = require('axios'); //axios used

async function getCalls(){
    let i = 0;
    for(i = 0; i < 10; i++){
        let data = await axios.get("https://dog.ceo/api/breeds/image/random") // waiting for response
        console.log(data.data) //logging data
    }
}

getCalls();
