"use client"

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import HeroImage from "./HeroImage";

interface HeroProps {
    title: string;
    description: string;
    gallery: {
        imageUrl: string;
        alt: string;
    }[];
}

export default function HomeHero({ title, description, gallery }:HeroProps) {
    const [rotatedGallery, setRotatedGallery] = useState(gallery);

    // Initialize the rotatedGallery when the component mounts or when `gallery` rotates.
    useEffect(() => {
        setRotatedGallery(gallery);
    }, [gallery]);

    const 
        handleNext = () => {
            const lastItem = rotatedGallery.pop();
            if (lastItem) { setRotatedGallery([lastItem, ...rotatedGallery]) }
        },
        handlePrev = () => {
            const [firstItem, ...rest] = rotatedGallery;
            setRotatedGallery([...rest, firstItem]);
        };
        
    return (
        <section className="min-h-screen stack-center overflow-hidden bg-gray-950">
            <AnimatePresence mode="popLayout">
                <div className="grid grid-cols-2 gap-16 max-w-[95%] m-auto">
                    <div className="space">
                        <h1 className="space text-8xl">{title}</h1>
                        <p className="text-2xl max-w-md space">{description}</p>

                        <div className="grid grid-cols-2 gap-8">
                            <HeroImage image={rotatedGallery[2].imageUrl} alt={rotatedGallery[2].alt} />
                            <HeroImage image={rotatedGallery[1].imageUrl} alt={rotatedGallery[1].alt} />
                        </div>
                    </div>

                    <div className="space-x-16 absolute bottom-0 left-1/2 -translate-x-1/2 py-8 text-6xl z-10">
                        <button onClick={handlePrev}>&lt;</button>
                        <button onClick={handleNext}>&gt;</button>
                    </div>

                    <div>
                        <HeroImage image={rotatedGallery[0].imageUrl} alt={rotatedGallery[0].alt} />
                        <h3>{rotatedGallery[0].alt}</h3>
                    </div>
                </div>      
            </AnimatePresence>
        </section>
    )
}