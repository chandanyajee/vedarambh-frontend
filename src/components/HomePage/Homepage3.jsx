// import React, { useState } from "react";

// // VedArambh HomePage – Responsive MVP
// // - Pure React + TailwindCSS
// // - Mobile-first, accessible, and screenshot-inspired layout
// // - Replace placeholder images/links with your assets later

// const NavLink = ({ children, href = "#" }) => (
//   <a
//     href={href}
//     className="text-slate-700 hover:text-emerald-600 transition-colors px-3 py-2 rounded-md text-sm font-medium"
//   >
//     {children}
//   </a>
// );

// const Stat = ({ label, value }) => (
//   <div className="bg-white/50 backdrop-blur border border-slate-200 rounded-2xl p-6 text-center shadow-sm">
//     <div className="text-3xl font-extrabold text-slate-900">{value}</div>
//     <div className="mt-1 text-sm text-slate-600">{label}</div>
//   </div>
// );

// export default function VedArambhHome3() {
//   const [open, setOpen] = useState(false);
//   const [portalTab, setPortalTab] = useState("student");

//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-900">
//       {/* ======= NAVBAR ======= */}
//       <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur border-b border-slate-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex h-16 items-center justify-between">
//             <div className="flex items-center gap-3">
//               <span className="text-2xl">🕉️</span>
//               <a href="#" className="font-extrabold text-xl tracking-tight">
//                 वेदारम्भ <span className="text-slate-500 text-sm align-top">— A Sanatan Initiative</span>
//               </a>
//             </div>

//             <nav className="hidden lg:flex items-center">
//               <NavLink>Home</NavLink>
//               <div className="relative group">
//                 <NavLink>Courses ▾</NavLink>
//                 <div className="absolute hidden group-hover:block bg-white border border-slate-200 rounded-xl shadow-lg mt-2 w-56">
//                   <a className="block px-4 py-2 hover:bg-slate-50" href="#">Gita</a>
//                   <a className="block px-4 py-2 hover:bg-slate-50" href="#">Vedic Math</a>
//                   <a className="block px-4 py-2 hover:bg-slate-50" href="#">Sanskrit</a>
//                 </div>
//               </div>
//               <div className="relative group">
//                 <NavLink>Portals ▾</NavLink>
//                 <div className="absolute hidden group-hover:block bg-white border border-slate-200 rounded-xl shadow-lg mt-2 w-56">
//                   <a className="block px-4 py-2 hover:bg-slate-50" href="#">Student</a>
//                   <a className="block px-4 py-2 hover:bg-slate-50" href="#">Teacher</a>
//                   <a className="block px-4 py-2 hover:bg-slate-50" href="#">Parent</a>
//                   <a className="block px-4 py-2 hover:bg-slate-50" href="#">Admin</a>
//                 </div>
//               </div>
//               <NavLink>Calendar</NavLink>
//               <NavLink>Library</NavLink>
//               <NavLink>About</NavLink>
//               <NavLink>Contact</NavLink>
//             </nav>

//             <div className="hidden lg:flex items-center gap-3">
//               <button className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 text-sm hover:bg-slate-100">
//                 🌐 भाषा
//               </button>
//               <button className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-emerald-700">
//                 Donate
//               </button>
//             </div>

//             {/* Mobile menu button */}
//             <button
//               className="lg:hidden inline-flex items-center justify-center rounded-xl border border-slate-300 p-2 text-slate-700"
//               onClick={() => setOpen(!open)}
//               aria-label="Open Menu"
//             >
//               {open ? "✖" : "☰"}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {open && (
//           <div className="lg:hidden border-t border-slate-200 bg-white">
//             <div className="px-4 py-3 space-y-2">
//               <a className="block py-2" href="#">Home</a>
//               <a className="block py-2" href="#">Courses</a>
//               <a className="block py-2" href="#">Portals</a>
//               <a className="block py-2" href="#">Calendar</a>
//               <a className="block py-2" href="#">Library</a>
//               <a className="block py-2" href="#">About</a>
//               <a className="block py-2" href="#">Contact</a>
//               <div className="flex gap-2 pt-2">
//                 <button className="flex-1 rounded-xl border border-slate-300 px-3 py-2 text-sm">🌐 भाषा</button>
//                 <button className="flex-1 rounded-xl bg-emerald-600 text-white px-3 py-2 text-sm">Donate</button>
//               </div>
//             </div>
//           </div>
//         )}
//       </header>

