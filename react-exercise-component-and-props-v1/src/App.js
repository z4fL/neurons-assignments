const App = () => {
  return (
    <div>
      <Student name={"Djarot Purnomo"} isStudent={true} />
    </div>
  );
};

function Student({ name, isStudent }) {
  const fullname = name;
  const firstname = name.split(" ")[0];
  const status = isStudent === true ? "Student" : "Not student";

  return (
    <>
      <p className="fullName">{`Name: ${fullname}`}</p>
      <p className="firstName">{`First name: ${firstname}`}</p>
      <p className="status">{`Status: ${status}`}</p>
    </>
  );
}

export default App;
export { Student };
