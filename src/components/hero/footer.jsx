import { Github, MessageCircle, ContactRound } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-8 px-6 md:px-12">
      <div
        id="footers"
        className="max-w-8xl mx-auto flex flex-col md:flex-row justify-between items-center"
      >
        {/* Logo & Name */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white">
            Azure Student Chapter
          </h2>
          <p className="text-sm text-neutral-400">
            Building Real Projects, Not Just Watching Tutorials.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-5 mt-4 md:mt-0">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://discord.com/invite/9Pzk5Cc4uw"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <MessageCircle size={20} />
          </a>
          <a
            href="https://bento.me/azurestudentchapter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <ContactRound size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-6 md:mt-0 text-sm text-neutral-400 text-center md:text-right">
          © {new Date().getFullYear()} Azure Student Chapter. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
