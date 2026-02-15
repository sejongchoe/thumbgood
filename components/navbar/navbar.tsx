'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled
          ? 'rgba(0, 0, 0, 0.8)'
          : 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(10px)',
        borderBottom: scrolled
          ? '1px solid rgba(255, 255, 255, 0.1)'
          : '1px solid transparent',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '1rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src="/logo.png"
            alt="Nailart AI Logo"
            width={50}
            height={50}
            style={{ borderRadius: '8px', objectFit: 'contain' }}
          />
          <span
            style={{
              marginLeft: '0.75rem',
              fontSize: '1.1rem',
              fontWeight: 700,
              color: 'white',
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Nailart AI
          </span>
        </div>

        {/* Right side container */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
          {/* Navigation Links */}
          <div
            style={{
              display: 'flex',
              gap: '2rem',
              alignItems: 'center',
            }}
            className="nav-links"
          >
            <a
              href="#features"
              style={{
                color: 'rgba(255, 255, 255, 0.9)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                transition: 'color 0.2s',
                fontFamily: "'Space Grotesk', sans-serif",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)')
              }
            >
              Features
            </a>
            <a
              href="#pricing"
              style={{
                color: 'rgba(255, 255, 255, 0.9)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                transition: 'color 0.2s',
                fontFamily: "'Space Grotesk', sans-serif",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)')
              }
            >
              Pricing
            </a>
            <a
              href="#contact"
              style={{
                color: 'rgba(255, 255, 255, 0.9)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                transition: 'color 0.2s',
                fontFamily: "'Space Grotesk', sans-serif",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)')
              }
            >
              Contact
            </a>
          </div>

          {/* Get Started Button */}
          <a
            href="#get-started"
            style={{
              padding: '0.6rem 1.2rem',
              borderRadius: '8px',
              background: 'linear-gradient(180deg, rgba(255,255,255,.18), rgba(255,255,255,.06))',
              color: 'white',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.95rem',
              boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.28), 0 10px 30px rgba(0,0,0,.2)',
              backdropFilter: 'blur(6px) saturate(120%)',
              transition: 'transform 0.2s',
              fontFamily: "'Space Grotesk', sans-serif",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Mobile Styles */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}
