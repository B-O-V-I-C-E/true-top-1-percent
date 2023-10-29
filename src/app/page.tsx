import HomeHero from "@/components/home/Hero";
import { fetchHomeData } from "@/utils/fetches/homeFetch"

export default async function Home() {
    const props = await fetchHomeData();
    const { title, description, heroButton, gallery, marquee } = props;

    // console.log("Home Props: ", props);

    return(
        <HomeHero title={title} description={description} gallery={gallery} />
    )
}
