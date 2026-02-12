import { useState } from "react";

function App() {
  return (
    <div className="container">
      <Navbar />
      <TasksView />
    </div>
  );
}

function Navbar() {
  return (
    <nav>
      <div>
        <h2>Work</h2>
        <hr />
        <h2>Eisenhower</h2>
      </div>
      <button>+</button>
    </nav>
  );
}

function TasksView() {
  const [view, setView] = useState("eisenhower");

  if (view === "eisenhower") return <Eisenhower />;
  if (view === "people") return <People />;
}

function Eisenhower() {
  return (
    <main className="eisenhower-view">
      <Quadrant>urgent-important</Quadrant>
      <Quadrant>not-urgent-important</Quadrant>
      <Quadrant>urgent-not-important</Quadrant>
      <Quadrant>not-urgent-not-important</Quadrant>
    </main>
  );
}

function Quadrant({ children }) {
  return <section className={`quadrant ${children}`}>{children}</section>;
}

function People() {
  return <div>People</div>;
}

export default App;
