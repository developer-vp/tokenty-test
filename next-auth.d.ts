import { DefaultJWT } from "next-auth/jwt";
import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      role: string;
      token: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    role: string;
    token: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role: string;
    token: string;
  }
}
