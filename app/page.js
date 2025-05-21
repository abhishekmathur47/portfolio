"use client";
import React from 'react';
import MetaJungleModal from "@/components/MetaJungleModal.jsx";
import { useState, useEffect } from 'react'; // Ensure useEffect is imported

export default function Portfolio() {
  const [showMetaJungleModal, setShowMetaJungleModal] = useState(false);

  useEffect(() => {
    // This effect ensures the body scroll is hidden when the modal is open
    if (showMetaJungleModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup function to remove the class if the component unmounts while modal is open
    return () => document.body.classList.remove("overflow-hidden");
  }, [showMetaJungleModal]);

  return (
    <main className="font-sans">
      {/* Navbar - (commented out in your original, leaving as is) */}
      {/* <nav className="w-full shadow-md z-50 bg-[#384C37] text-[#F0F0EC]">
          <div className="w-[90%] mx-auto flex justify-between items-center px-8 py-4">
            <h1 className="text-xl font-bold">Abhishek Mathur</h1>
            <div className="space-x-8 text-base">
              <a href="#contact" className="hover:underline">LinkedIn</a>
            </div>
          </div>
        </nav> */}

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-start text-left px-4 py-20 bg-[#384C37] text-[#F0F0EC] md:px-8 lg:px-16">
        {/* Adjusted margins and font sizes for responsiveness */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.5rem] font-bricolage leading-tight ml-0 md:ml-[25%] mb-4 px-4 sm:px-0">
          Greeting,<br />I'm Abhishek Mathur
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[6rem] font-mono text-left font-bold ml-0 md:ml-[20%] mb-4 px-4 sm:px-0">
          - Frontend Developer<br />& UI/UX Designer
        </h2>
        {/* <p className="text-lg md:text-xl text-gray-600 max-w-xl">Bringing intuitive design and responsive code together to build seamless digital experiences.</p> */}
        {/* <a href="#work" className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">View My Work</a> */}
      </section>

      {/* About Section */}
      <section id="about" className="w-full mx-auto relative py-12 px-4 md:py-24 md:px-8 lg:px-16">
        <div className="w-full max-w-7xl mx-auto"> {/* Use max-w-7xl for better control, then mx-auto */}
          {/* Mobile: stacked columns, Desktop: two-column side-by-side */}
          <div className="flex flex-col lg:flex-row lg:items-start"> {/* Corrected flex-col-2 to flex-col and added lg:flex-row */}
            {/* Left column (About Me title) */}
            {/* Full width on mobile, 20% on desktop */}
            {/* Adjusted padding for responsiveness */}
            <div className="w-full lg:w-[20%] pt-6 pr-4 pb-2 pl-4 lg:pt-8 lg:pr-8 lg:pb-4 lg:pl-12">
              {/* Responsive font size */}
              <h3 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-semibold font-bricolage text-[#1F1F1F]">
                About Me
              </h3>
            </div>
            {/* Right column (About Me content) */}
            {/* Full width on mobile, 80% on desktop */}
            {/* Adjusted padding for responsiveness */}
            <div className="w-full lg:w-[80%] px-4 py-4 md:px-8 md:py-6 lg:px-12 lg:py-8">
              {/* Responsive font size and line height */}
              <p className="text-base sm:text-xl lg:text-[1.3rem] text-[#555555] leading-relaxed tracking-tight text-left mb-4">
                Originally from India, I began my tech career there before moving to the U.S. in 2021 to pursue a Master’s in Information Technology at Arizona State University. I worked across multiple regions, including the Midwest, gaining global experience in building design-led, scalable frontend systems. Now back in India, I continue to bring that international perspective into every product I design and develop. <br /> <br />Whether I’m sketching out component systems or refining visual hierarchies, I enjoy creating interfaces that feel intuitive, purposeful, and globally inspired.
              </p>
              {/* Responsive font size */}
              <p className="mt-4 text-base sm:text-lg lg:text-[1.2rem] text-[#555555]">
                Tools: *INSERT MARQUE*<br /> Figma, Next.js, Tailwind CSS, Framer Motion, GitHub
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-12 px-4 md:py-24 md:px-8 lg:px-16 w-full max-w-7xl mx-auto rounded-xl">
        <div className="w-full">
          {/* Mobile: stacked columns, Desktop: two-column side-by-side */}
          <div className="flex flex-col lg:flex-row lg:items-start"> {/* Corrected flex-col-2 to flex-col and added lg:flex-row */}
            {/* Left column (My Work title) */}
            {/* Full width on mobile, 20% on desktop */}
            {/* Adjusted padding for responsiveness */}
            <div className="w-full lg:w-[20%] pt-6 pr-4 pb-2 pl-4 lg:pt-8 lg:pr-8 lg:pb-4 lg:pl-12">
              {/* Responsive font size */}
              <h3 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-semibold font-bricolage text-[#1F1F1F]">
                My Work
              </h3>
            </div>
            {/* Right column (MetaJungle project details) */}
            {/* Full width on mobile, 80% on desktop */}
            {/* Adjusted padding for responsiveness */}
            <div className="w-full lg:w-[80%] px-4 py-4 md:px-8 md:py-6 lg:px-12 lg:py-8">
              {/* Responsive font sizes */}
              <h1 className="text-xl sm:text-3xl lg:text-[2rem] font-semibold">MetaJungle</h1>
              <h4 className="text-lg sm:text-2xl lg:text-[1.8rem] text-[#1F1F1F] mb-2">NFT Marketplace UI Design</h4>
              <p className="text-base sm:text-xl lg:text-[1.2rem] text-[#555555] leading-relaxed tracking-tight mb-4">
                Redesigned creator, artist, and collection pages to improve user engagement and visual storytelling. Used Figma for prototyping and collaborated closely with devs to hand off responsive designs.
              </p>
              <button
                onClick={() => setShowMetaJungleModal(true)}
                className="bg-[#384C37] text-[#F0F0EC] px-6 py-2 rounded-full hover:bg-[#6B8E5E] text-base lg:text-[1.1rem]"
              >
                Read Case Study →
              </button>
            </div>
          </div>
        </div>
        {/* Conditional rendering for the modal */}
        {showMetaJungleModal && (
          <MetaJungleModal isOpen={showMetaJungleModal} onClose={() => setShowMetaJungleModal(false)} />
        )}
      </section>

      {/* Work Experience Section */}
      {/* Work Experience Section */}
      <section id="experience" className="py-12 px-4 md:py-24 md:px-8 lg:px-16 w-full max-w-7xl mx-auto rounded-xl">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row lg:items-start">
            <div className="w-full lg:w-[20%] pt-6 pr-4 pb-2 pl-4 lg:pt-8 lg:pr-8 lg:pb-4 lg:pl-12">
              <h3 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-semibold font-bricolage text-[#1F1F1F]">
                Years in the industry
              </h3>
            </div>
            {/* Right column (Experience details) - Uses a grid for 2 columns */}
            <div className="w-full lg:w-[80%] px-4 py-4 md:px-8 md:py-6 lg:px-12 lg:py-8">
              {/* Main grid for experience items: always 2 columns, with responsive gaps */}
              <div className="grid grid-cols-2 gap-x-4 sm:gap-x-8 md:gap-x-16 lg:gap-x-24 gap-y-6 sm:gap-y-8 lg:gap-y-12">

                {/* Clarivate Entry */}
                <React.Fragment>
                  {/* Column 1: Company and Dates */}
                  <div className="col-span-1">
                    <h4 className="text-xl sm:text-2xl lg:text-[1.5rem] tracking-tight text-[#1F1F1F]">
                      Clarivate
                    </h4>
                    <p className="text-base sm:text-lg lg:text-[1.2rem] text-[#555555]">
                      09/2024 - 03/2025
                    </p>
                  </div>
                  {/* Column 2: Role */}
                  <div className="col-span-1">
                    <h4 className="text-xl sm:text-2xl lg:text-[1.5rem] tracking-tight text-[#1F1F1F] ">
                      Full Stack Engineer
                    </h4>
                  </div>
                </React.Fragment>

                {/* MetaJungle Entry */}
                <React.Fragment>
                  {/* Column 1: Company and Dates */}
                  <div className="col-span-1">
                    <h4 className="text-xl sm:text-2xl lg:text-[1.5rem] tracking-tight text-[#1F1F1F]">
                      MetaJungle
                    </h4>
                    <p className="text-base sm:text-lg lg:text-[1.2rem] text-[#555555]">
                      07/2023 - 08/2024
                    </p>
                  </div>
                  {/* Column 2: Role */}
                  <div className="col-span-1">
                    <h4 className="text-xl sm:text-2xl lg:text-[1.5rem] tracking-tight text-[#1F1F1F] ">
                      Software Engineer
                    </h4>
                  </div>
                </React.Fragment>

                {/* Carvana Entry */}
                <React.Fragment>
                  {/* Column 1: Company and Dates */}
                  <div className="col-span-1">
                    <h4 className="text-xl sm:text-2xl lg:text-[1.5rem] tracking-tight text-[#1F1F1F]">
                      Carvana
                    </h4>
                    <p className="text-base sm:text-lg lg:text-[1.2rem] text-[#555555]">
                      05/2022 - 04/2023
                    </p>
                  </div>
                  {/* Column 2: Role */}
                  <div className="col-span-1">
                    <h4 className="text-xl sm:text-2xl lg:text-[1.5rem] tracking-tight text-[#1F1F1F] ">
                      Full Stack Engineer
                    </h4>
                  </div>
                </React.Fragment>

                {/* Zeus Learning Entry */}
                <React.Fragment>
                  {/* Column 1: Company and Dates */}
                  <div className="col-span-1">
                    <h4 className="text-xl sm:text-2xl lg:text-[1.5rem] tracking-tight text-[#1F1F1F]">
                      Zeus Learning
                    </h4>
                    <p className="text-base sm:text-lg lg:text-[1.2rem] text-[#555555]">
                      09/2019 - 05/2021
                    </p>
                  </div>
                  {/* Column 2: Role */}
                  <div className="col-span-1">
                    <h4 className="text-xl sm:text-2xl lg:text-[1.5rem] tracking-tight text-[#1F1F1F] ">
                      UI/UX Engineer
                    </h4>
                  </div>
                </React.Fragment>

                {/* ProCreator Solutions Entry */}
                <React.Fragment>
                  {/* Column 1: Company and Dates */}
                  <div className="col-span-1">
                    <h4 className="text-xl sm:text-2xl lg:text-[1.5rem] tracking-tight text-[#1F1F1F]">
                      ProCreator Solutions
                    </h4>
                    <p className="text-base sm:text-lg lg:text-[1.2rem] text-[#555555]">
                      05/2018 - 08/2019
                    </p>
                  </div>
                  {/* Column 2: Role */}
                  <div className="col-span-1">
                    <h4 className="text-xl sm:text-2xl lg:text-[1.5rem] tracking-tight text-[#1F1F1F] ">
                      UI/UX Engineer
                    </h4>
                  </div>
                </React.Fragment>

              </div> {/* End of main grid */}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-4 md:py-24 md:px-8 lg:px-16 bg-gray-50"> {/* Added a subtle background to contact section */}
        <div className="w-full max-w-xl mx-auto text-center">
          {/* Responsive font sizes */}
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6">Let’s Connect</h3>
          <p className="mb-4 text-base sm:text-xl text-gray-700">Feel free to reach out for freelance work, collaboration, or just to chat design & dev!</p>
          <p className="text-sm sm:text-lg">Email: <a className="underline hover:text-[#D6B95A]" href="mailto:amathu48@asu.edu">amathu48@asu.edu</a></p>
          <p className="text-sm sm:text-lg mt-1">LinkedIn: <a className="underline hover:text-[#D6B95A]" href="https://linkedin.com/in/abhishekmathur47" target="_blank" rel="noopener noreferrer">linkedin.com/in/abhishekmathur47</a></p>
        </div>
      </section>
    </main>
  );
}