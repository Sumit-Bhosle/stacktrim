export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black px-4">
      <main className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-4">
          Keep the tech. Cut the burn.
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
          Audit your AI tooling spend in 60 seconds.
        </p>
        <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
          Start Free Audit
        </button>
      </main>
    </div>
  );
}
