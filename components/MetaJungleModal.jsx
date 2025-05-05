// components/modals/MetaJungleModal.jsx
"use client";

import React from "react";

export default function MetaJungleModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white overflow-y-auto z-[9999]">
      <div className="w-full mx-auto relative">
        {/* Modal Content */}
        <div className="flex flex-col-2 items-left">
          <div className="flex flex-col w-[20%] pt-[5vw] pr-[2vw] pb-[1vw] pl-[3vw] h-screen justify-between">
            <div className="flex flex-col items-left ">
              <div>
                <p className="text-[4rem] text-[#0a0a0a] tracking-tight font-bricolage mb-4 ">
                  MetaJungle
                </p>
              </div>
              <div className="text-[1.2rem] text-gray-800 mb-16">
                <h4 className="font-semibold mb-4">Role & Responsibilities</h4>
                <ul className="list-none list-inside text-[1rem] space-y-[2vh]">
                  <li>UI/UX Designer using Figma</li>
                  <li>
                    Designed responsive creator, artist, and collection pages
                  </li>
                  <li>Created reusable components and design system specs</li>
                  <li>
                    Collaborated with frontend developers for design handoff
                  </li>
                </ul>
              </div>
              <div className="text-[1.2rem] text-gray-800">
                <h4 className="font-bold mb-4">Figma Design</h4>
                <div className="hover:text-gray-800 text-gray-500">
                  <a
                    href="https://www.figma.com/design/yyiBXpxCaS3sPfF70EKFSb/MetaJungle-2.0"
                    target="_blank"
                    className="text-[1rem]"
                  >
                    View Full Figma File →
                  </a>
                </div>
              </div>
            </div>
            <div>
              {/* Close Button */}
              <button
                onClick={onClose}
                className="text-[1.2rem] text-gray-500 hover:text-gray-800"
              >
                Close x
              </button>
            </div>
          </div>
          <div className="grid grid-cols-[0.75fr_1fr] gap-[9vw] px-[3vw] py-[6vw]">
            <h1 className="text-[1.8rem] text-[#333333] tracking-tight mb-4 ">
              NFT Marketplace UI Redesign
            </h1>
            <p className="text-[1.2rem] text-gray-500 leading-tight mt-2 ">
              MetaJungle is a Web3 NFT marketplace that needed a redesign of its
              creator, artist, and collection pages to enhance user trust,
              engagement, and clarity. The original UI suffered from poor visual
              hierarchy, inconsistent layouts, and limited scalability across
              breakpoints, making it difficult for users to distinguish between
              creators and collections or explore rich media content. I led the
              redesign using Figma to develop a modular, responsive interface
              system aligned with MetaJungle’s brand identity, prioritizing
              structure, usability, and visual consistency.
              <br />
              <br /> In addition to design, I actively contributed to the
              frontend implementation using React and Tailwind CSS. One of the
              key technical challenges was handling highly variable content
              types and layouts across devices without breaking the experience.
              I addressed this by building reusable, utility-first component
              structures and collaborating closely with developers to ensure
              fidelity between design and code. This project reflects my hybrid
              ability to think like a designer while delivering clean, scalable
              frontend code optimized for performance and maintainability.
            </p>
          </div>
        </div>

        <section className="space-y-6 text-gray-800 text-lg leading-relaxed">
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
