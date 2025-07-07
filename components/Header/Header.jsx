"use client";

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
    const router = useRouter();
    const pathname = usePathname();

    const handleScrollOrRedirect = (id) => {
        if (pathname === "/") {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            router.push(`/#${id}`);
        }

        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    };

    useEffect(() => {
        const toggleBtn = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');

        if (toggleBtn && mobileMenu) {
            const toggleHandler = () => mobileMenu.classList.toggle('hidden');
            toggleBtn.addEventListener('click', toggleHandler);

            return () => toggleBtn.removeEventListener('click', toggleHandler);
        }
    }, []);

    const links = [
        { id: 'hero', label: 'Home' },
        { id: 'summary', label: 'About' },
        { id: 'services', label: 'Services' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'education', label: 'Education' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <nav className="fixed w-full bg-gradient-primary text-white z-50 shadow-lg h-[50px]">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <a href="/" className="text-xl font-"> {"<"} Abdulrahman {"/>"} </a>

                <div className="hidden md:flex space-x-6">
                    {links.map(link => (
                        <button
                            key={link.id}
                            onClick={() => handleScrollOrRedirect(link.id)}
                            className="hover:text-gray-300 transition"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                <button className="md:hidden" id="menu-toggle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <div className="md:hidden hidden bg-primary bg-opacity-95 pb-4 px-4" id="mobile-menu">
                {links.map(link => (
                    <button
                        key={link.id}
                        onClick={() => handleScrollOrRedirect(link.id)}
                        className="block py-2 text-gray-200 hover:text-white w-full text-left"
                    >
                        {link.label}
                    </button>
                ))}
            </div>
        </nav>
    );
}
