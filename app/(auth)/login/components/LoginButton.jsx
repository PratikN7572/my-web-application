"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Button from "@/app/components/ui/Button";
import React from "react";

const LoginButton = () => {
  const session = useSession();


  if (session && session.status === "authenticated") {
    return <Button onClick={() => signOut({
      callbackUrl: 'http://localhost:3000/login'
    })} label="sign out" />;
  }
  if (session && session.status === "unauthenticated") {
    return <Button onClick={() => signIn("google")} label="login (set token)" />;
  }
};

export default LoginButton;
