"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function Dashboard() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("job");
  const [description, setDescription] = useState("");
  const [organization, setOrganization] = useState("");
  const [officialWebsite, setOfficialWebsite] = useState("");
  const [applyLink, setApplyLink] = useState("");
const [notificationLink, setNotificationLink] = useState("");
const [syllabusLink, setSyllabusLink] = useState("");
const [admitCardLink, setAdmitCardLink] = useState("");
const [resultLink, setResultLink] = useState("");
  const [qualification, setQualification] = useState("");
  const [ageLimit, setAgeLimit] = useState("");
  const [applicationFee, setApplicationFee] = useState("");
  const [selectionProcess, setSelectionProcess] = useState("");
  const [startDate, setStartDate] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [examDate, setExamDate] = useState("");
const [totalPost, setTotalPost] = useState("");
const [vacancyDetails, setVacancyDetails] = useState("");
  const [dbNotices, setDbNotices] = useState<any[]>([]);
  const [vacancyRows, setVacancyRows] = useState([
  {
    post_name: "",
    general: "",
    ews: "",
    obc: "",
    sc: "",
    st: "",
    total: "",
    eligibility: "",
  },
]);

const [postDetails, setPostDetails] = useState([
  {
    post_name: "",
    total_post: "",
    eligibility: "",
  },
]);

  async function loadNotices() {
    const { data, error } = await supabase
      .from("notices")
      .select("*")
      .order("id", { ascending: false });

    if (data) setDbNotices(data);
    if (error) console.log(error);
  }

  useEffect(() => {
    loadNotices();
  }, []);

  async function saveNotice() {
    const slug = title.toLowerCase().replaceAll(" ", "-");

    const { error } = await supabase.from("notices").insert([
      {
        title,
        slug,
        category,
        description,
        organization,
        qualification,
        ageLimit,
        applicationFee,
        selectionProcess,
        officialWebsite,
        startDate,
        lastDate,
        examDate,
        totalpost: totalPost,
       applylink: applyLink,
notificationlink: notificationLink,
syllabuslink: syllabusLink,
admitcardlink: admitCardLink,
resultlink: resultLink,

vacancydetails: vacancyDetails,
vacancyrows: vacancyRows,
postdetails: postDetails,
      },
    ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Saved!");

    setVacancyRows([
  {
    post_name: "",
    general: "",
    ews: "",
    obc: "",
    sc: "",
    st: "",
    total: "",
    eligibility: "",
  },
]);

    setTitle("");
    setCategory("job");
    setDescription("");
    setOrganization("");
    setOfficialWebsite("");
    setQualification("");
    setAgeLimit("");
    setApplicationFee("");
    setSelectionProcess("");
    setStartDate("");
    setLastDate("");
    setExamDate("");

    loadNotices();
  }

  async function deleteNotice(id: number) {
    await supabase.from("notices").delete().eq("id", id);
    loadNotices();
  }

  return (
    <main className="min-h-screen p-6 bg-slate-100">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="bg-white p-5 rounded-xl shadow max-w-xl">
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="w-full border p-2 mb-2" />
<select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  className="w-full border p-2 mb-2"
>
  <option value="job">Job</option>
  <option value="admit">Admit Card</option>
  <option value="result">Result</option>
  <option value="answerkey">Answer Key</option>
  <option value="syllabus">Syllabus</option>
  <option value="admission">Admission</option>
</select>

<textarea
  value={description}
  onChange={(e) => setDescription(e.target.value)}
  placeholder="Description"
  className="w-full border p-2 mb-2"
/>

<input
  value={organization}
  onChange={(e) => setOrganization(e.target.value)}
  placeholder="Organization"
  className="w-full border p-2 mb-2"
/>

<input
  value={officialWebsite}
  onChange={(e) => setOfficialWebsite(e.target.value)}
  placeholder="Official Website"
  className="w-full border p-2 mb-2"
/>

<input
  value={applyLink}
  onChange={(e) => setApplyLink(e.target.value)}
  placeholder="Apply Link"
  className="w-full border p-2 mb-2"
/>

<input
  value={notificationLink}
  onChange={(e) => setNotificationLink(e.target.value)}
  placeholder="Notification Link"
  className="w-full border p-2 mb-2"
/>

<input
  value={syllabusLink}
  onChange={(e) => setSyllabusLink(e.target.value)}
  placeholder="Syllabus Link"
  className="w-full border p-2 mb-2"
/>

<input
  value={admitCardLink}
  onChange={(e) => setAdmitCardLink(e.target.value)}
  placeholder="Admit Card Link"
  className="w-full border p-2 mb-2"
/>

<input
  value={resultLink}
  onChange={(e) => setResultLink(e.target.value)}
  placeholder="Result Link"
  className="w-full border p-2 mb-2"
/>

<input
  value={totalPost}
  onChange={(e) => setTotalPost(e.target.value)}
  placeholder="Total Posts"
  className="w-full border p-2 mb-2"
/>

<textarea
  value={vacancyDetails}
  onChange={(e) => setVacancyDetails(e.target.value)}
  placeholder="Vacancy Details"
  className="w-full border p-2 mb-2"
/>

<textarea
  value={qualification}
  onChange={(e) => setQualification(e.target.value)}
  placeholder={`10th Pass
12th Pass
ITI
Diploma
Graduate`}
  className="w-full border p-2 mb-2"
/>

<input
  value={ageLimit}
  onChange={(e) => setAgeLimit(e.target.value)}
  placeholder="Age Limit"
  className="w-full border p-2 mb-2"
/>

<textarea
  value={applicationFee}
  onChange={(e) => setApplicationFee(e.target.value)}
  placeholder={`General:100
OBC/EWS:100
SC/ST:0
PH:0
Female:0`}
  className="w-full border p-2 mb-2"
/>

<input
  value={selectionProcess}
  onChange={(e) => setSelectionProcess(e.target.value)}
  placeholder="Selection Process"
  className="w-full border p-2 mb-2"
/>

<input
  value={startDate}
  onChange={(e) => setStartDate(e.target.value)}
  placeholder="Start Date"
  className="w-full border p-2 mb-2"
/>

<input
  value={lastDate}
  onChange={(e) => setLastDate(e.target.value)}
  placeholder="Last Date"
  className="w-full border p-2 mb-2"
/>

<input
  value={examDate}
  onChange={(e) => setExamDate(e.target.value)}
  placeholder="Exam Date"
  className="w-full border p-2 mb-2"
/>

<h2 className="text-xl font-bold mt-4 mb-2">
  Vacancy Rows
</h2>

{vacancyRows.map((row, index) => (
  <div key={index} className="border p-3 mb-3 rounded">

    <input
      placeholder="Post Name"
      value={row.post_name}
      onChange={(e) => {
        const updated = [...vacancyRows];
        updated[index].post_name = e.target.value;
        setVacancyRows(updated);
      }}
      className="w-full border p-2 mb-2"
    />

    <input
      placeholder="General"
      value={row.general}
      onChange={(e) => {
        const updated = [...vacancyRows];
        updated[index].general = e.target.value;
        setVacancyRows(updated);
      }}
      className="w-full border p-2 mb-2"
    />

    <input
      placeholder="EWS"
      value={row.ews}
      onChange={(e) => {
        const updated = [...vacancyRows];
        updated[index].ews = e.target.value;
        setVacancyRows(updated);
      }}
      className="w-full border p-2 mb-2"
    />

    <input
      placeholder="OBC"
      value={row.obc}
      onChange={(e) => {
        const updated = [...vacancyRows];
        updated[index].obc = e.target.value;
        setVacancyRows(updated);
      }}
      className="w-full border p-2 mb-2"
    />

    <input
      placeholder="SC"
      value={row.sc}
      onChange={(e) => {
        const updated = [...vacancyRows];
        updated[index].sc = e.target.value;
        setVacancyRows(updated);
      }}
      className="w-full border p-2 mb-2"
    />

    <input
      placeholder="ST"
      value={row.st}
      onChange={(e) => {
        const updated = [...vacancyRows];
        updated[index].st = e.target.value;
        setVacancyRows(updated);
      }}
      className="w-full border p-2 mb-2"
    />

    <input
      placeholder="Total"
      value={row.total}
      onChange={(e) => {
        const updated = [...vacancyRows];
        updated[index].total = e.target.value;
        setVacancyRows(updated);
      }}
      className="w-full border p-2 mb-2"
    />

    <textarea
      placeholder="Eligibility"
      value={row.eligibility}
      onChange={(e) => {
        const updated = [...vacancyRows];
        updated[index].eligibility = e.target.value;
        setVacancyRows(updated);
      }}
      className="w-full border p-2"
    />
  </div>
))}

<button
  type="button"
  onClick={() =>
    setVacancyRows([
      ...vacancyRows,
      {
        post_name: "",
        general: "",
        ews: "",
        obc: "",
        sc: "",
        st: "",
        total: "",
        eligibility: "",
      },
    ])
  }
  className="bg-green-600 text-white px-4 py-2 rounded mb-4"
>
  + Add Vacancy Row
</button>

<h2 className="text-xl font-bold mt-6 mb-2">
  Post Details
</h2>

{postDetails.map((row, index) => (
  <div key={index} className="border p-3 mb-3 rounded">

    <input
      placeholder="Post Name"
      value={row.post_name}
      onChange={(e) => {
        const updated = [...postDetails];
        updated[index].post_name = e.target.value;
        setPostDetails(updated);
      }}
      className="w-full border p-2 mb-2"
    />

    <input
      placeholder="Total Post"
      value={row.total_post}
      onChange={(e) => {
        const updated = [...postDetails];
        updated[index].total_post = e.target.value;
        setPostDetails(updated);
      }}
      className="w-full border p-2 mb-2"
    />

    <textarea
      placeholder="Eligibility"
      value={row.eligibility}
      onChange={(e) => {
        const updated = [...postDetails];
        updated[index].eligibility = e.target.value;
        setPostDetails(updated);
      }}
      className="w-full border p-2"
    />
  </div>
))}

<button
  type="button"
  onClick={() =>
    setPostDetails([
      ...postDetails,
      {
        post_name: "",
        total_post: "",
        eligibility: "",
      },
    ])
  }
  className="bg-purple-600 text-white px-4 py-2 rounded mb-4"
>
  + Add Post Detail
</button>

        <button onClick={saveNotice} className="bg-blue-600 text-white px-4 py-2 rounded">
          Save
        </button>
      </div>
    </main>
  );
}