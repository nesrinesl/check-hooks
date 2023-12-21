import React from "react";
import { Button, Form } from "react-bootstrap";
import ReactStars from "react-stars";

const FilterMovie = ({ setNewRate, newRate }) => {
  const reset = () => {
    // setInputSearch("");
    setNewRate(null);
  };

  return (
    <div style={{ margin: 50,display:"flex",justifyContent:"space-between"}}>
      <ReactStars 
        count={5}
        size={40}
        half={false}
        value={newRate}
        onChange={(rate) => setNewRate(rate)}
      />
      <Button onClick={reset} variant="outline-light">
        RESET
      </Button>{" "}
    </div>
  );
};

export default FilterMovie;

/*
< Form.Control   props:setInputSearch,inputSearch
style={{ color: "red" }}
placeholder="Search Movie..."
onChange={(e) => setInputSearch(e.target.value)}
value={inputSearch}/>*/
