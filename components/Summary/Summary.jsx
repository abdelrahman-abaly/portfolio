"use client";
import Image from 'next/image';
import React, { useEffect } from 'react'
import about from "../../assets/about.png";

export default function Summary() {
    useEffect(() => {
        const fadeElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');

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

        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener('load', checkScroll);
            window.removeEventListener('scroll', checkScroll);
        };
    }, []);

    return (
        // <!-- Summary Section -->
        <section id="summary" className="section-padding bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center fade-in">About Me</h2>
                <div className="max-w-5xl mx-auto flex justify-between items-center flex-col md:flex-row">
                    <div>
                        <p className="text-lg mb-6 fade-in">
                            I am a dedicated Back-End Developer with a strong focus on building robust, scalable, and secure web applications. Specializing in Node.js, Express, and MongoDB, I design and implement efficient server-side logic that powers modern web platforms.
                        </p>
                        <p className="text-lg mb-6 fade-in">
                            With a deep understanding of RESTful API design, database architecture, and authentication systems, I deliver back-end solutions that are both high-performing and easy to maintain. I take pride in writing clean, modular code and continuously expanding my knowledge to keep up with the evolving JavaScript ecosystem. My goal is always to create seamless integrations that support exceptional front-end experiences.
                        </p>
                    </div>

                    <Image src={about} alt="About Me" className="w-96 h-96 rounded-lg slide-in-right" />

                </div>
            </div>
        </section>
    )
}
