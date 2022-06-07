import '../styles/Education.css';

const Education = (props) => {
  const {
    school,
    degreeName,
    grad,
    schoolChange,
    degreeNameChange,
    gradChange,
    nextTab,
  } = props;
  return (
    <form id="education" className="form-tab" onSubmit={nextTab}>
      <legend>Enter your highest level of education</legend>
      <div className="form-item school">
        <label htmlFor="school">School*</label>
        <input
          type='text'
          id='school'
          name='school'
          required
          placeholder="University of School"
          value={school}
          onChange={schoolChange}
        />
        <span className="validation-error"></span>
      </div>

      <div className="form-item degree-name">
        <label htmlFor="degree-name">Degree*</label>
        <input
          type='text'
          id='degree-name'
          name='degree-name'
          required
          placeholder="Bachelor of Science in Mathematics"
          value={degreeName}
          onChange={degreeNameChange}
        />
        <span className="validation-error"></span>
      </div>

      <div className="form-item grad-date">
        <label htmlFor="grad-date">Graduation Date*</label>
        <input
          type='year'
          id='grad-date'
          name='grad-date'
          required
          pattern="\d{4}"
          placeholder="yyyy"
          value={grad}
          onChange={gradChange}
        />
        <span className="validation-error"></span>
      </div>

      <button type="submit">Experience {">"}</button>
    </form>
  )
}

export default Education;
