import React, { useEffect, useState } from 'react'

const Effects = () => {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => setPosts(posts.splice(0,50)))
    }, [])
    
    return (
        <div>
            <h1 className='bg-primary text-white'>Fetch API Data</h1>
            {posts.map((post)=>
                <div key={post.id} className='bg-dark'>
                    <h1 className='fs-6 fw-1 text-primary'>{post.title}</h1>
                    <p className='text-white'>{post.body}</p>
                </div>
            )}
        </div>
    )
}

export default Effects