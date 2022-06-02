import { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      school,
      degreeName,
      degreeType,
      grad,
      schoolChange,
      degreeNameChange,
      degreeTypeChange,
      gradChange,
      nextTab,
    } = this.props;
    return (
      <form id="education" className="form-tab" onSubmit={nextTab}>
        <label htmlFor="school">School</label>
        <input type='text' id='school' name='school' value={school} onChange={schoolChange}/>

        <label htmlFor="degree-name">Degree</label>
        <input type='text' id='degree-name' name='degree-name' value={degreeName} onChange={degreeNameChange}/>

        <select value={degreeType} onChange={degreeTypeChange}>
          <option value='highSchool'>High School</option>
          <option value='aa'>AA</option>
          <option value='as'>AS</option>
          <option value='ba'>BA</option>
          <option value='bs'>BS</option>
          <option value='ma'>MA</option>
          <option value='ms'>MS</option>
          <option value='phd'>PhD</option>
        </select>

        <label htmlFor="grad-date">Graduation Date</label>
        <input type='month' id='grad-date' name='grad-date' value={grad} onChange={gradChange}/>

        <button type="submit">Experience {">"}</button>
      </form>
    )
  }
}

export default Education;
