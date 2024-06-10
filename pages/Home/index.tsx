
import Head from 'next/head';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <a href="https://nextjs.org" className="text-blue-600">Ecommerce App!</a>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <a href="#" className="p-6 border border-gray-300 rounded-lg hover:border-blue-500">
            <h3 className="text-2xl font-semibold mb-2">Documentation &rarr;</h3>
            <p className="text-xl">Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="#" className="p-6 border border-gray-300 rounded-lg hover:border-blue-500">
            <h3 className="text-2xl font-semibold mb-2">Learn &rarr;</h3>
            <p className="text-xl">Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="#" className="p-6 border border-gray-300 rounded-lg hover:border-blue-500">
            <h3 className="text-2xl font-semibold mb-2">Examples &rarr;</h3>
            <p className="text-xl">Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a href="#" className="p-6 border border-gray-300 rounded-lg hover:border-blue-500">
            <h3 className="text-2xl font-semibold mb-2">Deploy &rarr;</h3>
            <p className="text-xl">Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>
    </div>
  );
}
