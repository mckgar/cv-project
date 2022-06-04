import { Component } from 'react';
import '../styles/App.css';
import uniqid from 'uniqid';

import Header from './Header';
import NavBar from './NavBar';
import General from './General';
import Education from './Education';
import Experience from './Experience';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 'General',
      generalStatus: 'unfinsihed',
      educationStatus: 'unfinsihed',
      experienceStatus: 'unfinsihed',

      firstName: '',
      surname: '',
      email: '',
      number: '',

      school: '',
      degreeName: '',
      degreeType: '',
      grad: '',

      jobs: []
    }

    this.ActiveTab = this.ActiveTab.bind(this);
    this.changeTab = this.changeTab.bind(this);
    this.nextTab = this.nextTab.bind(this);

    this.firstNameChange = this.firstNameChange.bind(this);
    this.surnameChange = this.surnameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.numberChange = this.numberChange.bind(this);

    this.schoolChange = this.schoolChange.bind(this);
    this.degreeNameChange = this.degreeNameChange.bind(this);
    this.degreeTypeChange = this.degreeTypeChange.bind(this);
    this.gradChange = this.gradChange.bind(this);

    this.addJob = this.addJob.bind(this);
    this.companyChange = this.companyChange.bind(this);
    this.jobTitleChange = this.jobTitleChange.bind(this);
    this.newTaskChange = this.newTaskChange.bind(this);
    this.startDateChange = this.startDateChange.bind(this);
    this.endDateChange = this.endDateChange.bind(this);
    this.addTask = this.addTask.bind(this);
    this.saveTask = this.saveTask.bind(this);
    this.tempSaveTask = this.tempSaveTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    
  }

  /* General Information tab functions */

  firstNameChange(e) {
    this.setState({
      firstName: e.target.value,
    })
    e.target.parentNode.childNodes[2].textContent = e.target.validationMessage;
  }

  surnameChange(e) {
    this.setState({
      surname: e.target.value,
    })
    e.target.parentNode.childNodes[2].textContent = e.target.validationMessage;
  }

  emailChange(e) {
    this.setState({
      email: e.target.value,
    })

    if (e.target.validity.typeMismatch) {
      e.target.setCustomValidity('Please enter a valid email');
    } else {
      e.target.setCustomValidity('');
    }
    e.target.parentNode.childNodes[2].textContent = e.target.validationMessage;
  }

  numberChange(e) {
    this.setState({
      number: e.target.value,
    })

    if (e.target.validity.typeMismatch) {
      e.target.setCustomValidity('Please enter a valid phone number');
    } else if (e.target.validity.patternMismatch) {
      e.target.setCustomValidity('Please match format: 555 555-5555')
    } else {
      e.target.setCustomValidity('');
    }
    e.target.parentNode.childNodes[2].textContent = e.target.validationMessage;
  }

  /* Education Information tab functions */

  schoolChange(e) {
    this.setState({
      school: e.target.value,
    })
    e.target.parentNode.childNodes[2].textContent = e.target.validationMessage;
  }

  degreeNameChange(e) {
    this.setState({
      degreeName: e.target.value,
    })
    e.target.parentNode.childNodes[2].textContent = e.target.validationMessage;
  }

  degreeTypeChange(e) {
    this.setState({
      degreeType: e.target.value,
    })
    e.target.parentNode.childNodes[2].textContent = e.target.validationMessage;
  }

  gradChange(e) {
    this.setState({
      grad: e.target.value,
    })
    e.target.parentNode.childNodes[2].textContent = e.target.validationMessage;
  }

  /* Experience Information tab functions */

  addJob() {
    const newJob = {
      id: uniqid(),
      company: '',
      jobTitle: '',
      newTask: {
        text: '',
        id: uniqid(),
        isEditing: false,
        tempText: ''
      },
      tasks: [],
      startDate: '',
      endDate: ''
    }
    this.setState({
      jobs: this.state.jobs.concat(newJob),
    })
  }

  companyChange(e) {
    const id = e.target.parentNode.parentNode.id;
    const jobEditPos = this.state.jobs.findIndex(job => job.id === id);
    const jobEdit = {
      id: this.state.jobs[jobEditPos].id,
      company: e.target.value,
      jobTitle: this.state.jobs[jobEditPos].jobTitle,
      newTask: this.state.jobs[jobEditPos].newTask,
      tasks: this.state.jobs[jobEditPos].tasks,
      startDate: this.state.jobs[jobEditPos].startDate,
      endDate: this.state.jobs[jobEditPos].endDate
    };
    this.setState({
      jobs: this.state.jobs.slice(0, jobEditPos).concat(jobEdit).concat(this.state.jobs.slice(jobEditPos + 1))
    })
    e.target.parentNode.childNodes[2].textContent = e.target.validationMessage;
  }

  jobTitleChange(e) {
    const id = e.target.parentNode.parentNode.id;
    const jobEditPos = this.state.jobs.findIndex(job => job.id === id);
    const jobEdit = {
      id: this.state.jobs[jobEditPos].id,
      company: this.state.jobs[jobEditPos].company,
      jobTitle: e.target.value,
      newTask: this.state.jobs[jobEditPos].newTask,
      tasks: this.state.jobs[jobEditPos].tasks,
      startDate: this.state.jobs[jobEditPos].startDate,
      endDate: this.state.jobs[jobEditPos].endDate
    };
    this.setState({
      jobs: this.state.jobs.slice(0, jobEditPos).concat(jobEdit).concat(this.state.jobs.slice(jobEditPos + 1))
    })
    e.target.parentNode.childNodes[2].textContent = e.target.validationMessage;
  }

  newTaskChange(e) {
    const id = e.target.parentNode.parentNode.id;
    const jobEditPos = this.state.jobs.findIndex(job => job.id === id);
    const jobEdit = {
      id: this.state.jobs[jobEditPos].id,
      company: this.state.jobs[jobEditPos].company,
      jobTitle: this.state.jobs[jobEditPos].jobTitle,
      newTask: {
        text: e.target.value,
        id: this.state.jobs[jobEditPos].newTask.id
      },
      tasks: this.state.jobs[jobEditPos].tasks,
      startDate: this.state.jobs[jobEditPos].startDate,
      endDate: this.state.jobs[jobEditPos].endDate
    };
    this.setState({
      jobs: this.state.jobs.slice(0, jobEditPos).concat(jobEdit).concat(this.state.jobs.slice(jobEditPos + 1))
    })
  }

  startDateChange(e) {
    const id = e.target.parentNode.parentNode.id;
    const jobEditPos = this.state.jobs.findIndex(job => job.id === id);
    const jobEdit = {
      id: this.state.jobs[jobEditPos].id,
      company: this.state.jobs[jobEditPos].company,
      jobTitle: this.state.jobs[jobEditPos].jobTitle,
      newTask: this.state.jobs[jobEditPos].newTask,
      tasks: this.state.jobs[jobEditPos].tasks,
      startDate: e.target.value,
      endDate: this.state.jobs[jobEditPos].endDate
    };
    this.setState({
      jobs: this.state.jobs.slice(0, jobEditPos).concat(jobEdit).concat(this.state.jobs.slice(jobEditPos + 1))
    })
    e.target.parentNode.childNodes[2].textContent = e.target.validationMessage;
  }

  endDateChange(e) {
    const id = e.target.parentNode.parentNode.id;
    const jobEditPos = this.state.jobs.findIndex(job => job.id === id);
    const jobEdit = {
      id: this.state.jobs[jobEditPos].id,
      company: this.state.jobs[jobEditPos].company,
      jobTitle: this.state.jobs[jobEditPos].jobTitle,
      newTask: this.state.jobs[jobEditPos].newTask,
      tasks: this.state.jobs[jobEditPos].tasks,
      startDate: this.state.jobs[jobEditPos].startDate,
      endDate: e.target.value
    };
    this.setState({
      jobs: this.state.jobs.slice(0, jobEditPos).concat(jobEdit).concat(this.state.jobs.slice(jobEditPos + 1))
    })
    e.target.parentNode.childNodes[2].textContent = e.target.validationMessage;
  }

  addTask(e) {
    e.preventDefault();
    const id = e.target.parentNode.parentNode.id;
    const jobEditPos = this.state.jobs.findIndex(job => job.id === id);
    const jobEdit = {
      id: this.state.jobs[jobEditPos].id,
      company: this.state.jobs[jobEditPos].company,
      jobTitle: this.state.jobs[jobEditPos].jobTitle,
      newTask: {
        text: '',
        id: uniqid()
      },
      tasks: this.state.jobs[jobEditPos].tasks.concat(this.state.jobs[jobEditPos].newTask),
      startDate: this.state.jobs[jobEditPos].startDate,
      endDate: this.state.jobs[jobEditPos].endDate
    };
    this.setState({
      jobs: this.state.jobs.slice(0, jobEditPos).concat(jobEdit).concat(this.state.jobs.slice(jobEditPos + 1))
    })
  }

  saveTask(e) {
    const jobId = e.target.parentNode.parentNode.id;
    const jobEditPos = this.state.jobs.findIndex(job => job.id === jobId);
    const taskId = e.target.parentNode.id;
    const taskEditPos = this.state.jobs[jobEditPos].tasks.findIndex(task => task.id === taskId);
    const taskEdit = {
      text: this.state.jobs[jobEditPos].tasks[taskEditPos].tempText,
      id: this.state.jobs[jobEditPos].tasks[taskEditPos].id,
      isEditing: false,
      tempText: ''
    };
    const jobEdit = {
      id: this.state.jobs[jobEditPos].id,
      company: this.state.jobs[jobEditPos].company,
      jobTitle: this.state.jobs[jobEditPos].jobTitle,
      newTask: this.state.jobs[jobEditPos].newTask,
      tasks: this.state.jobs[jobEditPos].tasks.slice(0, taskEditPos).concat(taskEdit).concat(this.state.jobs[jobEditPos].tasks.slice(taskEditPos + 1)),
      startDate: this.state.jobs[jobEditPos].startDate,
      endDate: this.state.jobs[jobEditPos].endDate
    };
    this.setState({
      jobs: this.state.jobs.slice(0, jobEditPos).concat(jobEdit).concat(this.state.jobs.slice(jobEditPos + 1))
    })
  }

  tempSaveTask(e) {
    const jobId = e.target.parentNode.parentNode.id;
    const jobEditPos = this.state.jobs.findIndex(job => job.id === jobId);
    const taskId = e.target.parentNode.id;
    const taskEditPos = this.state.jobs[jobEditPos].tasks.findIndex(task => task.id === taskId);
    const taskEdit = {
      text: this.state.jobs[jobEditPos].tasks[taskEditPos].tempText,
      id: this.state.jobs[jobEditPos].tasks[taskEditPos].id,
      isEditing: true,
      tempText: e.target.parentNode.childNodes[0].value
    };
    const jobEdit = {
      id: this.state.jobs[jobEditPos].id,
      company: this.state.jobs[jobEditPos].company,
      jobTitle: this.state.jobs[jobEditPos].jobTitle,
      newTask: this.state.jobs[jobEditPos].newTask,
      tasks: this.state.jobs[jobEditPos].tasks.slice(0, taskEditPos).concat(taskEdit).concat(this.state.jobs[jobEditPos].tasks.slice(taskEditPos + 1)),
      startDate: this.state.jobs[jobEditPos].startDate,
      endDate: this.state.jobs[jobEditPos].endDate
    };
    this.setState({
      jobs: this.state.jobs.slice(0, jobEditPos).concat(jobEdit).concat(this.state.jobs.slice(jobEditPos + 1))
    })
  }

  editTask(e) {
    const jobId = e.target.parentNode.parentNode.id;
    const jobEditPos = this.state.jobs.findIndex(job => job.id === jobId);
    const taskId = e.target.parentNode.id;
    const taskEditPos = this.state.jobs[jobEditPos].tasks.findIndex(task => task.id === taskId);
    const taskEdit = {
      text: this.state.jobs[jobEditPos].tasks[taskEditPos].tempText,
      id: this.state.jobs[jobEditPos].tasks[taskEditPos].id,
      isEditing: true,
      tempText: this.state.jobs[jobEditPos].tasks[taskEditPos].text
    };
    const jobEdit = {
      id: this.state.jobs[jobEditPos].id,
      company: this.state.jobs[jobEditPos].company,
      jobTitle: this.state.jobs[jobEditPos].jobTitle,
      newTask: this.state.jobs[jobEditPos].newTask,
      tasks: this.state.jobs[jobEditPos].tasks.slice(0, taskEditPos).concat(taskEdit).concat(this.state.jobs[jobEditPos].tasks.slice(taskEditPos + 1)),
      startDate: this.state.jobs[jobEditPos].startDate,
      endDate: this.state.jobs[jobEditPos].endDate
    };
    this.setState({
      jobs: this.state.jobs.slice(0, jobEditPos).concat(jobEdit).concat(this.state.jobs.slice(jobEditPos + 1))
    })
  }

  deleteTask(e) {
    const jobId = e.target.parentNode.parentNode.id;
    const jobEditPos = this.state.jobs.findIndex(job => job.id === jobId);
    const jobEdit = {
      id: this.state.jobs[jobEditPos].id,
      company: this.state.jobs[jobEditPos].company,
      jobTitle: this.state.jobs[jobEditPos].jobTitle,
      newTask: this.state.jobs[jobEditPos].newTask,
      tasks: this.state.jobs[jobEditPos].tasks.filter(task => task.id !== e.target.parentNode.id),
      startDate: this.state.jobs[jobEditPos].startDate,
      endDate: this.state.jobs[jobEditPos].endDate
    };
    this.setState({
      jobs: this.state.jobs.slice(0, jobEditPos).concat(jobEdit).concat(this.state.jobs.slice(jobEditPos + 1))
    })
  }

  /* Tab changing functions */

  changeTab(newTab) {
    let canChange = false;

    if (newTab === 'General') {
      canChange = true;
    } else if (newTab === 'Education' && this.state.generalStatus === 'finished') {
      canChange = true;
    } else if (newTab === 'Experience'
      && this.state.generalStatus === 'finished'
      && this.state.educationStatus === 'finished'
    ) {
      canChange = true;
    }

    if (canChange) {
      this.setState({
        currentTab: newTab,
      })
  }
  }

  nextTab(e) {
    e.preventDefault();
    if (this.state.currentTab === 'General') {
      this.setState({
        currentTab: 'Education',
        generalStatus: 'finished'
      })
    } else if (this.state.currentTab === 'Education') {
      this.setState({
        currentTab: 'Experience',
        educationStatus: 'finished'
      })
    } else if (this.state.currentTab === 'Experience') {
      this.setState({
        currentTab: 'Finished',
        experienceStatus: 'finished'
      })
    }
  }

  ActiveTab() {
    if (this.state.currentTab === 'General') {
      return <General
        firstName={this.state.firstName}
        surname={this.state.surname}
        email={this.state.email}
        number={this.state.number}
        firstNameChange={this.firstNameChange}
        surnameChange={this.surnameChange}
        emailChange={this.emailChange}
        numberChange={this.numberChange}
        nextTab={this.nextTab}
      />
    } else if (this.state.currentTab === 'Education') {
      return <Education 
        school = {this.state.school}
        degreeName = {this.state.degreeName}
        degreeType = {this.state.degreeType}
        grad = {this.state.grad}
        schoolChange = {this.schoolChange}
        degreeNameChange = {this.degreeNameChange}
        degreeTypeChange = {this.degreeTypeChange}
        gradChange = {this.gradChange}
        nextTab = {this.nextTab}
      />
    } else if (this.state.currentTab === 'Experience') {
      return <Experience
        jobs = {this.state.jobs}
        companyChange = {this.companyChange}
        jobTitleChange = {this.jobTitleChange}
        addTask = {this.addTask}
        newTaskChange = {this.newTaskChange}
        startDateChange = {this.startDateChange}
        endDateChange = {this.endDateChange}
        editTask = {this.editTask}
        saveTask = {this.saveTask}
        tempSaveTask = {this.tempSaveTask}
        deleteTask = {this.deleteTask}
        addJob = {this.addJob}
        nextTab = {this.nextTab}
      />
    }
  }

  render() {
    let form = this.ActiveTab();
    return (
      <div className="App">
        <Header title='CV Creator' />
        <NavBar
          tabs={[
            {text: 'General', status: this.state.generalStatus},
            {text: 'Education', status: this.state.educationStatus},
            {text: 'Experience', status: this.state.experienceStatus}
          ]}
          currentTab={this.state.currentTab}
          changeTab={this.changeTab}
        />
        {form}
      </div>
    );
  }
}

export default App;
