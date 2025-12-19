import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const greet = async () => {
    const res = await fetch(`http://localhost:8080/greeting?name=${name}`);
    const data = await res.json();
    setMessage(data.content);
  };

  return (
  <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-dark">
    <div className="col-12 col-sm-10 col-md-6 col-lg-2 text-center">

      <h1 className="mb-4 text-white">Greeting App</h1>

      <input
        className="form-control mb-3"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter name"
      />

      <button className="btn btn-primary" onClick={greet}>
        Greet
      </button>

      {message && (
        <div className="alert alert-success mt-4">
          {message}
        </div>
      )}

    </div>
  </div>
);

}

export default App;

