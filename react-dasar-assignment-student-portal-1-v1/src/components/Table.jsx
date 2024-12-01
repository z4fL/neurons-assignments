const Table = (props) => {
  return (
    <table id="table-student">
      <thead>
        <tr>
          <th>No</th>
          <th>Full Name</th>
          <th>Birth Date</th>
          <th>Gender</th>
          <th>Faculty</th>
          <th>Program Study</th>
          <th>Option</th>
        </tr>
      </thead>
      <tbody>
        {props.students && props.students.map((data) => (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.fullname}</td>
            <td>{data.birthDate}</td>
            <td>{data.gender}</td>
            <td>{data.faculty}</td>
            <td>{data.programStudy}</td>
            <td>
              <input type="button" value="Delete" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
