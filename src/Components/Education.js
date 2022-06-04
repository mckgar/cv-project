import { Component } from "react";
import '../styles/Education.css';

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
        <legend>Enter your highest level of education</legend>
        <div className="form-item school">
          <label htmlFor="school">School</label>
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
          <label htmlFor="degree-name">Degree</label>
          <input
            type='text'
            id='degree-name'
            name='degree-name'
            required
            placeholder="Mathematics"
            value={degreeName}
            onChange={degreeNameChange}
          />
          <span className="validation-error"></span>
        </div>

        <div className="form-item degree-type">
        <label htmlFor="degree-type">Education Level</label>
          <select name='degree-type' required value={degreeType} onChange={degreeTypeChange}>
            <option value='highSchool'>High School/GED</option>
            <option value='aa'>AA</option>
            <option value='as'>AS</option>
            <option value='ba'>BA</option>
            <option value='bs'>BS</option>
            <option value='ma'>MA</option>
            <option value='ms'>MS</option>
            <option value='phd'>PhD</option>
          </select>
          <span className="validation-error"></span>
        </div>

        <div className="form-item grad-date">
          <label htmlFor="grad-date">Graduation Date</label>
          <input
            type='date'
            id='grad-date'
            name='grad-date'
            required
            placeholder="mm/dd/yyyy"
            value={grad}
            onChange={gradChange}
          />
          <span className="validation-error"></span>
        </div>

        <button type="submit">Experience {">"}</button>
      </form>
    )
  }
}

export default Education;
