import React, { useEffect, useState } from 'react'

const FetchingData = () => {

    const [posts, setPosts] = useState( [ ] )

    

    useEffect(()=>{

        const getData = fetch("https://jsonplaceholder.typicode.com/posts");
        
        getData
        .then((res)=> res.json())
        .then((res) =>setPosts(res))
        .catch((err)=> console.log(err))

    },[])

/*useEffect( ()=>{

    let createPost = fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
        "authorization": "dasdasFGSAFGASD12ewdASDASFaca",
        "Content-type": "aplication-json"
        },
        body: JSON.stringify( {
            userId: 1,
            title: "este es un nuevo post",
            body: "aca va la descripcion del post bla bla "
        } )
        })
            
        createPost
            .then( res => console.log("se creo el post: ",res))

    }, [])*/


    useEffect( ()=>{

        let updatePost = fetch(`https://jsonplaceholder.typicode.com/posts/20`, {
            method: "PUT",
            headers: {
                "Content-type": "aplication-json"
            },
            body: JSON.stringify({
                userId: 1,
                title: "este se cambio",
                body: "aca va la descripcion del post bla bla "
            })


        })
        
        updatePost
            .then( res => console.log("se modifico el post: ",res))

    }, []);

    console.log(posts)

    return (
    <div>FetchingData</div>
    )
}

export default FetchingData