//       {/* ======= HERO ======= */}
//       <section className="relative">
//         <img
//           src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
//           alt="Heritage"
//           className="h-[560px] w-full object-cover object-center"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-emerald-700/40 via-emerald-900/20 to-slate-900/40"></div>
//         <div className="absolute inset-0">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
//             <div className="flex flex-col items-center justify-center text-center h-full text-white">
//               <div className="text-6xl md:text-7xl font-extrabold tracking-tight drop-shadow-sm">ॐ</div>
//               <h1 className="mt-2 text-4xl md:text-5xl font-extrabold">वेदारम्भ</h1>
//               <p className="mt-1 text-lg md:text-xl opacity-95">A Sanatan Initiative</p>
//               <p className="mt-2 max-w-3xl text-sm md:text-base opacity-95">
//                 सनातन धर्म की शिक्षा का आधुनिक मंच | वेदों से विज्ञान तक, संस्कारों से सफलता तक
//               </p>

//               {/* Shloka Card */}
//               <div className="mt-6 bg-white/90 text-slate-900 rounded-2xl shadow-xl p-5 w-full max-w-2xl">
//                 <div className="text-sm text-amber-800 font-semibold">आज का श्लोक</div>
//                 <div className="mt-1 font-bold">योगस्थः कुरु कर्माणि संगं त्यक्त्वा धनञ्जय।</div>
//                 <div className="text-sm text-slate-600">
//                   Perform action, O Arjuna, being steadfast in yoga and abandoning attachment.
//                 </div>
//                 <div className="mt-4 flex flex-wrap gap-3">
//                   <button className="rounded-xl bg-emerald-600 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-emerald-700">
//                     पाठ्यक्रम देखें
//                   </button>
//                   <button className="rounded-xl bg-white border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-50">
//                     🎬 Demo देखें
//                   </button>
//                 </div>
//               </div>

