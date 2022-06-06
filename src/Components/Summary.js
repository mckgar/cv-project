import { Component } from "react";
import '../styles/Summary.css';

class Summary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      summary,
      summaryChange,
      nextTab
    } = this.props;

    return (
      <form id="summary-form" onSubmit={nextTab}>
        <textarea
          required
          value={summary}
          onChange={summaryChange}
        />

        <button type="submit">Finish {'>'}</button>
      </form>
    )
  }
}

export default Summary;
