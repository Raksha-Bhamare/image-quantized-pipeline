import { useMemo, useState } from "react";

function Dashboard({ onContinue }) {
  const [search, setSearch] = useState("");
  const [rows, setRows] = useState(10);

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Eurosat",
      type: "IMAGE PIPELINE",
      createdAt: "09/05/2026, 8:10 PM",
      status: "Completed",
    },
  ]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) =>
      project.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [projects, search]);

  const totalProjects = projects.length;

  const completedProjects = projects.filter(
    (project) => project.status === "Completed"
  ).length;

  const failedProjects = projects.filter(
    (project) => project.status === "Failed"
  ).length;

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (confirmDelete) {
      setProjects((previousProjects) =>
        previousProjects.filter((project) => project.id !== id)
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fbff] text-slate-800">
      {/* ================= HEADER ================= */}
      <header className="bg-gradient-to-r from-[#087cf0] via-[#356de9] to-[#7054e9]">
        <div className="mx-auto flex min-h-[86px] max-w-[1500px] items-center justify-between px-5 py-3 sm:px-8">
          {/* LEFT BRANDING */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Image Pipeline Logo */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-white shadow-sm sm:h-14 sm:w-14">
              <div className="text-center leading-none">
                <div className="mb-1 text-xl text-blue-600 sm:text-2xl">
                  ▣
                </div>

                <div className="text-[7px] font-bold text-blue-800 sm:text-[8px]">
                  Image
                </div>

                <div className="text-[7px] font-bold text-blue-800 sm:text-[8px]">
                  Pipeline
                </div>
              </div>
            </div>

            <h1 className="text-lg font-semibold tracking-wide text-white sm:text-2xl lg:text-3xl">
              Image Quantized Pipeline
            </h1>
          </div>

          {/* AIENSURED LOGO */}
          <div className="flex items-center gap-1 text-white">
            <div className="relative flex h-8 w-8 items-center justify-center sm:h-10 sm:w-10">
              <span className="absolute left-0 h-7 w-7 rounded-full bg-gradient-to-br from-pink-300 to-pink-500 sm:h-9 sm:w-9" />
              <span className="absolute left-3 h-7 w-7 rounded-full bg-gradient-to-br from-purple-300 to-purple-500 opacity-90 sm:left-4 sm:h-9 sm:w-9" />
            </div>

            <span className="text-xl font-semibold tracking-tight sm:text-3xl">
              aiensured
            </span>

            <sup className="ml-0.5 text-[8px] sm:text-[10px]">®</sup>
          </div>
        </div>
      </header>

      {/* ================= MAIN ================= */}
      <main className="mx-auto max-w-[1400px] px-5 py-8 sm:px-8 lg:py-10">
        {/* ================= PAGE HEADING ================= */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-[#1768d5] sm:text-4xl">
            Existing Pipelines
          </h2>

          <p className="mt-2 text-base text-slate-500 sm:text-lg">
            Manage and monitor your AI model training pipelines
          </p>
        </section>

        {/* ================= SUMMARY CARDS ================= */}
        <section className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* NEW PROJECT */}
          <button
            type="button"
            onClick={onContinue}
            className="flex min-h-[150px] flex-col items-center justify-center rounded-xl border border-dashed border-blue-300 bg-blue-50 px-5 py-6 text-center transition hover:border-blue-500 hover:bg-blue-100"
          >
            <div className="text-5xl font-light leading-none text-blue-600">
              +
            </div>

            <div className="mt-4 text-lg font-semibold text-blue-700">
              New Project
            </div>
          </button>

          {/* TOTAL PROJECTS */}
          <div className="flex min-h-[150px] flex-col justify-center rounded-xl border border-yellow-200 bg-yellow-50 px-7 py-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-4xl font-semibold text-yellow-600">
                  {totalProjects}
                </p>

                <p className="mt-4 text-lg font-semibold text-yellow-700">
                  Total Projects
                </p>
              </div>

              <div className="text-4xl text-yellow-500">▢</div>
            </div>
          </div>

          {/* COMPLETED */}
          <div className="flex min-h-[150px] flex-col justify-center rounded-xl border border-green-200 bg-green-50 px-7 py-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-4xl font-semibold text-green-600">
                  {completedProjects}
                </p>

                <p className="mt-4 text-lg font-semibold text-green-700">
                  Completed
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-green-600 text-2xl font-bold text-green-600">
                ✓
              </div>
            </div>
          </div>

          {/* FAILED */}
          <div className="flex min-h-[150px] flex-col justify-center rounded-xl border border-red-200 bg-red-50 px-7 py-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-4xl font-semibold text-red-500">
                  {failedProjects}
                </p>

                <p className="mt-4 text-lg font-semibold text-red-600">
                  Failed
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-red-500 text-2xl font-bold text-red-500">
                !
              </div>
            </div>
          </div>
        </section>

        {/* ================= PIPELINE DASHBOARD ================= */}
        <section className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          {/* DASHBOARD HEADING + RIGHT CONTROLS */}
          <div className="flex flex-col gap-5 px-6 py-6 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="text-xl font-bold text-slate-800 sm:text-2xl">
              Pipeline Management Dashboard (Local)
            </h2>

            {/* SEARCH + ROWS ON RIGHT SIDE */}
            <div className="flex w-full items-center justify-end gap-4 lg:w-auto">
              {/* SEARCH */}
              <div className="relative w-full sm:w-64">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-4.35-4.35m1.35-5.4a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Z"
                    />
                  </svg>
                </span>

                <input
                  type="text"
                  placeholder="Search Project Name"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
                />
              </div>

              {/* ROWS */}
              <div className="flex shrink-0 items-center gap-2">
                <span className="text-sm text-slate-500">Rows:</span>

                <select
                  value={rows}
                  onChange={(event) => setRows(Number(event.target.value))}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-blue-500"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                </select>
              </div>
            </div>
          </div>

          {/* ================= TABLE ================= */}
          <div className="mx-6 overflow-x-auto rounded-lg border border-slate-200">
            <table className="min-w-[800px] w-full text-left">
              <thead className="border-b border-slate-200 bg-slate-50">
                <tr>
                  <th className="px-5 py-4 text-xs font-bold uppercase text-slate-500">
                    ID
                  </th>

                  <th className="px-5 py-4 text-xs font-bold uppercase text-slate-500">
                    Project Name
                  </th>

                  <th className="px-5 py-4 text-xs font-bold uppercase text-slate-500">
                    Type
                  </th>

                  <th className="px-5 py-4 text-xs font-bold uppercase text-slate-500">
                    Created At
                  </th>

                  <th className="px-5 py-4 text-center text-xs font-bold uppercase text-slate-500">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredProjects.slice(0, rows).map((project) => (
                  <tr
                    key={project.id}
                    className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50"
                  >
                    <td className="px-5 py-5 text-sm text-slate-700">
                      {project.id}
                    </td>

                    <td className="px-5 py-5 text-sm font-semibold text-slate-800">
                      {project.name}
                    </td>

                    <td className="px-5 py-5">
                      <span className="rounded-full bg-purple-50 px-3 py-1.5 text-[10px] font-bold text-purple-600">
                        {project.type}
                      </span>
                    </td>

                    <td className="whitespace-nowrap px-5 py-5 text-sm text-slate-500">
                      {project.createdAt}
                    </td>

                    <td className="px-5 py-5 text-center">
                      <button
                        type="button"
                        onClick={() => handleDelete(project.id)}
                        title="Delete project"
                        className="text-slate-400 transition hover:text-red-500"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mx-auto h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 7h12m-9 0V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7m-7 0 .7 12.1A1.5 1.5 0 0 0 10.2 20h3.6a1.5 1.5 0 0 0 1.5-1.4L16 7M10 11v5m4-5v5"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}

                {filteredProjects.length === 0 && (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-6 py-10 text-center text-sm text-slate-500"
                    >
                      No projects found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* ================= PAGINATION ================= */}
          <div className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-500">
              Showing {filteredProjects.length > 0 ? 1 : 0} to{" "}
              {Math.min(filteredProjects.length, rows)} of{" "}
              {filteredProjects.length} entries
            </p>

            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled
                className="cursor-not-allowed rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-400"
              >
                Prev
              </button>

              <span className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
                1
              </span>

              <button
                type="button"
                disabled
                className="cursor-not-allowed rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-400"
              >
                Next
              </button>
            </div>
          </div>
        </section>

        {/* ================= CONTINUE BUTTON ================= */}
        <div className="mt-8 flex justify-end">
          <button
            type="button"
            onClick={onContinue}
            className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-500 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
          >
            Continue&nbsp; →
          </button>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;