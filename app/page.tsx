import { prisma } from '@/lib/prisma';
import Link from 'next/link';

import { UpvoteButton } from '@/components/UpvoteButton';

// interface App {
//   id: string;
//   name: string;
//   description: string;
//   url: string;
//   upvotes: number;
//   createdAt: Date;
// }

export default async function Home() {
  // 1. Fetch data directly from the database (on the server)
  const apps = await prisma.app.findMany({
    orderBy: {
      createdAt: 'desc', // Show newest first
    },
  });

  return (
    <main className="p-8">
      <div className="flex justify-between items-center mb-6">
       <h1 className="text-3xl font-bold">Hall of Apps</h1>
        <Link href="/submit" 
              className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit App
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        {apps.map((app) => (
          <div key={app.id} 
               className="bg-gray-800 p-4 rounded border border-gray-700">
            <h2 className="text-xl font-semibold">{app.name}</h2>
            <p className="text-gray-400">{app.description}</p>
            <a href={app.url} target="_blank" 
               className="text-blue-400 hover:underline">
              Visit App →
            </a>
            
            <div className="flex justify-between items-center mt-4">
              {/* 2. REPLACE THE OLD TEXT WITH THE NEW BUTTON */}
              <UpvoteButton appId={app.id} />
              
              <span className="text-gray-400">
                Total Upvotes: {app.upvotes}
              </span>
            </div>

          </div>
        ))}
      </div>
    </main>
  );
}