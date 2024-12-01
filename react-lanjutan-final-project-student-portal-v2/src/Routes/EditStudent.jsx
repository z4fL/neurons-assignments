import { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Input, Select } from "@chakra-ui/react";
import Footer from "../components/Footer";

const EditStudent = () => {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    profilePicture: "",
    address: "",
    phoneNumber: "",
    birthDate: "",
    gender: "",
    prody: "",
    faculty: "",
  });
  const { id } = useParams();
  let navigate = useNavigate();

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

  const loadStudent = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3001/student/" + id);
      const data = await response.json();
      setFormData({
        fullName: data.fullname,
        profilePicture: data.profilePicture,
        address: data.address,
        phoneNumber: data.phoneNumber,
        birthDate: data.birthDate,
        gender: data.gender,
        prody: data.programStudy,
        faculty: data.faculty,
      });
      setLoading(false);
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  useEffect(() => {
    loadStudent();
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      fullname: formData.fullName,
      profilePicture: formData.profilePicture,
      address: formData.address,
      birthDate: formData.birthDate,
      gender: formData.gender,
      phoneNumber: formData.phoneNumber,
      faculty: formData.faculty,
      programStudy: formData.prody,
    };

    try {
      await fetch("http://localhost:3001/student/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setFormData({
        fullName: "",
        profilePicture: "",
        address: "",
        phoneNumber: "",
        birthDate: "",
        gender: "",
        prody: "",
        faculty: "",
      });

      navigate("/student");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <NavBar />
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div>
          <img
            src={formData.profilePicture}
            alt={formData.fullName}
            width="300px"
            height="300px"
          />
          <form id="form-student" onSubmit={handleSubmit}>
            <label htmlFor="input-name">Fullname</label>
            <Input
              type="text"
              name="fullName"
              data-testid="name"
              id="input-name"
              value={formData.fullName || ""}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="input-address">Address</label>
            <Input
              type="text"
              name="address"
              data-testid="address"
              id="input-address"
              value={formData.address || ""}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="input-phone">Phone Number</label>
            <Input
              type="text"
              name="phoneNumber"
              data-testid="phoneNumber"
              id="input-phone"
              value={formData.phoneNumber || ""}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="input-date">Birth Date</label>
            <Input
              type="date"
              name="birthDate"
              data-testid="date"
              id="input-date"
              value={formData.birthDate || ""}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="input-gender">Gender</label>
            <Select
              name="gender"
              data-testid="gender"
              id="input-gender"
              value={formData.gender || ""}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Select>
            <br />
            <label htmlFor="input-prody">Program Study</label>
            <Select
              name="prody"
              data-testid="prody"
              id="input-prody"
              value={formData.prody || ""}
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
            </Select>
            <br />
            <Button type="submit" data-testid="edit-btn">
              Add student
            </Button>
          </form>
        </div>
      )}
      <Footer />
    </>
  );
};

export default EditStudent;
