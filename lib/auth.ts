import { AuthOptions, getServerSession } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { env } from "./env"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
      GithubProvider({
        clientId: env.GITHUB_ID,
        clientSecret: env.GITHUB_SECRET,
        profile(profile) {
          console.log(profile);
          return {
            id: profile.id.toString(),
            username: profile.login,
            name: profile.name,
            email: profile.email,
            image: profile.avatar_url,
          };
          
        },
        httpOptions: {
            timeout: 60000,
          },
      }),
      // ...add more providers here
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        session({ session, user }) {
            if (!session?.user) {
                return session
                
            }
            session.user.id = user.id
            return session;
        },
    }
  }

export const getAuthSession = async () => {
    const session = await getServerSession(authOptions);
    return session;
}