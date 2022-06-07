import '../styles/General.css';

const General = (props) => {
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
  } = props;
  return (
    <form id="general" className="form-tab" onSubmit={nextTab}>
      <legend>Enter your contact information</legend>
      <div className="form-item first-name">
        <label htmlFor="first-name">First Name*</label>
        <input
          type='text'
          id='first-name'
          name='first-name'
          required
          placeholder="John"
          value={firstName}
          onChange={firstNameChange}
        />
        <span className="validation-error"></span>
      </div>

      <div className="form-item surname">
        <label htmlFor="surname">Last Name*</label>
        <input
          type='text'
          id='surname'
          name='surname'
          required
          placeholder="Doe"
          value={surname}
          onChange={surnameChange}
        />
        <span className="validation-error"></span>
      </div>

      <div className="form-item email">
        <label htmlFor="email">Email*</label>
        <input
          type='email'
          id='email'
          name='email'
          required
          placeholder="sample@example.com"
          value={email}
          onChange={emailChange}
        />
        <span className="validation-error"></span>
      </div>

      <div className="form-item phone-number">
        <label htmlFor="phone-number">Phone Number*</label>
        <input
          type='tel'
          id='phone-number'
          name='phone-number'
          required
          placeholder="555 555-5555"
          pattern="\d{3}[ ]\d{3}[\-]\d{4}"
          value={number}
          onChange={numberChange}
        />
        <span className="validation-error"></span>
      </div>

      <button type="submit">Education {">"}</button>
    </form>
  )
}

export default General;
