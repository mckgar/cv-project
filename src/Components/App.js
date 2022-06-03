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

      firstName: '',
      surname: '',
      email: '',
      number: '',

      school: '',
      degreeName: '',
      degreeType: '',
      grad: '',

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
  }

  surnameChange(e) {
    this.setState({
      surname: e.target.value,
    })
  }

  emailChange(e) {
    this.setState({
      email: e.target.value,
    })
  }

  numberChange(e) {
    this.setState({
      number: e.target.value,
    })
  }

  /* Education Information tab functions */

  schoolChange(e) {
    this.setState({
      school: e.target.value,
    })
  }

  degreeNameChange(e) {
    this.setState({
      degreeName: e.target.value,
    })
  }

  degreeTypeChange(e) {
    this.setState({
      degreeType: e.target.value,
    })
  }

  gradChange(e) {
    this.setState({
      grad: e.target.value,
    })
  }

  /* Experience Information tab functions */

  companyChange(e) {
    this.setState({
      company: e.target.value
    })
  }

  jobTitleChange(e) {
    this.setState({
      jobTitle: e.target.value
    })
  }

  newTaskChange(e) {
    this.setState({
      newTask: {
        text: e.target.value,
        id: this.state.newTask.id
      }
    })
  }

  startDateChange(e) {
    this.setState({
      startDate: e.target.value
    })
  }

  endDateChange(e) {
    this.setState({
      endDate: e.target.value
    })
  }

  addTask(e) {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.newTask),
      newTask: {
        text: '',
        id: uniqid()
      }
    })
  }

  saveTask(e) {
    const id = e.target.parentNode.id;
    const taskEditPos = this.state.tasks.findIndex(task => task.id === id);
    const taskEdit = {text: this.state.tasks[taskEditPos].tempText, id: this.state.tasks[taskEditPos].id, isEditing: false, tempText: ''};
    this.setState({
      tasks: this.state.tasks.slice(0, taskEditPos).concat(taskEdit).concat(this.state.tasks.slice(taskEditPos + 1))
    })
  }

  tempSaveTask(e) {
    const id = e.target.parentNode.id;
    const taskEditPos = this.state.tasks.findIndex(task => task.id === id);
    const taskEdit = {text: this.state.tasks[taskEditPos].text, id: this.state.tasks[taskEditPos].id, isEditing: true, tempText: e.target.parentNode.childNodes[0].value};
    this.setState({
      tasks: this.state.tasks.slice(0, taskEditPos).concat(taskEdit).concat(this.state.tasks.slice(taskEditPos + 1))
    })
  }

  editTask(e) {
    const id = e.target.parentNode.id;
    const taskEditPos = this.state.tasks.findIndex(task => task.id === id);
    const taskEdit = {text: this.state.tasks[taskEditPos].text, id: this.state.tasks[taskEditPos].id, isEditing: true, tempText: this.state.tasks[taskEditPos].text};
    this.setState({
      tasks: this.state.tasks.slice(0, taskEditPos).concat(taskEdit).concat(this.state.tasks.slice(taskEditPos + 1))
    })
  }

  deleteTask(e) {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== e.target.parentNode.id)
    })
  }

  /* Tab changing functions */

  changeTab(newTab) {
    this.setState({
      currentTab: newTab,
    })
  }

  nextTab(e) {
    e.preventDefault();
    if (this.state.currentTab === 'General') {
      this.setState({
        currentTab: 'Education'
      })
    } else if (this.state.currentTab === 'Education') {
      this.setState({
        currentTab: 'Experience'
      })
    } else if (this.state.currentTab === 'Experience') {
      this.setState({
        currentTab: 'Finished'
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
        company = {this.state.company}
        jobTitle = {this.state.jobTitle}
        tasks = {this.state.tasks}
        newTask = {this.state.newTask}
        startDate = {this.state.startDate}
        endDate = {this.state.endDate}
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
        nextTab = {this.nextTab}
      />
    }
  }

  render() {
    let form = this.ActiveTab();
    return (
      <div className="App">
        <Header title='CV Creator' />
        <NavBar tabs={['General', 'Education', 'Experience']} currentTab={this.state.currentTab} changeTab={this.changeTab} />
        {form}
      </div>
    );
  }
}

export default App;
