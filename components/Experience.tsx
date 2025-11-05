export default function Experience() {
  return (
    <section id="experience" className="relative min-h-screen px-12 py-24">
      <h2 className="text-6xl font-bold tracking-tight mb-16">EXPERIENCE</h2>
      <hr className="border-t border-[#3A3A3A] mb-16" />

      {/* TDSB Experience */}
      <div className="mb-24">
        <h3 className="text-4xl font-semibold mb-4">
          Toronto District School Board
        </h3>
        <p className="mb-4 text-gray-400">Canada’s largest school board</p>
        <p className="mb-4 text-gray-400">Jan 2024 — Dec 2024</p>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left column: position, location, etc */}
          <div className="space-y-4 text-gray-400">
            <div>
              <span className="block font-semibold text-white">Position</span>
              Junior Developer (Co-op)
            </div>
            <div>
              <span className="block font-semibold text-white">Location</span>
              Toronto, Ontario
            </div>
            <div>
              <span className="block font-semibold text-white">Industry</span>
              Public Education
            </div>
            <div>
              <span className="block font-semibold text-white">Website</span>
              <a
                href="https://www.tdsb.on.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-purple-400"
              >
                www.tdsb.on.ca ↗
              </a>
            </div>
          </div>

          {/* Right column: description */}
          <div className="space-y-6 text-gray-400">
            <p>
              At TDSB, I developed a new CMS module using C#, ASP.NET,
              Bootstrap, and MSSQL to replace a manual HTML system — improving
              workflow efficiency by over 80%.
            </p>
            <p>
              I enhanced stored procedures to boost SQL performance by 60%,
              supporting over 100 daily active users. I also handled 70% of
              incoming website-related requests, managing sprint planning in
              Agile with Azure DevOps.
            </p>
            <p>
              I collaborated closely with senior developers on sprint cycles,
              version control, and continuous integration. I strictly followed
              AODA & WCAG 2.0 accessibility standards to ensure inclusive web
              experiences.
            </p>
            <p>
              This experience deepened my interest in frontend technologies —
              I’m currently exploring React and Next.js to build accessible,
              scalable user interfaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
