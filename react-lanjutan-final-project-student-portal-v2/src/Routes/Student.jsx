import { useEffect, useState } from "react";
import {
  Button,
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import NavBar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

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
              <Select
                data-testid="filter"
                value={filter}
                onChange={(e) => handleFilter(e.target.value)}
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
              </Select>
            </div>
          </div>
          <TableContainer>
            <Table
              id="table-student"
              style={{
                margin: "0 auto",
                padding: "30px 0",
                width: "100%",
                maxWidth: "720px",
              }}
            >
              <Thead>
                <Tr>
                  <Th>No</Th>
                  <Th>Full Name</Th>
                  <Th>Faculty</Th>
                  <Th>Program Study</Th>
                  <Th>Option</Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredStudents &&
                  filteredStudents.map((data, index) => (
                    <Tr key={index} className="student-data-row">
                      <Td>{index + 1}</Td>
                      <Td>
                        <Link to={`/student/${data.id}`}>{data.fullname}</Link>
                      </Td>
                      <Td>{data.faculty}</Td>
                      <Td>{data.programStudy}</Td>
                      <Td>
                        <Button
                          type="button"
                          data-testid={`delete-${data.id}`}
                          onClick={() => deleteStudent(data.id)}
                        >
                          Delete
                        </Button>
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Student;
