import React, {Component} from 'react';
import HomeGamesDetails from '../data/homeGames.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col,} from 'react-bootstrap';
import {
    Link,
  } from "react-router-dom";


class HomeGames extends Component {
    constructor (props){
        super(props)
        this.state = {
            HomeGameDetails: HomeGamesDetails
        }
    }
    render(){
        const {HomeGameDetails} = this.state
        return (       
            <Row>
            {HomeGameDetails.map((HomeGameDetail) =>{
                return(
                    <Col md={6}>
                        <Card>
                            <Card.Img variant="top" src={HomeGameDetail.src} />
                            <Card.Body>
                                <Card.Title>
                                    {HomeGameDetail.name}
                                </Card.Title>
                                <Card.Text>
                                    {HomeGameDetail.releaseYear}
                                </Card.Text>
                                <Card.Text>
                                    {HomeGameDetail.studio}
                                </Card.Text>
                                <Link to={`/game/${HomeGameDetail.id}`} variant="primary">read more...</Link>
                            </Card.Body>                           
                        </Card>
                    </Col>
                )
            })}           
        </Row>
        )
    }   
} 

export default HomeGames;
