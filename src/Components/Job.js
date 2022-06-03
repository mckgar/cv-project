import { Component } from "react";

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
      deleteTask
    } = this.props;

    const taskForm = 
      <div className="task-form">
        <label htmlFor='task-input'>Task</label>
        <input
          type='text'
          id='task-input'
          name='task-input'
          value={job.newTask.text}
          onChange={newTaskChange}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

    const viewTaskItem = (task) => {
      return (
        <li key={task.id} id={task.id}>
          {task.text}
          <div className='edit' onClick={editTask}>EDIT</div>
          <div className='delete' onClick={deleteTask}>DELETE</div>
        </li>
      )
    }

    const editTaskItem = (task) => {
      return (
        <li key={task.id} id={task.id}>
          <input type='text' value={task.tempText} onChange={tempSaveTask} />
          <div className='save' onClick={saveTask}>SAVE</div>
          <div className='delete' onClick={deleteTask}>DELETE</div>
        </li>
      )
    }

    let taskList = job.tasks.map((task) =>
        (task.isEditing ? editTaskItem(task) : viewTaskItem(task))
    );

    return (
      <form id={job.id} className="job-form">
        <label htmlFor="company">Company</label>
        <input type='text' id='company' name='company' value={job.company} onChange={companyChange}/>

        <label htmlFor="job-title">Job Title</label>
        <input type='text' id='job-title' name='job-title' value={job.jobTitle} onChange={jobTitleChange}/>

        <label htmlFor="start-date">Start Date</label>
        <input type='month' id='start-date' name='start-date' value={job.startDate} onChange={startDateChange}/>

        <label htmlFor="end-date">End Date</label>
        <input type='month' id='end-date' name='end-date' value={job.endDate} onChange={endDateChange}/>

        {taskForm}
        <ul id={job.id}>
          {taskList}
        </ul>
        
      </form>
    )
  }
}

export default Job;
