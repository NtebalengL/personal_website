import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import "./index.css";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-sky-50 dark:bg-blue-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <header className="flex justify-between items-center p-6 shadow-md dark:shadow-lg">
        <h1 className="text-3xl font-bold text-teal-600 dark:text-teal-300">Your Name</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-teal-100 dark:bg-teal-800"
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </header>

      <main className="p-6 space-y-16">
        <section className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold">Hi, I'm Your Name</h2>
          <p className="mt-2 text-lg">Aspiring Data Analyst & Software Engineer passionate about insights, systems, and scalable tech.</p>
        </section>

        <section className="max-w-5xl mx-auto">
          <h3 className="text-xl font-bold mb-4">About Me</h3>
          <p className="text-md leading-relaxed">
            I come from a Financial Accounting background and have transitioned into tech through self-learning, certifications, and hands-on projects. I'm passionate about using data and code to solve real-world problems.
          </p>
        </section>

        <section className="max-w-5xl mx-auto">
          <h3 className="text-xl font-bold mb-6">Portfolio</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-4 rounded-2xl bg-white dark:bg-blue-900 shadow-sm dark:shadow-md">
              <h4 className="text-lg font-semibold text-teal-700 dark:text-teal-300">Data Analysis Projects</h4>
              <ul className="list-disc ml-6 mt-2 text-sm">
                <li>Google Data Analytics Capstone</li>
                <li>Power BI Dashboard: Sales Trends</li>
              </ul>
            </div>
            <div className="p-4 rounded-2xl bg-white dark:bg-blue-900 shadow-sm dark:shadow-md">
              <h4 className="text-lg font-semibold text-teal-700 dark:text-teal-300">Software Engineering Projects</h4>
              <ul className="list-disc ml-6 mt-2 text-sm">
                <li>Python Automation Script</li>
                <li>Personal Budget Tracker (React)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-bold">Contact</h3>
          <p className="mt-2">Let’s connect on <a href="https://github.com/" className="text-teal-600 dark:text-teal-400 underline">GitHub</a> or <a href="https://linkedin.com/" className="text-teal-600 dark:text-teal-400 underline">LinkedIn</a>.</p>
        </section>
      </main>

      <footer className="text-center text-sm p-4 text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}
