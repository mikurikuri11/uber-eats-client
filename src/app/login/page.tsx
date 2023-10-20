"use client";

import { useSession } from "next-auth/react";
import Greeting from "@/components/elements/Greeting";
import LoginButton from "@/components/elements/LoginButton";
import LoginGreeting from "@/components/elements/LoginGreeting";

export default function Home() {
  const { data: session, status } = useSession();
  return (
    <div>
      {status === "authenticated" ? (
        <Greeting user={session?.user} />
      ) : (
        <LoginGreeting user={session?.user} />
      )}
    </div>
  );
}
