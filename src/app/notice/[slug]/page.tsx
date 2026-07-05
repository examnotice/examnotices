import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

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
  .single();

if (error || !notice) {
  return <h1>Notice Not Found</h1>;
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
        <div className="grid md:grid-cols-3 gap-4 mb-8">

          <div className="bg-green-600 text-white p-5 rounded-xl text-center">
            <p className="text-sm">Application Start</p>
            <p className="font-bold mt-2">
              {notice.startDate}
            </p>
          </div>

          <div className="bg-red-600 text-white p-5 rounded-xl text-center">
            <p className="text-sm">Last Date</p>
            <p className="font-bold mt-2">
              {notice.lastDate}
            </p>
          </div>

          <div className="bg-blue-600 text-white p-5 rounded-xl text-center">
            <p className="text-sm">Exam Date</p>
            <p className="font-bold mt-2">
              {notice.examDate}
            </p>
          </div>

        </div>
        <div className="overflow-x-auto mb-8">
  <table className="w-full border">

    <thead>
      <tr className="bg-slate-200">
        <th className="p-3 border">Event</th>
        <th className="p-3 border">Date</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td className="p-3 border">Application Start</td>
        <td className="p-3 border">{notice.startDate}</td>
      </tr>

      <tr>
        <td className="p-3 border">Last Date</td>
        <td className="p-3 border">{notice.lastDate}</td>
      </tr>

      <tr>
        <td className="p-3 border">Exam Date</td>
        <td className="p-3 border">{notice.examDate}</td>
      </tr>
    </tbody>

  </table>
</div>

        {/* Important Information */}
        <div className="overflow-x-auto mb-6">
  <table className="w-full border border-gray-300">

    <tbody>

      <tr className="border-b">
        <td className="p-3 font-bold">Organization</td>
        <td className="p-3">{notice.organization}</td>
      </tr>

      <tr className="border-b">
        <td className="p-3 font-bold">Qualification</td>
        <td className="p-3">{notice.qualification}</td>
      </tr>

      <tr className="border-b">
        <td className="p-3 font-bold">Age Limit</td>
        <td className="p-3">{notice.ageLimit}</td>
      </tr>

      <tr className="border-b">
        <td className="p-3 font-bold">Application Fee</td>
        <td className="p-3">{notice.applicationFee}</td>
      </tr>

      <tr className="border-b">
        <td className="p-3 font-bold">Selection Process</td>
        <td className="p-3">{notice.selectionProcess}</td>
      </tr>

    </tbody>

  </table>
</div>
       <table className="w-full border border-collapse">
  <tbody>
    <tr className="border">
      <td className="p-3 font-bold bg-slate-100">Post Name</td>
      <td className="p-3">{notice.title}</td>
    </tr>

    <tr className="border">
      <td className="p-3 font-bold bg-slate-100">Application Start</td>
      <td className="p-3">{notice.startDate}</td>
    </tr>

    <tr className="border">
      <td className="p-3 font-bold bg-slate-100">Last Date</td>
      <td className="p-3">{notice.lastDate}</td>
    </tr>

    <tr className="border">
      <td className="p-3 font-bold bg-slate-100">Exam Date</td>
      <td className="p-3">{notice.examDate}</td>
    </tr>

    <tr className="border">
      <td className="p-3 font-bold bg-slate-100">Qualification</td>
      <td className="p-3">
        {notice.eligibility || "Graduate"}
      </td>
    </tr>

    <tr className="border">
      <td className="p-3 font-bold bg-slate-100">Age Limit</td>
      <td className="p-3">
        {notice.age || "18-32 Years"}
      </td>
    </tr>
  </tbody>
</table>

        {/* Important Links */}
        <div className="border rounded-xl p-5 mb-6">
          <h2 className="text-xl font-bold mb-4">
            Important Links
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <a
              href="#"
              className="bg-green-600 text-white text-center py-3 rounded-lg font-bold"
            >
              Apply Online
            </a>

            <a
              href="#"
              className="bg-blue-600 text-white text-center py-3 rounded-lg font-bold"
            >
              Download Notification
            </a>

           <a
  href={notice.officialWebsite || "#"}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-purple-600 text-white text-center py-3 rounded-lg font-bold"
>
  Official Website
</a>

            <a
              href="#"
              className="bg-orange-600 text-white text-center py-3 rounded-lg font-bold"
            >
              Download Syllabus
            </a>

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