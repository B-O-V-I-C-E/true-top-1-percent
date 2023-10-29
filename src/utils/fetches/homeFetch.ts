import { client } from "./sanityCli";

export const fetchHomeData = async () => {
    const query = `*[_type == "home" && _id == "homepage"] {
        title,
        description,
        heroButton {
            buttonText,
            buttonLink,
            ariaLabel
        },
        gallery[] {
            "imageUrl": image.asset->url,
            alt
        },
        marquee
    }`;    

    try {
        const [home] = await client.fetch(query);  // Destructuring to get the first item
        return home || null;
    } catch (error) {
        console.error("Error fetching home data:", error);
        return null;
    }
}