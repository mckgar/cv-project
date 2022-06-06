import { Component } from "react";
import '../styles/Skills.css';

class Skills extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      skills,
      newSkill,
      newSkillChange,
      addSkill,
      editSkill,
      saveSkill,
      tempSaveSkill,
      deleteSkill,
      nextTab
    } = this.props;

    const viewSkillItem = (skill) => {
      return (
        <li key={skill.id} id={skill.id} className='skill-item'>
          <div>{skill.text}</div>
          <div className='edit material-symbols-outlined' onClick={editSkill}>edit</div>
          <div className='delete material-symbols-outlined' onClick={deleteSkill}>delete</div>
        </li>
      )
    }

    const editSkillItem = (skill) => {
      return (
        <li key={skill.id} id={skill.id} className='skill-item'>
          <input type='text' value={skill.tempText} onChange={tempSaveSkill} />
          <div className='edit material-symbols-outlined' onClick={saveSkill}>save</div>
          <div className='delete material-symbols-outlined' onClick={deleteSkill}>delete</div>
        </li>
      )
    }

    let skillList = skills.map((skill) => 
      (skill.isEditing ? editSkillItem(skill) : viewSkillItem(skill))
    );

    return (
      <form id="skills-form" onSubmit={nextTab}>
        <div id='skill-form'>
          <label htmlFor='skill-input'>Skill</label>
          <input
            type='text'
            id="skill-input"
            name="skill-input"
            placeholder="HTML"
            value={newSkill.text}
            onChange={newSkillChange}
            />
          <div
            className="add-skil material-symbols-outlined"
            onClick={addSkill}
          >
            add_circle
          </div>
        </div>

        <ul id='skill-list'>
          {skillList}
        </ul>

        <button type="submit">Summary {'>'}</button>
      </form>
    )
  }
}

export default Skills;