//               {/* Portal Login Card */}
//               <div className="mt-5 w-full max-w-xl bg-white/80 rounded-2xl shadow-lg p-5">
//                 <div className="flex gap-2 text-sm font-semibold">
//                   {[
//                     { key: "student", label: "Student Portal" },
//                     { key: "teacher", label: "Teacher Portal" },
//                     { key: "parent", label: "Parent Portal" },
//                     { key: "admin", label: "Admin" },
//                   ].map((tab) => (
//                     <button
//                       key={tab.key}
//                       onClick={() => setPortalTab(tab.key)}
//                       className={`px-3 py-2 rounded-xl border text-slate-700 ${
//                         portalTab === tab.key
//                           ? "bg-emerald-50 border-emerald-300 text-emerald-700"
//                           : "bg-white border-slate-200 hover:bg-slate-50"
//                       }`}
//                     >
//                       {tab.label}
//                     </button>
//                   ))}
//                 </div>
//                 <form className="mt-4 grid sm:grid-cols-3 gap-3">
//                   <input
//                     type="text"
//                     placeholder="Student ID or Email"
//                     className="col-span-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
//                     aria-label="Student ID or Email"
//                   />
//                   <input
//                     type="password"
//                     placeholder="Password"
//                     className="col-span-2 sm:col-span-1 rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
//                     aria-label="Password"
//                   />
//                   <button
//                     type="button"
//                     className="sm:col-span-3 rounded-xl bg-emerald-600 text-white px-4 py-2 font-semibold hover:bg-emerald-700"
//                   >
//                     Login करें
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ======= SPECIAL FEATURES ======= */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
//         <h2 className="text-2xl md:text-3xl font-extrabold text-center">वेदारम्भ की विशेषताएं</h2>
//         <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//           {[
//             {
//               title: "AI Guru Chatbot",
//               desc: "वेद, गीता, शास्त्र से जुड़े प्रश्नों के उत्तर तुरंत!",
//               icon: "💬",
//               color: "bg-amber-50 border-amber-200",
//             },
//             {
//               title: "Voice Commands",
//               desc: "\"Hey VedArambh\", आज का श्लोक सुनाओ – आसान वॉइस कंट्रोल",
//               icon: "🎙️",
//               color: "bg-emerald-50 border-emerald-200",
//             },
//             {
//               title: "Sanskrit Pronunciation",
//               desc: "AI-powered उच्चारण अभ्यास और speaking coach",
//               icon: "🕉️",
//               color: "bg-rose-50 border-rose-200",
//             },
//             {
//               title: "AR Experience",
//               desc: "मंदिर, मूर्तियों पर स्कैन करें – knowledge overlays",
//               icon: "📷",
//               color: "bg-indigo-50 border-indigo-200",
//             },
//           ].map((f, i) => (
//             <div key={i} className={`rounded-2xl border p-5 shadow-sm ${f.color}`}>
//               <div className="text-3xl">{f.icon}</div>
//               <div className="mt-3 font-semibold">{f.title}</div>
//               <p className="text-sm text-slate-600 mt-1">{f.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ======= CURRICULUM ======= */}
//       <section className="bg-amber-50/60 border-y border-amber-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
//           <h2 className="text-2xl md:text-3xl font-extrabold text-center">हमारा पाठ्यक्रम (Playgroup - Class 10)</h2>
//           <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
//             {[
//               {
//                 title: "Primary (Playgroup - Class 5)",
//                 items: ["संस्कृत Basics", "योग", "कहानियाँ (Animated)", "मूल्य शिक्षा"],
//               },
//               {
//                 title: "Middle (Class 6-8)",
//                 items: ["गीता के श्लोक", "वैदिक गणित", "इतिहास", "धर्मशास्त्र", "संस्कार पद्धति"],
//               },
//               {
//                 title: "Secondary (Class 9-10)",
//                 items: ["वेदान्त Philosophy", "आयुर्वेद Basics", "ज्योतिष", "Advanced Sanskrit"],
//               },
//             ].map((c, i) => (
//               <div key={i} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
//                 <div className="font-semibold text-amber-800">{c.title}</div>
//                 <ul className="mt-3 space-y-2 text-sm text-slate-700">
//                   {c.items.map((it, j) => (
//                     <li key={j} className="flex items-start gap-2">
//                       <span>✅</span>
//                       <span>{it}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ======= PLATFORM FEATURES (image + text) ======= */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <h2 className="text-2xl md:text-3xl font-extrabold text-center">VedArambh Platform Features</h2>
//         <p className="text-center text-slate-600 mt-1">Comprehensive digital learning ecosystem for authentic Sanatan Dharma education</p>
//         <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//           <img
//             src="https://images.unsplash.com/photo-1608889175123-8ee362201f38?q=80&w=1400&auto=format&fit=crop"
//             alt="Guru teaching"
//             className="w-full h-72 md:h-96 object-cover rounded-2xl shadow"
//           />
//           <div className="space-y-5">
//             {[
//               {
//                 title: "Playgroup to Class 10 Curriculum",
//                 desc: "Structured learning paths covering age-appropriate Sanatan Dharma education for all school levels.",
//               },
//               {
//                 title: "Complete Scripture Library",
//                 desc: "Access to Vedas, Puranas, Mahabharat, Ramayan, Upanishads in Hindi, English, and Sanskrit.",
//               },
//               {
//                 title: "Trilingual Learning",
//                 desc: "Complete platform support in Hindi, English, and Sanskrit for comprehensive understanding.",
//               },
//             ].map((b, i) => (
//               <div key={i} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
//                 <div className="font-semibold">{b.title}</div>
//                 <p className="text-sm text-slate-600 mt-1">{b.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ======= FEATURED LEARNING PATHS ======= */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
//         <h2 className="text-2xl md:text-3xl font-extrabold text-center">Featured Learning Paths</h2>
//         <p className="text-center text-slate-600 mt-1">Start your spiritual education journey with our most popular courses</p>
//         <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[
//             {
//               title: "Bhagavad Gita for All Ages",
//               meta: "18 Chapters • Multi-level",
//               img: "https://images.unsplash.com/photo-1577083166059-80b9e24b9dd5?q=80&w=1200&auto=format&fit=crop",
//             },
//             {
//               title: "Vedic Mathematics",
//               meta: "12 Modules • Grade-wise",
//               img: "https://images.unsplash.com/photo-1532300480922-c28e5b79a8c6?q=80&w=1200&auto=format&fit=crop",
//             },
//             {
//               title: "Sanskrit Foundation",
//               meta: "Progressive Levels",
//               img: "https://images.unsplash.com/photo-1607860108855-9104587b0026?q=80&w=1200&auto=format&fit=crop",
//             },
//           ].map((c, i) => (
//             <article key={i} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition">
//               <img src={c.img} alt="course" className="w-full h-44 object-cover" />
//               <div className="p-5">
//                 <h3 className="font-semibold">{c.title}</h3>
//                 <p className="text-sm text-slate-600 mt-1">{c.meta}</p>
//                 <button className="mt-4 rounded-xl bg-emerald-600 text-white px-4 py-2 text-sm font-semibold hover:bg-emerald-700">
//                   Explore
//                 </button>
//               </div>
//             </article>
//           ))}
//         </div>
//       </section>

