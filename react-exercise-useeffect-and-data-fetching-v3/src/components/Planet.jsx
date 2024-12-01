const Planet = (props) => {
  const { data } = props;

  return (
    <div>
      {data.map((value) => (
        <div key={value.name}>
          <h2>{value.name}</h2>

          <h4>Rotation Period:</h4>
          <p>{value.rotation_period}</p>

          <h4>Orbital Period:</h4>
          <p>{value.orbital_period}</p>

          <h4>Terrain:</h4>
          <p>{value.terrain}</p>

          <h4>Population:</h4>
          <p>{value.population}</p>

          <h4>Climate:</h4>
          <p>{value.climate}</p>

          <br />
        </div>
      ))}
    </div>
  );
};

export default Planet;
