import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { QuizDataServiceInstance } from "../../../src/business/services/dbservice";

/**
  Authentication options for NextAuth.JS
*/

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  // Configure one or more authentication providers
  adapter: MongoDBAdapter(),
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      /**
       * Authorize callback function. It checks the DB connection and checks the user ID and password for validation.
       * @param {Object} credentials - User credentials
       * @param {Object} req - Request object
       * @returns {Promise<Object>} - User object
       */

      async authorize(credentials, req) {

        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const user = await QuizDataServiceInstance.getAuthorizedUser(email, password)

        if (user) {
          // The user object that we have received from the DB
          return user;
        } else {
          // If no user found then return null
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/", // Sign in page
    signOut: "/", // Sign Out page
  },

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return user;
    },
    //   jwt callback is only called when token is created
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return Promise.resolve(token);
    },

    session: async ({ session, token }) => {
      // session callback is called whenever a session for that particular user is checked

      session.user = token.user;
      session.user.role = token.user.role;
      session.user.name = token.user.name;
      return Promise.resolve(session);
    },
  },
};

export default NextAuth(authOptions);
