import Button from "@/components/Button";

export default function NotFound() {
    return (
        <section className="min-h-screen flex flex-col justify-center">
            <div data-row className="text-center">
                <h1 className="space bigTitle">404</h1>
                <p className="space">Page not found</p>
                <Button text="Home" link="/" align="center" />
            </div>
        </section>
    )
}