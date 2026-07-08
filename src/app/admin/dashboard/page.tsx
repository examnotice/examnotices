"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function Dashboard() {
  const [showPostDetails, setShowPostDetails] = useState(true);
const [showVacancyDetails, setShowVacancyDetails] = useState(true);
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
const [eligibility, setEligibility] = useState("");
const [age, setAge] = useState("");
const [generalFee, setGeneralFee] = useState("");
const [scstFee, setScstFee] = useState("");
const [vacancyDetails, setVacancyDetails] = useState("");
const [minimumAge, setMinimumAge] = useState("");
const [maximumAge, setMaximumAge] = useState("");
const [ageRelaxation, setAgeRelaxation] = useState("");
const [feeGeneral, setFeeGeneral] = useState("");
const [feeEws, setFeeEws] = useState("");
const [feeObc, setFeeObc] = useState("");
const [feeSc, setFeeSc] = useState("");
const [feeSt, setFeeSt] = useState("");
const [feeFemale, setFeeFemale] = useState("");
const [feePh, setFeePh] = useState("");
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

const [importantDates, setImportantDates] = useState([
  {
    event: "",
    date: "",
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
   const slug = title
  .toLowerCase()
  .trim()
  .replace(/[\/\\]/g, "-")
  .replace(/[^a-z0-9\s-]/g, "")
  .replace(/\s+/g, "-")
  .replace(/-+/g, "-")
  .replace(/^-|-$/g, "");

    const { error } = await supabase.from("notices").insert([
      {
        title,
        slug,
        category,
        description,
        organization,
        showpostdetails: showPostDetails,
showvacancydetails: showVacancyDetails,
        minimumage: minimumAge,
maximumage: maximumAge,
agerelaxation: ageRelaxation,
        officialWebsite,
        totalpost: totalPost,
       applylink: applyLink,
notificationlink: notificationLink,
syllabuslink: syllabusLink,
admitcardlink: admitCardLink,
resultlink: resultLink,
importantdates: importantDates,
vacancydetails: vacancyDetails,
vacancyrows: vacancyRows,
postdetails: postDetails,
feegeneral: feeGeneral,
feeews: feeEws,
feeobc: feeObc,
feesc: feeSc,
feest: feeSt,
feefemale: feeFemale,
feeph: feePh,
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

<h2 className="text-xl font-bold mt-4 mb-2">
Age Details
</h2>

<input
  placeholder="Minimum Age"
  value={minimumAge}
  onChange={(e)=>setMinimumAge(e.target.value)}
  className="w-full border p-2 mb-2"
/>

<input
  placeholder="Maximum Age"
  value={maximumAge}
  onChange={(e)=>setMaximumAge(e.target.value)}
  className="w-full border p-2 mb-2"
/>

<textarea
  placeholder="Age Relaxation"
  value={ageRelaxation}
  onChange={(e)=>setAgeRelaxation(e.target.value)}
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

<input
  value={feeGeneral}
  onChange={(e) => setFeeGeneral(e.target.value)}
  placeholder="General Fee"
  className="w-full border p-2 mb-2"
/>

<input
  value={feeEws}
  onChange={(e) => setFeeEws(e.target.value)}
  placeholder="EWS Fee"
  className="w-full border p-2 mb-2"
/>

<input
  value={feeObc}
  onChange={(e) => setFeeObc(e.target.value)}
  placeholder="OBC Fee"
  className="w-full border p-2 mb-2"
/>

<input
  value={feeSc}
  onChange={(e) => setFeeSc(e.target.value)}
  placeholder="SC Fee"
  className="w-full border p-2 mb-2"
/>

<input
  value={feeSt}
  onChange={(e) => setFeeSt(e.target.value)}
  placeholder="ST Fee"
  className="w-full border p-2 mb-2"
/>

<input
  value={feeFemale}
  onChange={(e) => setFeeFemale(e.target.value)}
  placeholder="Female Fee"
  className="w-full border p-2 mb-2"
/>

<input
  value={feePh}
  onChange={(e) => setFeePh(e.target.value)}
  placeholder="PH Fee"
  className="w-full border p-2 mb-2"
/>

<h2 className="text-xl font-bold mt-4 mb-2">
Important Dates
</h2>

{importantDates.map((row, index) => (
  <div key={index} className="border p-3 mb-2 rounded">

    <input
      placeholder="Event Name"
      value={row.event}
      onChange={(e) => {
        const updated = [...importantDates];
        updated[index].event = e.target.value;
        setImportantDates(updated);
      }}
      className="w-full border p-2 mb-2"
    />

    <input
      placeholder="Date"
      value={row.date}
      onChange={(e) => {
        const updated = [...importantDates];
        updated[index].date = e.target.value;
        setImportantDates(updated);
      }}
      className="w-full border p-2"
    />

  </div>
))}
<button
type="button"
onClick={() =>
setImportantDates([
...importantDates,
{
event: "",
date: "",
},
])
}
className="bg-green-600 text-white px-4 py-2 rounded mb-4"
>
+ Add Date
</button>

<h2 className="text-xl font-bold mt-4 mb-2">

<label className="flex items-center gap-2 mb-3">
  <input
    type="checkbox"
    checked={showVacancyDetails}
    onChange={(e) => setShowVacancyDetails(e.target.checked)}
  />
  Show Vacancy Details
</label>

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
<label className="flex items-center gap-2 mb-3">
  <input
    type="checkbox"
    checked={showPostDetails}
    onChange={(e) => setShowPostDetails(e.target.checked)}
  />
  Show Post Details
</label>

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

        <button onClick={saveNotice}className="bg-blue-600 text-white px-4 py-2 rounded">
          Save
        </button>

<h2 className="text-2xl font-bold mt-8 mb-4">
Saved Notices
</h2>

{dbNotices.map((notice) => (
  <div
    key={notice.id}
    className="bg-white border p-4 rounded mb-3"
  >
    <h3 className="font-bold">
      {notice.title}
    </h3>

    <p>
      {notice.category}
    </p>

    <button
      onClick={() => {
        if (confirm("Delete this notice?")) {
          deleteNotice(notice.id);
        }
      }}
      className="bg-red-600 text-white px-3 py-2 rounded mt-2"
    >
      Delete
    </button>
  </div>
))}

      </div>
    </main>
  );
}