import { useState } from "react";

const QUADRANTS = [
  { id: 1, title: "do", matrixIntersection: "urgent-important" },
  { id: 2, title: "schedule", matrixIntersection: "not-urgent-important" },
  { id: 3, title: "delegate", matrixIntersection: "urgent-not-important" },
  { id: 4, title: "delete", matrixIntersection: "not-urgent-not-important" },
];

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

      {QUADRANTS.map((q) => (
        <Quadrant
          key={q.id}
          index={q.id}
          title={q.title}
          matrixIntersection={q.matrixIntersection}
        />
      ))}
    </main>
  );
}

function Quadrant({ index, title, matrixIntersection }) {
  const quadColour = `hsl(${(360 / QUADRANTS.length) * index}, 25%, 15%)`;

  return (
    <section className={`quadrant ${matrixIntersection}`}>
      <div style={{ backgroundColor: quadColour }}>{title.toUpperCase()}</div>
    </section>
  );
}

function People() {
  return <div>People</div>;
}

export default App;
