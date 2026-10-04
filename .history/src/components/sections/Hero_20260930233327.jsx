import { campaign } from "../../data/campaign";
import Counter from "../ui/Counter.jsx";

export default function Hero() {
  return (
 {/* Hero Section */}
<section className="max-w-6xl mx-auto px-6 pt-16 md:pt-24 pb-16">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
    
    {/* Left Column: Typography & Metrics */}
    <div className="lg:col-span-7 flex flex-col justify-center text-left">
      <div className="inline-flex items-center gap-2 mb-6">
        <span className="h-2 w-2 rounded-full bg-[#9000FF]" />
        <span className="text-xs font-semibold uppercase tracking-widest text-[#D299FF]">
          ActionFi Case Study
        </span>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
        <span className="text-white block">Web3 paid for attention.</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D299FF] via-[#B866FF] to-[#9000FF] block mt-2">
          SWEEP paid for the next step.
        </span>
      </h1>

      <p className="text-[#D299FF]/80 text-base sm:text-lg max-w-xl mb-10 leading-relaxed font-normal">
        How Sweep Global turned top-of-funnel noise into 9,500+ verified users in 7 days by incentivizing execution over impressions.
      </p>

      {/* 3 Metric Cards */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-xl">
        <div className="p-4 rounded-xl bg-[#1A052A] border border-[#2A103D]">
          <div className="text-xl sm:text-2xl font-bold text-white mb-1">17,000+</div>
          <div className="text-xs text-[#D299FF]/70 leading-tight">Total Users</div>
        </div>
        <div className="p-4 rounded-xl bg-[#1A052A] border border-[#9000FF]/50 shadow-[0_0_20px_rgba(144,0,255,0.12)]">
          <div className="text-xl sm:text-2xl font-bold text-[#D299FF] mb-1">9,500+</div>
          <div className="text-xs text-[#D299FF]/70 leading-tight">KYC Verified</div>
        </div>
        <div className="p-4 rounded-xl bg-[#1A052A] border border-[#2A103D]">
          <div className="text-xl sm:text-2xl font-bold text-white mb-1">~56%</div>
          <div className="text-xs text-[#D299FF]/70 leading-tight">Conversion</div>
        </div>
      </div>
    </div>

    {/* Right Column: Floating Brand Cards */}
    <div className="lg:col-span-5 flex items-center justify-center py-6">
      <div className="relative w-full max-w-[340px] h-[360px] flex flex-col justify-between items-center">
        
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-[#9000FF]/15 blur-3xl rounded-full pointer-events-none" />

        {/* Top Floating Card: Sweep Global */}
        <div className="relative w-full p-6 rounded-2xl bg-[#160324] border border-[#2A103D] shadow-xl animate-float-slow flex items-center gap-5">
          <div className="w-14 h-14 rounded-xl bg-[#230836] border border-[#9000FF]/40 flex items-center justify-center shrink-0">
            <span className="font-extrabold text-[#D299FF] text-xl tracking-tight">SW</span>
          </div>
          <div>
            <div className="text-xs font-semibold text-[#D299FF]/70 uppercase tracking-wider">Protocol</div>
            <div className="text-lg font-bold text-white tracking-wide">Sweep Global</div>
          </div>
        </div>

        {/* Vertical Connector Line */}
        <div className="w-px h-12 border-l border-dashed border-[#9000FF]/40" />

        {/* Bottom Floating Card: Action Model */}
        <div className="relative w-full p-6 rounded-2xl bg-[#160324] border border-[#9000FF]/40 shadow-xl animate-float-delayed flex items-center gap-5">
          <div className="w-14 h-14 rounded-xl bg-[#9000FF]/20 border border-[#9000FF] flex items-center justify-center shrink-0">
            <span className="font-extrabold text-white text-xl tracking-tight">AM</span>
          </div>
          <div>
            <div className="text-xs font-semibold text-[#D299FF]/70 uppercase tracking-wider">Infrastructure</div>
            <div className="text-lg font-bold text-white tracking-wide">Action Model</div>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>
  );
}