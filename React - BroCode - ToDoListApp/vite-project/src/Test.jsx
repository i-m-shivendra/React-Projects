import React from 'react';
import { useState,useEffect } from 'react';


const PostData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erroe, setError] = useState(null);
}

useEffect( () => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1")

    .then(response => {
        setData(response.data);
        setLoading(false);
    })

    .catch( (error) => {
        setError(error.message);
        setLoading(false);
    });
}, []);


const handleSubmit = async (e) => {
    e.preventDefault();

    try{
        const res = await 
        axios.post("https://jsonplaceholder.typicode.com/posts/1",
        {
            title,
            body: "Sample Content",
            userId: 1,
        });

        setResponse(res.data);
    }

    catch(error){
        console.error("Error in posting data::",error);
    }
};

if(loading)  return <p>Loading...</p>
if(error)     return <p> Error: {error} </p>


return{

    <div>
    </div>
}






export default Test