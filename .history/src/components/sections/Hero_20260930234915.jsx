// import { campaign } from "../../data/campaign";
// import Counter from "../ui/Counter.jsx";

// export default function Hero() {
//   return (
//     <section className="section hero reveal" id="top">
//       <div className="wrap">
//         <p className="eyebrow">ActionFi × SWEEP case study</p>
//         <h1>
//           Web3 paid for attention.
//           <span> SWEEP paid for the next step.</span>
//         </h1>
//         <p className="lede">
//           A 7-day campaign that rewarded verified product actions — signup and
//           KYC — instead of likes and follows.
//         </p>
//         <div className="hero-metrics">
//           <div>
//             <strong>
//               <Counter value={17000} />
//             </strong>
//             <span>new users</span>
//           </div>
//           <div>
//             <strong>
//               <Counter value={9500} />
//             </strong>
//             <span>KYC completions</span>
//           </div>
//           <div>
//             <strong>
//               <Counter value={56} suffix="%" />
//             </strong>
//             <span>new users verified</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
  export const campaignMetrics = {
  totalUsers: "17,000+",
  kycUsers: "9,500+",
  conversionRate: "~56%",
  twitterFollows: "5,900+",
  dau: "4,000+"
};

export const heroContent = {
  badge: "ActionFi Case Study",
  titlePart1: "Web3 paid for attention.",
  titlePart2: "SWEEP paid for the next step.",
  description: "How Sweep Global turned top-of-funnel noise into 9,500+ verified users in 7 days by incentivizing execution over impressions.",
  metrics: [
    { label: "Total Users", value: "17,000+" },
    { label: "KYC Verified", value: "9,500+", highlight: true },
    { label: "Conversion", value: "~56%" }
  ]
};