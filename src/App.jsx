import { useState } from "react";

const QUADRANTS = [
  { id: 1, title: "do", matrixIntersection: "urgent-important" },
  { id: 2, title: "schedule", matrixIntersection: "not-urgent-important" },
  { id: 3, title: "delegate", matrixIntersection: "urgent-not-important" },
  { id: 4, title: "delete", matrixIntersection: "not-urgent-not-important" },
];

const initialTasks = [
  {
    title: "This task is important and urgent",
    notes: "Report was emailed last week",
    url: "",
    dateToRemind: "",
    timeToRemind: "",
    important: true,
    urgent: true,
    peopleInvolved: ["Mark Johnson"],
    subTasks: {},
    dateCreated: Date.now(),
    completed: false,
  },
  {
    title: "This task is important but not urgent",
    notes: "Needs approval first",
    url: "",
    dateToRemind: "",
    timeToRemind: "",
    important: true,
    urgent: false,
    peopleInvolved: ["Emily Jane"],
    subTasks: {},
    dateCreated: Date.now(),
    completed: false,
  },
  {
    title: "This task is not important but it is urgent",
    notes: "Confirm dates",
    url: "",
    dateToRemind: "",
    timeToRemind: "",
    important: false,
    urgent: true,
    peopleInvolved: [],
    subTasks: {},
    dateCreated: Date.now(),
    completed: false,
  },
  {
    title: "This task is not urgent and it's not important",
    notes: "",
    url: "",
    dateToRemind: "",
    timeToRemind: "",
    important: false,
    urgent: false,
    peopleInvolved: [],
    subTasks: {},
    dateCreated: Date.now(),
    completed: false,
  },
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

  if (view === "eisenhower") return <EisenhowerView />;
  if (view === "people") return <PeopleView />;
}

function Button({ children }) {
  return <button className="btn">{children}</button>;
}

function EisenhowerView() {
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
      <TaskList matrixIntersection={matrixIntersection} />
    </section>
  );
}

function TaskList({ matrixIntersection }) {
  if (matrixIntersection === "urgent-important")
    return (
      <ul className="task-list">
        {initialTasks
          .filter((task) => task.important && task.urgent)
          .map((task) => (
            <Task title={task.title} />
          ))}
      </ul>
    );

  if (matrixIntersection === "not-urgent-important")
    return (
      <ul className="task-list">
        {initialTasks
          .filter((task) => task.important && !task.urgent)
          .map((task) => (
            <Task title={task.title} />
          ))}
      </ul>
    );

  if (matrixIntersection === "urgent-not-important")
    return (
      <ul className="task-list">
        {initialTasks
          .filter((task) => !task.important && task.urgent)
          .map((task) => (
            <Task title={task.title} />
          ))}
      </ul>
    );

  if (matrixIntersection === "not-urgent-not-important")
    return (
      <ul className="task-list">
        {initialTasks
          .filter((task) => !task.important && !task.urgent)
          .map((task) => (
            <Task title={task.title} />
          ))}
      </ul>
    );
}

function Task({ title }) {
  return (
    <li>
      <button></button>
      <span>{title}</span>
    </li>
  );
}

function PeopleView() {
  return <div>People</div>;
}

export default App;
