import React from 'react';
import HomeGamesDetails from '../data/homeGames.json';
import HomeGames from './HomeGames';
import CommentsProvider from './CommentsContext';
import CommentsList from './CommentsList';
import CommentsForm from './CommentsForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,  Col, } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
    useParams,
    Link
  } from "react-router-dom";


function Pagination() {
    return (
        <Router>
        <GameSwitch />
        </Router>
    );
}

function GameSwitch() {
return (
  <div>
    <Switch>
      <Route exact path="/" exact children={<HomeGames />} />
      <Route path="/game/:id" children={<GameView />} />
    </Switch>
  </div>
);
}

function GameView() {
    let { id } = useParams();
    let HomeGameDetails = HomeGamesDetails[parseInt(id, 10)];
    return (        
        <Col>
        <Link to={"/"}>Retour à l'accueil</Link>
            <Card>
                <Card.Img variant="top" src={HomeGameDetails.src} />
                <Card.Body>
                    <Card.Title>
                        Game name: {HomeGameDetails.name}
                    </Card.Title>
                    <Card.Text>
                        Release year: {HomeGameDetails.releaseYear}
                    </Card.Text>
                    <Card.Text>
                        Studio: {HomeGameDetails.studio}
                    </Card.Text>
                    
                    <CommentsProvider>
                        <CommentsList />
                        <CommentsForm />
                    </CommentsProvider>
                </Card.Body>               
            </Card>
        </Col>       
    )            
  }



export default Pagination;

