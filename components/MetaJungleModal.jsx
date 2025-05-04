
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
          className="absolute top-4 right-4 text-xl text-gray-600 hover:text-black"
        >
          Close x
        </button>

        {/* Main Content */}
        <h2 className="text-3xl font-bold mb-4">MetaJungle – NFT Marketplace UI Redesign</h2>

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

          {/* Add more sections as needed */}
        </section>
      </div>
    </div>
  );
}
