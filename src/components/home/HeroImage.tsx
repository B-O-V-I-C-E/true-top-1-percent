import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface HeroImageProps {
    image: string;
    alt: string;
}

export default function HeroImage({image, alt}:HeroImageProps) {
    return (
        <AnimatePresence mode="popLayout">
            <motion.div 
                key={image + alt} 
                layoutId={image + alt} 
                className="rounded-lg overflow-hidden"
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // exit={{ opacity: 0 }}
            >
                <motion.div>
                    <div className="relative py-[35%]">
                        <Image src={image} alt={alt} fill className="object-cover" />
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}