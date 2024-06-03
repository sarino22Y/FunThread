import { getAuthSession } from "@/lib/auth";
import { getUserProfile } from "@/src/query/user.query";
import React from "react";
import Profile from "./Profile";
import NotFound from "@/app/not-found";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { followeUser } from "./follow.action";
import { redirect } from "next/navigation";
import Post from "@/src/feature/post/Post";

export default async function UserPage({
  params,
}: {
  params: {
    userId: string;
  };
}) {
  const session = await getAuthSession();
  const user = await getUserProfile(params.userId);

  if (!user) {
    return NotFound();
  }

  const isFollowing = session?.user.id ? await prisma.follow.findFirst({
    where: {
      followerId: session.user.id,
      followingId: user.id,
    },
    select: {
      id: true,
    },
  }) : false;

  const isCurrentUser = params.userId === session?.user.id;

  if (isCurrentUser) {
    redirect("/profile");
  }
  return (
    <div>
      <Profile user={user}>
      <form>
        <Button 
          className="mt-4"
          variant="outline"
          formAction={async () => {
            "use server"
            if (!session?.user.id) {
              return
            }

            await followeUser(params.userId)
          }}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      </form>
      </Profile>
      <div className='ml-10 divide-y divide-accent border-t border-accent mt-4'>
        {user.posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>

    </div>
  );
}
