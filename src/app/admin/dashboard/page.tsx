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

  const [dbNotices, setDbNotices] = useState<any[]>([]);

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
       applylink: applyLink,
notificationlink: notificationLink,
syllabuslink: syllabusLink,
admitcardlink: admitCardLink,
resultlink: resultLink,
      },
    ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Saved!");

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
        <button onClick={saveNotice} className="bg-blue-600 text-white px-4 py-2 rounded">
          Save
        </button>
      </div>
    </main>
  );
}