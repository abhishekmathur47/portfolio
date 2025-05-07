"use client";

import MetaJungleModal from "@/components/MetaJungleModal.jsx";
import { useState } from 'react';
import { useEffect } from 'react';
export default function Portfolio() {

  const [showMetaJungleModal, setShowMetaJungleModal] = useState(false);

  useEffect(() => {
    if (showMetaJungleModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [showMetaJungleModal]);



  return (
    <main className="font-sans">
      {/* Navbar */}
      {/* <nav className="w-full shadow-md z-50 bg-[#384C37] text-[#F0F0EC]">
        <div className="w-[90%] mx-auto flex justify-between items-center px-8 py-4">
          <h1 className="text-xl font-bold">Abhishek Mathur</h1>
          <div className="space-x-8 text-base">
            <a href="#contact" className="hover:underline">LinkedIn</a>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-left text-center px-4 pt-20 bg-[#384C37] text-[#F0F0EC]" id="hero">
        <h1 className="text-lg md:text-[2.5rem] font-bricolage leading-tight text-left  ml-[25%] mb-4">Greeting,<br />I'm Abhishek Mathur</h1>
        <h2 className="text-4xl md:text-[6rem] font-mono text-left font-bold ml-[20%] mb-4">- Frontend Developer<br />& UI/UX Designer</h2>
        {/* <p className="text-lg md:text-xl text-gray-600 max-w-xl">Bringing intuitive design and responsive code together to build seamless digital experiences.</p> */}
        {/* <a href="#work" className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">View My Work</a> */}
      </section>

      {/* About Section  bg-[radial-gradient(circle,_rgba(107,142,94,0.25),_transparent)] */}
      <section className="w-full mx-auto relative py-24 px-4" id="about">
        <div className="w-[80%] mx-auto">
          <div className="flex flex-col-2 items-left">
            <div className=" w-[20%] pt-[3vw] pr-[2vw] pb-[1vw] pl-[4vw]">
              <h3 className="text-[2.5rem] font-semibold font-bricolage text-[#1F1F1F]">About Me</h3>
            </div>
            <div className="w-[80%] px-[3vw] py-[3vw]">
              <p className="text-[1.3rem] text-[#555555]  leading-relaxed tracking-tight text-left">Originally from India, I began my tech career there before moving to the U.S. in 2021 to pursue a Master’s in Information Technology at Arizona State University. I worked across multiple regions, including the Midwest, gaining global experience in building design-led, scalable frontend systems. Now back in India, I continue to bring that international perspective into every product I design and develop. <br /> <br />Whether I’m sketching out component systems or refining visual hierarchies, I enjoy creating interfaces that feel intuitive, purposeful, and globally inspired.</p>
              <p className="mt-4 text-[1.2rem] text-[#555555]">Tools: *INSERT MARQUE*<br /> Figma, Next.js, Tailwind CSS, Framer Motion, GitHub</p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section  bg-linear-to-bl text-[#F0F0EC] from-[#6B8E5E] to-[#384C37] */}
      <section className="mx-auto relative py-24 px-4 w-[80%] mx-auto rounded-xl" id="work">
        <div className="">
          <div className="flex flex-col-2 items-left">
            <div className=" w-[20%] pt-[3vw] pr-[2vw] pb-[1vw] pl-[4vw]">
              <h3 className="text-[2.5rem] font-semibold font-bricolage text-[#1F1F1F]"> My Work</h3>
            </div>
            <div className="w-[80%] px-[3vw] py-[3vw]">
              <h1 className="text-[2rem] font-semibold">MetaJungle</h1>
              <h4 className="text-[1.8rem] text-[#1F1F1F] mb-2">NFT Marketplace UI Design</h4>
              <p className="text-[1.2rem] text-[#555555] leading-relaxed tracking-tight mb-4">Redesigned creator, artist, and collection pages to improve user engagement and visual storytelling. Used Figma for prototyping and collaborated closely with devs to hand off responsive designs.</p>
              <button
                onClick={() => setShowMetaJungleModal(true)}
                className="bg-[#384C37] text-[#F0F0EC] px-6 py-2 rounded-full hover:bg-[#6B8E5E] text-[1.1rem]"
              >
                Read Case Study →
              </button>
            </div>
          </div>
        </div>
        <MetaJungleModal isOpen={showMetaJungleModal} onClose={() => setShowMetaJungleModal(false)} />
      </section>

      {/* Work Experience  bg-linear-to-bl text-[#F0F0EC] from-[#6B8E5E] to-[#384C37] */}
      <section className="mx-auto relative py-24 px-4 w-[80%] mx-auto rounded-xl" id="experience">
        <div className="">
          <div className="flex flex-col-2 items-left">
            <div className=" w-[20%] pt-[3vw] pr-[2vw] pb-[1vw] pl-[4vw]">
              <h3 className="text-[2.5rem] font-semibold font-bricolage text-[#1F1F1F]">Years in the industry</h3>
            </div>
            <div className="px-[3vw] py-[3vw] grid grid-cols-2 text-[#1F1F1F] gap-[24rem] py-[2rem]">
              <div className="grid grid-rows-2">
                <h1 className="text-[1.5rem] tracking-tight">Clarivate</h1>
                <h4 className="text-[1.2rem] text-[#555555] mb-[3rem]">09/2024 - 03/2025</h4>
                <h1 className="text-[1.5rem] tracking-tight">MetaJungle</h1>
                <h4 className="text-[1.2rem] text-[#555555] mb-[3rem]">07/2023 - 08/2024</h4>
                <h1 className="text-[1.5rem] tracking-tight">Carvana</h1>
                <h4 className="text-[1.2rem] text-[#555555] mb-[3rem]">05/2022 - 04/2023</h4>
                <h1 className="text-[1.5rem] tracking-tight">Zeus Learning</h1>
                <h4 className="text-[1.2rem] text-[#555555] mb-[3rem]">09/2019 - 05/2021</h4>
                <h1 className="text-[1.5rem] tracking-tight">ProCreator Solutions</h1>
                <h4 className="text-[1.2rem] text-[#555555] mb-[3rem]">05/2018 - 08/2019</h4>
              </div>
              <div className="grid grid-rowspan-2">
              <h1 className="text-[1.5rem] tracking-tight">Full Stack Engineer</h1>
              <h1 className="text-[1.5rem] tracking-tight">Software Engineer</h1>
              <h1 className="text-[1.5rem] tracking-tight">Full Stack Engineer</h1>
              <h1 className="text-[1.5rem] tracking-tight">UI/UX Engineer</h1>
              <h1 className="text-[1.5rem] tracking-tight">UI/UX Engineer</h1>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 " id="contact">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6">Let’s Connect</h3>
          <p className="mb-4 text-gray-700">Feel free to reach out for freelance work, collaboration, or just to chat design & dev!</p>
          <p className="text-sm">Email: <a className="underline  hover:text-[#D6B95A]" href="amathu48@asu.edu">amathu48@asu.edu</a></p>
          <p className="text-sm mt-1">LinkedIn: <a className="underline hover:text-[#D6B95A]" href="https://linkedin.com/in/abhishekmathur47">linkedin.com/in/abhishekmathur47</a></p>
        </div>
      </section>
    </main>
  );
}555555