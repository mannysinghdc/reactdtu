import { createContext, useEffect, useState } from "react";

export const SocialContext = createContext()  // Context Structure


const SocialContextProvider = ({ children }) => {
    const [post, setPost] = useState([])


    // Api fetching 
    const fetchData = () => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(result => setPost(result.posts));
    }

    // Delete Functionlity
    const deletePost = (id) => {
        if (confirm("Are you sure to delete this item?")) {
            const delelePoat = post.filter(e => e.id !== id)
            setPost(delelePoat)
        }

    }

    useEffect(() => {
        fetchData()


    }, [])

    return <SocialContext.Provider value={{ post, setPost, deletePost }}>
        {children}
    </SocialContext.Provider>
}

export default SocialContextProvider