export const Footer = ({ getTheme }) => {
  return (
    <footer
      className={`py-8 px-6 border-t text-center transition-colors duration-300 ${
        getTheme
          ? "bg-black border-white/10 text-neutral-400"
          : "bg-neutral-50 border-neutral-200 text-neutral-600"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-mono">
        <p>
          &copy; {new Date().getFullYear()} Prasad Gaikawada. All rights reserved.
        </p>
        <p className="text-xs text-neutral-500">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};
