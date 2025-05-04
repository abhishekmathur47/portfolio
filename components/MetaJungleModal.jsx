// components/modals/MetaJungleModal.jsx
"use client";

import React from "react";

export default function MetaJungleModal({ isOpen, onClose }) {
  /**
   * A modal component for displaying a case study.
   *
   * @param {{ isOpen: boolean, onClose: () => void, data: { title: string, sections: { heading: string, content: string|string[] }[], figmaLink?: string } }}
   * @returns {JSX.Element}
   */
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white overflow-y-auto z-[9999] p-8">
      <div className="w-full mx-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 text-xl text-gray-600 hover:text-black"
        >
          Close x
        </button>

        {/* Main Content */}
        {/* <h2 className="text-3xl font-bold mb-4">MetaJungle – NFT Marketplace UI Redesign</h2>

        <section className="space-y-6 text-gray-800 text-lg leading-relaxed">
          <div>
            <h4 className="font-bold text-xl mb-1">Overview</h4>
            <p>A modular UI revamp for a Web3 NFT platform...</p>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-1">Role & Responsibilities</h4>
            <ul className="list-disc list-inside">
              <li>UI/UX Designer using Figma</li>
              <li>Designed responsive creator, artist, and collection pages</li>
              <li>Created reusable components and design system specs</li>
              <li>Collaborated with frontend developers for design handoff</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-1">Figma Design</h4>
            <a
              href="https://www.figma.com/design/yyiBXpxCaS3sPfF70EKFSb/MetaJungle-2.0"
              target="_blank"
              className="text-blue-600 underline"
              rel="noopener noreferrer"
            >
              View Full Figma File →
            </a>
          </div>

          Add more sections as needed
        </section> */}
        

        <h2 className="text-3xl font-bold mb-4">
          MetaJungle – NFT Marketplace UI Redesign
        </h2>

        <section className="space-y-6 text-gray-800 text-lg leading-relaxed">
          <div>
            <h4 className="font-bold text-xl mb-1">Overview</h4>
            <p>
              A modular UI revamp for a Web3 NFT platform, focused on improving
              usability, trust, and brand identity across creator, artist, and
              collection views.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-1">Role & Responsibilities</h4>
            <ul className="list-disc list-inside">
              <li>UI/UX Designer using Figma</li>
              <li>Designed responsive creator, artist, and collection pages</li>
              <li>Created reusable components and design system specs</li>
              <li>Collaborated with frontend developers for design handoff</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-1">Problem</h4>
            <p>
              Users struggled to differentiate creators from collections and
              navigate rich media content. Existing layouts lacked hierarchy,
              responsiveness, and clarity.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-1">Design Goals</h4>
            <ul className="list-disc list-inside">
              <li>Scalable layout for creator, artist, and collection views</li>
              <li>Strong hierarchy and improved mobile experience</li>
              <li>Reusable UI components for faster development</li>
              <li>Consistent visual language with branding elements</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-1">Design Process</h4>
            <p>
              Started with wireframes and gradually evolved to high-fidelity
              mockups. Used a 12-column grid, auto-layouts, and interactive
              components in Figma. Assets were annotated for developers with
              consistent spacing, naming conventions, and constraints for
              responsive development.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-1">Technical Collaboration</h4>
            <p>
              Worked closely with frontend developers to implement designs in
              React and Tailwind. Provided responsive specs, breakpoints, and
              export-ready SVGs. Tailored components for reusability across
              views to reduce code duplication and styling overrides.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-1">Figma Design</h4>
            <a
              href="https://www.figma.com/design/yyiBXpxCaS3sPfF70EKFSb/MetaJungle-2.0"
              target="_blank"
              className="text-blue-600 underline"
            >
              View Full Figma File →
            </a>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-1">Impact</h4>
            <p>
              The redesign created a more cohesive and accessible user
              experience while helping developers ship faster. The modular
              approach ensured scalability and reuse for future additions,
              streamlining product development across teams.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
