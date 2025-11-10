import { submitApp } from '@/app/actions'; // Import our Server Action

export default function SubmitPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Submit a New App</h1>
      
      {/* This form calls the Server Action directly */}
      <form action={submitApp} className="flex flex-col gap-4 max-w-md">
        <div className="flex flex-col">
          <label htmlFor="name">App Name</label>
          <input name="name" id="name" type="text" 
                 className="border p-2 rounded text-black" />
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" 
                    className="border p-2 rounded text-black" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="url">URL</label>
          <input name="url" id="url" type="url" 
                 className="border p-2 rounded text-black" />
        </div>

        <button type="submit" 
                className="bg-blue-600 text-white p-2 rounded w-fit">
          Submit
        </button>
      </form>
    </main>
  );
}