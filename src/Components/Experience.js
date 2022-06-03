import { Component } from "react";

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
        key = {job.id}
      />
    )

    return (
      <div id="Experience" className="form-tab">
        {jobForms}
        <button onClick={addJob}>Add job</button>

        <button onClick={nextTab}>Finish {">"}</button>
      </div>
    )
  }
}

export default Experience;
