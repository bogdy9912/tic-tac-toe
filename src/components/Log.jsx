const Log = ({ turns }) => {
  return (
    <ol id="log">
      {turns.map((e) => (
        <li key={`${e.square.row}, ${e.square.col}`}>
          {e.player} selected {e.square.row}, {e.square.col}
        </li>
      ))}
    </ol>
  );
};

export default Log;
