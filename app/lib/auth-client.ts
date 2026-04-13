import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient();

// helpers for sign in, sign out triggered by user actions

export const signIn = async () => {
  await authClient.signIn.social({
    provider: "google",
    callbackURL: "/account",
    // errorCallbackURL: "/error-page",
  });
};

export const signOut = async () => {
  await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        window.location.href = "/";
      },
    },
  });
};

export const getSession = async () => {
  const session = await authClient.getSession();
  return session;
};
