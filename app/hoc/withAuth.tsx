"use client";
import { useRouter } from "next/navigation";
import React, { ComponentType } from "react";

function checkAuth(params?: any) {
  return false;
}

export default function withAuth<P extends object>(
  Component: ComponentType<P>
) {
  return (props: P) => {
    if (!checkAuth()) {
      return <div>Lütfen Giriş Yapınız !</div>;
    }

    return <Component {...props} />;
  };
}
