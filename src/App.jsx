import { useState } from "react";

const QUADRANTS = [
  { id: 1, title: "do", matrixIntersection: "urgent-important" },
  { id: 2, title: "schedule", matrixIntersection: "not-urgent-important" },
  { id: 3, title: "delegate", matrixIntersection: "urgent-not-important" },
  { id: 4, title: "delete", matrixIntersection: "not-urgent-not-important" },
];

const initialTasks = [
  {
    id: 1,
    title: "TOP",
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
  {
    id: 5,
    title: "BOTTOM",
    notes: "",
    url: "",
    dateToRemind: "",
    timeToRemind: "",
    important: true,
    urgent: true,
    peopleInvolved: [],
    subTasks: {},
    dateCreated: Date.now(),
    completed: false,
  },
  {
    id: 6,
    title: "This is a very unimportant task",
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
  const [newTaskModalVisible, setNewTaskModalVisible] = useState(false);

  function handleTaskModalVisible() {
    setNewTaskModalVisible(() => !newTaskModalVisible);
  }

  return (
    <div className="container">
      <Navbar onTaskModalVisible={handleTaskModalVisible} />
      <TasksView />
      {newTaskModalVisible ? <NewTask /> : ""}
    </div>
  );
}

function Navbar({ onTaskModalVisible }) {
  return (
    <nav>
      <div>
        <h2>Work</h2>
        <hr />
        <h2>Eisenhower</h2>
      </div>
      <button onClick={onTaskModalVisible} className="btn">
        Add Task
      </button>
    </nav>
  );
}

function TasksView() {
  const [view, setView] = useState("eisenhower");

  if (view === "eisenhower") return <EisenhowerView />;
  if (view === "people") return <PeopleView />;
}

function NewTask() {
  return (
    <div className="new-task-container">
      <div className="new-task-modal">
        <h2>New Task</h2>
        <form>
          <div className="submit-new-task">
            <input
              type="submit"
              className="btn--new-task"
              id="btn--discard-new-task"
              value={"Discard"}
            />
            <input
              type="submit"
              className="btn--new-task"
              id="btn--create-new-task"
              value={"Create"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

function EisenhowerView() {
  return (
    <main className="eisenhower-view">
      <h3 className="eisenhower-title urgent">URGENT</h3>
      <h3 className="eisenhower-title not-urgent">NOT URGENT</h3>
      <h3 className="eisenhower-title important">IMPORTANT</h3>
      <h3 className="eisenhower-title not-important">NOT IMPORTANT</h3>

      {QUADRANTS.map((quad) => (
        <Quadrant
          key={quad.id}
          index={quad.id}
          title={quad.title}
          matrixIntersection={quad.matrixIntersection}
        />
      ))}
    </main>
  );
}

function Quadrant({ index, title, matrixIntersection }) {
  const bannerColour = `hsl(${(360 / QUADRANTS.length) * index}, 25%, 15%)`;
  const numTasksColour = `hsl(${(360 / QUADRANTS.length) * index}, 25%, 35%)`;
  const filteredTasks = initialTasks.filter((task) => {
    if (matrixIntersection === "urgent-important")
      return task.important && task.urgent;
    if (matrixIntersection === "not-urgent-important")
      return task.important && !task.urgent;
    if (matrixIntersection === "urgent-not-important")
      return !task.important && task.urgent;
    if (matrixIntersection === "not-urgent-not-important")
      return !task.important && !task.urgent;
  });
  const numTasks = filteredTasks.length;

  return (
    <section className={`quadrant ${matrixIntersection}`}>
      <div
        className="quadrant-banner"
        style={{ backgroundColor: bannerColour }}
      >
        <span>{title.toUpperCase()}</span>
        <div className="num-tasks" style={{ backgroundColor: numTasksColour }}>
          {numTasks}
        </div>
      </div>
      <TaskList
        filteredTasks={filteredTasks}
        matrixIntersection={matrixIntersection}
      />
    </section>
  );
}

function TaskList({ filteredTasks }) {
  return (
    <ul className="task-list">
      {filteredTasks.map((task) => (
        <Task key={task.id} title={task.title} />
      ))}
    </ul>
  );
}

function Task({ title }) {
  return (
    <li>
      <input type="checkbox" />
      {/* <span>{title}</span> */}
      <input type="text" value={title} />
    </li>
  );
}

function PeopleView() {
  return <div>People</div>;
}

export default App;
