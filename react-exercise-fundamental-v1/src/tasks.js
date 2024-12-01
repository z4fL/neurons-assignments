import { useState } from "react";

function Task1() {
  return (
    <div className="basic_component">
      <h1>Halo dunia!</h1>
    </div>
  );
}

function Task1_1(props) {
  return <h1>{props.name}</h1>;
}

function Task2() {
  const [klik, setKlik] = useState("Klik tombol di bawah");

  return (
    <div>
      <h1>{klik}</h1>
      <button onClick={() => setKlik("Tombol telah di-klik!")}>
        Klik saya!
      </button>
    </div>
  );
}

const students = [
  {
    name: "John Doe",
    age: 20,
    dropout: false,
  },
  {
    name: "Jane Doe",
    age: 21,
    dropout: true,
  },
  {
    name: "John Smith",
    age: 22,
    dropout: false,
  },
  {
    name: "Jane Smith",
    age: 23,
    dropout: true,
  },
];

function Task3() {
  return (
    <>
      {students.map((student, index) => {
        return <h2 key={index}>{student.name + " - " + student.age}</h2>;
      })}
    </>
  );
}

function Task3_1() {
  const activeStudent = students.filter((student) => student.dropout === false);
  return (
    <>
      {activeStudent.map((student, index) => {
        return (
          <h2 key={index}>
            {student.name + " - " + student.age}
          </h2>
        );
      })}
    </>
  );
}

function Task4() {
  const [klik, setKlik] = useState(false);

  return (
    <div>
      {!klik && <p>Klik tombol di-bawah untuk menghapus elemen ini</p>}
      <button onClick={() => setKlik(!klik)}>Hapus</button>
    </div>
  );
}

export { Task1, Task1_1, Task2, Task3, Task3_1, Task4 };
