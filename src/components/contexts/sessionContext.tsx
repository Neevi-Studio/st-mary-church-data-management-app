"use client";
import { User, UsersApi } from "@/Api";
import { AXIOS_CONFIG } from "@/Api/wrapper";
import { useQuery } from "@tanstack/react-query";
// duh

import { createContext, useContext, type ReactNode, useEffect } from "react";
type SessionType = {
  user: User | undefined
};

const SessionContext = createContext<SessionType | null>(null);

export function SessionProvider({ children }: {
  children: ReactNode;
}) {


  const { data: user, isSuccess , isError} = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const response = await new UsersApi(AXIOS_CONFIG).getMyProfile()
      return response.data
    },
  })


  return (
    <SessionContext.Provider value={{ user }}>
      {children}
    </SessionContext.Provider>
  );
}

// export useUser
export function useSession() {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context!;
}
