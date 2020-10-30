import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const CommentsContext = createContext();

const CommentsProvider = (props) => {
    const [comments, setComments] = useState( ()=>{
        const localData = localStorage.getItem('comments');
        return JSON.parse(localData);
    });

    const addComments = (user, msg) => {
        setComments([...comments, {user, msg, id: uuidv4() }])
    };

    const removeComments = (id) => {
        setComments(comments.filter(comment => comment.id !==id))
    };

    useEffect(()=>{
        localStorage.setItem('comments', JSON.stringify(comments))
    }, [comments]);

    return (
        <CommentsContext.Provider value={{comments, addComments, removeComments, }}>
            { props.children }
        </CommentsContext.Provider>
    )
}

export default CommentsProvider;