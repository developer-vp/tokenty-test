namespace NodeJS {
  interface ProcessEnv {
    AZURE_AD_CLIENT_ID: string;
    AZURE_AD_TENANT_ID: string;
    AZURE_AD_CLIENT_SECRET: string;

    NEXTAUTH_SECRET: string;

    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
  }
}
