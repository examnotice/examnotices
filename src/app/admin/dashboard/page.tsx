"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function Dashboard() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("job");
  const [description, setDescription] = useState("");
  const [organization, setOrganization] = useState("");
  const [officialWebsite, setOfficialWebsite] = useState("");
  const [qualification, setQualification] = useState("");
  const [ageLimit, setAgeLimit] = useState("");
  const [applicationFee, setApplicationFee] = useState("");
  const [selectionProcess, setSelectionProcess] = useState("");
  const [startDate, setStartDate] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [examDate, setExamDate] = useState("");

  const [dbNotices, setDbNotices] = useState<any[]>([]);

  useEffect(() => {
    loadNotices();
  }, []);

  async function loadNotices() {
    const { data } = await supabase
      .from("notices")
      .select("*")
      .order("id", { ascending: false });

    if (data) {
      setDbNotices(data);
    }
  }

  async function deleteNotice(id: number) {
    const ok = confirm("Delete this notice?");

    if (!ok) return;

    await supabase
      .from("notices")
      .delete()
      .eq("id", id);

    loadNotices();
  }

  async function saveNotice() {
    const slug = title
      .toLowerCase()
      .replaceAll(" ", "-");

    const { error } = await supabase
      .from("notices")
      .insert([
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
        },
      ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Notice Saved Successfully");

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

  return (
    <main className="min-h-screen p-6 bg-slate-100">
      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      <div className="bg-white p-5 rounded-xl shadow max-w-xl">

        <input
          type="text"
          placeholder="Notice Title"
          className="w-full border p-3 rounded mb-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          className="w-full border p-3 rounded mb-4"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="job">Job</option>
          <option value="admit">Admit Card</option>
          <option value="result">Result</option>
          <option value="answerkey">Answer Key</option>
          <option value="syllabus">Syllabus</option>
          <option value="admission">Admission</option>
        </select>

        <textarea
          placeholder="Description"
          className="w-full border p-3 rounded mb-4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="text"
          placeholder="Organization"
          className="w-full border p-3 rounded mb-4"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
        />

        <input
          type="text"
          placeholder="Official Website"
          className="w-full border p-3 rounded mb-4"
          value={officialWebsite}
          onChange={(e) => setOfficialWebsite(e.target.value)}
        />

        <input
          type="text"
          placeholder="Qualification"
          className="w-full border p-3 rounded mb-4"
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
        />

        <input
          type="text"
          placeholder="Age Limit"
          className="w-full border p-3 rounded mb-4"
          value={ageLimit}
          onChange={(e) => setAgeLimit(e.target.value)}
        />

        <input
          type="text"
          placeholder="Application Fee"
          className="w-full border p-3 rounded mb-4"
          value={applicationFee}
          onChange={(e) => setApplicationFee(e.target.value)}
        />

        <input
          type="text"
          placeholder="Selection Process"
          className="w-full border p-3 rounded mb-4"
          value={selectionProcess}
          onChange={(e) => setSelectionProcess(e.target.value)}
        />

        <input
          type="text"
          placeholder="Start Date"
          className="w-full border p-3 rounded mb-4"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <input
          type="text"
          placeholder="Last Date"
          className="w-full border p-3 rounded mb-4"
          value={lastDate}
          onChange={(e) => setLastDate(e.target.value)}
        />

        <input
          type="text"
          placeholder="Exam Date"
          className="w-full border p-3 rounded mb-4"
          value={examDate}
          onChange={(e) => setExamDate(e.target.value)}
        />

        <button
          onClick={saveNotice}
          className="bg-blue-600 text-white px-5 py-3 rounded"
        >
          Save Notice
        </button>

        <hr className="my-6" />

        <h2 className="text-xl font-bold mb-4">
          All Notices
        </h2>

        {dbNotices.map((item) => (
          <div
            key={item.id}
            className="border p-3 rounded mb-3 bg-slate-50"
          >
            <p className="font-bold">{item.title}</p>
            <p className="text-sm">{item.category}</p>

            <button
              onClick={() => deleteNotice(item.id)}
              className="bg-red-600 text-white px-3 py-1 rounded mt-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}