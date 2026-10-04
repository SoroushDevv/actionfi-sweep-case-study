import { tasks } from "../../data/campaign";

export default function Tasks() {
  return (
    <section className="section tasks" id="tasks">
      <div className="wrap">
        <p className="eyebrow">Campaign tasks</p>
        <h2>One campaign. Three product actions.</h2>
        <div className="task-grid">
          {tasks.map((task, index) => (
            <article key={task.name} className="task-card">
              <span className="task-index">0{index + 1}</span>
              <h3>{task.name}</h3>
              <p>
                <strong>{task.points}</strong> points
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}