import React, { useEffect, useState } from "react";
import getBreeds from "../helpers/getBreeds";

const initialBreeds = [
  { id: 1, name: "Boxer" },
  { id: 2, name: "Husky" },
];

const Select = () => {
  const [breeds, setBreeds] = useState(initialBreeds);

  const updateBreeds = () => {
    getBreeds().then((newBreeds) => {
      setBreeds(newBreeds);
    });
  };
  useEffect(() => {
    updateBreeds();
  }, []);

  return (
    <select onChange = {() => alert("change")}>
      {breeds.map((breed) => (
        <option value={breed.id} key={breed.id}>
          {" "}
          {breed.name}{" "}
        </option>
      ))}
    </select>
  );
};

export default Select;