export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-semibold">StackTrim</p>
          <p className="text-sm text-gray-500">
            Keep the tech. Cut the burn.
          </p>
        </div>

        <div className="text-sm text-gray-500 text-center md:text-right">
          <p>Built for the Credex Web Development Assignment.</p>
          <p>© {new Date().getFullYear()} StackTrim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}