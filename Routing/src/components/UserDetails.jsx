function UserDetails() {
  const box = {
    backgroundColor: "white",
    height: "100px",
    width: "60%",
    margin: "5px",
  };
  return (
    <div
      className="user-container"
      style={{
        width: "80%",
        height: "40%",
        backgroundColor: "yellowgreen",
        borderRadius: "15px",
        padding: "5px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        className="img"
        style={{
          backgroundColor: "white",
          borderRadius: "5px",
          border: "1px solid black",
        }}
      >
        <div>
          <img src="" alt="image not fond" style={box} />
        </div>
        <div>
          <img src="" alt="sign not fond" style={box} />
        </div>
      </div>
      <div className="user-details" style={{ color: "blue" }}>
        <h3>username: Candidate Name</h3>
        <h3>userid: Userid</h3>
      </div>
    </div>
  );
}

export default UserDetails;
