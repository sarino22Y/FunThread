import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Post from "@/src/feature/post/Post";
import { getLatestPosts } from "@/src/query/post.query";
import { resolve } from "path";
import React from "react";

export default async function Home() {
    const session = await getAuthSession();

    const posts = await getLatestPosts(session?.user.id);

    // await new Promise((r) => setTimeout(r, 2000));

    return <div className="divide-y divide-muted">
        {posts.map(p => (
            <Post post={p} key={p.id}  />
        ))}
    </div>;
}
