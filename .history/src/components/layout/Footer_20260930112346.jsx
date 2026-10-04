import { logos, socials } from "../../data/campaign";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <img src={logos.actionMark} alt="" className="footer-mark" />
        <p>
          Source:{" "}
          <a href={socials.caseStudy} target="_blank" rel="noreferrer">
            actionmodel.com/case-studies/sweep
          </a>
        </p>
      </div>
    </footer>
  );
}