import React, { Component } from 'react'
import { Link} from "react-router-dom";
import { Col} from 'reactstrap';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const classes = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default class Land extends Component {
  render() {

    const {_id,title,size,price,description,landImage}=this.props.land;
    return (
    <Col xs="3" sm="4" >
      {/* <Card  onClick={()=>{
        console.log(_id)

      }}>
        
      <CardImg top width="100%" src={"http://localhost:8080/"+landImage} alt={landImage} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>Size: {size} Perches <br/>Price : {price}.00</CardSubtitle>
      
        <Button tag={Link} to={"/detail/"+_id} >Button</Button>
      </CardBody>
    </Card> */}

    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={"http://localhost:8080/"+landImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Size: {size} Perches &nbsp;&nbsp;&nbsp;&nbsp; Price : {price}.00
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Col>
    
      
    );
  }
}

Land.propTypes={
  land:PropTypes.shape({
    _id:PropTypes.string,
    title:PropTypes.string,
    size:PropTypes.number,
    price:PropTypes.number,
    description:PropTypes.string,
    landImage:PropTypes.string,
  }).isRequired
}
