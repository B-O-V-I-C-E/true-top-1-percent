import { defineField, defineType } from "sanity"

export default defineType({
    name: "projects",
    title: "Projects",
    type: "document",
    
    groups: [
        {
            name: "hero",
            title: "Hero",
        },
    ],

    fields: [
        defineField({
            name: "title",
            title: "Project Title",
            type: "string",
            group: "hero",
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug"
        }),
        defineField({
            name: "description",
            title: "Project Description",
            type: "text"
        }),
        defineField({
            name: "featuredImage",
            title: "Featured Image",
            type: "object",
            fields: [
                {
                    name: "image",
                    title: "Image",
                    type: "image"
                },
                {
                    name: "altText",
                    title: "Alt Text",
                    type: "string"
                },
                {
                    name: "title",
                    title: "Title",
                    type: "string"
                }
            ]
        }),
        defineField({
            name: "images",
            title: "Images",
            type: "array",
            of: [{ type: "image" }]
        })
    ]
})