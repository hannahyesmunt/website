"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TechnicalWorkRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/technical-design");
  }, [router]);
  return null;
}
