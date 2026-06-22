import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
        <span className="text-lg font-bold text-gray-900">ResumeMatch</span>
        <Link
          href="/analyze"
          className="bg-indigo-600 text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Try for free
        </Link>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-8 pt-24 pb-16 text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mb-6">
          AI-Powered Resume Analysis
        </span>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Land more interviews
          <br />
          <span className="text-indigo-600">with every application</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
          Paste your resume and a job description. Get an instant match score,
          see exactly what&apos;s missing, and receive AI-rewritten bullet points
          that speak the employer&apos;s language.
        </p>
        <Link
          href="/analyze"
          className="inline-block bg-indigo-600 text-white text-lg font-semibold px-8 py-4 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
        >
          Analyze my resume →
        </Link>
        <p className="mt-4 text-sm text-gray-400">No sign-up required · Free to use</p>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-8 py-16">
        <div className="grid sm:grid-cols-3 gap-8">
          <FeatureCard
            icon="📊"
            title="Match Score"
            description="See a 0–100 score showing how well your resume aligns with the job description, broken down by category."
          />
          <FeatureCard
            icon="🔍"
            title="Gap Analysis"
            description="Know exactly which required skills, keywords, and qualifications are missing from your resume."
          />
          <FeatureCard
            icon="✏️"
            title="Bullet Rewrites"
            description="Get AI-suggested rewrites for your bullet points that mirror the language and priorities of the role."
          />
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How it works
          </h2>
          <div className="space-y-8">
            <Step number={1} title="Paste your resume" description="Drop in the plain text of your resume — no formatting needed." />
            <Step number={2} title="Paste the job description" description="Copy the full job posting from any site." />
            <Step number={3} title="Get your analysis in seconds" description="Claude reads both and returns a match score, missing keywords, and rewritten bullets you can use right away." />
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/analyze"
              className="inline-block bg-indigo-600 text-white text-base font-semibold px-7 py-3.5 rounded-xl hover:bg-indigo-700 transition-colors"
            >
              Get started now →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-400 border-t border-gray-100">
        Built with Claude AI · {new Date().getFullYear()}
      </footer>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-50 rounded-2xl p-7 flex flex-col gap-3">
      <span className="text-3xl">{icon}</span>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-5 items-start">
      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-indigo-600 text-white font-bold text-sm flex items-center justify-center">
        {number}
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
}
