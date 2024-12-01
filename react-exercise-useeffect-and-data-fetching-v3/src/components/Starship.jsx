const Starship = (props) => {
  const { data } = props;

  return (
    <div>
      {data.map((value) => (
        <div key={value.name}>
          <h2>{value.name}</h2>

          <h4>Model:</h4>
          <p>{value.model}</p>

          <h4>Manufacturer:</h4>
          <p>{value.manufacturer}</p>

          <h4>Crew:</h4>
          <p>{value.crew}</p>

          <h4>Passengers:</h4>
          <p>{value.passengers}</p>

          <h4>Cargo Capacity:</h4>
          <p>{value.cargo_capacity}</p>

          <h4>Starship Class:</h4>
          <p>{value.starship_class}</p>

          <br />
        </div>
      ))}
    </div>
  );
};

export default Starship;
