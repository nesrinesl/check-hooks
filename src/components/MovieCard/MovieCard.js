import React from "react";
import "./MovieCard.css";
import { Card } from "react-bootstrap";
import ReactStars from "react-stars";
const MovieCard = ({ movie }) => {
  return (
    <div  >
      <Card className="mc">
        <Card.Img width={300} height={350} variant="top" src={movie.posterUrl} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
         
          <div style={{display:"flex",justifyContent:"center"}}> <ReactStars  count={5}size={30}  value={movie.rate} edit={false} half={false} /></div>
         
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
