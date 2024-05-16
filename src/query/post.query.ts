import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const getLatestPosts = (userId?: string) => prisma.post.findMany({
        where: {
            parentId: null,
        },
        take: 20,
        orderBy: {
            createdAt: "desc",
        },
        select: {
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
        },
    });

export type PostHome = Prisma.PromiseReturnType<typeof getLatestPosts>[number];
