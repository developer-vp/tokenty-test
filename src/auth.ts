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
  pages: { error: "/login", signIn: "/signin", signOut: "/signin" },
  callbacks: {
    async signIn({ profile, user, account, credentials, email }) {
      if (profile && profile.name && profile.email) {
        const roleSelected = await cookies().get("role");
        let companyData = await cookies().get("register-company-data");

        // if (roleSelected && roleSelected.value === Roles.company) {
        //   try {
        //     const response = await fetch(
        //       `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/company/login`,
        //       {
        //         method: "POST",
        //         body: JSON.stringify({
        //           email: profile.email,
        //         }),
        //         headers: {
        //           "Content-Type": "application/json",
        //         },
        //       },
        //     );
        //     if (!response.ok) {
        //       const errorData = await response.json();
        //       return `/login?error=${errorData.message}`;
        //     }

        //     const data = await response.json();

        //     user.role = Roles.company;
        //     user.token = data.token;

        //     return true;
        //   } catch (error: any) {
        //     console.log("error: ", error.message || error);
        //     return `/login?error=Something went wrong`;
        //   }
        // }

        // prettier-ignore
        if (roleSelected && roleSelected.value === Roles.company && companyData) {
          companyData = JSON.parse(companyData.value);

          try {
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/company/`,
              {
                method: "POST",
                body: JSON.stringify({
                  name: user.name,
                  email: user.email,
                  image: user.image,
                  ...companyData,
                }),
                headers: {
                  "Content-Type": "application/json",
                },
              },
            );
            if (!response.ok) {
              const errorData = await response.json();
              return `/company-register?page=2&error=${errorData.message}`;
            }

            const data = await response.json();

            user.role = Roles.manager;
            user.token = data.token;

            return true;
          } catch (error: any) {
            console.log("error: ", error.message || error);
            return `/login?error=Something went wrong`;
          }
        }

        // prettier-ignore
        if (roleSelected?.value === Roles.holder || roleSelected?.value === Roles.manager) {
          try {
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/user/login`,
              {
                method: "POST",
                body: JSON.stringify({
                  email: profile.email,
                  role: roleSelected?.value,
                }),
                headers: {
                  "Content-Type": "application/json",
                },
              },
            );
            if (!response.ok) {
              const errorData = await response.json();
              return `/login?error=${errorData.message}`;
            }

            const data = await response.json();

            user.role = data.data.user.role;
            user.token = data.data.token;

            return true;
          } catch (error: any) {
            console.log("error: ", error.message || error);
            return `/login?error=Something went wrong`;
          }
        }
      }

      return false;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role || "USER";
        token.token = user.token;
      }
      return token;
    },
    async session({ session, token }) {
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
