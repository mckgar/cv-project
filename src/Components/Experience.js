import { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      company,
      jobTitle,
      tasks,
      newTask,
      startDate,
      endDate,
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
      nextTab
    } = this.props;

    const taskForm = 
      <div className="task-form">
        <label htmlFor='task-input'>Task</label>
        <input
          type='text'
          id='task-input'
          name='task-input'
          value={newTask.text}
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

    let taskList = tasks.map((task) =>
        (task.isEditing ? editTaskItem(task) : viewTaskItem(task))
    );

    return (
      <form id="general" className="form-tab" onSubmit={nextTab}>
        <label htmlFor="company">Company</label>
        <input type='text' id='company' name='company' value={company} onChange={companyChange}/>

        <label htmlFor="job-title">Job Title</label>
        <input type='text' id='job-title' name='job-title' value={jobTitle} onChange={jobTitleChange}/>

        <label htmlFor="start-date">Start Date</label>
        <input type='month' id='start-date' name='start-date' value={startDate} onChange={startDateChange}/>

        <label htmlFor="end-date">End Date</label>
        <input type='month' id='end-date' name='end-date' value={endDate} onChange={endDateChange}/>

        {taskForm}
        {taskList}

        <button type="submit">Finish {">"}</button>
      </form>
    )
  }
}

export default Experience;
