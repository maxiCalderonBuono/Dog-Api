import React, { useEffect, useState } from "react";
import getBreeds from "../helpers/getBreeds";
import Error from "./Error";

const initialBreeds = [
  { id: 1, name: "Boxer" },
  { id: 2, name: "Husky" },
];

const Select = ({ updateDog }) => {
  const [breeds, setBreeds] = useState(initialBreeds);
  const [error, setError] = useState(null);

  const updateBreeds = () => {
    getBreeds()
      .then((newBreeds) => {
        setBreeds(newBreeds);
      })
      .catch((error) => {
        console.log(error);
        setBreeds([{id:1,name: "No se encontraron razas"}])
        setError("Error al obtener razas desde API");
      });
  };

  useEffect(() => {
    updateBreeds();
  }, []);

  return (
  <>
    <select onChange={(e) => updateDog(e.target.value)}>
      <option value = {0} key = {0} >Selecciona una raza</option>
      {breeds.map((breed) => (
        <option value={breed.id} key={breed.id}>
          {" "}
          {breed.name}{" "}
        </option>
      ))}
    </select>
    {error && <Error error= {error}/>}
  </> )};

export default Select;
