import Button from "@/components/Button";
import Marquee from "@/components/Marquee";
import SwipeText from "@/components/SwipeText";

export default function Home() {
    return(
        <>
            <section>
                
                {/* Title */}
                <div data-row>
                    <h1 className="text-center bigTitle">
                        <SwipeText  text="J2 Boilerplate" />
                    </h1>
                </div>

                {/* Grid */}
                <div data-row className="grid gap-16 grid-cols-1 lg:grid-cols-3">
                    {/* Text */}
                    <div>
                        <h2 className="mb-8 pb-2 border-b-2 border-gray-400">Text styles</h2>
                        <h1>Heading 1</h1>
                        <h2>Heading 2</h2>
                        <h3>Heading 3</h3>
                        <h4>Heading 4</h4>
                        <h5>Heading 5</h5>
                        <h6>Heading 6</h6>
                        <p>Paragraph text</p>
                        <div className="mt-8 bg-gray-900 p-4 rounded-md">
                            Text styles can be edited from within the globals.css file.
                            Text styles should include mobile styles from the start as they do now.
                            Current styles include sm, md, lg, and xl. This is best practice, 
                            but it is not required to use them all. 
                        </div>
                    </div>

                    {/* Buttons */}
                    <div>
                        <h2 className="space pb-2 border-b-2 border-gray-400">Buttons</h2>
                        <div className="flex gap-2 flex-wrap flex-row">
                            <Button text="Primary" link="#" />
                            <Button text="Secondary" link="#" color="secondary" />
                            <Button text="Light" link="#" color="light" />
                            <Button text="Dark" link="#" color="dark" />
                        </div>

                        <div className="space-top bg-gray-900 p-4 rounded-md">
                            Buttons can take the following props: color, link, align, onClick and className. 
                            Do not use onClick if link is set.
                            <br /><br />
                            
                            <span className="text-green-300">
                                <span>&lt;Button</span> <br />
                                <span className="text-orange-300 pl-8">className=&quot;space-top&quot;</span> <br />
                                <span className="text-orange-300 pl-8">color=&quot;secondary&quot;</span> <br />
                                <span className="text-orange-300 pl-8">align=&quot;fullwidth&quot;</span> <br />
                                <span className="text-orange-300 pl-8">link=&quot;/page-name&quot;</span> <br />
                                <span className="text-orange-300 pl-8">onClick=&quot;myFunction&quot;</span> <br />
                                <span>/&gt;</span> <br />
                            </span>
                        </div>
                    </div>

                    {/* Colors */}
                    <div>
                        <h2 className="space pb-2 border-b-2 border-gray-400">Colors</h2>
                        <div className="bg-primary py-2 px-4 rounded-md mb-4" >Primary</div>
                        <div className="bg-secondary py-2 px-4 rounded-md mb-4" >Secondary</div>
                        <div className="bg-light py-2 px-4 rounded-md mb-4 text-dark" >Light</div>
                        <div className="bg-dark py-2 px-4 rounded-md" >Dark</div>

                        <div className="space-top bg-gray-900 p-4 rounded-md">
                            Kind of obvious from the Button column, but here it is anyway. Add more colors using 
                            the tailwind config file. Light and Dark exist so true black and true white are not 
                            replaced from the default colors since they will likely still be used. Designs often
                            come with a near-white and/or near-black color.
                        </div>
                    </div>
                </div>

            </section>

            <section>
                <Marquee baseVelocity={2} className="bg-light text-dark">
                    <div className="bigTitle pb-1 sm:pb-2 md:pb-3 lg:pb-5 pt-0">&lt;Marquee/&gt;</div>
                </Marquee>
            </section>

            <section>
                <div data-row>
                    <h2 className="space pb-2 border-b-2 border-gray-400">Layouts & Content</h2>

                    <div className="grid grid-cols-2 gap-16">
                        <div>
                            <h3 className="mb-4">Section</h3>
                            <p className="space">
                                The Section component has been replaced with the standard section tag.
                                This allows for easier integration with built-in and third-party extensions such as id, className,
                                aria-labels, framer-motion props, onClick and other events without having to build it into or update a component.
                            </p>
                            <p className="bg-gray-900 p-4 rounded-md text-blue-300">
                                &lt;section <span className="text-orange-300">className=&quot;...&quot;</span>&gt; <br />
                                <span className="pl-8 text-blue-500">&#123;children&#125;</span> <br />
                                &lt;/section&gt; <br /> <br />

                                <span className="text-green-300">&lt;motion.section <span className="text-orange-300">initial=&quot;...&quot; animate=&quot;...&quot;</span>&gt;</span> <br />
                                <span className="pl-8 text-blue-500">&#123;children&#125;</span> <br />
                                <span className="text-green-300">&lt;/motion.section&gt;</span>
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-4">Row</h3>
                            <p className="space">
                                The Row component has been replaced with a standard div tag with an attribute data-row. Just like 
                                the section tag, this approach makes it easier to integrate anything with your JSX without having to 
                                add special props to a component. Styles for this and the section tag can be found in the globals.css.
                            </p>
                            <p className="bg-gray-900 p-4 rounded-md text-blue-300">
                                &lt;div <span className="text-orange-300">data-row className=&quot;...&quot;</span> &gt; <br />
                                <span className="pl-8 text-blue-500">&#123;children&#125;</span> <br />
                                &lt;/div&gt; <br /><br />

                                <span className="text-green-300">&lt;motion.div <span className="text-orange-300">data-row initial=&quot;...&quot; animate=&quot;...&quot;</span>&gt;</span> <br />
                                <span className="pl-8 text-blue-500">&#123;children&#125;</span> <br />
                                <span className="text-green-300">&lt;/motion.div&gt;</span>
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-4">Content Storage</h3>
                            <p className="mb-4">
                                Run the following command in your terminal to get started with 
                                Sanity.io: <span className="bg-gray-900 text-gray-300 rounded-md py-1 px-2 font-mono text-sm">npm create sanity@latest</span>
                            </p>
                            <p>
                                Static content can be found in the utils folder in the constants.tsx file.
                                This is good for content that does not belong in the database such as the menu content,
                                some iconography, or other content that needs to be reused throughout the site.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-4">Layout Styles</h3>
                            <p>
                                Standard layout styles, just like text styles, can be found in the globals.css file. 
                                Any repeatable layout styles should be included with an @apply rule in this file with 
                                mobile styles configured.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
