'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Play,
  Pause,
  Scan,
  Activity,
  Target,
  TrendingUp,
  Dumbbell,
  ChevronRight,
  Menu,
  X,
  BrainCircuit,
  User,
  Zap,
  CheckCircle2,
  Smartphone,
  Layers,
  BarChart3,
  Timer,
  Maximize2,
  LayoutDashboard,
  Search,
  Share2
} from 'lucide-react';

// --- ANIMATED DEMO COMPONENTS FOR ZIGZAG SECTION ---

const ScanDemo: React.FC = () => {
    const [phase, setPhase] = useState<'scanning' | 'processing' | 'done'>('scanning');

    useEffect(() => {
        const timeouts: ReturnType<typeof setTimeout>[] = [];

        const cycle = () => {
            setPhase('scanning');
            timeouts.push(setTimeout(() => setPhase('processing'), 4000));
            timeouts.push(setTimeout(() => setPhase('done'), 7000));
        };

        cycle();
        const interval: ReturnType<typeof setInterval> = setInterval(cycle, 8000);

        return () => {
            clearInterval(interval);
            timeouts.forEach(clearTimeout);
        };
    }, []);

    return (
        <div className="relative w-full h-full bg-black overflow-hidden flex flex-col">
            {/* Phase 1: SCANNING VIEW */}
            <div className={`absolute inset-0 transition-opacity duration-500 ${phase === 'scanning' ? 'opacity-100' : 'opacity-0'}`}>
                 <img
                    src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1000&auto=format&fit=crop"
                    alt="Squat Video"
                    className="w-full h-full object-cover opacity-60"
                />

                {/* Skeleton Overlay */}
                <div className="absolute inset-0">
                    {/* Simulated Body Nodes */}
                    <div className="absolute top-[30%] left-[50%] w-3 h-3 bg-brand-400 rounded-full animate-pulse shadow-[0_0_15px_#38bdf8]" />
                    <div className="absolute top-[40%] left-[50%] w-2 h-2 bg-brand-400 rounded-full animate-pulse" style={{animationDelay:'0.1s'}} />
                    <div className="absolute top-[60%] left-[45%] w-2 h-2 bg-brand-400 rounded-full animate-pulse" style={{animationDelay:'0.2s'}} />
                    <div className="absolute top-[60%] left-[55%] w-2 h-2 bg-brand-400 rounded-full animate-pulse" style={{animationDelay:'0.2s'}} />

                    {/* Connecting Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <line x1="50%" y1="30%" x2="50%" y2="40%" className="stroke-brand-400/60 stroke-2" />
                        <line x1="50%" y1="40%" x2="45%" y2="60%" className="stroke-brand-400/60 stroke-2" />
                        <line x1="50%" y1="40%" x2="55%" y2="60%" className="stroke-brand-400/60 stroke-2" />
                    </svg>
                </div>

                {/* Laser Scan Beam */}
                <div className="absolute inset-0 bg-brand-900/10 z-10">
                     <div className="absolute left-0 w-full h-[2px] bg-brand-400 shadow-[0_0_20px_rgba(56,189,248,1)] animate-scan" />
                </div>

                {/* UI Overlays */}
                <div className="absolute top-4 left-4 flex gap-2 items-center bg-black/50 px-2 py-1 rounded-md backdrop-blur-sm">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-mono text-white tracking-widest uppercase">REC • AI ACTIVE</span>
                </div>
            </div>

            {/* Phase 2: PROCESSING VIEW */}
            <div className={`absolute inset-0 bg-[#050505] flex flex-col items-center justify-center transition-all duration-500 z-20 ${phase === 'processing' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                 <div className="relative w-24 h-24 mb-6">
                     <div className="absolute inset-0 rounded-full border border-brand-500/20 animate-spin" style={{animationDuration: '3s'}} />
                     <div className="absolute inset-2 rounded-full border border-brand-400/30 border-t-transparent animate-spin" />
                     <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl bg-black/40">
                         {/* eslint-disable-next-line @next/next/no-img-element */}
                         <img
                             src="/logo-transparent.png"
                             alt="G-Smurf"
                             className="w-full h-full object-cover"
                         />
                     </div>
                 </div>
                 <div className="font-mono font-bold text-brand-400 text-[10px] tracking-[0.2em] animate-pulse">
                     CALCULATING JOINT ANGLES...
                 </div>
                 {/* Progress Bar */}
                 <div className="w-32 h-1 bg-zinc-800 rounded-full mt-4 overflow-hidden">
                     <div className="h-full bg-brand-500 animate-progress-fill" />
                 </div>
            </div>

            {/* Phase 3: DONE FLASH */}
            <div className={`absolute inset-0 bg-brand-500 flex flex-col items-center justify-center transition-opacity duration-300 z-30 ${phase === 'done' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                 <CheckCircle2 className="w-16 h-16 text-white animate-bounce" />
                 <h3 className="text-white font-black text-2xl mt-4 tracking-tight">ANALYSIS READY</h3>
            </div>
        </div>
    );
};

const AnalysisDemo: React.FC = () => {
    const [step, setStep] = useState<0 | 1 | 2>(0);
    const [score, setScore] = useState(0);

    useEffect(() => {
        let mounted = true;

        const runSequence = async () => {
            while (mounted) {
                setStep(0);
                setScore(0);

                const duration = 1500;
                const targetScore = 72;
                const startTime = Date.now();

                const animateScore = () => {
                    if (!mounted) return;
                    const elapsed = Date.now() - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const ease = 1 - Math.pow(1 - progress, 4);
                    const current = Math.floor(ease * targetScore);
                    setScore(current);

                    if (progress < 1) {
                        requestAnimationFrame(animateScore);
                    }
                };
                requestAnimationFrame(animateScore);

                await new Promise(r => setTimeout(r, 3500));
                if (!mounted) break;

                setStep(1);
                await new Promise(r => setTimeout(r, 2500));
                if (!mounted) break;

                setStep(2);
                await new Promise(r => setTimeout(r, 2500));
            }
        };

        runSequence();
        return () => { mounted = false; };
    }, []);

    const size = 200;
    const strokeWidth = 14;
    const center = size / 2;
    const radius = center - strokeWidth;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (score / 100) * circumference;

    return (
        <div className="w-full h-full bg-[#050505] relative overflow-hidden flex flex-col font-sans">

            {/* Background Ambience */}
            <div className="absolute inset-0 z-0 opacity-40">
                <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop"
                    className="w-full h-full object-cover blur-sm"
                    alt="Background"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#050505]/80 to-[#050505]" />
            </div>

            {/* TOP NAV BAR */}
            <div className="relative z-30 px-4 pt-4 pb-2 bg-transparent">
                <div className="flex bg-black/60 backdrop-blur-md p-1 rounded-xl border border-white/5 shadow-lg">
                    <div className={`flex-1 py-1.5 text-center text-[9px] font-bold uppercase tracking-wider rounded-lg transition-all duration-500 ${step === 0 ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'text-zinc-500'}`}>
                        Score
                    </div>
                    <div className={`flex-1 py-1.5 text-center text-[9px] font-bold uppercase tracking-wider rounded-lg transition-all duration-500 ${step === 1 ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/20' : 'text-zinc-500'}`}>
                        Details
                    </div>
                    <div className={`flex-1 py-1.5 text-center text-[9px] font-bold uppercase tracking-wider rounded-lg transition-all duration-500 ${step === 2 ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/20' : 'text-zinc-500'}`}>
                        Plan
                    </div>
                </div>
            </div>

            {/* SCROLLING CONTENT */}
            <div className="flex-1 relative overflow-hidden z-10">
                <div
                    className="absolute inset-x-0 top-0 transition-transform duration-700"
                    style={{ transform: `translateY(${step === 0 ? '0%' : step === 1 ? '-40%' : '-80%'})` }}
                >

                    {/* SECTION 1: G-SCORE */}
                    <div className="h-[380px] w-full flex flex-col items-center pt-8 relative px-6">
                        <div className="relative w-52 h-52 flex items-center justify-center mb-8">
                             <svg className="w-full h-full -rotate-90 drop-shadow-[0_0_15px_rgba(245,158,11,0.2)]" viewBox={`0 0 ${size} ${size}`}>
                                <defs>
                                    <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#f59e0b" />
                                        <stop offset="100%" stopColor="#fbbf24" />
                                    </linearGradient>
                                </defs>
                                <circle cx={center} cy={center} r={radius} fill="none" stroke="#27272a" strokeWidth={strokeWidth} opacity="0.5" />
                                <circle
                                    cx={center} cy={center} r={radius}
                                    fill="none"
                                    stroke="url(#scoreGradient)"
                                    strokeWidth={strokeWidth}
                                    strokeDasharray={circumference}
                                    strokeDashoffset={offset}
                                    strokeLinecap="round"
                                    className="transition-all duration-100 ease-linear"
                                />
                             </svg>
                             <div className="absolute inset-0 flex flex-col items-center justify-center">
                                 <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-2 opacity-80">G-Score</span>
                                 <span className="text-[5rem] leading-[0.9] font-black text-transparent bg-clip-text bg-gradient-to-br from-amber-400 to-amber-600 tracking-tighter tabular-nums drop-shadow-sm">
                                     {score}
                                 </span>
                                 <div className="mt-3 px-3 py-1 bg-[#18181b] border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-widest shadow-xl">
                                     PRO LEVEL
                                 </div>
                             </div>
                        </div>
                        <div className={`transition-all duration-500 delay-300 ${score > 10 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <button className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full backdrop-blur-md transition-all group">
                                <Share2 className="w-3.5 h-3.5 text-amber-500 group-hover:text-white transition-colors" />
                                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Challenge Friend</span>
                            </button>
                        </div>
                    </div>

                    {/* SECTION 2: BREAKDOWN */}
                    <div className="p-6 space-y-6 bg-[#050505] min-h-[400px] border-t border-white/5 relative z-20 shadow-[0_-20px_40px_rgba(0,0,0,0.5)]">
                         <div className="space-y-3">
                             <h2 className="text-2xl font-black text-white italic uppercase leading-[0.9]">
                                 &ldquo;HIGH INTENSITY,<br/>EXCESSIVE MOMENTUM&rdquo;
                             </h2>
                             <p className="text-xs text-zinc-400 leading-relaxed pl-3 border-l-2 border-brand-500">
                                 Physique of a Greek statue, but sacrificing isolation for ego lifting.
                             </p>
                         </div>
                         <div className="space-y-3">
                             <div className="bg-gradient-to-r from-emerald-950/30 to-transparent border border-emerald-500/20 rounded-xl p-4 flex gap-3">
                                 <div className="mt-1"><div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" /></div>
                                 <div>
                                     <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">Mastery Point</div>
                                     <div className="text-sm font-bold text-white">Full Elbow Extension</div>
                                     <div className="text-[10px] text-zinc-500 mt-0.5">Perfect ROM at the bottom.</div>
                                 </div>
                             </div>
                             <div className="bg-gradient-to-r from-rose-950/30 to-transparent border border-rose-500/20 rounded-xl p-4 shadow-[0_0_30px_rgba(225,29,72,0.05)] flex gap-3">
                                 <div className="mt-1"><div className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_10px_#f43f5e]" /></div>
                                 <div>
                                     <div className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-1">Major Leakage</div>
                                     <div className="text-sm font-bold text-white">Compensatory Hip Drive</div>
                                     <div className="text-[10px] text-zinc-500 mt-0.5">Thrusting hips initiates the lift.</div>
                                 </div>
                             </div>
                         </div>
                    </div>

                    {/* SECTION 3: PLAN */}
                    <div className="p-6 space-y-4 bg-[#050505] min-h-[300px] border-t border-white/5 relative z-20">
                        <div className="flex items-center gap-2 text-zinc-500 mb-2">
                            <BrainCircuit className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-widest">Corrective Algorithm</span>
                        </div>
                        <div className="bg-[#0f0f11] border border-brand-500/40 rounded-xl p-5 shadow-lg relative overflow-hidden group">
                            <div className="absolute top-4 left-4 w-6 h-6 rounded-full bg-brand-500 text-white flex items-center justify-center text-xs font-bold shadow-lg shadow-brand-500/30 z-10">1</div>
                            <div className="pl-10 relative z-10">
                                <h4 className="text-sm font-bold text-white">Execute &ldquo;Wall Check&rdquo;</h4>
                                <p className="text-[11px] text-zinc-400 mt-1 leading-relaxed mb-4">
                                    Perform next set with back against wall. This physically prevents body English.
                                </p>
                                <button className="w-full py-2.5 bg-brand-600 hover:bg-brand-500 text-white rounded-lg text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-900/50">
                                    <Dumbbell className="w-3 h-3" /> Find Drill
                                </button>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-full blur-2xl pointer-events-none" />
                        </div>
                         <div className="bg-zinc-900/30 border border-white/5 rounded-xl p-4 opacity-50 flex gap-4 items-center">
                            <div className="w-6 h-6 rounded-full bg-zinc-800 text-zinc-500 flex items-center justify-center text-xs font-bold shrink-0">2</div>
                            <div>
                                <h4 className="text-sm font-bold text-white">Fix Elbow Hinge</h4>
                                <div className="h-1.5 w-24 bg-zinc-800 rounded-full mt-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Coach Chat Overlay */}
            <div className={`absolute bottom-4 left-4 right-4 z-40 transition-all duration-500 ${step === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                <div className="bg-zinc-900/90 border border-white/10 p-3 rounded-2xl flex gap-3 shadow-2xl backdrop-blur-xl">
                    <div className="w-10 h-10 rounded-full bg-brand-900 border border-white/10 shrink-0 overflow-hidden shadow-inner flex items-center justify-center">
                        <BrainCircuit className="w-5 h-5 text-brand-400" />
                    </div>
                    <div className="flex-1">
                        <div className="text-[10px] font-bold text-brand-400 mb-0.5 flex items-center gap-1">
                            G-Smurf <span className="w-1 h-1 bg-brand-500 rounded-full" />
                        </div>
                        <div className="text-xs text-zinc-200 leading-snug font-medium">
                            &ldquo;I saw that last set. Score was {score}. We gotta clean that up if you want real gains.&rdquo;
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FixDemo: React.FC = () => {
    const [state, setState] = useState<'list' | 'loading' | 'video'>('list');

    useEffect(() => {
        const timeouts: ReturnType<typeof setTimeout>[] = [];

        const cycle = () => {
            setState('list');
            timeouts.push(setTimeout(() => setState('loading'), 2500));
            timeouts.push(setTimeout(() => setState('video'), 3500));
        };

        cycle();
        const interval: ReturnType<typeof setInterval> = setInterval(cycle, 8000);

        return () => {
            clearInterval(interval);
            timeouts.forEach(clearTimeout);
        };
    }, []);

    return (
        <div className="w-full h-full bg-[#050505] relative flex flex-col p-6">
            {/* Header */}
            <div className="flex items-center gap-2 mb-6 opacity-80 shrink-0">
                <BrainCircuit className="w-5 h-5 text-emerald-500" />
                <span className="text-xs font-bold text-white uppercase tracking-widest">Corrective Protocol</span>
            </div>

            {state === 'list' && (
                <div className="space-y-4 animate-fade-in">
                    <div className="relative group">
                         <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 animate-ping pointer-events-none" style={{animationDelay: '2s', animationIterationCount: 1}}>
                             <div className="w-8 h-8 rounded-full bg-white/30" />
                         </div>
                        <div className="bg-zinc-900 border border-emerald-500/50 rounded-xl p-4 shadow-[0_0_20px_rgba(16,185,129,0.1)] transform transition-transform duration-300 scale-100">
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex gap-3">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">1</div>
                                    <div>
                                        <h4 className="text-sm font-bold text-white">Glute Med Activation</h4>
                                        <p className="text-[10px] text-zinc-400">Fix valgus collapse instantly.</p>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full py-2 bg-emerald-600/20 text-emerald-400 text-[10px] font-bold uppercase rounded hover:bg-emerald-600/30 transition-colors flex items-center justify-center gap-2">
                                <Dumbbell className="w-3 h-3" /> Find Drill
                            </button>
                        </div>
                    </div>
                    <div className="bg-zinc-900 border border-white/5 rounded-xl p-4 opacity-50">
                        <div className="flex gap-3">
                            <div className="w-6 h-6 rounded-full bg-zinc-800 text-zinc-500 flex items-center justify-center text-xs font-bold">2</div>
                            <div className="flex-1">
                                <h4 className="text-sm font-bold text-white">Ankle Mobility</h4>
                                <div className="h-2 w-20 bg-zinc-800 rounded-full mt-2" />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {state === 'loading' && (
                <div className="flex-1 flex flex-col items-center justify-center animate-fade-in">
                     <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin mb-4" />
                     <p className="text-[10px] font-mono text-emerald-500">SEARCHING DATABASE...</p>
                </div>
            )}

            {state === 'video' && (
                <div className="flex-1 space-y-4 animate-fade-in">
                    <h3 className="text-sm font-bold text-white">Recommended Drills</h3>
                    <div className="relative aspect-video bg-zinc-800 rounded-lg overflow-hidden ring-1 ring-white/10 group">
                        <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover opacity-60" alt="Video" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                                <Play className="w-5 h-5 text-white fill-white ml-1" />
                            </div>
                        </div>
                        <div className="absolute bottom-2 left-2 bg-black/60 px-2 py-0.5 rounded text-[10px] font-bold text-white">
                            YouTube • 2:42
                        </div>
                    </div>
                    <div className="bg-zinc-900 p-3 rounded-lg border border-white/5 flex gap-3 items-center">
                        <div className="w-8 h-8 bg-zinc-800 rounded flex items-center justify-center"><Play className="w-3 h-3 text-zinc-500" /></div>
                        <div className="space-y-1">
                             <div className="h-2 w-24 bg-zinc-800 rounded" />
                             <div className="h-2 w-16 bg-zinc-800 rounded opacity-50" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export const LandingPage: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleVideoToggle = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const handleVideoPlay = () => setIsVideoPlaying(true);
  const handleVideoPause = () => setIsVideoPlaying(false);

  const disciplines = [
    {
      id: 'powerlifting',
      title: 'Powerlifting',
      subtitle: 'Squat • Bench • Deadlift',
      desc: 'Optimize your bar path and spinal leverage for maximum 1RM.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 'bodybuilding',
      title: 'Bodybuilding',
      subtitle: 'Hypertrophy • Isolation',
      desc: 'Master time-under-tension and eliminate momentum cheating.',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 'crossfit',
      title: 'CrossFit',
      subtitle: 'Functional • High Intensity',
      desc: 'Maintain form integrity under extreme fatigue and speed.',
      image: 'https://images.unsplash.com/photo-1517963879466-e9b5ce382d69?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 'calisthenics',
      title: 'Calisthenics',
      subtitle: 'Bodyweight • Control',
      desc: 'Perfect your alignment for levers, planches, and muscle-ups.',
      image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 'running',
      title: 'Running',
      subtitle: 'Track • Road • Sprint',
      desc: 'Analyze gait cycle, strike pattern, and stride efficiency.',
      image: 'https://images.unsplash.com/photo-1552674605-469523254d5d?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 'olympic',
      title: 'Olympic Lifting',
      subtitle: 'Snatch • Clean & Jerk',
      desc: 'Explosive triple extension and catch position analysis.',
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-brand-500/30 overflow-x-hidden font-sans">
      
      {/* --- NAVBAR --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo-transparent.png" alt="G-Smurf" className="w-9 h-9" />
            <span className="font-bold text-lg tracking-tight">G-SMURF<span className="text-brand-500">.AI</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button 
              className="px-5 py-2.5 bg-white text-black rounded-full font-bold text-sm hover:bg-zinc-200 transition-all active:scale-95 flex items-center gap-2"
            >
              Download Now <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-[#050505] border-b border-white/10 p-6 flex flex-col gap-4 md:hidden animate-fade-in">
                <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-zinc-400">How it Works</a>
                <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-zinc-400">Features</a>
                <div className="h-px bg-white/10 my-2" />
                <button className="bg-brand-600 text-white py-3 rounded-xl font-bold">Download Now</button>
            </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden bg-[#050505]">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[100vh] bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.15),transparent_70%)] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
          
          
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] animate-fade-in-up mb-6" style={{ animationDelay: '0.1s' }}>
            GET MORE FROM{' '}
            <span className="text-brand-400 drop-shadow-[0_0_35px_rgba(14,165,233,0.7)] [text-shadow:0_0_40px_rgba(14,165,233,0.6),0_0_80px_rgba(14,165,233,0.3)]">EVERY REP</span>.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up mb-10" style={{ animationDelay: '0.2s' }}>
            Record any exercise. Get detailed feedback on your technique—what's working, what's not, and exactly how to improve. All analyzed by AI in seconds.
          </p>
          
          {/* CTAs - MODIFIED: App Store and Google Play buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up mb-16" style={{ animationDelay: '0.3s' }}>
            {/* App Store Badge */}
            <a 
              href="https://apps.apple.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity hover:-translate-y-1 active:scale-95 transition-transform"
            >
              <img
                src="/badges/app-store-badge.svg"
                alt="Download on the App Store"
                className="h-[52px]"
              />
            </a>
            {/* Google Play Badge */}
            <a 
              href="https://play.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity hover:-translate-y-1 active:scale-95 transition-transform"
            >
              <img
                src="/badges/google-play-badge.png"
                alt="Get it on Google Play"
                className="h-[70px]"
              />
            </a>
          </div>

          {/* Video Player Preview - MODIFIED: Added actual video */}
          <div className="w-full max-w-4xl relative animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
             {/* Glow Behind Video */}
             <div className="absolute inset-0 bg-brand-500/20 blur-[100px] -z-10 rounded-full opacity-50 pointer-events-none" />
             
             <div 
                className="relative aspect-video bg-zinc-900 rounded-3xl border border-white/10 shadow-2xl overflow-hidden ring-1 ring-white/5 group cursor-pointer"
                onClick={handleVideoToggle}
             >
                {/* Actual Video */}
                <video 
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster="/demo-video-poster.jpg"
                  preload="metadata"
                  playsInline
                  onPlay={handleVideoPlay}
                  onPause={handleVideoPause}
                  onEnded={() => setIsVideoPlaying(false)}
                >
                  <source src="/demo-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Play/Pause Overlay */}
                <div 
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${isVideoPlaying ? 'opacity-0' : 'opacity-100 group-hover:opacity-100'}`}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40 transition-opacity duration-300 ${isVideoPlaying ? 'opacity-0' : 'opacity-100'}`} />
                  
                  {/* Play Button */}
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center relative">
                     <div className={`absolute inset-0 bg-white/30 rounded-full animate-ping opacity-20 ${isVideoPlaying ? 'hidden' : ''}`} />
                     {isVideoPlaying ? (
                        <svg className="w-8 h-8 text-white fill-white" viewBox="0 0 24 24">
                           <rect x="6" y="4" width="4" height="16" />
                           <rect x="14" y="4" width="4" height="16" />
                        </svg>
                     ) : (
                        <Play size={32} className="text-white fill-white ml-1" />
                     )}
                  </div>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* --- ZIGZAG PROCESS SECTION --- */}
      <section id="how-it-works" className="py-32 bg-[#09090b] relative overflow-hidden">
        {/* Subtle Gradient Bleed for this section */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-900/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-24 max-w-3xl mx-auto">
                <h2 className="text-brand-500 font-mono text-sm uppercase tracking-[0.2em] mb-4">How It Works</h2>
                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                    THREE SIMPLE STEPS
                </h3>
            </div>

            <div className="space-y-32">

                {/* ITEM 1: UPLOAD/SCAN */}
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                    {/* Visual - Animated Scan Demo */}
                    <div className="w-full md:w-1/2 relative group">
                        <div className="absolute -inset-4 bg-brand-500/10 rounded-[2rem] blur-xl group-hover:bg-brand-500/20 transition-all duration-700" />

                        {/* Device Frame */}
                        <div className="relative aspect-[9/16] md:aspect-[4/3] bg-[#050505] rounded-[2rem] border-4 border-zinc-900 overflow-hidden shadow-2xl flex flex-col">
                             {/* Status Bar */}
                             <div className="h-6 bg-black flex justify-between items-center px-4 text-[10px] text-white/50 font-mono z-30 border-b border-white/5">
                                 <span>12:42</span>
                                 <div className="flex gap-1">
                                    <div className="w-3 h-3 border border-current rounded-sm flex items-center justify-center"><div className="w-2 h-2 bg-current" /></div>
                                    <div className="w-3 h-3 border border-current rounded-sm" />
                                 </div>
                             </div>

                             {/* Dynamic Content */}
                             <div className="flex-1 relative">
                                <ScanDemo />
                             </div>

                             {/* Fake Nav Bar */}
                             <div className="h-16 bg-black border-t border-white/10 flex items-center justify-around px-6 relative z-30">
                                 <div className="w-12 h-12 rounded-full border-4 border-white/20 flex items-center justify-center">
                                     <div className="w-8 h-8 rounded-full bg-red-500" />
                                 </div>
                             </div>
                        </div>
                    </div>
                    {/* Content */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center text-xl font-bold text-white border border-white/5">01</div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                            Scan Your <span className="text-brand-400">Lift</span>
                        </h3>
                        <p className="text-lg text-zinc-400 leading-relaxed">
                            Simply record your set and upload. Our AI instantly tracks your movement patterns to find errors that you can&apos;t see in the mirror.
                        </p>
                        <ul className="space-y-3">
                            {['Works with any camera', 'No wearables required', 'Instant processing'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-zinc-300">
                                    <CheckCircle2 className="w-5 h-5 text-brand-500" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ITEM 2: ANALYZE */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24">
                    {/* Visual - Animated Results Demo */}
                    <div className="w-full md:w-1/2 relative group">
                        {/* Glow */}
                        <div className="absolute -inset-4 bg-amber-500/10 rounded-[2rem] blur-xl group-hover:bg-amber-500/20 transition-all duration-700" />

                        {/* Device Frame */}
                        <div className="relative aspect-[9/16] md:aspect-[4/3] bg-[#000] rounded-[2rem] border-4 border-zinc-900 overflow-hidden shadow-2xl flex flex-col">
                            {/* Status Bar */}
                            <div className="h-6 bg-black flex justify-between items-center px-4 text-[10px] text-white/50 font-mono z-30 border-b border-white/5">
                                <span>5:45</span>
                                <div className="flex gap-1">
                                    <div className="w-3 h-3 border border-current rounded-sm flex items-center justify-center"><div className="w-2 h-2 bg-current" /></div>
                                    <div className="w-3 h-3 border border-current rounded-sm" />
                                </div>
                            </div>

                            {/* Dynamic Content */}
                            <div className="flex-1 relative">
                                <AnalysisDemo />
                            </div>

                            {/* Nav Bar Mock */}
                            <div className="h-14 border-t border-white/5 bg-black flex items-center justify-around text-zinc-600 px-6 z-20">
                                <LayoutDashboard className="w-5 h-5 text-brand-500 drop-shadow-[0_0_8px_rgba(14,165,233,0.5)]" />
                                <Search className="w-5 h-5" />
                                <User className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                    {/* Content */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center text-xl font-bold text-white border border-white/5">02</div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                            Get The <span className="text-amber-400">Breakdown</span>
                        </h3>
                        <p className="text-lg text-zinc-400 leading-relaxed">
                            No confusing charts. Just clear, honest feedback. Our AI coach explains exactly what you&apos;re doing wrong and why it matters, in plain English.
                        </p>
                        <div className="p-4 bg-zinc-900/50 rounded-2xl border border-white/5 italic text-zinc-400 border-l-4 border-l-amber-500 flex gap-3">
                            <div className="w-8 h-8 rounded-full overflow-hidden bg-zinc-800 shrink-0 border border-white/10 flex items-center justify-center">
                                <BrainCircuit className="w-4 h-4 text-brand-400" />
                            </div>
                            <span>&ldquo;Your depth is solid, but your knees are caving in. Push them out to engage your glutes.&rdquo;</span>
                        </div>
                    </div>
                </div>

                {/* ITEM 3: IMPROVE */}
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                    {/* Visual - Animated Fix Demo */}
                    <div className="w-full md:w-1/2 relative group">
                        {/* Glow */}
                        <div className="absolute -inset-4 bg-emerald-500/10 rounded-[2rem] blur-xl group-hover:bg-emerald-500/20 transition-all duration-700" />

                        {/* Device Frame */}
                        <div className="relative aspect-[9/16] md:aspect-[4/3] bg-[#050505] rounded-[2rem] border-4 border-zinc-900 overflow-hidden shadow-2xl flex flex-col">
                             {/* Status Bar */}
                             <div className="h-6 bg-black flex justify-between items-center px-4 text-[10px] text-white/50 font-mono z-30 border-b border-white/5">
                                 <span>12:45</span>
                                 <div className="flex gap-1">
                                    <div className="w-3 h-3 border border-current rounded-sm flex items-center justify-center"><div className="w-2 h-2 bg-current" /></div>
                                    <div className="w-3 h-3 border border-current rounded-sm" />
                                 </div>
                             </div>

                             {/* Dynamic Content */}
                             <div className="flex-1 relative">
                                <FixDemo />
                             </div>

                             {/* Fake Nav Bar */}
                             <div className="h-14 border-t border-white/5 bg-black flex items-center justify-around text-zinc-600 px-6 z-20">
                                <LayoutDashboard className="w-5 h-5" />
                                <Search className="w-5 h-5 text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                <User className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                    {/* Content */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center text-xl font-bold text-white border border-white/5">03</div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                            Fix Your <span className="text-emerald-400">Form</span>
                        </h3>
                        <p className="text-lg text-zinc-400 leading-relaxed">
                            Don&apos;t just see the error—fix it. Get a personalized &ldquo;G-Score&rdquo; and a specific list of corrective drills to help you lift safer and stronger.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-zinc-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Gamified scoring (0-100)
                            </li>
                            <li className="flex items-center gap-3 text-zinc-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Tailored drill videos
                            </li>
                            <li className="flex items-center gap-3 text-zinc-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Prevent injuries
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section id="testimonials" className="py-24 bg-[#020202] relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-8 md:mb-16 px-4 md:px-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-bold uppercase tracking-widest mb-6">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Real Results
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-3 md:mb-4">
                  ATHLETES <span className="text-zinc-500">TRUST</span> G-SMURF
              </h2>
              <p className="text-zinc-500 text-base md:text-lg max-w-2xl mx-auto">
                  From beginners fixing their first squat to competitive lifters chasing PRs.
              </p>
          </div>

          {/* Testimonials Carousel - Row 1 (scrolls left) */}
          <div className="relative mb-4 overflow-hidden">
              {/* Gradient masks */}
              <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#020202] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#020202] to-transparent z-10 pointer-events-none" />

              {/* Desktop: auto-scroll animation */}
              <div className="hidden md:flex animate-scroll-left hover:[animation-play-state:paused]">
                  {[...Array(2)].map((_, setIndex) => (
                      <div key={setIndex} className="flex gap-4 pr-4">
                          {/* Card 1 */}
                          <div className="w-[500px] flex-shrink-0 bg-zinc-900/60 backdrop-blur-sm rounded-2xl border border-white/5 p-10">
                              <p className="text-zinc-300 text-base leading-relaxed mb-6">
                                  &ldquo;I&apos;ve been lifting for 8 years and thought I had my squat dialed in. G-Smurf showed me I was shifting forward at the bottom. <span className="text-brand-400">Fixed it in one session.</span>&rdquo;
                              </p>
                              <div className="flex items-center gap-3">
                                  <img src="/testimonials/marcus.png" alt="Marcus Rodriguez" className="w-12 h-12 rounded-full object-cover" />
                                  <div>
                                      <div className="text-white font-semibold text-sm">Marcus Rodriguez</div>
                                      <div className="text-zinc-500 text-xs">Powerlifter • 545lb Squat</div>
                                  </div>
                              </div>
                          </div>
                          {/* Card 2 */}
                          <div className="w-[500px] flex-shrink-0 bg-zinc-900/60 backdrop-blur-sm rounded-2xl border border-white/5 p-10">
                              <p className="text-zinc-300 text-base leading-relaxed mb-6">
                                  &ldquo;As a coach, I use this with all my clients now. The visual feedback helps them understand what I&apos;m saying way faster than me just explaining it.&rdquo;
                              </p>
                              <div className="flex items-center gap-3">
                                  <img src="/testimonials/sarah.png" alt="Sarah Kim" className="w-12 h-12 rounded-full object-cover" />
                                  <div>
                                      <div className="text-white font-semibold text-sm">Sarah Kim</div>
                                      <div className="text-zinc-500 text-xs">CSCS, Strength Coach</div>
                                  </div>
                              </div>
                          </div>
                          {/* Card 3 */}
                          <div className="w-[500px] flex-shrink-0 bg-zinc-900/60 backdrop-blur-sm rounded-2xl border border-white/5 p-10">
                              <p className="text-zinc-300 text-base leading-relaxed mb-6">
                                  &ldquo;The G-Score is addicting. I find myself trying to beat my previous form score every workout. It&apos;s like having a game inside my gym sessions.&rdquo;
                              </p>
                              <div className="flex items-center gap-3">
                                  <img src="/testimonials/jake.png" alt="Jake Thompson" className="w-12 h-12 rounded-full object-cover" />
                                  <div>
                                      <div className="text-white font-semibold text-sm">Jake Thompson</div>
                                      <div className="text-zinc-500 text-xs">CrossFit Athlete</div>
                                  </div>
                              </div>
                          </div>
                          {/* Card 4 */}
                          <div className="w-[500px] flex-shrink-0 bg-zinc-900/60 backdrop-blur-sm rounded-2xl border border-white/5 p-10">
                              <p className="text-zinc-300 text-base leading-relaxed mb-6">
                                  &ldquo;Coming back from a herniated disc, I was terrified of deadlifting. G-Smurf gave me the confidence to know my form was safe. Can&apos;t put a price on that.&rdquo;
                              </p>
                              <div className="flex items-center gap-3">
                                  <img src="/testimonials/alex.png" alt="Alex Liu" className="w-12 h-12 rounded-full object-cover" />
                                  <div>
                                      <div className="text-white font-semibold text-sm">Alex Liu</div>
                                      <div className="text-zinc-500 text-xs">2 Years Pain-Free</div>
                                  </div>
                              </div>
                          </div>
                          {/* Card 5 */}
                          <div className="w-[500px] flex-shrink-0 bg-zinc-900/60 backdrop-blur-sm rounded-2xl border border-white/5 p-10">
                              <p className="text-zinc-300 text-base leading-relaxed mb-6">
                                  &ldquo;I didn&apos;t even know this worked for running form. Helped me fix my heel strike. My shin splints are finally gone after months of pain.&rdquo;
                              </p>
                              <div className="flex items-center gap-3">
                                  <img src="/testimonials/diana.png" alt="Diana Patel" className="w-12 h-12 rounded-full object-cover" />
                                  <div>
                                      <div className="text-white font-semibold text-sm">Diana Patel</div>
                                      <div className="text-zinc-500 text-xs">Marathon Runner</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>

              {/* Mobile: native swipe scroll */}
              <div className="flex md:hidden overflow-x-auto scrollbar-hide snap-x snap-mandatory pl-4">
                  {/* Card 1 */}
                  <div className="w-[280px] flex-shrink-0 bg-zinc-900/80 rounded-2xl border border-white/5 p-6 snap-start mr-3">
                      <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                          &ldquo;I&apos;ve been lifting for 8 years and thought I had my squat dialed in. G-Smurf showed me I was shifting forward at the bottom. <span className="text-brand-400">Fixed it in one session.</span>&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                          <img src="/testimonials/marcus.png" alt="Marcus Rodriguez" className="w-10 h-10 rounded-full object-cover" />
                          <div>
                              <div className="text-white font-semibold text-sm">Marcus Rodriguez</div>
                              <div className="text-zinc-500 text-xs">Powerlifter • 545lb Squat</div>
                          </div>
                      </div>
                  </div>
                  {/* Card 2 */}
                  <div className="w-[280px] flex-shrink-0 bg-zinc-900/80 rounded-2xl border border-white/5 p-6 snap-start mr-3">
                      <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                          &ldquo;As a coach, I use this with all my clients now. The visual feedback helps them understand what I&apos;m saying way faster than me just explaining it.&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                          <img src="/testimonials/sarah.png" alt="Sarah Kim" className="w-10 h-10 rounded-full object-cover" />
                          <div>
                              <div className="text-white font-semibold text-sm">Sarah Kim</div>
                              <div className="text-zinc-500 text-xs">CSCS, Strength Coach</div>
                          </div>
                      </div>
                  </div>
                  {/* Card 3 */}
                  <div className="w-[280px] flex-shrink-0 bg-zinc-900/80 rounded-2xl border border-white/5 p-6 snap-start mr-3">
                      <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                          &ldquo;The G-Score is addicting. I find myself trying to beat my previous form score every workout. It&apos;s like having a game inside my gym sessions.&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                          <img src="/testimonials/jake.png" alt="Jake Thompson" className="w-10 h-10 rounded-full object-cover" />
                          <div>
                              <div className="text-white font-semibold text-sm">Jake Thompson</div>
                              <div className="text-zinc-500 text-xs">CrossFit Athlete</div>
                          </div>
                      </div>
                  </div>
                  {/* Card 4 */}
                  <div className="w-[280px] flex-shrink-0 bg-zinc-900/80 rounded-2xl border border-white/5 p-6 snap-start mr-3">
                      <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                          &ldquo;Coming back from a herniated disc, I was terrified of deadlifting. G-Smurf gave me the confidence to know my form was safe. Can&apos;t put a price on that.&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                          <img src="/testimonials/alex.png" alt="Alex Liu" className="w-10 h-10 rounded-full object-cover" />
                          <div>
                              <div className="text-white font-semibold text-sm">Alex Liu</div>
                              <div className="text-zinc-500 text-xs">2 Years Pain-Free</div>
                          </div>
                      </div>
                  </div>
                  {/* Card 5 */}
                  <div className="w-[280px] flex-shrink-0 bg-zinc-900/80 rounded-2xl border border-white/5 p-6 snap-start mr-4">
                      <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                          &ldquo;I didn&apos;t even know this worked for running form. Helped me fix my heel strike. My shin splints are finally gone after months of pain.&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                          <img src="/testimonials/diana.png" alt="Diana Patel" className="w-10 h-10 rounded-full object-cover" />
                          <div>
                              <div className="text-white font-semibold text-sm">Diana Patel</div>
                              <div className="text-zinc-500 text-xs">Marathon Runner</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* Testimonials Carousel - Row 2 (scrolls right) - Desktop only */}
          <div className="relative hidden md:block overflow-hidden">
              {/* Gradient masks */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020202] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020202] to-transparent z-10 pointer-events-none" />

              <div className="flex animate-scroll-right hover:[animation-play-state:paused]">
                  {[...Array(2)].map((_, setIndex) => (
                      <div key={setIndex} className="flex gap-4 pr-4">
                          {/* Card 6 */}
                          <div className="w-[500px] flex-shrink-0 bg-zinc-900/60 backdrop-blur-sm rounded-2xl border border-white/5 p-10">
                              <p className="text-zinc-300 text-base leading-relaxed mb-6">
                                  &ldquo;Finally something that actually tells me what&apos;s wrong instead of generic advice. My bench press form has never been better. Added 20lbs to my max.&rdquo;
                              </p>
                              <div className="flex items-center gap-3">
                                  <img src="/testimonials/ryan.png" alt="Ryan James" className="w-12 h-12 rounded-full object-cover" />
                                  <div>
                                      <div className="text-white font-semibold text-sm">Ryan James</div>
                                      <div className="text-zinc-500 text-xs">Bodybuilder</div>
                                  </div>
                              </div>
                          </div>
                          {/* Card 7 */}
                          <div className="w-[500px] flex-shrink-0 bg-zinc-900/60 backdrop-blur-sm rounded-2xl border border-white/5 p-10">
                              <p className="text-zinc-300 text-base leading-relaxed mb-6">
                                  &ldquo;Used it to fix my Olympic lifts. The slow-mo breakdown showing my hip extension timing was eye-opening. Coach said I look like a different athlete.&rdquo;
                              </p>
                              <div className="flex items-center gap-3">
                                  <img src="/testimonials/elena.png" alt="Elena Martinez" className="w-12 h-12 rounded-full object-cover" />
                                  <div>
                                      <div className="text-white font-semibold text-sm">Elena Martinez</div>
                                      <div className="text-zinc-500 text-xs">Olympic Weightlifter</div>
                                  </div>
                              </div>
                          </div>
                          {/* Card 8 */}
                          <div className="w-[500px] flex-shrink-0 bg-zinc-900/60 backdrop-blur-sm rounded-2xl border border-white/5 p-10">
                              <p className="text-zinc-300 text-base leading-relaxed mb-6">
                                  &ldquo;I&apos;m 52 and getting back into fitness. This app doesn&apos;t judge—just gives me clear feedback on how to move safely. Worth every penny.&rdquo;
                              </p>
                              <div className="flex items-center gap-3">
                                  <img src="/testimonials/tom.png" alt="Tom Wilson" className="w-12 h-12 rounded-full object-cover" />
                                  <div>
                                      <div className="text-white font-semibold text-sm">Tom Wilson</div>
                                      <div className="text-zinc-500 text-xs">Fitness Beginner</div>
                                  </div>
                              </div>
                          </div>
                          {/* Card 9 */}
                          <div className="w-[500px] flex-shrink-0 bg-zinc-900/60 backdrop-blur-sm rounded-2xl border border-white/5 p-10">
                              <p className="text-zinc-300 text-base leading-relaxed mb-6">
                                  &ldquo;Gymnastics coach here. Using this for my athletes&apos; conditioning work. The joint angle tracking is insanely accurate. Game changer for injury prevention.&rdquo;
                              </p>
                              <div className="flex items-center gap-3">
                                  <img src="/testimonials/lisa.png" alt="Lisa Nguyen" className="w-12 h-12 rounded-full object-cover" />
                                  <div>
                                      <div className="text-white font-semibold text-sm">Lisa Nguyen</div>
                                      <div className="text-zinc-500 text-xs">Gymnastics Coach</div>
                                  </div>
                              </div>
                          </div>
                          {/* Card 10 */}
                          <div className="w-[500px] flex-shrink-0 bg-zinc-900/60 backdrop-blur-sm rounded-2xl border border-white/5 p-10">
                              <p className="text-zinc-300 text-base leading-relaxed mb-6">
                                  &ldquo;Been doing calisthenics for 3 years. Thought my muscle-ups were clean until G-Smurf showed me my kipping was inconsistent. Way more efficient now.&rdquo;
                              </p>
                              <div className="flex items-center gap-3">
                                  <img src="/testimonials/kevin.png" alt="Kevin Davis" className="w-12 h-12 rounded-full object-cover" />
                                  <div>
                                      <div className="text-white font-semibold text-sm">Kevin Davis</div>
                                      <div className="text-zinc-500 text-xs">Calisthenics Athlete</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>

        </div>
      </section>


      {/* --- CTA SECTION --- */}
      <section className="py-32 px-6 relative overflow-hidden bg-[#050505]">
          <div className="absolute inset-0 bg-brand-600/5" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
              
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8">
                  BETTER TECHNIQUE.<br/>
                  <span className="text-brand-400 drop-shadow-[0_0_35px_rgba(14,165,233,0.7)] [text-shadow:0_0_40px_rgba(14,165,233,0.6),0_0_80px_rgba(14,165,233,0.3)]">BETTER RESULTS.</span>
              </h2>
              
              <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
                  Join thousands of athletes who are lifting smarter, staying injury-free, and breaking PRs with G-Smurf AI.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  {/* App Store Badge */}
                  <a
                    href="https://apps.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-105 transition-transform"
                  >
                    <img
                      src="/badges/app-store-badge.svg"
                      alt="Download on the App Store"
                      className="h-[52px]"
                    />
                  </a>
                  {/* Google Play Badge */}
                  <a
                    href="https://play.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-105 transition-transform"
                  >
                    <img
                      src="/badges/google-play-badge.png"
                      alt="Get it on Google Play"
                      className="h-[70px]"
                    />
                  </a>
              </div>
              
              <p className="mt-8 text-xs text-zinc-600 font-mono uppercase tracking-widest">
                  Secure Analysis • Cancel Anytime • Works on all devices
              </p>
          </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-white/5 bg-[#020202] text-center">
         <div className="flex items-center justify-center gap-2 mb-6">
            <img src="/logo-transparent.png" alt="G-Smurf" className="w-7 h-7" />
            <span className="font-bold text-white tracking-tight">G-SMURF<span className="text-brand-500">.AI</span></span>
         </div>
         <div className="flex justify-center gap-8 text-sm text-zinc-500 mb-8 font-medium">
             <a href="/privacy" className="hover:text-white">Privacy Policy</a>
             <a href="/terms" className="hover:text-white">Terms & Conditions</a>
             <a href="/support" className="hover:text-white">Support</a>
         </div>
         <p className="text-zinc-700 text-xs">© 2024 Iron Elder Industries. All rights reserved.</p>
      </footer>

    </div>
  );
};