
import { mutation, query } from './_generated/server';
import { Id } from './_generated/dataModel';

const categories = [
    { name: 'Web Development' },
    { name: 'Mobile Development' },
    { name: 'Design' },
    { name: 'Writing' },
    { name: 'Marketing' },
    { name: 'Data Science' },
    { name: 'Artificial Intelligence' },
    { name: 'Game Development' },
    { name: 'Blogging' },
    { name: 'Ghostwriting' },
    { name: 'Test Preparation' },
    { name: 'Finance' },
    { name: 'Travel Planning ' },
    { name: 'Personal Styling' },
     { name: 'Fitness Training' },
     {name: 'Education and Tutoring'},
     {name: 'Music and Audio'},
     {name: 'Academic Writing Assistance'},
     {name: 'Lifestyle'},
     {name: 'Course Creation'},
     { name: 'Photography' }
];

export const create = mutation({
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new Error("Unauthorized");
        }

        categories.map(async (category) => {
            await ctx.db.insert("categories", {
                name: category.name
            })
        })

        return;
    },
});
