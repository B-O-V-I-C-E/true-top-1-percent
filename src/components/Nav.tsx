import { NAVIGATION } from "@/utils/constants"
import Link from "next/link"

export default function Nav() {
    return(
        <header className="fixed top-0 left-0 right-0">
            <nav className="flex justify-between items-center p-8" aria-label="Navigation">
                <div>
                    <Link href="/">Logo goes here</Link>
                </div>

                <div className="flex gap-8">
                    {NAVIGATION.map((link, i) => (
                        <div key={i}>
                            <Link href={link.url} aria-label={link.url}>{link.title}</Link>
                        </div>
                    ))}
                </div>
            </nav>
        </header>
    )
}