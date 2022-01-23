import React from "react";
import Spinner from "./Spinner";

const Card = ({ dog, updateDog, loading, error }) => {
  if (loading) return <Spinner />;

  return (
    <div className="card bounce">
      <img
        src={dog.image}
        alt="dog image"
        onClick={() => updateDog(dog.breed.id)}
      />
      <p>{dog.breed.name}</p>
    </div>
  );
};

export default Card;
