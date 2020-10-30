import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { CommentsContext } from './CommentsContext';

const CommentsList = () =>{  
    const {comments} = useContext(CommentsContext);
    const {removeComments} = useContext(CommentsContext);
    
    return (
        <div >
            { comments.map( comment =>{
        return (
            <Card.Header>
            <Card.Body key={comment.id} onClick={() => removeComments(comment.id)}>
                <Card.Title>
                {comment.user }
                </Card.Title>
                <Card.Text>
                {comment.msg }
                </Card.Text>
            </Card.Body> 
            </Card.Header>
        )
    } )}
        </div>
    )
     
}
export default CommentsList;