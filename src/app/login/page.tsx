"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import Login from "@/components/elements/LoginButton";
import Logout from "@/components/elements/LogoutButton";

export default function Home() {
  const { data: session, status } = useSession();
  return (
    <div>
      {status === "authenticated" ? (
        <div>
          <p>セッションの期限：{session.expires}</p>
          <p>ようこそ、{session.user?.name}さん</p>
          {/* <Image
						src={session.user?.image ?? ``}
						alt=""
						style={{ borderRadius: '50px' }}
					/> */}
          <div>
            <Logout />
          </div>
        </div>
      ) : (
        // <Login />
        <></>
      )}
    </div>
  );
}
