"use client";
import Link from "next/link";
import { notices } from "../data/notices";
import ScrollTop from "./components/ScrollTop";

export default function Home() {
  const jobs = notices.filter((item) => item.category === "job");
  const admitCards = notices.filter((item) => item.category === "admit");
  const results = notices.filter((item) => item.category === "result");
  const answerKeys = notices.filter(
  (item) => item.category === "answerkey"
);

const syllabus = notices.filter(
  (item) => item.category === "syllabus"
);

const admissions = notices.filter(
  (item) => item.category === "admission"
);

  return (
   <main
  id="mainPage"
  className="min-h-screen bg-slate-100 text-black transition-all duration-300"
>

      {/* Navbar */}
      <div className="bg-white shadow">
  <div className="max-w-7xl mx-auto px-5 py-3 flex flex-wrap gap-4 justify-center">

    <a href="#" className="font-medium hover:text-blue-600">
      Jobs
    </a>

    <a href="#" className="font-medium hover:text-blue-600">
      Admit Card
    </a>

    <a href="#" className="font-medium hover:text-blue-600">
      Results
    </a>

    <a href="#" className="font-medium hover:text-blue-600">
      Answer Key
    </a>

    <a href="#" className="font-medium hover:text-blue-600">
      Syllabus
    </a>

    <a href="#" className="font-medium hover:text-blue-600">
      Admission
    </a>

  </div>
</div>
      <nav 
      id="navbar"
      className="shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            Exam Notice
          </h1>

          <div className="flex gap-4 items-center">
            <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
              Telegram
            </button>

            <a
  href="https://whatsapp.com/channel/0029Vb8fk3cCRs1gJngfbC32"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700"
>
  WhatsApp
</a>
<button
  onClick={() => {
    document.documentElement.classList.toggle("dark");

    const navbar = document.getElementById("navbar");

    if (document.documentElement.classList.contains("dark")) {
      navbar?.classList.add("dark-navbar");
    } else {
      navbar?.classList.remove("dark-navbar");
    }
  }}
  className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-800"
>
  🌙 Dark
</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-5 text-center">

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest Government Jobs,
            Admit Cards & Results
          </h2>

          <p className="text-lg opacity-90 mb-6">
            Fast Updates For SSC, Railway, UPSC, JSSC & More
          </p>

          <input
            type="text"
            placeholder="Search notices..."
            className="w-full max-w-2xl p-4 rounded-xl text-black"
          />

        </div>
      </section>

      {/* Moving Cards */}
<div className="overflow-hidden py-6 bg-yellow-100">
  <div className="flex gap-4 w-max leftright">

    <div className="min-w-[220px] bg-white p-4 rounded-xl shadow">
      <h3 className="font-bold">SSC CGL 2026</h3>
      <p>Latest Job</p>
    </div>

    <div className="min-w-[220px] bg-white p-4 rounded-xl shadow">
      <h3 className="font-bold">SSC GD Admit Card</h3>
      <p>Admit Card</p>
    </div>

    <div className="min-w-[220px] bg-white p-4 rounded-xl shadow">
      <h3 className="font-bold">SSC CHSL Result</h3>
      <p>Result</p>
    </div>

    <div className="min-w-[220px] bg-white p-4 rounded-xl shadow">
      <h3 className="font-bold">RRB NTPC</h3>
      <p>Recruitment</p>
    </div>

    <div className="min-w-[220px] bg-white p-4 rounded-xl shadow">
      <h3 className="font-bold">Answer Key</h3>
      <p>Available</p>
    </div>

    <div className="min-w-[220px] bg-white p-4 rounded-xl shadow">
      <h3 className="font-bold">CUET Admission</h3>
      <p>Open</p>
    </div>

  </div>
</div>

      {/* Main Cards */}
      <section className="max-w-7xl mx-auto px-5 pb-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Jobs */}
        <div className="bg-white rounded-xl shadow-lg p-5">
          <h2 className="text-xl font-bold text-blue-700 mb-4 border-b pb-2">
            Latest Jobs
          </h2>

          {jobs.map((job) => (
  <Link
    key={job.slug}
    href={`/notice/${job.slug}`}
    className="block border-b py-3 hover:bg-slate-50 px-2 rounded transition"
  >
    <div className="flex justify-between items-center">
      <span>{job.title}</span>

      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
        NEW
      </span>
    </div>

    <p className="text-sm text-gray-500 mt-1">
      Last Date: {job.dates.last}
    </p>
  </Link>
))}
        </div>

        {/* Admit Cards */}
        <div className="bg-white rounded-xl shadow-lg p-5">
          <h2 className="text-xl font-bold text-green-700 mb-4 border-b pb-2">
            Admit Cards
          </h2>

          {admitCards.map((item) => (
  <Link
    key={item.slug}
    href={`/notice/${item.slug}`}
    className="block border-b py-3 hover:bg-slate-50 px-2 rounded transition"
  >
    <div className="flex justify-between items-center">
      <span>{item.title}</span>

      <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
        LIVE
      </span>
    </div>
  </Link>
))}
        </div>

        {/* Results */}
        <div className="bg-white rounded-xl shadow-lg p-5">
          <h2 className="text-xl font-bold text-red-700 mb-4 border-b pb-2">
            Results
          </h2>

          {results.map((item) => (
  <Link
    key={item.slug}
    href={`/notice/${item.slug}`}
    className="block border-b py-3 hover:bg-slate-50 px-2 rounded transition"
  >
    <div className="flex justify-between items-center">
      <span>{item.title}</span>

      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
        RESULT
      </span>
    </div>
  </Link>
))}
        </div>
        {/* Answer Keys */}
<div className="bg-white rounded-xl shadow-lg p-5">
  <h2 className="text-xl font-bold text-purple-700 mb-4 border-b pb-2">
    Answer Keys
  </h2>

  {answerKeys.map((item) => (
    <Link
      key={item.slug}
      href={`/notice/${item.slug}`}
      className="block border-b py-3 hover:bg-slate-50 px-2 rounded transition"
    >
      <div className="flex justify-between items-center">
        <span>{item.title}</span>

        <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded">
          KEY
        </span>
      </div>
    </Link>
  ))}
</div>

{/* Syllabus */}
<div className="bg-white rounded-xl shadow-lg p-5">
  <h2 className="text-xl font-bold text-orange-700 mb-4 border-b pb-2">
    Syllabus
  </h2>

  {syllabus.map((item) => (
    <Link
      key={item.slug}
      href={`/notice/${item.slug}`}
      className="block border-b py-3 hover:bg-slate-50 px-2 rounded transition"
    >
      <div className="flex justify-between items-center">
        <span>{item.title}</span>

        <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded">
          PDF
        </span>
      </div>
    </Link>
  ))}
</div>

{/* Admissions */}
<div className="bg-white rounded-xl shadow-lg p-5">
  <h2 className="text-xl font-bold text-cyan-700 mb-4 border-b pb-2">
    Admissions
  </h2>

  {admissions.map((item) => (
    <Link
      key={item.slug}
      href={`/notice/${item.slug}`}
      className="block border-b py-3 hover:bg-slate-50 px-2 rounded transition"
    >
      <div className="flex justify-between items-center">
        <span>{item.title}</span>

        <span className="bg-cyan-600 text-white text-xs px-2 py-1 rounded">
          OPEN
        </span>
      </div>
    </Link>
  ))}
</div>

      </section>

      {/* Footer */}
      <ScrollTop />

<footer className="bg-slate-900 text-white text-center py-6">
  © 2026 Exam Notice. All Rights Reserved.
</footer>

</main>
  );
}