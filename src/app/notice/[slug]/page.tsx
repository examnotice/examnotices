
export const dynamic = "force-dynamic";

import Link from "next/link";
import { supabase } from "@/lib/supabase";
export default async function NoticePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;



  const { data: notice, error } = await supabase
    .from("notices")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();
  if (error) {
    return <h1>Database Error: {error.message}</h1>;
  }
const { data: vacancyRows } = await supabase
  .from("vacancy_rows")
  .select("*")
  .eq("notice_id", notice.id);

 if (!notice) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Notice Not Found</h1>
      <p>Slug: {slug}</p>
      <p>Supabase URL: {process.env.NEXT_PUBLIC_SUPABASE_URL}</p>
    </div>
  );
}

  return (
    <main className="min-h-screen bg-slate-100 p-5">

      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow">

        <h1 className="text-3xl font-bold text-center mb-8">
          {notice.title}
        </h1>
        <p className="text-gray-600 text-center mb-8">
  {notice.description}
</p>

 {/* Important Dates */}
 {notice.importantdates?.length > 0 && (
<div className="border rounded-xl p-5 mb-6">

<h2 className="text-xl font-bold mb-4">
Important Dates
</h2>

<div className="space-y-3">

{notice.importantdates.map((item:any,index:number)=>(
<div
key={index}
className="bg-blue-100 border-l-4 border-blue-600 p-4 rounded"
>
<p className="font-semibold">
{item.event}
</p>

<p>
{item.date}
</p>

</div>
))}

</div>
</div>
)}

{/* Eligibility Details */}
<div className="border rounded-xl p-5 mb-6">

<h2 className="text-xl font-bold mb-4">
Eligibility Details
</h2>

<div className="grid md:grid-cols-3 gap-4">

<div className="bg-slate-100 p-4 rounded-lg">
<p className="font-semibold">Minimum Age</p>
<p>{notice.minimumage}</p>
</div>

<div className="bg-slate-100 p-4 rounded-lg">
<p className="font-semibold">Maximum Age</p>
<p>{notice.maximumage}</p>
</div>

<div className="bg-slate-100 p-4 rounded-lg">
<p className="font-semibold">Age Relaxation</p>
<p>{notice.agerelaxation}</p>
</div>

</div>

</div>

<div className="border rounded-xl p-5 mb-6">

<h2 className="text-xl font-bold mb-4">
Application Fee
</h2>

<div className="grid md:grid-cols-3 gap-4">

<div className="bg-slate-100 p-4 rounded-lg">
<p className="font-semibold">General</p>
<p>{notice.feegeneral}</p>
</div>

<div className="bg-slate-100 p-4 rounded-lg">
<p className="font-semibold">EWS</p>
<p>{notice.feeews}</p>
</div>

<div className="bg-slate-100 p-4 rounded-lg">
<p className="font-semibold">OBC</p>
<p>{notice.feeobc}</p>
</div>

<div className="bg-slate-100 p-4 rounded-lg">
<p className="font-semibold">SC</p>
<p>{notice.feesc}</p>
</div>

<div className="bg-slate-100 p-4 rounded-lg">
<p className="font-semibold">ST</p>
<p>{notice.feest}</p>
</div>

<div className="bg-slate-100 p-4 rounded-lg">
<p className="font-semibold">Female</p>
<p>{notice.feefemale}</p>
</div>

<div className="bg-slate-100 p-4 rounded-lg">
<p className="font-semibold">PH</p>
<p>{notice.feeph}</p>
</div>

</div>

</div>
{notice.showpostdetails &&
 notice.postdetails?.length > 0 && (
<div className="border rounded-xl p-5 mb-6">

  <h2 className="text-xl font-bold mb-4">
    Post Details
  </h2>

  <div className="overflow-x-auto">

    <table className="w-full border border-collapse">

      <thead>
        <tr className="bg-slate-200">
          <th className="border p-3">Post Name</th>
          <th className="border p-3">Total Post</th>
          <th className="border p-3">Eligibility</th>
        </tr>
      </thead>

      <tbody>

        {notice.postdetails.map((row:any,index:number)=>(
          <tr key={index}>

            <td className="border p-3">
              {row.post_name}
            </td>

            <td className="border p-3">
              {row.total_post}
            </td>

            <td className="border p-3">
              {row.eligibility}
            </td>

          </tr>
        ))}

      </tbody>

    </table>

  </div>

</div>
)}

{notice.showvacancydetails &&
 notice.vacancyrows?.length > 0 && (
<div className="border rounded-xl p-5 mb-6">

  <h2 className="text-xl font-bold mb-4">
    Vacancy Details
  </h2>

  <div className="overflow-x-auto">

    <table className="w-full border border-collapse">

      <thead>
        <tr className="bg-slate-200">
          <th className="border p-2">Post Name</th>
          <th className="border p-2">General</th>
          <th className="border p-2">EWS</th>
          <th className="border p-2">OBC</th>
          <th className="border p-2">SC</th>
          <th className="border p-2">ST</th>
          <th className="border p-2">Total</th>
        </tr>
      </thead>

      <tbody>

        {notice.vacancyrows.map((row:any,index:number)=>(
          <tr key={index}>
            <td className="border p-2">{row.post_name}</td>
            <td className="border p-2">{row.general}</td>
            <td className="border p-2">{row.ews}</td>
            <td className="border p-2">{row.obc}</td>
            <td className="border p-2">{row.sc}</td>
            <td className="border p-2">{row.st}</td>
            <td className="border p-2">{row.total}</td>
          </tr>
        ))}

      </tbody>

    </table>

  </div>

</div>
)}

       

        

       

{/* Important Links */}
        <div className="border rounded-xl p-5 mb-6">
          <h2 className="text-xl font-bold mb-4">
            Important Links
          </h2>

          <div className="flex flex-col gap-3">

            <div className="space-y-3">

{notice.applylink && (
<a
  href={notice.applylink}
  target="_blank"
  className="block bg-green-600 text-white text-center py-3 rounded-lg font-bold"
>
  Apply Online
</a>
)}

{notice.notificationlink && (
<a
  href={notice.notificationlink}
  target="_blank"
  className="block bg-blue-600 text-white text-center py-3 rounded-lg font-bold"
>
  Download Notification
</a>
)}

{notice.admitcardlink && (
<a
  href={notice.admitcardlink}
  target="_blank"
  className="block bg-yellow-600 text-white text-center py-3 rounded-lg font-bold"
>
  Download Admit Card
</a>
)}

{notice.resultlink && (
<a
  href={notice.resultlink}
  target="_blank"
  className="block bg-red-600 text-white text-center py-3 rounded-lg font-bold"
>
  Check Result
</a>
)}

{notice.syllabuslink && (
<a
  href={notice.syllabuslink}
  target="_blank"
  className="block bg-orange-600 text-white text-center py-3 rounded-lg font-bold"
>
  Download Syllabus
</a>
)}

{notice.officialWebsite && (
<a
  href={notice.officialWebsite}
  target="_blank"
  className="block bg-purple-600 text-white text-center py-3 rounded-lg font-bold"
>
  Official Website
</a>
)}

</div>

          </div>
        </div>

        <Link
          href="/"
          className="inline-block bg-slate-800 text-white px-5 py-3 rounded-lg"
        >
          ← Back To Home
        </Link>

      </div>

    </main>
  );
}