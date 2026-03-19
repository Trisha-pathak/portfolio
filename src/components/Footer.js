export default function Footer() {
  return (
    <footer className="border-t border-black/80 py-6 mt-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="text-sm text-#DFD0B8-400">
          © {new Date().getFullYear()} trisha. All rights reserved.
        </p>

        <div className="flex gap-4">
          <a
            href="#"
            className="text-#DFD0B8-400 hover:text-accent1 transition"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-#DFD0B8-400 hover:text-accent1 transition"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-#DFD0B8-400 hover:text-accent1 transition"
          >
            Twitter
          </a>
        </div>

      </div>
    </footer>
  );
}