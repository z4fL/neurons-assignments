import { useEffect, useState } from "react";
import People from "./components/People";
import Planet from "./components/Planet";
import Starship from "./components/Starship";

const optionObj = {
  people: "https://swapi.py4e.com/api/people",
  planets: "https://swapi.py4e.com/api/planets",
  starships: "https://swapi.py4e.com/api/starships",
};

const App = () => {
  const [option, setOption] = useState("people");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(optionObj[option])
      .then((res) => res.json())
      .then((json) => {
        setData(json.results);
        setLoading(false);
        console.log(json);
      });
  }, [option]);

  const handleOption = (value) => {
    if (value !== option) setOption(value);
  };

  return (
    <div>
      <select value={option} onChange={(e) => handleOption(e.target.value)}>
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="starships">Starships</option>
      </select>

      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <div>{option === "people" && <People data={data} />}</div>
            <div>{option === "planets" && <Planet data={data} />}</div>
            <div>{option === "starships" && <Starship data={data} />}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
