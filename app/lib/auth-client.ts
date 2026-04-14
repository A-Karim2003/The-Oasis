import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient();

// helpers for sign in, sign out triggered by user actions

export const signIn = async (callbackURL: string = "/account") => {
  await authClient.signIn.social({
    provider: "google",
    callbackURL,
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