//       {/* ======= COMMUNITY (Testimonials + Stats) ======= */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
//         <h2 className="text-2xl md:text-3xl font-extrabold text-center">Join Our Learning Community</h2>
//         <p className="text-center text-slate-600 mt-1">Students, teachers, and institutions trust VedArambh for authentic education</p>

//         <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[
//             {
//               name: "Kavya Sharma",
//               role: "Class 8 Student",
//               quote:
//                 "VedArambh made learning Sanskrit so easy! I can now read simple shlokas and understand their meanings.",
//             },
//             {
//               name: "Dr. Meera Patel",
//               role: "Certified Teacher",
//               quote:
//                 "As a registered teacher on VedArambh, I love how the platform maintains authenticity while making ancient wisdom accessible to modern students.",
//             },
//             {
//               name: "Rajesh Kumar",
//               role: "Parent",
//               quote:
//                 "VedArambh is exactly what we needed: a platform that teaches our cultural values alongside modern education.",
//             },
//           ].map((t, i) => (
//             <blockquote key={i} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
//               <div className="flex items-start gap-3">
//                 <img
//                   src={`https://i.pravatar.cc/80?img=${i + 12}`}
//                   alt="avatar"
//                   className="w-12 h-12 rounded-full"
//                 />
//                 <div>
//                   <p className="text-sm text-slate-700">“{t.quote}”</p>
//                   <div className="mt-3 text-sm font-semibold">{t.name}</div>
//                   <div className="text-xs text-slate-500">{t.role}</div>
//                 </div>
//               </div>
//             </blockquote>
//           ))}
//         </div>

//         <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
//           <Stat label="Students Enrolled" value="5,000+" />
//           <Stat label="Verified Teachers" value="150+" />
//           <Stat label="Educational Videos" value="100+" />
//           <Stat label="Scripture Texts" value="25+" />
//         </div>
//       </section>

//       {/* ======= FOOTER ======= */}
//       <footer className="bg-slate-900 text-slate-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <div className="text-lg font-bold">🕉️ VedArambh</div>
//             <p className="mt-2 text-sm text-slate-400">
//               Empowering minds through the eternal wisdom of Sanatan Dharma. Learn, grow, and transform with authentic ancient knowledge.
//             </p>
//           </div>
//           <div>
//             <div className="font-semibold mb-2">Quick Links</div>
//             <ul className="space-y-2 text-sm text-slate-300">
//               <li><a className="hover:underline" href="#">Courses</a></li>
//               <li><a className="hover:underline" href="#">Our Gurus</a></li>
//               <li><a className="hover:underline" href="#">Calendar</a></li>
//               <li><a className="hover:underline" href="#">Contact</a></li>
//             </ul>
//           </div>
//           <div>
//             <div className="font-semibold mb-2">Learning Paths</div>
//             <ul className="space-y-2 text-sm text-slate-300">
//               <li>Ancient Scriptures</li>
//               <li>Yoga & Meditation</li>
//               <li>Philosophy</li>
//               <li>Cultural Heritage</li>
//             </ul>
//           </div>
//           <div>
//             <div className="font-semibold mb-2">Support</div>
//             <ul className="space-y-2 text-sm text-slate-300">
//               <li>Help Center</li>
//               <li>Community</li>
//               <li>Privacy Policy</li>
//               <li>Terms of Service</li>
//             </ul>
//             <div className="mt-4 flex gap-3">
//               <a href="#" className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-800">𝕏</a>
//               <a href="#" className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-800">f</a>
//               <a href="#" className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-800">▶</a>
//             </div>
//           </div>
//         </div>
//         <div className="border-t border-slate-800 text-center text-sm py-4">© {new Date().getFullYear()} VedArambh. All rights reserved.</div>
//       </footer>
//     </div>
//   );
// }

// // ---

// // # Quick run checklist
// // 1. Install dependencies: `cd backend && npm install`.
// // 2. Create `.env` based on `.env.example` and set `MONGO_URI` and `PORT`.
// // 3. Seed sample data: `node seed.js` (optional).
// // 4. Start server: `npm run dev` (uses `nodemon` if installed) or `node server.js`.

// // If you want, I can also package this backend into a downloadable zip and provide it here.
