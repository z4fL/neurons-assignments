const Form = () => {
  return (
    <>
      <form id="form-student">
        <label htmlFor="input-name">Fullname</label>
        <input type="text" name="fullname" id="input-name" />
        <label htmlFor="input-date">Birth Date</label>
        <input type="date" name="birtdate" id="input-date" />
        <label htmlFor="input-gender">Gender</label>
        <select name="gender" id="input-gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label htmlFor="input-prody">Program Study</label>
        <select name="prody" id="input-prody">
          <option>Ekonomi</option>
          <option>Manajemen</option>
          <option>Akuntansi</option>
          <option>Administrasi Publik</option>
          <option>Administrasi Bisnis</option>
          <option>Hubungan Internasional</option>
          <option>Teknik Sipil</option>
          <option>Arsitektur</option>
          <option>Matematika</option>
          <option>Fisika</option>
          <option>Informatika</option>
        </select>
      </form>
      <input type="submit" value="Add student" />
    </>
  );
};

export default Form;
