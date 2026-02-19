import { useState } from "react";

function App() {

  const [result, setResult] = useState("Work with OS");

  const fetchData = async (endpoint) => {
    const res = await fetch(`http://localhost:5000/${endpoint}`);
    const data = await res.json();
    setResult(JSON.stringify(data, null, 2));
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>

      <h1>Work with OS</h1>

      <div style={{
        width: "60%",
        margin: "30px auto",
        padding: "20px",
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}>
        <pre>{result}</pre>

        <div style={{ marginTop: "20px" }}>
          <button onClick={() => fetchData("free-memory")} style={{ margin: "10px" }}>
            Free Memory
          </button>

          <button onClick={() => fetchData("total-memory")} style={{ margin: "10px" }}>
            Total Memory
          </button>
        </div>

        <div>
          <button onClick={() => fetchData("cpu")} style={{ margin: "10px" }}>
            CPU Architecture
          </button>

          <button onClick={() => fetchData("user")} style={{ margin: "10px" }}>
            User Info
          </button>
        </div>
      </div>

    </div>
  );
}

export default App;