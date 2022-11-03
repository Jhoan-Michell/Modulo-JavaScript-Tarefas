
const axios = require("axios").default

axios.get("https://www.youtube.com/")
    .then(Response => console.log(Response));