import React, {Component} from 'react';
import Pagination from './Pagination';
import HomeGamesDetails from '../data/homeGames.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

class Games extends Component {
  constructor (props){
    super(props)
    this.sortYa = this.sortYa.bind(this)
    this.state = {
      HomeGameDetails: HomeGamesDetails
    }
  }
  
  sortAa(){
    this.setState({
      HomeGameDetails: HomeGamesDetails.sort((a,b)=>a.sd.localeCompare(b.sd))
    })
  };

  sortAd(){
    this.setState({
      HomeGameDetails: HomeGamesDetails.sort((a,b)=>b.sd.localeCompare(a.sd))
    })
  };

  sortYa(){
    this.setState({
      HomeGameDetails: HomeGamesDetails.sort((a,b)=>a.releaseYear-b.releaseYear)
    })
  };

  sortYd(){
    this.setState({
      HomeGameDetails: HomeGamesDetails.sort((a,b)=>b.releaseYear-a.releaseYear)
    })
  };

  reset(){
    this.setState({
      HomeGameDetails: HomeGamesDetails.sort((a,b)=>a.id-b.id)
    })
  }

  render(){
  return (  
    <Container text-center="true">
      <h1 className="text-center mb-5 mt-3">Online Games</h1>     
      <Row>
        <Col className="my-2 d-flex align-items-stretch">
          <Button onClick={()=>{this.sortAa()}} variant="success" size="lg" block>ascending alphabetical</Button>
        </Col>
        <Col className="my-2 d-flex align-items-stretch">
          <Button onClick={()=>{this.sortAd()}} variant="primary" size="lg" block>descending alphabetical</Button>
        </Col>
        <Col className="my-2 d-flex align-items-stretch">
          <Button onClick={(e)=>{this.sortYa()}} variant="success" size="lg" block>release date ascending</Button>
        </Col>
        <Col className="my-2 d-flex align-items-stretch">
          <Button onClick={(e)=>{this.sortYd(e)}} variant="primary" size="lg" block>release date descending</Button>
        </Col>
        <Col className="my-2 d-flex align-items-stretch">
          <Button onClick={()=>{this.reset()}} variant="danger" size="lg" block>reset</Button>
        </Col>
      </Row>
      
        <Pagination />
      
    </Container>
  );
}
}
 
export default Games;
