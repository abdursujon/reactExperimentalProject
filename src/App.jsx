import { useState } from "react";

function Greeting() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const greet = async () => {
    const res = await fetch(`http://localhost:8080/greeting?name=${name}`);
    const data = await res.json();
    setMessage(data.content);
  };

  return (
    <div className="col-md-12 col-12 text-center bg-secondary rounded py-5 px-5">
      <h2 className="text-white">Greeting</h2>
      <input placeholder="Try your name" className="form-control" value={name} onChange={e => setName(e.target.value)} />
      <button className="btn bg-dark text-white w-25 mt-3 mb-3" onClick={greet}>Greet</button>
      {message && <div className="alert mt-2 text-center bg-white text-black">{message}</div>}
    </div>
  );
}

function IterationHelp() {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState(null);

  const fetchHelp = async () => {
    const res = await fetch(`http://localhost:8080/api/help/java/iteration/${topic}`);
    const data = await res.json();
    setResult(data);
  };

  return (
    <div className="col-md-12 col-12 text-center bg-secondary rounded py-5 px-5 mt-5">
      <h2 className="text-white pb-4">Java Iteration Help</h2>
      <select className="form-select" value={topic} onChange={e => setTopic(e.target.value)}>
        <option value="">Select topic</option>
        <option value="if">if</option>
        <option value="switch">switch</option>
        <option value="while">while</option>
        <option value="do-while">do-while</option>
        <option value="for">for</option>
      </select>
      <button className="btn bg-dark text-white w-25 mt-3 mb-3" onClick={fetchHelp} disabled={!topic}>Get Help</button>
      <div
        className="mt-2 text-start bg-white text-black w-100 p-4 rounded"
        style={{
          height: "300px",
          overflow: "auto",
          fontFamily: "monospace"
        }}>
        {result && (
          <>
            <strong>{result.topic}</strong>
            <p>{result.description}</p>
            <pre>{result.example}</pre>
          </>
        )}
      </div>
    </div>
  );
}


export default function App() {
  return (
    <div className="container-fluid bg-dark min-vh-100 d-flex justify-content-center py-5">
      <div style={{ width: "600px" }}>
        <Greeting />
        <IterationHelp />
      </div>
    </div>
  );
}
