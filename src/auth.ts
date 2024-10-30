import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUserFromDb } from "./lib/utils/getUserFromDb";

export const { handlers, auth, signIn, signOut } = NextAuth({
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
        console.log(user);

        if (!user) {
          throw new Error("사용자를 찾을 수 없습니다.");
        }

        return user;
      },
    }),
  ],
});
