// import { tasks } from "../../data/campaign";

// export default function Tasks() {
//   return (
//     <section className="section tasks reveal" id="tasks">
//       <div className="wrap">
//         <p className="eyebrow">Campaign tasks</p>
//         <h2>One campaign. Three product actions.</h2>
//         <div className="task-grid">
//           {tasks.map((task, index) => (
//             <article key={task.name} className="task-card">
//               <span className="task-index">0{index + 1}</span>
//               <h3>{task.name}</h3>
//               <p>
//                 <strong>{task.points}</strong> points
//               </p>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import InfiniteSpiral from '../ui/InfiniteSpiral.jsx';
import '../../styles/tasks.css';

const spiralItems = [
  { src: '/logos/sweep/logo-mark.png', alt: 'SWEEP Token Mark' },
  { src: '/logos/sweep/logo.jpg', alt: 'SWEEP Platform' },
  { src: '/logos/sweep/logo-horizontal.png', alt: 'Action Model Badge' },
  { src: '/logos/sweep/logo-mark.jpg', alt: 'KYC Verified Stage' },
  { src: '/logos/sweep/logo-mark.png', alt: 'On-chain Event' },
  { src: '/logos/sweep/logo.jpg', alt: 'Protocol Reward' },
  { src: '/logos/sweep/logo-horizontal.png', alt: 'SWEEP ActionFi' }
];

export default function Tasks() {
  return (
    <section className="tasks-section" id="tasks">
      <div className="tasks-header">
        <p className="eyebrow">Action Verification Flow</p>
        <h2>
          Continuous <span>Execution Pipeline</span>
        </h2>
        <p>
          Every verified user milestone moves dynamically through cryptographic validation gates.
        </p>
      </div>

      <div className="spiral-wrapper">
        <div className="spiral-glow" />
        <InfiniteSpiral
          items={spiralItems}
          animationMode="auto"
          speed={0.55}
          radius={190}
          cardWidth={120}
          cardHeight={120}
          verticalSpacing={65}
          perspective={1000}
          cardRadius={12}
          centerScale={1.25}
          edgeBlur={5}
          cardsPerTurn={7}
          pauseOnHover
          direction="up"
          rotation={0}
          cardTilt={0}
          edgeFade={0.3}
          imageFit="contain"
          grayscale={0}
        />
      </div>
    </section>
  );
}