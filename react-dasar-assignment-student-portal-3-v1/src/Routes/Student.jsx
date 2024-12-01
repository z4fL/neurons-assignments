import { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import { Link } from "react-router-dom";

const Student = () => {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState();
  const [filter, setFilter] = useState("");
  const [filteredStudents, setFilteredStudents] = useState();

  const loadStudent = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3001/student");
      const data = await response.json();
      setStudents(data);
      setFilteredStudents(data);
      setLoading(false);
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  useEffect(() => {
    loadStudent();
  }, []);

  const deleteStudent = async (id) => {
    try {
      await fetch(`http://localhost:3001/student/${id}`, {
        method: "DELETE",
      });

      setFilteredStudents((prev) =>
        prev.filter((student) => student.id !== id)
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleFilter = (value) => {
    if (value !== filter) {
      setFilter(value);
      if (value !== "") {
        setFilteredStudents(() =>
          students.filter((student) => student.faculty === value)
        );
      } else {
        setFilteredStudents(students);
      }
    }
  };

  return (
    <>
      <NavBar />
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div style={{ backgroundColor: "#cbd5e1" }}>
          <div
            style={{
              display: "flex",
              width: "100%",
              maxWidth: "720px",
              margin: "0 auto",
              paddingTop: "30px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2>All Student</h2>
            <div>
              <select
                data-testid="filter"
                value={filter}
                onChange={(e) => handleFilter(e.target.value)}
                style={{ height: "30px" }}
              >
                <option value="">All</option>
                <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
                <option value="Fakultas Ilmu Sosial dan Politik">
                  Fakultas Ilmu Sosial dan Politik
                </option>
                <option value="Fakultas Teknik">Fakultas Teknik</option>
                <option value="Fakultas Teknologi Informasi dan Sains">
                  Fakultas Teknologi Informasi dan Sains
                </option>
              </select>
            </div>
          </div>
          <table
            id="table-student"
            style={{
              margin: "0 auto",
              padding: "30px 0",
              width: "100%",
              maxWidth: "720px",
            }}
          >
            <thead>
              <tr>
                <th>No</th>
                <th>Full Name</th>
                <th>Faculty</th>
                <th>Program Study</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents &&
                filteredStudents.map((data, index) => (
                  <tr key={index} className="student-data-row">
                    <td>{index + 1}</td>
                    <td>
                      <Link to={`/student/${data.id}`}>{data.fullname}</Link>
                    </td>
                    <td>{data.faculty}</td>
                    <td>{data.programStudy}</td>
                    <td>
                      <input
                        type="button"
                        value="Delete"
                        data-testid={`delete-${data.id}`}
                        onClick={() => deleteStudent(data.id)}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Student;
