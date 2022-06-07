import { useState } from 'react';
import '../styles/App.css';
import uniqid from 'uniqid';

import Header from './Header';
import NavBar from './NavBar';
import General from './General';
import Education from './Education';
import Experience from './Experience';
import Preview from './Preview';
import Skills from './Skills';
import Summary from './Summary';

const App = () => {
  const [currentTab, setCurrentTab] = useState('General');
  const [generalStatus, setGeneralStatus] = useState('unfinsihed');
  const [educationStatus, setEducationStatus] = useState('unfinsihed');
  const [experienceStatus, setExperienceStatus] = useState('unfinsihed');
  const [skillsStatus, setSkillsStatus] = useState('unfinished');
  const [summaryStatus, setSummaryStatus] = useState('unfinished');

  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const [school, setSchool] = useState('');
  const [degreeName, setDegreeName] = useState('');
  const [grad, setGrad] = useState('');

  const [jobs, setJobs] = useState([]);

  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState({
    text: '',
    id: uniqid(),
    isEditing: false,
    tempText: ''
  });

  const [summary, setSummary] = useState('');

  /* General Information tab functions */

  const firstNameChange = (e) => {
    setFirstName(e.target.value);
    e.target.parentNode.childNodes[2].textContent = e.target.validationMessage;
  };

  const surnameChange = (e) => {
    setSurname(e.target.value)
    e.target.parentNode.childNodes[2].textContent = e.target.validationMessage;
  };

  const emailChange = (e) => {
    setEmail(e.target.value)

    if (e.target.validity.typeMismatch) {
      e.target.setCustomValidity('Please enter a valid email');
    } else {
      e.target.setCustomValidity('');
    }
    e.target.parentNode.childNodes[2].textContent = e.target.validationMessage;
  };

  const numberChange = (e) => {
    setNumber(e.target.value)

    if (e.target.validity.typeMismatch) {
      e.target.setCustomValidity('Please enter a valid phone number');
    } else if (e.target.validity.patternMismatch) {
      e.target.setCustomValidity('Please match format: 555 555-5555')
    } else {
      e.target.setCustomValidity('');
    }
    e.target.parentNode.childNodes[2].textContent = e.target.validationMessage;
  };

  /* Education Information tab functions */

  const schoolChange = (e) => {
    setSchool(e.target.value)
    e.target.parentNode.childNodes[2].textContent = e.target.validationMessage;
  };

  const degreeNameChange = (e) => {
    setDegreeName(e.target.value)
    e.target.parentNode.childNodes[2].textContent = e.target.validationMessage;
  };

  const gradChange = (e) => {
    setGrad(e.target.value)

    if (e.target.validity.patternMismatch) {
      e.target.setCustomValidity('Please match format: yyyy')
    } else {
      e.target.setCustomValidity('');
    }
    e.target.parentNode.childNodes[2].textContent = e.target.validationMessage;
  };

  /* Experience Information tab functions */

  const addJob = () => {
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
    setJobs(jobs.concat(newJob))
  };

  const removeJob = (e) => {
    const id = e.target.parentNode.id;
    setJobs(jobs.filter(job => job.id !== id))
  };

  const companyChange = (e) => {
    const id = e.target.parentNode.parentNode.id;
    const jobEditPos = jobs.findIndex(job => job.id === id);
    const jobEdit = {
      id: jobs[jobEditPos].id,
      company: e.target.value,
      jobTitle: jobs[jobEditPos].jobTitle,
      newTask: jobs[jobEditPos].newTask,
      tasks: jobs[jobEditPos].tasks,
      startDate: jobs[jobEditPos].startDate,
      endDate: jobs[jobEditPos].endDate
    };
    setJobs(jobs.slice(0, jobEditPos).concat(jobEdit).concat(jobs.slice(jobEditPos + 1)));
    e.target.parentNode.childNodes[2].textContent = e.target.validationMessage;
  };

  const jobTitleChange = (e) => {
    const id = e.target.parentNode.parentNode.id;
    const jobEditPos = jobs.findIndex(job => job.id === id);
    const jobEdit = {
      id: jobs[jobEditPos].id,
      company: jobs[jobEditPos].company,
      jobTitle: e.target.value,
      newTask: jobs[jobEditPos].newTask,
      tasks: jobs[jobEditPos].tasks,
      startDate: jobs[jobEditPos].startDate,
      endDate: jobs[jobEditPos].endDate
    };
    setJobs(jobs.slice(0, jobEditPos).concat(jobEdit).concat(jobs.slice(jobEditPos + 1)));
    e.target.parentNode.childNodes[2].textContent = e.target.validationMessage;
  };

  const newTaskChange = (e) => {
    const id = e.target.parentNode.parentNode.id;
    const jobEditPos = jobs.findIndex(job => job.id === id);
    const jobEdit = {
      id: jobs[jobEditPos].id,
      company: jobs[jobEditPos].company,
      jobTitle: jobs[jobEditPos].jobTitle,
      newTask: {
        text: e.target.value,
        id: jobs[jobEditPos].newTask.id
      },
      tasks: jobs[jobEditPos].tasks,
      startDate: jobs[jobEditPos].startDate,
      endDate: jobs[jobEditPos].endDate
    };
    setJobs(jobs.slice(0, jobEditPos).concat(jobEdit).concat(jobs.slice(jobEditPos + 1)));
  };

  const startDateChange = (e) => {
    const id = e.target.parentNode.parentNode.id;
    const jobEditPos = jobs.findIndex(job => job.id === id);
    const jobEdit = {
      id: jobs[jobEditPos].id,
      company: jobs[jobEditPos].company,
      jobTitle: jobs[jobEditPos].jobTitle,
      newTask: jobs[jobEditPos].newTask,
      tasks: jobs[jobEditPos].tasks,
      startDate: e.target.value,
      endDate: jobs[jobEditPos].endDate
    };
    setJobs(jobs.slice(0, jobEditPos).concat(jobEdit).concat(jobs.slice(jobEditPos + 1)));
    e.target.parentNode.childNodes[2].textContent = e.target.validationMessage;
  };

  const endDateChange = (e) => {
    const id = e.target.parentNode.parentNode.id;
    const jobEditPos = jobs.findIndex(job => job.id === id);
    const jobEdit = {
      id: jobs[jobEditPos].id,
      company: jobs[jobEditPos].company,
      jobTitle: jobs[jobEditPos].jobTitle,
      newTask: jobs[jobEditPos].newTask,
      tasks: jobs[jobEditPos].tasks,
      startDate: jobs[jobEditPos].startDate,
      endDate: e.target.value
    };
    setJobs(jobs.slice(0, jobEditPos).concat(jobEdit).concat(jobs.slice(jobEditPos + 1)));
    e.target.parentNode.childNodes[2].textContent = e.target.validationMessage;
  };

  const addTask = (e) => {
    e.preventDefault();
    const id = e.target.parentNode.parentNode.id;
    const jobEditPos = jobs.findIndex(job => job.id === id);
    const jobEdit = {
      id: jobs[jobEditPos].id,
      company: jobs[jobEditPos].company,
      jobTitle: jobs[jobEditPos].jobTitle,
      newTask: {
        text: '',
        id: uniqid()
      },
      tasks: jobs[jobEditPos].tasks.concat(jobs[jobEditPos].newTask),
      startDate: jobs[jobEditPos].startDate,
      endDate: jobs[jobEditPos].endDate
    };
    setJobs(jobs.slice(0, jobEditPos).concat(jobEdit).concat(jobs.slice(jobEditPos + 1)));
  };

  const saveTask = (e) => {
    const jobId = e.target.parentNode.parentNode.id;
    const jobEditPos = jobs.findIndex(job => job.id === jobId);
    const taskId = e.target.parentNode.id;
    const taskEditPos = jobs[jobEditPos].tasks.findIndex(task => task.id === taskId);
    const taskEdit = {
      text: jobs[jobEditPos].tasks[taskEditPos].tempText,
      id: jobs[jobEditPos].tasks[taskEditPos].id,
      isEditing: false,
      tempText: ''
    };
    const jobEdit = {
      id: jobs[jobEditPos].id,
      company: jobs[jobEditPos].company,
      jobTitle: jobs[jobEditPos].jobTitle,
      newTask: jobs[jobEditPos].newTask,
      tasks: jobs[jobEditPos].tasks.slice(0, taskEditPos).concat(taskEdit).concat(jobs[jobEditPos].tasks.slice(taskEditPos + 1)),
      startDate: jobs[jobEditPos].startDate,
      endDate: jobs[jobEditPos].endDate
    };
    setJobs(jobs.slice(0, jobEditPos).concat(jobEdit).concat(jobs.slice(jobEditPos + 1)));
  };

  const tempSaveTask = (e) => {
    const jobId = e.target.parentNode.parentNode.id;
    const jobEditPos = jobs.findIndex(job => job.id === jobId);
    const taskId = e.target.parentNode.id;
    const taskEditPos = jobs[jobEditPos].tasks.findIndex(task => task.id === taskId);
    const taskEdit = {
      text: jobs[jobEditPos].tasks[taskEditPos].text,
      id: jobs[jobEditPos].tasks[taskEditPos].id,
      isEditing: true,
      tempText: e.target.parentNode.childNodes[0].value
    };
    const jobEdit = {
      id: jobs[jobEditPos].id,
      company: jobs[jobEditPos].company,
      jobTitle: jobs[jobEditPos].jobTitle,
      newTask: jobs[jobEditPos].newTask,
      tasks: jobs[jobEditPos].tasks.slice(0, taskEditPos).concat(taskEdit).concat(jobs[jobEditPos].tasks.slice(taskEditPos + 1)),
      startDate: jobs[jobEditPos].startDate,
      endDate: jobs[jobEditPos].endDate
    };
    setJobs(jobs.slice(0, jobEditPos).concat(jobEdit).concat(jobs.slice(jobEditPos + 1)));
  };

  const editTask = (e) => {
    const jobId = e.target.parentNode.parentNode.id;
    const jobEditPos = jobs.findIndex(job => job.id === jobId);
    const taskId = e.target.parentNode.id;
    const taskEditPos = jobs[jobEditPos].tasks.findIndex(task => task.id === taskId);
    const taskEdit = {
      text: jobs[jobEditPos].tasks[taskEditPos].text,
      id: jobs[jobEditPos].tasks[taskEditPos].id,
      isEditing: true,
      tempText: jobs[jobEditPos].tasks[taskEditPos].text
    };
    const jobEdit = {
      id: jobs[jobEditPos].id,
      company: jobs[jobEditPos].company,
      jobTitle: jobs[jobEditPos].jobTitle,
      newTask: jobs[jobEditPos].newTask,
      tasks: jobs[jobEditPos].tasks.slice(0, taskEditPos).concat(taskEdit).concat(jobs[jobEditPos].tasks.slice(taskEditPos + 1)),
      startDate: jobs[jobEditPos].startDate,
      endDate: jobs[jobEditPos].endDate
    };
    setJobs(jobs.slice(0, jobEditPos).concat(jobEdit).concat(jobs.slice(jobEditPos + 1)));
  };

  const deleteTask = (e) => {
    const jobId = e.target.parentNode.parentNode.id;
    const jobEditPos = jobs.findIndex(job => job.id === jobId);
    const jobEdit = {
      id: jobs[jobEditPos].id,
      company: jobs[jobEditPos].company,
      jobTitle: jobs[jobEditPos].jobTitle,
      newTask: jobs[jobEditPos].newTask,
      tasks: jobs[jobEditPos].tasks.filter(task => task.id !== e.target.parentNode.id),
      startDate: jobs[jobEditPos].startDate,
      endDate: jobs[jobEditPos].endDate
    };
    setJobs(jobs.slice(0, jobEditPos).concat(jobEdit).concat(jobs.slice(jobEditPos + 1)));
  };

  /* Skill tab functions */

  const newSkillChange = (e) => {
    setNewSkill({
        text: e.target.value,
        id: newSkill.id,
        isEditing: false,
        tempText: ''
      });
  };

  const addSkill = () => {
    setSkills(skills.concat(newSkill))

    setNewSkill({
      text: '',
      id: uniqid(),
      isEditing: false,
      tempText: ''
    })
  };

  const editSkill = (e) => {
    const id = e.target.parentNode.id;
    const skillEditPos = skills.findIndex(skill => skill.id === id);
    const skillEdit = {
      text: skills[skillEditPos].text,
      id: skills[skillEditPos].id,
      isEditing: true,
      tempText: skills[skillEditPos].text
    }
    setSkills(skills.slice(0, skillEditPos).concat(skillEdit).concat(skills.slice(skillEditPos + 1)));
  };

  const saveSkill = (e) => {
    const id = e.target.parentNode.id;
    const skillEditPos = skills.findIndex(skill => skill.id === id);
    const skillEdit = {
      text: skills[skillEditPos].tempText,
      id: skills[skillEditPos].id,
      isEditing: false,
      tempText: ''
    }
    setSkills(skills.slice(0, skillEditPos).concat(skillEdit).concat(skills.slice(skillEditPos + 1)));
  };

  const tempSaveSkill = (e) => {
    const id = e.target.parentNode.id;
    const skillEditPos = skills.findIndex(skill => skill.id === id);
    const skillEdit = {
      text: skills[skillEditPos].text,
      id: skills[skillEditPos].id,
      isEditing: true,
      tempText: e.target.parentNode.childNodes[0].value
    }
    setSkills(skills.slice(0, skillEditPos).concat(skillEdit).concat(skills.slice(skillEditPos + 1)));
  };

  const deleteSkill = (e) => {
    setSkills(skills.filter(skill => skill.id !== e.target.parentNode.id));
  };

  /* Summary tab functions */

  const summaryChange = (e) => {
    setSummary(e.target.value);
  };

  /* Tab changing functions */

  const changeTab = (newTab) => {
    let canChange = false;

    if (newTab === 'General') {
      canChange = true;
    } else if (newTab === 'Education' && generalStatus === 'finished') {
      canChange = true;
    } else if (newTab === 'Experience'
      && generalStatus === 'finished'
      && educationStatus === 'finished'
    ) {
      canChange = true;
    } else if (newTab === 'Skills'
      && generalStatus === 'finished'
      && educationStatus === 'finished'
      && experienceStatus === 'finished'
    ) {
      canChange = true;
    } else if (newTab === 'Summary'
    && generalStatus === 'finished'
    && educationStatus === 'finished'
    && experienceStatus === 'finished'
    && skillsStatus === 'finished'
  ) {
    canChange = true;
  }

    if (canChange) {
      setCurrentTab(newTab);
    }
  }

  const nextTab = (e) => {
    e.preventDefault();
    if (currentTab === 'General') {
      setCurrentTab('Education')
      setGeneralStatus('finished')
    } else if (currentTab === 'Education') {
        setCurrentTab('Experience')
        setEducationStatus('finished')
    } else if (currentTab === 'Experience') {
        setCurrentTab('Skills')
        setExperienceStatus('finished')
    } else if (currentTab === 'Skills') {
        setCurrentTab('Summary')
        setSkillsStatus('finished')
    } else if (currentTab === 'Summary') {
        setCurrentTab('Finished')
        setSummaryStatus('finished')
    }
  };

  const ActiveTab = () => {
    if (currentTab === 'General') {
      return <General
        firstName={firstName}
        surname={surname}
        email={email}
        number={number}
        firstNameChange={firstNameChange}
        surnameChange={surnameChange}
        emailChange={emailChange}
        numberChange={numberChange}
        nextTab={nextTab}
      />
    } else if (currentTab === 'Education') {
      return <Education 
        school = {school}
        degreeName = {degreeName}
        grad = {grad}
        schoolChange = {schoolChange}
        degreeNameChange = {degreeNameChange}
        gradChange = {gradChange}
        nextTab = {nextTab}
      />
    } else if (currentTab === 'Experience') {
      return <Experience
        jobs = {jobs}
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
        addJob = {addJob}
        removeJob = {removeJob}
        nextTab = {nextTab}
      />
    } else if (currentTab === 'Skills') {
      return <Skills
        skills = {skills}
        newSkill = {newSkill}
        newSkillChange = {newSkillChange}
        addSkill = {addSkill}
        editSkill = {editSkill}
        saveSkill = {saveSkill}
        tempSaveSkill = {tempSaveSkill}
        deleteSkill = {deleteSkill}
        nextTab = {nextTab}
      />
    } else if (currentTab === 'Summary') {
      return <Summary
        summary = {summary}
        summaryChange = {summaryChange}
        nextTab = {nextTab}
      />
    } else {
      return <Preview
        firstName = {firstName}
        surname = {surname}
        email = {email}
        number = {number}
        school = {school}
        degreeName = {degreeName}
        gradDate = {grad}
        jobs = {jobs}
        skills = {skills}
        summary = {summary}
      />
    }
  }
  
  return (
    <div className="App">
      <Header title='CV Creator' />
      <NavBar
        tabs={[
          {text: 'General', status: generalStatus},
          {text: 'Education', status: educationStatus},
          {text: 'Experience', status: experienceStatus},
          {text: 'Skills', status: skillsStatus},
          {text: 'Summary', status: summaryStatus}
        ]}
        currentTab={currentTab}
        changeTab={changeTab}
      />
      {ActiveTab()}
    </div>
  );
}

export default App;
