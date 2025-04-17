import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { getAppUser, createAppUser } from "@/app/_lib/data-service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    async signIn({ user, account, profile }) {
      try {
        const existingUser = await getAppUser(user.email);

        if (!existingUser)
         
        return "/login/admin";
        //   await createAppUser({
        //     email: user.email,
        //     fullname: user.name,
        //     access_type: "user",
        //     is_active: true,
        //   });
        return true;
      } catch {
        return false;
      }
    },
    async session({ session, user }) {
      const appUser = await getAppUser(session.user.email);
      session.user.appUserId = appUser.id;
      return session;
    },

  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
