import { Component } from "react";
import '../styles/Job.css';

class Job extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      job,
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
      removeJob
    } = this.props;

    const taskForm = 
      <div className="task-form">
        <label htmlFor='task-input'>Task:</label>
        <input
          type='text'
          className='task-input'
          name='task-input'
          placeholder="Worked hard"
          value={job.newTask.text}
          onChange={newTaskChange}
        />
        <div
          className="add-task material-symbols-outlined"
          onClick={addTask}
        >
          add_circle
        </div>
      </div>

    const viewTaskItem = (task) => {
      return (
        <li key={task.id} id={task.id} className='task-item'>
          <div>{task.text}</div>
          <div className='edit material-symbols-outlined' onClick={editTask}>edit</div>
          <div className='delete material-symbols-outlined' onClick={deleteTask}>delete</div>
        </li>
      )
    }

    const editTaskItem = (task) => {
      return (
        <li key={task.id} id={task.id} className='task-item'>
          <input type='text' value={task.tempText} onChange={tempSaveTask} />
          <div className='save material-symbols-outlined' onClick={saveTask}>save</div>
          <div className='delete material-symbols-outlined' onClick={deleteTask}>delete</div>
        </li>
      )
    }

    let taskList = job.tasks.map((task) =>
        (task.isEditing ? editTaskItem(task) : viewTaskItem(task))
    );

    return (
      <div id={job.id} className="job-form">
        <div className="form-item company">
          <label htmlFor="company">Company*</label>
          <input
            type='text'
            id='company'
            name='company'
            required
            placeholder="Company Co. Inc."
            value={job.company}
            onChange={companyChange}
          />
          <span className="validation-error"></span>
        </div>

        <div className="form-item job-title">
          <label htmlFor="job-title">Job Title*</label>
          <input
            type='text'
            id='job-title'
            name='job-title'
            required
            placeholder="Developer"
            value={job.jobTitle}
            onChange={jobTitleChange}
          />
          <span className="validation-error"></span>
        </div>

        <div className="form-item start-date">
          <label htmlFor="start-date">Start Date*</label>
          <input
            type='text'
            id='start-date'
            name='start-date'
            required
            placeholder="July 2021"
            value={job.startDate}
            onChange={startDateChange}
          />
          <span className="validation-error"></span>
        </div>

        <div className="form-item end-date">
          <label htmlFor="end-date">End Date*</label>
          <input
            type='text'
            id='end-date'
            name='end-date'
            required
            placeholder="Present"
            value={job.endDate}
            onChange={endDateChange}
          />
          <span className="validation-error"></span>
        </div>

        {taskForm}
        <ul id={job.id} className='task-list'>
          {taskList}
        </ul>

        <div className="delete-job material-symbols-outlined" onClick={removeJob}>delete</div>
        
      </div>
    )
  }
}

export default Job;
