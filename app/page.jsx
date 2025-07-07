"use client";
import Contact from "@/components/Contact/Contact";
import Education from "@/components/Education/Education";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Services from "@/components/Services/Services";
import Skills from "@/components/skills/Skills";
import Summary from "@/components/Summary/Summary";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";


export default function Home() {
  // Scroll Progress Bar
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.getElementById("progressBar").style.width = scrolled + "%";
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function updateProgressBar() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
  }

  return (
    <section className="bg-gray-100 text-gray-800">
      <ToastContainer theme="dark" position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div className="progress-container">
        <div className="progress-bar" id="progressBar"></div>
      </div>
      <Hero />
      <Summary />
      <Services />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <footer className=" bg-secondary py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-200">© {new Date().getFullYear()} Abdulrahman Abaly. All rights reserved.</p>
          <p className="text-gray-200">Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </section>
  );
}
