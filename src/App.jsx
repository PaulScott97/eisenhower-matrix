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
      <Button>+</Button>
    </nav>
  );
}

function TasksView() {
  const [view, setView] = useState("eisenhower");

  if (view === "eisenhower") return <Eisenhower />;
  if (view === "people") return <People />;
}

function Button({ children }) {
  return <button className="btn">{children}</button>;
}

function Eisenhower() {
  return (
    <main className="eisenhower-view">
      <h3 className="eisenhower-title urgent">URGENT</h3>
      <h3 className="eisenhower-title not-urgent">NOT URGENT</h3>
      <h3 className="eisenhower-title important">IMPORTANT</h3>
      <h3 className="eisenhower-title not-important">NOT IMPORTANT</h3>
      <Quadrant name="do">urgent-important</Quadrant>
      <Quadrant name="plan">not-urgent-important</Quadrant>
      <Quadrant name="delegate">urgent-not-important</Quadrant>
      <Quadrant name="delete">not-urgent-not-important</Quadrant>
    </main>
  );
}

function Quadrant({ children, name }) {
  return (
    <section className={`quadrant ${children}`}>
      <div>{name.toUpperCase()}</div>
    </section>
  );
}

function People() {
  return <div>People</div>;
}

export default App;
