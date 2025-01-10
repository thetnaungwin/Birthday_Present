import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: any = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials?.username === "Baby" &&
          credentials?.password === "11/01/2002"
        ) {
          return { id: "1", name: "Admin", email: "admin@example.com" };
        }
        return null; // Authentication failed
      },
    }),
  ],
  pages: {
    signIn: "/login", // Custom login page
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (session.user) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET || "your_generated_secret_here", // Define secret
};

// Export NextAuth handler
export default (req: any, res: any) => NextAuth(req, res, authOptions);
