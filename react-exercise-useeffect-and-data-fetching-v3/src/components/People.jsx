const People = (props) => {
  const { data } = props;

  return (
    <div>
      {data.map((value) => (
        <div key={value.name}>
          <h2>{value.name}</h2>

          <h4>Gender:</h4>
          <p>{value.gender}</p>

          <h4>Birth Year:</h4>
          <p>{value.birth_year}</p>

          <h4>Mass:</h4>
          <p>{value.mass}</p>

          <h4>Height:</h4>
          <p>{value.height}</p>

          <h4>Eye Color:</h4>
          <p>{value.eye_color}</p>

          <br />
        </div>
      ))}
    </div>
  );
};

export default People;
