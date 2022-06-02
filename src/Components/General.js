import { Component } from "react";

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      firstName,
      surname,
      email,
      number,
      firstNameChange,
      surnameChange,
      emailChange,
      numberChange,
      nextTab
    } = this.props;
    return (
      <form id="general" className="form-tab" onSubmit={nextTab}>
        <label htmlFor="first-name">First Name</label>
        <input type='text' id='first-name' name='first-name' value={firstName} onChange={firstNameChange}/>

        <label htmlFor="surname">Last Name</label>
        <input type='text' id='surname' name='surname' value={surname} onChange={surnameChange}/>

        <label htmlFor="email">Email</label>
        <input type='email' id='email' name='email' value={email} onChange={emailChange}/>

        <label htmlFor="phone-number">Phone Number</label>
        <input type='tel' id='phone-number' name='phone-number' value={number} onChange={numberChange}/>

        <button type="submit">Education {">"}</button>
      </form>
    )
  }
}

export default General;
