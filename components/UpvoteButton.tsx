'use client'; // This makes it a Client Component

import { upvoteApp } from '@/app/actions'; // Import the Server Action

// This component takes the app's ID as a prop
interface UpvoteButtonProps {
  appId: string;
}

export function UpvoteButton({ appId }: UpvoteButtonProps) {
  
  // We wrap the action in a function
  const handleUpvote = () => {
    upvoteApp(appId); // Call the server action with the ID
  };

  return (
    <button
      onClick={handleUpvote}
      className="bg-green-600 text-white px-3 py-1 rounded w-fit"
    >
      Upvote
    </button>
  );
}