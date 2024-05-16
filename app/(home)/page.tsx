import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Post from "@/src/feature/post/Post";
import { getLatestPosts } from "@/src/query/post.query";
import React from "react";

export default async function Home() {
    const session = await getAuthSession();

    const posts = await getLatestPosts();
    return <div>
        {posts.map(p => (
            <Post post={p} key={p.id}  />
        ))}
    </div>;
}
