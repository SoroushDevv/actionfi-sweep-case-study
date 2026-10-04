import Folder from '../ui/Folder.jsx';
import '../../styles/funnel.css';

const stepsData = [
  { step: '01', title: 'Discover', badge: 'Awareness' },
  { step: '02', title: 'Complete', badge: 'Action' },
  { step: '03', title: 'Verify', badge: '56% KYC Gate' },
  { step: '04', title: 'Reward', badge: 'Settlement' }
];

export default function Funnel() {
  const folderPapers = stepsData.map(item => (
    <div key={item.step} className="paper-content">
      <span className="paper-step-num">Step {item.step}</span>
      <div className="paper-step-title">{item.title}</div>
      <span className="paper-step-badge">{item.badge}</span>
    </div>
  ));

  return (
    <section className="section funnel-section reveal" id="funnel">
      <div className="wrap">
        <div className="funnel-header">
          <p className="eyebrow">The path</p>
          <h2>
            Incentive attached to the <span>outcome</span>.
          </h2>
        </div>

        <div className="funnel-folder-stage mb-2">
          <span className="funnel-hint">Click folder to reveal verification pipeline</span>
          <Folder 
            color="#9000FF" 
            size={2} 
            items={folderPapers} 
          />
        </div>

        <p className="funnel-note">
          <strong>~56% of new users</strong> completed KYC. Acquisition became true protocol activation.
        </p>
      </div>
    </section>
  );
}