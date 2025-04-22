const HistoryList = ({ history }) => (
    <div className="dashboard-history">
      {history.length === 0 ? (
        <p>No entries yet.</p>
      ) : (
        <ul>
          {history.map((entry) => (
            <li key={entry.id}>
              {entry.value} on {entry.date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  
  export default HistoryList;
  