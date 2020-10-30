import React, {useState, useContext} from 'react';
import { CommentsContext } from './CommentsContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

const CommentsForm = () => {
    const {addComments} = useContext(CommentsContext)
    const [user, setUser] = useState('');
    const [msg, setMsg] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addComments(user, msg);
        setUser('');
        setMsg('');
    }
    return(      
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mt-3" >
                <Form.Control type="text" placeholder="user" value= {user} 
                 onChange={(e) => setUser(e.target.value)}
                />               
            </Form.Group>

            <Form.Group>
                <Form.Control type="text" placeholder="message" value= {msg} 
                 onChange={(e) => setMsg(e.target.value)}/>
            </Form.Group>
                
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default CommentsForm;