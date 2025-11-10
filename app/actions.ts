'use server'; // This is a Server Action!

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function submitApp(formData: FormData) {
  // 1. Get the data from the form
  const name = formData.get('name') as string;
  const description = formData.get('description') as string;
  const url = formData.get('url') as string;

  // 2. Save it to the database
  await prisma.app.create({
    data: {
      name: name,
      description: description,
      url: url,
    },
  });

  // 3. Clear the cache for the homepage
  revalidatePath('/');

  // 4. Redirect the user back to the homepage
  redirect('/');
}

export async function upvoteApp(appId: string) {
  // 1. Find the app by its ID and increment its upvotes
  await prisma.app.update({
    where: {
      id: appId,
    },
    data: {
      upvotes: {
        increment: 1, // This atomically adds 1 to the count
      },
    },
  });

  // 2. Tell Next.js to re-fetch the homepage
  revalidatePath('/');
}