import { Component } from "react";
import '../styles/Preview.css';

class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      firstName,
      surname,
      email,
      number,
      school,
      degreeName,
      gradDate,
      jobs,
      skills,
      summary
    } = this.props;

    let skillsList = skills.map((skill) => 
      <li className='skill' key={skill.id}>{skill.text}</li>
    )

    const taskList = (tasks) => {
      let list = tasks.map((task) => 
        <li className="task" key={task.id}>{task.text}</li>
      );
      return (
        <ul className="task-list">
          {list}
        </ul>
      );
    }

    let jobHistory = jobs.map((job) => 
      <div id={job.id} key={job.id} className='job-info content-block'>
        <div className="company-name">{job.company}</div>
        <div className="job-title">{job.jobTitle}</div>
        <div className="duration">{`${job.startDate} - ${job.endDate}`}</div>
        {taskList(job.tasks)}
      </div>
    );

    return (
      <div id="cv-preview">
        <h1 id='cv-name'>{`${firstName} ${surname}`}</h1>
        <div id='contact-info' className="content-block">
          <div id='email-address'>{email}</div>
          <div id='number'>{number}</div>
        </div>

        <h2 id='summary' className='cv-title'>Summary</h2>
        <div id='summary-content' className="content-block">
          {summary}
        </div>

        <h2 id='skills-list' className='cv-title'>Skills</h2>
        <ul id='skills-info' className="content-block">
          {skillsList}
        </ul>

        <h2 id='education-history' className='cv-title'>Education</h2>
        <div id="education-info" className="content-block">
          <div id="school-name">{school}</div>
          <div id="degree">{degreeName}</div>
          <div id="grad-date">{gradDate}</div>
        </div>

        <h2 id='work-experience' className='cv-title'>Work Experience</h2>
        <div id='work-info' className="content-block">
          {jobHistory}
        </div>
      </div>
    )
  }
}

export default Preview;
