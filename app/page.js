export default function Portfolio() {
  return (
    <main className="font-sans">
      {/* Navbar */}
      <nav className="w-full shadow-md z-50">
        <div className="w-[90%] mx-auto flex justify-between items-center px-8 py-4">
          <h1 className="text-xl font-bold">Abhishek Mathur</h1>
          <div className="space-x-8 text-base">
            {/* <a href="#about" className="hover:underline">About</a> */}
            {/* <a href="#work" className="hover:underline">Work</a> */}
            <a href="#contact" className="hover:underline">LinkedIn</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-left text-center px-4 pt-20" id="hero">
        <h1 className="text-lg md:text-3xl font-grotesque text-left  ml-[20%] mb-4">Greting,<br />I'm Abhishek</h1>
        <h1 className="text-lg md:text-3xl font-sans text-left  ml-[20%] mb-4">Greting,<br />I'm Abhishek</h1>
        <h2 className="text-4xl md:text-6xl font-mono text-left font-bold ml-[20%] mb-4">Frontend Developer<br />& UI/UX Designer</h2>
        {/* <p className="text-lg md:text-xl text-gray-600 max-w-xl">Bringing intuitive design and responsive code together to build seamless digital experiences.</p> */}
        {/* <a href="#work" className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">View My Work</a> */}
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-gray-50" id="about">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6">About Me</h3>
          <p className="text-sm text-gray-700 leading-relaxed">I’m a self-taught UI/UX designer with experience in frontend development. I’ve built and designed multiple interfaces like the creator, artist, and collection pages for MetaJungle, showcasing a fusion of visual design and technical implementation using Figma, React, and Tailwind.</p>
          <p className="mt-4 text-sm text-gray-500">Tools: Figma, Next.js, Tailwind CSS, Framer Motion, GitHub</p>
        </div>
      </section>

      {/* Work Section */}
      <section className="py-24 px-4" id="work">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-semibold text-center mb-12">Featured Project: MetaJungle</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div><p>Metajungle screenshot</p>
              {/* <Image
                src="/metajungle-screenshot.png"
                alt="MetaJungle UI"
                width={600}
                height={400}
                className="rounded-xl shadow-md"
              /> */}
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">NFT Marketplace UI Design</h4>
              <p className="text-gray-700 mb-3">Redesigned creator, artist, and collection pages to improve user engagement and visual storytelling. Used Figma for prototyping and collaborated closely with devs to hand off responsive designs.</p>
              <a
                href="https://www.figma.com/design/yyiBXpxCaS3sPfF70EKFSb/MetaJungle-2.0"
                target="_blank"
                className="text-blue-600 underline text-sm"
              >
                View Figma Design →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-gray-100" id="contact">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6">Let’s Connect</h3>
          <p className="mb-4 text-gray-700">Feel free to reach out for freelance work, collaboration, or just to chat design & dev!</p>
          <p className="text-sm">Email: <a className="underline text-blue-600" href="mailto:your.email@example.com">your.email@example.com</a></p>
          <p className="text-sm mt-1">LinkedIn: <a className="underline text-blue-600" href="https://linkedin.com/in/yourprofile">linkedin.com/in/yourprofile</a></p>
        </div>
      </section>
    </main>
  );
}