function App() {
  return (
    <div className="bg-black text-white min-h-screen font-inter font-normal">
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Profile Section */}
        <section className="mb-16 py-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img 
                src="leo-picture.jpg" 
                alt="Leo Profile" 
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover"
              />
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-white tracking-tight">
                Welcome to my page👋
              </h1>
              <p className="text-lg font-medium text-gray-300 leading-relaxed">
                I'm Leo, a passionate developer who finds interest in all things.
              </p>
              <div className="mt-4">
                <a 
                  href="Leo Bantolino ReSUME V2.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 rounded bg-white text-black hover:bg-gray-200 transition-colors duration-300"
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-white border-b-2 border-gray-600 pb-2 tracking-tight">
            Work Experience
          </h2>
          <a 
            href="https://magnetforensics.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block rounded-lg p-6 mb-6 hover:bg-gray-900 transition-colors duration-300 cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden p-2">
                <img 
                  src="Magnet_Forensics_Logo.png" 
                  alt="Magnet Forensics Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Software Developer</h3>
                    <p className="text-sm font-medium text-gray-400">Magnet Forensics</p>
                    [ {' '}
                    <a 
                      href="https://leomiguelb.github.io/WTR-3/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-300 text-sm mt-2 inline-block transition-colors duration-200"
                    >
                      Work Term Report_3
                    </a>
                    {/* Add space after the comma using {' '} */}
                    ,{' '}
                    <a 
                      href="https://leomiguelb.github.io/WTR-2/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-300 text-sm mt-2 inline-block transition-colors duration-200"
                    >
                      Work Term Report_2
                    </a>
                    {' '}]
                  </div>
                  <div className="ml-4">
                    <span className="text-gray-400 text-xs">
                      [ Sept. 2024 – Dec. 2024, April 2025 – Aug. 2025 ]
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a 
            href="https://www.uoguelph.ca/watershed/w3s" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block rounded-lg p-6 mb-6 hover:bg-gray-900 transition-colors duration-300 cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden p-2">
                <img 
                    src="University_of_Guelph_logo.png" 
                    alt="University of Guelph Logo" 
                    className="w-full h-full object-contain"
                  />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Software Developer</h3>
                    <p className="text-sm font-medium text-gray-400">University of Guelph</p>
                    [ {' '}
                    <a 
                      href="https://leomiguelb.github.io/WTR-1/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-300 text-sm mt-2 inline-block transition-colors duration-200"
                    >
                       Work Term Report
                    </a>
                    {' '}]
                  </div>
                  <div className="ml-4">
                    <span className="text-gray-400 text-xs">
                      [ April 2024 – Aug. 2024 ]
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a 
            href="https://www.onehsn.com/home/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block rounded-lg p-6 mb-6 hover:bg-gray-900 transition-colors duration-300 cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden p-2">
                <img 
                    src="oneHsn-logo.png" 
                    alt="OneHSN Logo" 
                    className="w-full h-full object-contain"
                  />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Web Developer</h3>
                    <p className="text-sm font-medium text-gray-400">OneHSN</p>
                  </div>
                  <div className="ml-4">
                    <span className="text-gray-400 text-xs">
                      [ July 2023 – Aug. 2023 ]
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </section>

        {/* Side Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-white border-b-2 border-gray-600 pb-2 tracking-tight">
            Side Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-colors duration-300">
              <h3 className="text-lg font-semibold mb-3 text-white">Coop Assistant</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                A CLI built using React Ink that helps folks manage their co-op applications with ease.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/LeoMiguelB/coop-assistant" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-white border-b-2 border-gray-600 pb-2 tracking-tight">
            Interests
          </h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-gray-900 border border-gray-700 text-gray-200 text-sm">.NET</span>
            <span className="px-3 py-1 rounded-full bg-gray-900 border border-gray-700 text-gray-200 text-sm">C#</span>
            <span className="px-3 py-1 rounded-full bg-gray-900 border border-gray-700 text-gray-200 text-sm">Blazor</span>
            <span className="px-3 py-1 rounded-full bg-gray-900 border border-gray-700 text-gray-200 text-sm">Next.js</span>
            <span className="px-3 py-1 rounded-full bg-gray-900 border border-gray-700 text-gray-200 text-sm">TypeScript</span>
            <span className="px-3 py-1 rounded-full bg-gray-900 border border-gray-700 text-gray-200 text-sm">Python</span>
            <span className="px-3 py-1 rounded-full bg-gray-900 border border-gray-700 text-gray-200 text-sm">Azure Pipelines</span>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center mb-8">
          <h2 className="text-3xl font-semibold mb-8 text-white border-b-2 border-gray-600 pb-2 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-lg font-medium text-gray-300 mb-8 leading-relaxed">
            Feel free to shoot a message about anything!
          </p>
          <div className="mb-8">
            <div className="mb-4">
              <span className="font-semibold text-gray-400 mr-2">Email:</span>
              <a 
                href="mailto:your.email@example.com" 
                className="text-white hover:text-gray-400 transition-colors duration-300"
              >
                leo.miguel.bantl@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <span className="font-semibold text-gray-400 mr-2">Location:</span>
              <span>Kitchener, Ontario</span>
            </div>
          </div>
          <div className="flex justify-center gap-8 flex-wrap">
            <a 
              href="https://www.linkedin.com/in/leo-bantolino/" 
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 p-2 rounded hover:bg-gray-900" 
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a 
              href="https://github.com/LeoMiguelB" 
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 p-2 rounded hover:bg-gray-900" 
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a 
              href="https://discord.com/users/390690579278856202" 
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 p-2 rounded hover:bg-gray-900" 
              aria-label="Discord"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Discord
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
