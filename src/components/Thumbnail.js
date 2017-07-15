import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import reduxpetapplication from "./reduxpetapplication.png"; 
import conferenceDog1 from "./conferenceimages/conference-dog1.jpg"; 





class Thumbnail extends React.Component{



   render(){

   	 console.log(this.props.pet.description);  
  

    return (

      <Card>

            <CardHeader
              title= {this.props.pet.name}
              subtitle={this.props.pet.breed}  
              avatar={conferenceDog1}
            />


         
            <CardMedia
            overlay={<CardTitle title={`Born on ${this.props.pet.birthday}`} subtitle={this.props.pet.desc} />}
            >   
            <img src={reduxpetapplication} alt="dog" />   
            </CardMedia>
      


        {/*
            <CardTitle title="Card title" subtitle="Card subtitle" />

            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>

            <CardActions>
              <FlatButton label="Action1" />
              <FlatButton label="Action2" />
            </CardActions>

        */}


      </Card>
    );

}

}

export default Thumbnail;

