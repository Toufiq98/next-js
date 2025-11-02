'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function AboutPage() {
    const router = useRouter();
    const loggedIn = true;
    const handleNavigation = () => {
        if (loggedIn) {
            router.push("/about/address");
        } else {
            alert("You are not logged in");
        }
    };
  return (
    <div>
      <p className="font-bold text-3xl">AboutPage</p>
      <p><Link href="/about/address">Address Page</Link></p>
      <button type="button" onClick={handleNavigation}>Address</button>
    </div>
  );
}
