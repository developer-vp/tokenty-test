import { AuthOptions, getServerSession } from "next-auth";
import Google from "next-auth/providers/google";
import AzureADProvider from "next-auth/providers/azure-ad";
import { cookies } from "next/headers";
import { Roles } from "./lib/enums/roles";

const authOptions: AuthOptions = {
  session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60 },
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID as string,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET as string,
      tenantId: process.env.AZURE_AD_TENANT_ID,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: { signIn: "/", signOut: "/signin" },
  callbacks: {
    async signIn({ profile, user, account, credentials, email }) {
      if (profile && profile.name && profile.email) {
        // console.log(
        //   "000222:\n",
        //   "profile",
        //   profile,
        //   "\nUser:",
        //   user,
        //   "\naccount: ",
        //   account,
        //   "\ncredentials: ",
        //   credentials,
        //   "\nemail: ",
        //   email,
        // );
        console.log("Hello");

        const roleSelected = await cookies().get("role");

        if (roleSelected?.value === Roles.manager) {
          user.role = Roles.manager;
        } else if (roleSelected?.value === Roles.holder) {
          user.role = Roles.holder;
        }

        user.token = "This is my access token";

        return true;
        // if (
        //   profile.email === "u.chaudhry256@gmail.com" ||
        //   profile.email === "arhamsecurehopes@gmail.com"
        // ) {
        //   user.role = "manager";
        //   user.token = "This is my access token";
        //   return true;
        // } else if (
        //   profile.email === "ch256.it@gmail.com" ||
        //   profile.email === "arhamsarwar786@gmail.com"
        // ) {
        //   user.role = "holder";
        //   user.token = "This is my access token";
        //   return true;
        // }
      }
      return `/login?error=${profile?.email}`;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role || "USER";
        token.token = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      token.token = "this is my user token";
      if (session.user) {
        session.user.role = token.role;
        session.user.token = token.token;
      }
      return session;
    },
  },
};

/**
 * Helper function to get the session on the server without having to import the authOptions object every single time
 * @returns The session object or null
 */
const getSession = () => getServerSession(authOptions);

export { authOptions, getSession };
