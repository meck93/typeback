import faunadb, { query as q } from "faunadb";

// load dotenv
require('dotenv').config()

const client = new faunadb.Client({ secret: process.env.FAUNA_API_KEY });

export default {
    Query: {
        testMessage: (): string => {
            return "Hello World!";
        },
        async getEvent(root, data, context, info) {
            // example id = 244215306062397954
            const _id = data._id;
            const result = await client.query(q.Get(q.Ref(q.Collection("myEvents"), _id)));
            return result.data;
        },
        async getEvents() {
            const result = await client.query(q.Get(q.Match(q.Index("allEvents"), "ExampleEvent")));
            console.log(result);
            return result.data;
        }
    },
    // Mutation: {
    //     createPost(root, { input }, context, info) {
    //         // create a new post and store the current user's ID
    //         let post = {
    //             title: input.title,
    //             body: input.body,
    //             author: context.user.id
    //         };

    //         return new Event("");
    //     },
    //     updatePost(root, { _id, input }, context, info) {
    //     },
    //     deletePost(root, { _id }) {
    //     }
    // }
};