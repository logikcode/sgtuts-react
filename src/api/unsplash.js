import axios from "axios";



export default axios.create({
        baseURL: "https://api.unsplash.com",
        headers: {Authorization: "Client-ID m-n9cLPBP68Q8WfJeTMBgxbngFBjR9iTbcuWODTF-ks"}

    });
