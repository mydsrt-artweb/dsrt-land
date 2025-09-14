export default function Footer() {
  return (
    <footer className="bg-gray-900 text-center md:text-left px-6 py-12 mt-12 flex flex-col items-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-2">DSRT</h3>
          <p className="text-gray-400 text-sm">Digital Smart Revise Technology</p>
        </div>
        <div className="flex gap-6">
          <a href="https://www.instagram.com/dsrt.official.2025" target="_blank" className="social-icon text-white hover:text-pink-500 transition" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 2a.75.75 0 110 1.5.75.75 0 010-1.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"/>
            </svg>
          </a>
          <a href="https://github.com/mydsrt-artweb/sds" target="_blank" className="social-icon text-white hover:text-gray-400 transition" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.21 11.42c.6.11.82-.26.82-.58v-2.2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.35-1.79-1.35-1.79-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.83 1.31 3.52 1 .11-.77.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.25-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.44 11.44 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.85 1.24 1.93 1.24 3.25 0 4.63-2.8 5.65-5.48 5.95.43.37.82 1.1.82 2.22v3.29c0 .32.21.69.83.58A12.01 12.01 0 0024 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
      <p className="text-gray-500 text-sm mt-8">&copy; 2025 DSRT. All rights reserved.</p>
      <style jsx>{`
        .social-icon svg {
          transition: transform 0.3s, color 0.3s;
        }
        .social-icon:hover svg {
          transform: scale(1.2);
        }
      `}</style>
    </footer>
  )
}
