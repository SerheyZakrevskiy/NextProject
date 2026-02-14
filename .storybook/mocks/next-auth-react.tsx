import React, { createContext, useContext } from "react";

type Status = "authenticated" | "unauthenticated" | "loading";

type SessionLike = any;

type CtxValue = {
  data: SessionLike | null;
  status: Status;
  update: () => Promise<SessionLike | null>;
};

const SessionCtx = createContext<CtxValue>({
  data: null,
  status: "unauthenticated",
  update: async () => null,
});

export function SessionProvider({
  session,
  children,
}: {
  session?: SessionLike | null;
  children: React.ReactNode;
}) {
  const value: CtxValue = {
    data: session ?? null,
    status: session ? "authenticated" : "unauthenticated",
    update: async () => session ?? null,
  };

  return <SessionCtx.Provider value={value}>{children}</SessionCtx.Provider>;
}

export function useSession() {
  return useContext(SessionCtx);
}

export async function signIn() {
  return;
}

export async function signOut() {
  return;
}
