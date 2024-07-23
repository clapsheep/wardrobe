import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import { clientPromise } from "@/lib/utils/dbConnect";
import Credentials from "next-auth/providers/credentials";
import { getUserFromDb } from "./lib/utils/getUserFromDb";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials?.username || !credentials?.password) {
          throw new Error("이메일과 비밀번호가 필요합니다.");
        }

        const user = await getUserFromDb(
          credentials.username as string,
          credentials.password as string,
        );

        if (!user) {
          throw new Error("이메일 또는 비밀번호가 올바르지 않습니다.");
        }

        return user;
      },
    }),
  ],
});
