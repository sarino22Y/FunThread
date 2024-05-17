import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const postSelectQuery = (userId?: string) => ({
    id: true,
    content: true,
    createdAt: true,
    title: true,
    user: {
        select: {
            username: true,
            image: true,
            id: true,
            name: true,
        },
    },
    likes: {
        select: {
            userId: true,
        },
        where: {
            userId: userId ?? "error",
        },
    },
    _count: {
        select: {
            likes: true,
            replies: true,
        },
    },
}) satisfies Prisma.PostSelect;

export const getLatestPosts = (userId?: string) => prisma.post.findMany({
        where: {
            parentId: null,
        },
        take: 20,
        orderBy: {
            createdAt: "desc",
        },
        select: postSelectQuery(userId || "error"),
    });

export type PostHome = Prisma.PromiseReturnType<typeof getLatestPosts>[number];

export const getPostView = (id: string, userId?: string) => prisma.post.findUnique({
    where: {
        id,
    },
    select: {
        ...postSelectQuery(userId),
        replies: {
            select: postSelectQuery(userId),
        },
        parent: {
            select : postSelectQuery(userId),
        },
    },
});

export const getPost = (id: string, userId?: string) => 
    prisma.post.findUnique({
    where: {
        id,
    },
    select: {
        ...postSelectQuery(userId),
    },
});


