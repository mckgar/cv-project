import '../styles/Summary.css';

const Summary = (props) => {
  const {
    summary,
    summaryChange,
    nextTab
  } = props;

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

export default Summary;
