import { useState, useEffect } from "react";

const UseFetch = (uri) => {
     const [posts, setPost] = useState([]);
     useEffect(()=> {
            fetch(uri)
            .then(res => {
                    return res.json(); 
            })
            .then(data => {
                setPost(data);
                console.log(data);
            })
        }, [uri])

        return { posts }
        }
export default UseFetch;