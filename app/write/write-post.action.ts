"use server"

import { getUser } from "@/src/query/user.query";
import { WritePostFormValue } from "./WritePostForm";
import { prisma } from "@/lib/prisma";

export const createPost = async (values : WritePostFormValue) => {

    console.log("I'm on the server!");
    const user = await getUser();

    const post = prisma.post.create({
        data: {
            content: values.content,
            userId: user.id,
            title :""
        }
    });

    console.log("Post created!");

    return (await post).id;
}