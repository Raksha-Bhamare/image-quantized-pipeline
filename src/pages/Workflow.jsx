import { useState } from "react";

function Workflow() {
  const [step, setStep] = useState(1);
  const [executionCompleted, setExecutionCompleted] = useState(false);

  const [configStates, setConfigStates] = useState({
    "Loading Data Pipeline": true,
    "Saliency Visualisation Pipeline": true,
    "Performance Testing": false,
    "Remove Previous Results": false,
    "DeepXplore Implementation": true,
    "FoolBox Attack": true,
    "ART Implementation": true,
    "All Black Box Execution Only": false,
    "Model Tuning Implementation": true,
    "Metamorphic Testing Pipeline": true,
    "Model Quantization": true,
    "Modeling Pipeline": false,
    "Model Privacy": true,
    "Metamorphic Misclassified Visualisation": true,
  });

  const steps = [
    {
      id: 1,
      title: "Project Setup",
      subtitle: "Create and configure project",
      icon: "▣",
    },
    {
      id: 2,
      title: "Test Runs",
      subtitle: "Create and manage test runs",
      icon: "🧪",
    },
    {
      id: 3,
      title: "Assets & Models",
      subtitle: "Upload images and select models",
      icon: "↥",
    },
    {
      id: 4,
      title: "Main Config",
      subtitle: "Change Configurations of your model",
      icon: "⚙",
    },
    {
      id: 5,
      title: "Execution & Review",
      subtitle: "Review & Run the pipeline",
      icon: "▶",
    },
  ];

  const classificationImages = [
    "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=300&q=80",
  ];

  const goNext = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const goPrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const toggleConfig = (name) => {
    setConfigStates((previous) => ({
      ...previous,
      [name]: !previous[name],
    }));
  };

  const executePipeline = () => {
    setExecutionCompleted(true);
  };

  const goBackToPipelines = () => {
    setStep(1);
    setExecutionCompleted(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">

      {/* ================= HEADER ================= */}
      <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-500">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">

          <div className="flex items-center gap-3 sm:gap-4">

            {/* LOGO */}
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white shadow-sm sm:h-16 sm:w-16">
              <div className="text-center leading-none">
                <div className="text-lg sm:text-xl">
                  🖼️
                </div>

                <div className="text-[8px] font-bold text-blue-900 sm:text-[9px]">
                  Image
                </div>

                <div className="text-[8px] font-bold text-blue-900 sm:text-[9px]">
                  Pipeline
                </div>
              </div>
            </div>

            <h1 className="text-xl font-normal text-white sm:text-3xl">
              Image Quantized Pipeline
            </h1>

          </div>

          <div className="hidden rounded-full bg-white/10 px-4 py-2 text-sm text-white sm:block">
            Pipeline Management
          </div>

        </div>
      </header>

      {/* ================= MAIN ================= */}
      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-10">

        {/* ================= PAGE TITLE ================= */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
            Image Pipeline Workflow
          </h2>

          <p className="mt-2 text-sm text-slate-500 sm:text-base">
            Follow the steps to configure and execute your pipeline
          </p>
        </div>

        {/* ================= WORKFLOW STEPPER ================= */}
        <div className="mb-10 overflow-x-auto">
          <div className="flex min-w-[900px] items-start justify-between">

            {steps.map((item, index) => {
              const active = step === item.id;
              const completed = step > item.id;
              const disabled = step < item.id;

              return (
                <div
                  key={item.id}
                  className="flex flex-1 items-start"
                >

                  {/* STEP ITEM */}
                  <button
                    type="button"
                    onClick={() => {
                      if (!disabled) {
                        setStep(item.id);
                      }
                    }}
                    className="flex min-w-[145px] flex-col items-center text-center"
                  >

                    {/* ICON */}
                    <div
                      className={[
                        "flex h-12 w-12 items-center justify-center rounded-full border-2 text-lg transition",
                        active
                          ? "border-blue-600 bg-blue-600 text-white shadow-md"
                          : completed
                          ? "border-green-500 bg-green-500 text-white"
                          : "border-slate-300 bg-slate-100 text-slate-400",
                      ].join(" ")}
                    >
                      {completed ? "✓" : item.icon}
                    </div>

                    {/* TITLE */}
                    <div
                      className={[
                        "mt-3 text-sm font-semibold",
                        active
                          ? "text-blue-600"
                          : completed
                          ? "text-green-600"
                          : "text-slate-400",
                      ].join(" ")}
                    >
                      {item.title}
                    </div>

                    {/* SUBTITLE */}
                    <div className="mt-1 max-w-[150px] text-xs text-slate-400">
                      {item.subtitle}
                    </div>

                  </button>

                  {/* CONNECTING LINE */}
                  {index < steps.length - 1 && (
                    <div
                      className={[
                        "mt-6 h-0.5 flex-1",
                        step > item.id
                          ? "bg-green-500"
                          : "bg-slate-200",
                      ].join(" ")}
                    />
                  )}

                </div>
              );
            })}

          </div>
        </div>

        {/* ================= PROJECT SETUP ================= */}
        {step === 1 && (
          <section>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-800">
                Project Setup
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Create and configure project
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white shadow-sm">

              <div className="border-b border-slate-200 px-6 py-5">
                <h4 className="text-lg font-bold text-slate-800">
                  Project Details
                </h4>

                <p className="mt-1 text-sm text-slate-500">
                  Configure your image pipeline project
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 px-6 py-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Project Name
                  </label>

                  <input
                    type="text"
                    value="Eurosat"
                    readOnly
                    className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Pipeline Type
                  </label>

                  <input
                    type="text"
                    value="Image Quantized Pipeline"
                    readOnly
                    className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm outline-none"
                  />
                </div>

              </div>

            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={goNext}
                className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-500 px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
              >
                Continue →
              </button>
            </div>

          </section>
        )}

        {/* ================= TEST RUNS ================= */}
        {step === 2 && (
          <section>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-800">
                Test Runs
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Manage test runs for your pipeline
              </p>
            </div>

            <div className="mb-6 flex justify-end">
              <button
                type="button"
                className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white"
              >
                + New Test Run
              </button>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

              <div className="px-6 py-5">
                <h4 className="text-lg font-bold">
                  Testrun Dashboard
                </h4>
              </div>

              <div className="flex flex-col gap-4 px-6 pb-5 md:flex-row md:items-center md:justify-between">

                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-500">
                    Rows:
                  </span>

                  <select className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm">
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                  </select>
                </div>

                <input
                  type="text"
                  placeholder="Search TestRun"
                  className="rounded-md border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-500"
                />

              </div>

              <div className="overflow-x-auto">

                <table className="min-w-[950px] w-full text-left text-sm">

                  <thead className="border-y border-slate-200 bg-slate-50">
                    <tr>
                      <th className="px-6 py-4">ID</th>
                      <th className="px-6 py-4">Project Name</th>
                      <th className="px-6 py-4">Testrun Name</th>
                      <th className="px-6 py-4">Description</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Created At</th>
                      <th className="px-6 py-4">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-b border-slate-100">

                      <td className="px-6 py-5">
                        1
                      </td>

                      <td className="px-6 py-5 font-medium">
                        Eurosat
                      </td>

                      <td className="px-6 py-5">
                        Eurosat_testrun
                      </td>

                      <td className="px-6 py-5">
                        Testing image classification
                      </td>

                      <td className="px-6 py-5">
                        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                          Active
                        </span>
                      </td>

                      <td className="whitespace-nowrap px-6 py-5 text-slate-500">
                        09/05/2026, 8:10 PM
                      </td>

                      <td className="px-6 py-5">
                        <button
                          type="button"
                          className="rounded-md bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-600"
                        >
                          View Result
                        </button>
                      </td>

                    </tr>
                  </tbody>

                </table>

              </div>

              <div className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">

                <p className="text-sm text-slate-500">
                  Showing 1 to 1 of 1 entries
                </p>

                <div className="flex gap-2">
                  <button
                    type="button"
                    className="rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-400"
                  >
                    Prev
                  </button>

                  <span className="rounded-md bg-blue-600 px-3 py-2 text-sm text-white">
                    1
                  </span>

                  <button
                    type="button"
                    className="rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-400"
                  >
                    Next
                  </button>
                </div>

              </div>

            </div>

            <div className="mt-8 flex justify-between">

              <button
                type="button"
                onClick={goPrevious}
                className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-600"
              >
                ← Previous Step
              </button>

              <button
                type="button"
                onClick={goNext}
                className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-500 px-7 py-3 text-sm font-semibold text-white"
              >
                Continue →
              </button>

            </div>

          </section>
        )}

        {/* ================= ASSETS & MODELS ================= */}
        {step === 3 && (
          <section>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-800">
                Images & Models
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Upload your dataset and configure model settings
              </p>
            </div>

            {/* PROJECT INFORMATION */}
            <div className="mb-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 p-5 text-white">

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

                <div>
                  <p className="text-xs text-blue-100">
                    Project Name
                  </p>

                  <p className="mt-1 font-semibold">
                    Eurosat
                  </p>
                </div>

                <div>
                  <p className="text-xs text-blue-100">
                    Test Run
                  </p>

                  <p className="mt-1 font-semibold">
                    Eurosat_testrun
                  </p>
                </div>

                <div>
                  <p className="text-xs text-blue-100">
                    Description
                  </p>

                  <p className="mt-1 truncate font-semibold">
                    Testing image classification
                  </p>
                </div>

              </div>

            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

              {/* DATASET CARD */}
              <div className="rounded-xl border border-slate-200 bg-white shadow-sm">

                <div className="rounded-t-xl bg-gradient-to-r from-blue-600 to-indigo-500 px-6 py-5 text-white">
                  <h4 className="text-lg font-bold">
                    Upload Datasets
                  </h4>
                </div>

                <div className="space-y-5 px-6 py-6">

                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
                    >
                      Upload Images
                    </button>

                    <button
                      type="button"
                      className="rounded-md border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-600"
                    >
                      Upload ZIP File
                    </button>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Dataset Name
                    </label>

                    <input
                      value="Eurosat"
                      readOnly
                      className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Class
                    </label>

                    <input
                      value="Industrial"
                      readOnly
                      className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm"
                    />
                  </div>

                  <div className="rounded-lg border-2 border-dashed border-blue-200 bg-blue-50 p-6 text-center">

                    <p className="font-semibold text-blue-700">
                      Add Images
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Minimum 5 images
                    </p>

                    <button
                      type="button"
                      className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
                    >
                      Select Images
                    </button>

                  </div>

                  <button
                    type="button"
                    className="text-sm font-semibold text-blue-600"
                  >
                    + Add New Class
                  </button>

                  <button
                    type="button"
                    className="w-full rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white"
                  >
                    Upload Image Classes
                  </button>

                </div>

              </div>

              {/* MODEL CARD */}
              <div className="rounded-xl border border-slate-200 bg-white shadow-sm">

                <div className="rounded-t-xl bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-5 text-white">
                  <h4 className="text-lg font-bold">
                    Upload Model
                  </h4>
                </div>

                <div className="space-y-5 px-6 py-6">

                  <h5 className="text-lg font-semibold">
                    AI Model Upload
                  </h5>

                  <button
                    type="button"
                    className="w-full rounded-lg border-2 border-dashed border-slate-300 px-5 py-8 text-sm text-slate-500"
                  >
                    Select Models
                  </button>

                  <div className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
                    ✓ model.h5 file uploaded
                  </div>

                  <div className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
                    ✓ quantized_model.tflite file uploaded
                  </div>

                  <button
                    type="button"
                    className="w-full rounded-lg bg-purple-600 py-3 text-sm font-semibold text-white"
                  >
                    Upload Model
                  </button>

                </div>

              </div>

            </div>

            <div className="mt-8 flex justify-between">

              <button
                type="button"
                onClick={goPrevious}
                className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-600"
              >
                ← Previous Step
              </button>

              <button
                type="button"
                onClick={goNext}
                className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-500 px-7 py-3 text-sm font-semibold text-white"
              >
                Continue →
              </button>

            </div>

          </section>
        )}

        {/* ================= MAIN CONFIG ================= */}
        {step === 4 && (
          <section>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-800">
                Main Config
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Modify configurations for your existing AI model training pipelines.
              </p>
            </div>

            {/* PROJECT INFORMATION BAR */}
            <div className="mb-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 p-5 text-white">

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

                <div>
                  <p className="text-xs uppercase text-blue-100">
                    Project Name
                  </p>

                  <p className="mt-1 font-semibold">
                    Eurosat
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase text-blue-100">
                    Test Run
                  </p>

                  <p className="mt-1 font-semibold">
                    Eurosat_testrun
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase text-blue-100">
                    Description
                  </p>

                  <p className="mt-1 font-semibold">
                    Testing image classification
                  </p>
                </div>

              </div>

            </div>

            {/* CONFIGURATION CARD */}
            <div className="rounded-xl border border-slate-200 bg-white shadow-sm">

              <div className="border-b border-slate-200 px-6 py-5">
                <h4 className="text-xl font-bold">
                  Pipeline Configuration
                </h4>
              </div>

              <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 lg:grid-cols-4">

                {[
                  "Loading Data Pipeline",
                  "Saliency Visualisation Pipeline",
                  "Performance Testing",
                  "Remove Previous Results",
                  "DeepXplore Implementation",
                  "FoolBox Attack",
                  "ART Implementation",
                  "All Black Box Execution Only",
                  "Model Tuning Implementation",
                  "Metamorphic Testing Pipeline",
                  "Model Quantization",
                  "Modeling Pipeline",
                  "Model Privacy",
                  "Metamorphic Misclassified Visualisation",
                ].map((name) => {
                  const isOn = configStates[name];

                  return (
                    <div
                      key={name}
                      className="flex min-h-[86px] items-center justify-between gap-3 rounded-lg border border-slate-200 px-4 py-4"
                    >

                      <div className="min-w-0">
                        <p className="text-sm font-medium leading-5 text-slate-700">
                          {name}
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          set_execution
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleConfig(name)}
                        aria-label={`Toggle ${name}`}
                        className={[
                          "relative h-6 w-11 shrink-0 rounded-full transition-colors duration-200",
                          isOn ? "bg-black" : "bg-slate-200",
                        ].join(" ")}
                      >
                        <span
                          className={[
                            "absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200",
                            isOn ? "translate-x-6" : "translate-x-1",
                          ].join(" ")}
                        />
                      </button>

                    </div>
                  );
                })}

              </div>

            </div>

            {/* LOADING DATA CONFIG */}
            <div className="mt-6 rounded-xl border border-slate-200 bg-white shadow-sm">

              <button
                type="button"
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold">
                  Loading Data Config
                </span>

                <span className="text-slate-400">
                  ˅
                </span>
              </button>

            </div>

            <div className="mt-8 flex justify-between">

              <button
                type="button"
                onClick={goPrevious}
                className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-600"
              >
                ← Previous Step
              </button>

              <button
                type="button"
                onClick={goNext}
                className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-500 px-7 py-3 text-sm font-semibold text-white"
              >
                Continue →
              </button>

            </div>

          </section>
        )}

        {/* ================= EXECUTION & REVIEW ================= */}
        {step === 5 && (
          <section>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-800">
                Execution
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Run the pipeline and monitor real-time progress
              </p>
            </div>

            {/* TOP TWO CARDS */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

              {/* CONFIGURATION */}
              <div className="rounded-xl border border-slate-200 bg-white shadow-sm lg:col-span-1">

                <div className="border-b border-slate-200 bg-slate-50 px-6 py-5">
                  <h4 className="flex items-center gap-2 text-xl font-bold">
                    ⚙ Configuration
                  </h4>

                  <p className="mt-1 text-sm text-slate-500">
                    Review your pipeline settings
                  </p>
                </div>

                <div className="space-y-5 px-6 py-6">

                  <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-4">
                    <span className="text-sm font-medium text-slate-600">
                      Project Name
                    </span>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                      Eurosat
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-4">
                    <span className="text-sm font-medium text-slate-600">
                      Test run name
                    </span>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                      Eurosat_testrun
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-4">
                    <span className="text-sm font-medium text-slate-600">
                      Pipeline Type
                    </span>

                    <span className="rounded-full bg-purple-50 px-3 py-1 text-sm text-purple-600">
                      image
                    </span>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-slate-600">
                      Models Selected
                    </p>

                    <div className="mt-3 flex flex-col gap-2">
                      <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-600">
                        model.h5
                      </span>

                      <span className="w-fit rounded-full bg-purple-50 px-3 py-1 text-sm text-purple-600">
                        quantized_model.tflite
                      </span>
                    </div>
                  </div>

                </div>

              </div>

              {/* CLASSIFICATION DATA */}
              <div className="rounded-xl border border-slate-200 bg-white shadow-sm lg:col-span-2">

                <div className="border-b border-slate-200 bg-slate-50 px-6 py-5">
                  <h4 className="flex items-center gap-2 text-xl font-bold">
                    ⚙ Classification Data
                  </h4>

                  <p className="mt-1 text-sm text-slate-500">
                    Classification Images
                  </p>
                </div>

                <div className="px-6 py-6">

                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-700">
                      Industrial
                    </p>

                    <span className="rounded-full border border-green-300 px-3 py-1 text-xs font-medium text-green-600">
                      5 Samples
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">

                    {classificationImages.map((image, index) => (
                      <div
                        key={index}
                        className="aspect-square overflow-hidden rounded-md border border-slate-300 bg-slate-100"
                      >
                        <img
                          src={image}
                          alt={`Classification sample ${index + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </div>

            {/* EXECUTION COMPLETED MESSAGE */}
            {executionCompleted && (
              <div className="mt-6 rounded-xl border border-green-300 bg-green-50 px-5 py-5">

                <div className="flex items-start gap-3">

                  <div className="text-xl text-green-600">
                    ☑
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-700">
                      Pipeline Execution Completed
                    </h4>

                    <p className="mt-1 text-sm text-green-700">
                      Pipeline completed successfully with no critical errors.
                    </p>

                    <button
                      type="button"
                      className="mt-4 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                      View Result
                    </button>
                  </div>

                </div>

              </div>
            )}

            {/* BOTTOM BUTTONS */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <button
                type="button"
                onClick={goPrevious}
                className="w-fit rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-600"
              >
                ← Previous Step
              </button>

              <div className="flex flex-col gap-3 sm:flex-row">

                <button
                  type="button"
                  onClick={goBackToPipelines}
                  className="rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
                >
                  Back to Pipelines
                </button>

                {!executionCompleted && (
                  <button
                    type="button"
                    onClick={executePipeline}
                    className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-500 px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
                  >
                    Execute Pipeline
                  </button>
                )}

              </div>

            </div>

          </section>
        )}

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="mt-12 border-t border-slate-200 py-6 text-center text-sm text-slate-400">
        aiensured
      </footer>

    </div>
  );
}

export default Workflow;