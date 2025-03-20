"use client";

import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt with:", { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#EEF2F5]">
      <div className="w-[480px] px-10 py-12 bg-white rounded-md shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]">
        <div className="mb-10">
          <h1 className="text-[30px] font-bold text-[#292929] leading-[1.21em] mb-2">
            Back to your digital life
          </h1>
          <p className="text-[18px] text-[#545454] font-[var(--font-ibm-plex-serif)] leading-[1.3em]">
            Choose one of the option to go
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="get@ziontutorial.com"
              className="w-full h-[54px] px-4 text-[16px] text-[#4F4F4F] border border-[#8AC0FF] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-300 font-[var(--font-ibm-plex-serif)]"
              required
            />
          </div>

          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full h-[54px] px-4 text-[16px] text-[#4F4F4F] border border-[#E6E6E6] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full h-[54px] text-[16px] text-white bg-[#0366FF] rounded-[8px] hover:bg-blue-600 transition-colors font-[var(--font-ibm-plex-serif)]"
          >
            Log in
          </button>
        </form>

        <div className="mt-10">
          <div className="relative flex items-center justify-center mb-8">
            <div className="absolute left-0 right-0 h-[0.5px] bg-[#E7E7E7]"></div>
            <span className="relative px-4 bg-white text-[16px] text-[#4F4F4F]">
              Or continue with
            </span>
          </div>

          <div className="flex justify-between gap-4">
            <button className="flex-1 h-[48px] bg-[#F7F7F7] rounded-[4px] flex items-center justify-center">
              <Image src="/google.svg" alt="Google" width={24} height={24} />
            </button>
            <button className="flex-1 h-[48px] bg-[#F7F7F7] rounded-[4px] flex items-center justify-center">
              <Image
                src="/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </button>
            <button className="flex-1 h-[48px] bg-[#F7F7F7] rounded-[4px] flex items-center justify-center">
              <Image src="/apple.svg" alt="Apple" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
