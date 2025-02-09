import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    // GitHub Provider
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    // Credentials Provider
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const response = await fetch("https://tmp-se-project.azurewebsites.net/api/user/auth/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          });

          if (response.ok) {
            const user = await response.json();
            console.log("User signed up successfully:", user);
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.error("Error during sign-up:", error);
          return null;
        }
      },
    }),
  ],
};
