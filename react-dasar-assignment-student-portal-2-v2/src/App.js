import { useEffect, useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState();

  useEffect(() => {
    fetch("http://localhost:3001/student")
      .then((res) => res.json())
      .then((json) => {
        setStudents(json);
        setLoading(false);
      });
  }, []);

  const addStudent = async (data) => {
    const formData = {
      fullname: data.fullname,
      birthDate: data.birthdate,
      gender: data.gender,
      programStudy: data.prody,
      faculty: data.faculty,
    };
    try {
      await fetch("http://localhost:3001/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setStudents((prev) => [...prev, formData]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await fetch(`http://localhost:3001/student/${id}`, {
        method: "DELETE",
      });

      setStudents((prev) => prev.filter((student) => student.id !== id));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (loading) return <p>Loading ...</p>;

  return (
    <>
      <Form addStudent={addStudent} />
      <Table students={students} deleteStudent={deleteStudent} />
    </>
  );
};

export default App;
