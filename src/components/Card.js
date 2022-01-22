import React from "react";

const Card = ({ dog, updateDog, loading }) => {
  
  if (loading) return <h1>Loading...</h1>

  return (
    <div className="card">
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
