export const Footer = ({ getTheme }) => {
  return (
    <footer
      className={`py-8 px-6 border-t text-center transition-colors duration-300 ${
        getTheme
          ? "bg-black border-white/10 text-gray-400"
          : "bg-slate-100 border-slate-200 text-slate-600"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-medium">
        <p>
          &copy; {new Date().getFullYear()} Prasad Gaikawada. Built with React & Tailwind CSS.
        </p>
        <p className="text-xs opacity-75">
          Designed for performance & high UX standards
        </p>
      </div>
    </footer>
  );
};
