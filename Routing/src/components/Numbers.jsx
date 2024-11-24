import Questions from "../assets/QuestionsDbs/DbQuestions";
function Numbers({totalQuestions}) {
  const boxStyle = {
    backgroundColor: "#606a74",
    height: "100%",
    width: "100%",
    padding: "5px",
    marginTop: "10px",
    textAlign: "center",
  };
  const buttonStyle = {
    borderRadius: "5px",
    margin: "4px",
  };

  return (
    <div style={boxStyle}>
      console.log();
      <h3>Question Numbers are as follows:--</h3>
      <button style={buttonStyle}>Q.No.-1</button>
      <button style={buttonStyle}>Q.No.-2</button>
      <button style={buttonStyle}>Q.No.-3</button>
      <button style={buttonStyle}>Q.No.-1</button>
      <button style={buttonStyle}>Q.No.-1</button>
      <button style={buttonStyle}>Q.No.-1</button>
      <button style={buttonStyle}>Q.No.-1</button>
    </div>
  );
}

export default Numbers;
