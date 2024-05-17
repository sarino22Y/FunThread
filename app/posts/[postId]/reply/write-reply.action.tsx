"use server"

import { getUser } from "@/src/query/user.query";
import { prisma } from "@/lib/prisma";
import { WritePostFormValue } from "@/app/write/WritePostForm";
import { revalidatePath } from "next/cache";

export const createReply = async (postId: string, values : WritePostFormValue) => {

    console.log("I'm on the server!");
    const user = await getUser();

    await prisma.post.create({
        data: {
            content: values.content,
            userId: user.id,
            parentId: postId,
            title :""
        }
    });

    revalidatePath(`/posts/${postId}`);
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Reply created!");

    return postId;
}