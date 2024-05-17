"use server"

import { getUser } from "@/src/query/user.query";
import { WritePostFormValue } from "./WritePostForm";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const createPost = async (values : WritePostFormValue) => {

    console.log("I'm on the server!");
    const user = await getUser();

    const post = await prisma.post.create({
        data: {
            content: values.content,
            userId: user.id,
            title :""
        }
    });

    new Promise((resolve) => { setTimeout(resolve, 1000) });

    revalidatePath(`/posts/${post.id}`);
    console.log("Post created!");

    return post.id;
}