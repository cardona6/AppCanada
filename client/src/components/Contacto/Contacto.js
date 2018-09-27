import React from 'react';
import { Jumbotron, Button } from 'reactstrap';


const Contacto = (props) => {
    const params =  props.match.params;
    return (
        <div>
            <Jumbotron>
            <h1 className="display-3">Contact { params.firstName } {params.lastName}</h1>
            <p className="lead">copy --- @ hotmail.com</p>
            <hr className="my-2" />
            <p>Source: Spotify</p>
            <p className="lead">
            <Button color="primary">Learn More</Button>
            </p>
        </Jumbotron>
        
        </div>
    );

}
     


export default Contacto;