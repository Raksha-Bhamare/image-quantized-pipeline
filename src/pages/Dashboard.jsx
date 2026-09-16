import { useMemo, useState } from "react";

function Dashboard({ onContinue }) {
  const [search, setSearch] = useState("");
  const [rows, setRows] = useState(10);

  const projects = [
    {
      id: 1,
      name: "Eurosat",
      type: "IMAGE PIPELINE",
      createdAt: "09/05/2026, 8:10 PM",
    },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) =>
      project.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-white text-slate-800">

      {/* ================= HEADER ================= */}
      <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-500">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <div className="flex items-center gap-4">

            {/* Logo */}
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow-sm">
              <div className="text-center leading-none">
                <div className="text-xl">🖼️</div>

                <div className="text-[9px] font-bold text-blue-900">
                  Image
                </div>

                <div className="text-[9px] font-bold text-blue-900">
                  Pipeline
                </div>
              </div>
            </div>

            <h1 className="text-3xl font-normal text-white">
              Image Quantized Pipeline
            </h1>

          </div>

          <div className="hidden rounded-full bg-white/10 px-4 py-2 text-sm text-white sm:block">
            Pipeline Management
          </div>

        </div>
      </header>

      {/* ================= MAIN ================= */}
      <main className="mx-auto max-w-7xl px-6 py-10">

        {/* ================= EXISTING PIPELINES ================= */}
        <section>
          <h2 className="text-3xl font-bold text-blue-700">
            Existing Pipelines
          </h2>

          <p className="mt-2 text-base text-slate-500">
            Manage your existing image quantized pipeline projects
          </p>
        </section>

        {/* ================= NEW PROJECT ================= */}
        <button
          type="button"
          className="mt-8 w-full rounded-xl border-2 border-dashed border-blue-200 bg-blue-50 px-6 py-8 text-center transition hover:bg-blue-100"
        >
          <div className="text-4xl font-light text-blue-600">
            +
          </div>

          <div className="mt-3 text-xl font-semibold text-blue-700">
            New Project
          </div>
        </button>

        {/* ================= STATS ================= */}
        <section className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">

          {/* TOTAL PROJECTS */}
          <div className="rounded-xl border border-yellow-200 bg-yellow-50 px-6 py-7">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-slate-600">
                  Total Projects
                </p>

                <p className="mt-2 text-3xl font-bold text-slate-800">
                  1
                </p>
              </div>

              <div className="text-2xl">
                📁
              </div>

            </div>
          </div>

          {/* COMPLETED */}
          <div className="rounded-xl border border-green-200 bg-green-50 px-6 py-7">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-slate-600">
                  Completed
                </p>

                <p className="mt-2 text-3xl font-bold text-slate-800">
                  1
                </p>
              </div>

              <div className="text-2xl text-green-600">
                ✓
              </div>

            </div>
          </div>

          {/* FAILED */}
          <div className="rounded-xl border border-red-200 bg-red-50 px-6 py-7">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-slate-600">
                  Failed
                </p>

                <p className="mt-2 text-3xl font-bold text-slate-800">
                  0
                </p>
              </div>

              <div className="text-2xl text-red-500">
                !
              </div>

            </div>
          </div>

        </section>

        {/* ================= PIPELINE DASHBOARD ================= */}
        <section className="mt-10 rounded-xl border border-slate-200 bg-white shadow-sm">

          {/* TITLE */}
          <div className="px-6 py-6">

            <h2 className="text-xl font-bold text-slate-800">
              Pipeline Management Dashboard (Local)
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              View and manage all your pipeline projects
            </p>

          </div>

          {/* ================= CONTROLS ================= */}
          <div className="flex flex-col gap-4 px-6 pb-5 md:flex-row md:items-center md:justify-between">

            {/* ROWS */}
            <div className="flex items-center gap-2">

              <span className="text-sm text-slate-500">
                Rows:
              </span>

              <select
                value={rows}
                onChange={(e) => setRows(Number(e.target.value))}
                className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>

            </div>

            {/* SEARCH */}
            <div className="relative w-full md:w-72">

              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                🔍
              </span>

              <input
                type="text"
                placeholder="Search Project Name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-md border border-slate-300 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-blue-500"
              />

            </div>

          </div>

          {/* ================= TABLE ================= */}
          <div className="overflow-x-auto">

            <table className="min-w-[850px] w-full text-left">

              <thead className="border-y border-slate-200 bg-slate-50">

                <tr>

                  <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500">
                    ID
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500">
                    Project Name
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500">
                    Type
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500">
                    Created At
                  </th>

                  <th className="px-6 py-4 text-center text-xs font-semibold uppercase text-slate-500">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredProjects.slice(0, rows).map((project) => (

                  <tr
                    key={project.id}
                    className="border-b border-slate-100"
                  >

                    <td className="px-6 py-5 text-sm">
                      {project.id}
                    </td>

                    <td className="px-6 py-5 text-sm font-medium">
                      {project.name}
                    </td>

                    <td className="px-6 py-5">

                      <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-600">
                        {project.type}
                      </span>

                    </td>

                    <td className="whitespace-nowrap px-6 py-5 text-sm text-slate-500">
                      {project.createdAt}
                    </td>

                    <td className="px-6 py-5 text-center">

                      <button
                        type="button"
                        className="text-slate-400 hover:text-red-500"
                        title="Delete"
                      >
                        🗑️
                      </button>

                    </td>

                  </tr>

                ))}

                {filteredProjects.length === 0 && (

                  <tr>

                    <td
                      colSpan="5"
                      className="px-6 py-10 text-center text-slate-500"
                    >
                      No projects found.
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

          {/* ================= PAGINATION ================= */}
          <div className="flex flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">

            <p className="text-sm text-slate-500">

              Showing 1 to {filteredProjects.length} of{" "}

              {filteredProjects.length} entries

            </p>

            <div className="flex items-center gap-2">

              <button
                type="button"
                className="rounded-md border border-slate-200 px-4 py-2 text-sm text-slate-400"
              >
                Prev
              </button>

              <span className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
                1
              </span>

              <button
                type="button"
                className="rounded-md border border-slate-200 px-4 py-2 text-sm text-slate-400"
              >
                Next
              </button>

            </div>

          </div>

        </section>

        {/* ================= CONTINUE ================= */}
        <div className="mt-8 flex justify-end">

          <button
            type="button"
            onClick={onContinue}
            className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-500 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
          >
            Continue →
          </button>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;