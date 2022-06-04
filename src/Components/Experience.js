import { Component } from "react";
import '../styles/Experience.css';

import Job from './Job';

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      jobs,
      companyChange,
      jobTitleChange,
      addTask,
      newTaskChange,
      startDateChange,
      endDateChange,
      editTask,
      saveTask,
      tempSaveTask,
      deleteTask,
      addJob,
      removeJob,
      nextTab
    } = this.props;

    let jobForms = jobs.map((job) => 
      <Job
        job = {job}
        companyChange = {companyChange}
        jobTitleChange = {jobTitleChange}
        addTask = {addTask}
        newTaskChange = {newTaskChange}
        startDateChange = {startDateChange}
        endDateChange = {endDateChange}
        editTask = {editTask}
        saveTask = {saveTask}
        tempSaveTask = {tempSaveTask}
        deleteTask = {deleteTask}
        removeJob = {removeJob}
        key = {job.id}
      />
    )

    return (
      <form id="Experience" className="form-tab" onSubmit={nextTab}>
        <legend>Enter your work history</legend>
        {jobForms}
        <div className="buttons">
          <div className="add-job" onClick={addJob}>Add job</div>
          <button type="submit">Finish {">"}</button>
        </div>
      </form>
    )
  }
}

export default Experience;
