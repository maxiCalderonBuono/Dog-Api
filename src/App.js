import { useEffect, useState } from "react";
import Card from "./components/Card";
import Select from "./components/Select";
import getDog from "./helpers/getDog";
import Error from "./components/Error";

const initialDog = {
  image: "",
  breed: {
    id: "0",
    name: "",
  },
};

function App() {
  const [dog, setDog] = useState(initialDog);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateDog = (breedId) => {
    setLoading(true);
    getDog(breedId)
      .then((newDog) => {
        setDog(newDog);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setDog({
          image: "",
          breed: {
            id: "",
            name: "",
          },
        });
        setError("Error al mostrar un perro desde API");
        setLoading(false);
      });
  };

  useEffect(() => {
    updateDog();
  }, []);

  return (
    <div className="app">
      <Select updateDog={updateDog} />
      {error && <Error error={error} />}

      <Card dog={dog} updateDog={updateDog} loading={loading} error={error} />
    </div>
  );
}

export default App;
