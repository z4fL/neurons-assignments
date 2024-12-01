const Table = ({ students, deleteStudent }) => {
    const handleClick = (id) => {
      deleteStudent(id);
    };
  
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
          {students &&
            students.map((data, index) => (
              <tr key={data.id} className="student-data-row">
                <td>{index + 1}</td>
                <td>{data.fullname}</td>
                <td>{data.birthDate}</td>
                <td>{data.gender}</td>
                <td>{data.faculty}</td>
                <td>{data.programStudy}</td>
                <td>
                  <input
                    type="button"
                    value="Delete"
                    data-testid={`delete-${data.id}`}
                    onClick={() => handleClick(data.id)}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;
  