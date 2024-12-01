import { useState } from "react";

const Form = ({addStudent}) => {
  const [formData, setFormData] = useState({
    fullname: "",
    birthdate: "",
    gender: "",
    prody: "",
    faculty: "",
  });

  const faculties = {
    "Fakultas Ekonomi": ["Ekonomi", "Manajemen", "Akuntansi"],
    "Fakultas Ilmu Sosial dan Politik": [
      "Administrasi Publik",
      "Administrasi Bisnis",
      "Hubungan Internasional",
    ],
    "Fakultas Teknik": ["Teknik Sipil", "Arsitektur"],
    "Fakultas Teknologi Informasi dan Sains": [
      "Matematika",
      "Fisika",
      "Informatika",
    ],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const data = {
        ...prev,
        [name]: value,
      };

      if (name === "prody") {
        data.faculty = Object.keys(faculties).find((faculty) =>
          faculties[faculty].includes(value)
        );
      }

      return data;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(formData);

  };

  return (
    <>
      <form id="form-student" onSubmit={handleSubmit}>
        <label htmlFor="input-name">Fullname</label>
        <input
          type="text"
          name="fullname"
          data-testid="name"
          id="input-name"
          value={formData.fullname}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="input-date">Birth Date</label>
        <input
          type="date"
          name="birthdate"
          data-testid="date"
          id="input-date"
          value={formData.birthdate}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="input-gender">Gender</label>
        <select
          name="gender"
          data-testid="gender"
          id="input-gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <br />
        <label htmlFor="input-prody">Program Study</label>
        <select
          name="prody"
          data-testid="prody"
          id="input-prody"
          value={formData.prody}
          onChange={handleChange}
        >
          <option value="">Select Program Study</option>
          {Object.values(faculties)
            .flat()
            .map((study, index) => (
              <option key={index} value={study}>
                {study}
              </option>
            ))}
        </select>
        <br />
        <input type="submit" value="Add student" data-testid="submit" />
      </form>
    </>
  );
};

export default Form;
