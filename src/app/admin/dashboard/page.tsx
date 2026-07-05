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

        <button onClick={saveNotice} className="bg-blue-600 text-white px-4 py-2 rounded">
          Save
        </button>

        <hr className="my-5" />

        <h2 className="font-bold mb-3">Notices</h2>

        {dbNotices.map((item) => (
          <div key={item.id} className="border p-2 mb-2">
            <p>{item.title}</p>
            <button
              onClick={() => deleteNotice(item.id)}
              className="bg-red-600 text-white px-2 py-1 mt-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}