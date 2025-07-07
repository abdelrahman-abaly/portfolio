"use client";
import React, { useState } from 'react';
import { projects } from '@/app/Data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilterClick = (filter) => {
    if (filter === 'all') {
      const shuffledProjects = [...projects].sort(() => Math.random() - 0.5);
      setActiveFilter('all');
      setFilteredProjects(shuffledProjects);
    } else {
      setActiveFilter(filter);
    }
  };

  // change the title of the page
  React.useEffect(() => {
    document.title = 'Projects | Abdulrahman';
  }, []);

  // Scroll Progress Bar
  React.useEffect(() => {
    const handleScroll = () => {
      updateProgressBar();
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function updateProgressBar() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
  }

  // Scroll animation for elements
  React.useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');

    function checkScroll() {
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('appear');
        }
      });
    }

    // Initial check on page load
    window.addEventListener('load', checkScroll);

    // Check for new elements becoming visible as user scrolls
    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('load', checkScroll);
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  React.useEffect(() => {
    const filterButtons = document.querySelectorAll('.project-filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
      button.addEventListener('click', function () {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active-filter', 'bg-gradient-primary', 'text-white'));
        filterButtons.forEach(btn => btn.classList.add('bg-gray-200'));

        // Add active class to clicked button
        this.classList.add('active-filter', 'bg-gradient-primary', 'text-white');
        this.classList.remove('bg-gray-200');

        const filter = this.getAttribute('data-filter');

        projectItems.forEach(item => {
          const tags = item.getAttribute('data-tags');

          if (filter === 'all' || tags.includes(filter)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });

    return () => {
      filterButtons.forEach(button => {
        button.removeEventListener('click', () => { });
      });
    };
  }, []);

  // State to control visibility of "Back to top" button
  const [showTopBtn, setShowTopBtn] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="progress-container">
        <div className="progress-bar" id="progressBar"></div>
      </div>
      {/* <!-- Projects Header --> */}
      <header className="bg-gradient-primary text-white pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-xl max-w-2xl mx-auto">A collection of back-end projects featuring secure APIs, optimized databases, and scalable server-side solutions built with Node.js and MongoDB.</p>
        </div>
      </header>

      <div className="container mx-auto px-4">

        <div className="flex justify-center mb-6 space-x-4 mt-5 flex-wrap">
          <button
            className={`project-filter-btn px-4 py-2 rounded ${activeFilter === 'all' ? 'bg-gradient-primary text-white' : 'bg-gray-200'}`}
            onClick={() => handleFilterClick('all')}
          >
            All
          </button>
          <button
            className={`project-filter-btn px-4 py-2 rounded ${activeFilter === 'html' ? 'bg-gradient-primary text-white' : 'bg-gray-200'}`}
            onClick={() => handleFilterClick('html')}
          >
            HTML/CSS
          </button>
          <button
            className={`project-filter-btn px-4 py-2 rounded ${activeFilter === 'js' ? 'bg-gradient-primary text-white' : 'bg-gray-200'}`}
            onClick={() => handleFilterClick('js')}
          >
            JavaScript
          </button>
          <button
            className={`project-filter-btn px-4 py-2 rounded ${activeFilter === 'react' ? 'bg-gradient-primary text-white' : 'bg-gray-200'}`}
            onClick={() => handleFilterClick('react')}
          >
            React
          </button>
          <button
            className={`project-filter-btn px-4 py-2 rounded ${activeFilter === 'next' ? 'bg-gradient-primary text-white' : 'bg-gray-200'}`}
            onClick={() => handleFilterClick('next')}
          >
            Next.js
          </button>
          <button
            className={`project-filter-btn px-4 py-2 rounded ${activeFilter === 'node' ? 'bg-gradient-primary text-white' : 'bg-gray-200'}`}
            onClick={() => handleFilterClick('node')}
          >
            node.js
          </button>
        </div>


        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
          {filteredProjects
            .filter(project => activeFilter === 'all' || (project.dataTags && project.dataTags.includes(activeFilter)))
            .map((project) => (
              <div
                key={project.id}
                className="bg-gray-100 rounded-lg shadow-md hover:shadow-lg overflow-hidden project-item transition-shadow"
                style={{ transitionDelay: project.delay }}
              >
                <div className="flex h-52 justify-center text-white items-center">
                  <Image src={project.projectImg} alt="Project Image" width={500} height={300} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <div className="flex space-x-4">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition">
                        <FaGithub size={20} />
                      </a>
                      <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition">
                        <FaExternalLinkAlt size={20} />
                      </a>
                    </div>
                  </div>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex mb-4 space-x-3">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-200 rounded text-sm px-2 py-1">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">Want to see more? Check out my <a href="https://github.com/abdelrahman-abaly" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a> for more projects!</p>
        </div>

      </div>
      <footer className="mt-16 bg-secondary py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-200">© {new Date().getFullYear()} Abdulrahman Abaly. All rights reserved.</p>
          <p className="text-gray-200">Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>

      {/* arrow to top button */}
      {showTopBtn && (
        <a
          href="#"
          className="fixed bottom-4 right-4 bg-gradient-primary text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-secondary flex items-center justify-center z-50"
          aria-label="Back to top"
          role="button"
          title="Back to top"
          onClick={e => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7-7-7 7m14 6v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6m14 0l-7-7-7 7"
            />
          </svg>
        </a>
      )}
    </>
  )
}
