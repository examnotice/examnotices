
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

        {/* Eligibility Details */}
<div className="border rounded-xl p-5 mb-6">
  <h2 className="text-xl font-bold mb-4">
    Eligibility Details
  </h2>

  <div className="grid md:grid-cols-2 gap-4">

    <div className="bg-slate-100 p-4 rounded-lg">
      <p className="font-semibold">Eligibility</p>
      <p>{notice.eligibility || "Graduate"}</p>
    </div>

    <div className="bg-slate-100 p-4 rounded-lg">
      <p className="font-semibold">Age Limit</p>
      <p>{notice.age || "18-32 Years"}</p>
    </div>

    <div className="bg-slate-100 p-4 rounded-lg">
      <p className="font-semibold">General Fee</p>
      <p>{notice.fee?.general || "₹100"}</p>
    </div>

    <div className="bg-slate-100 p-4 rounded-lg">
      <p className="font-semibold">SC/ST Fee</p>
      <p>{notice.fee?.scst || "₹0"}</p>
    </div>

  </div>
</div>

        {/* Important Dates */}
       <div className="border rounded-xl p-5 mb-6">
  <h2 className="text-xl font-bold mb-4">
    Important Dates
  </h2>

  <div className="space-y-3">

    <div className="bg-green-100 border-l-4 border-green-600 p-4 rounded">
      <p className="font-semibold">
        Application Start
      </p>
      <p>{notice.startDate}</p>
    </div>

    <div className="bg-red-100 border-l-4 border-red-600 p-4 rounded">
      <p className="font-semibold">
        Last Date
      </p>
      <p>{notice.lastDate}</p>
    </div>

    <div className="bg-blue-100 border-l-4 border-blue-600 p-4 rounded">
      <p className="font-semibold">
        Exam Date
      </p>
      <p>{notice.examDate}</p>
    </div>

  </div>
</div>

<div className="border rounded-xl p-5 mb-6">
  <h2 className="text-xl font-bold mb-4">
    Qualification Details
  </h2>

  <div className="bg-slate-100 p-4 rounded-lg whitespace-pre-line">
    {notice.qualification || "Not Mentioned"}
  </div>
</div>

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