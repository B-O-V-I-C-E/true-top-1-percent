import { defineField, defineType } from "sanity"

export default defineType({
    name: "home",
    title: "Home",
    type: "document",
    
    groups: [
        { name: "hero", title: "Hero", },
    ],

    fields: [
        defineField({
            name: "title",
            title: "Page Title",
            type: "string",
            group: "hero",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "string",
            group: "hero",
        }),
        defineField({
            name: "heroButton",
            title: "Hero Button",
            type: "object",
            fields: [
                {
                    name: "buttonText",
                    title: "Button Text",
                    type: "string"
                },
                {
                    name: "buttonLink",
                    title: "Button Link",
                    type: "string"
                },
                {
                    name: "ariaLabel",
                    title: "Aria-Label",
                    type: "string"
                }
            ]
        }),
        defineField({
            name: "gallery",
            title: "Gallery",
            type: "array",
            group: "hero",
            of: [
                defineField({
                    name: "images",
                    title: "Images",
                    type: "object",
                    fields: [
                        defineField({
                            name: "image",
                            title: "Image",
                            type: "image"
                        }),
                        defineField({
                            name: "alt",
                            title: "Alt Text",
                            type: "string"
                        })
                    ]
            })]
        }),
        defineField({
            name: "marquee",
            title: "Marquee",
            type: "array",
            of: [{ type: "string" }],
            group: "hero"
        })
    ]
})