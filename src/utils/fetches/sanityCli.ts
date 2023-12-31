import { createClient } from "next-sanity";

//////// Client (Used for all fetches)
export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: true,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
});
