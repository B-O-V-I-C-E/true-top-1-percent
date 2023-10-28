import { NAVIGATION } from "@/utils/constants";
import Link from "next/link";
import PoweredByJ2 from "./poweredBy";

export default function Footer() {
    return (
        <footer className="bg-gray-900">
            <section>
                
                <div data-row>
                    This is the footer.
                </div>

                <div data-row>
                    {NAVIGATION.map((link, i) => (
                        <div key={i}>
                            <Link href={link.url} aria-label={link.url}>{link.title}</Link>
                        </div>
                    ))}
                </div>

                <div data-row>
                    <PoweredByJ2 className="text-center opacity-20 font-extralight text-sm" />
                </div>

            </section>
        </footer>
    )
}