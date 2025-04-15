import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Hero() {
  return (
    <div className="w-full bg-gradient-to-b from-[#2e1a47] via-[#3a2b58] to-[#4b2e5d] p-8 mb-10 text-center shadow-xl border border-purple-900">
      <Avatar className="w-28 h-28 mx-auto mb-5 ring-4 ring-purple-300">
        <AvatarImage src="Shubham_Square.jpg" alt="Shubham Vandara" />
        <AvatarFallback className="text-xl font-semibold text-white bg-purple-600">
          SV
        </AvatarFallback>
      </Avatar>

      <h1 className="text-4xl font-extrabold tracking-tight text-white mb-6 font-serif">
        Shubham Vandara
      </h1>

      <p className="text-lg text-purple-200 max-w-xl mx-auto leading-relaxed font-light italic text-center bg-[#2a223d] p-4 rounded-xl shadow-md">
        ✨ I am a{" "}
        <span className="text-purple-300 font-medium">passionate</span> and{" "}
        <span className="text-purple-300 font-medium">curious</span> person,
        always eager to learn and grow 📚. I believe in{" "}
        <span className="text-pink-300 font-medium">kindness</span>, stay{" "}
        <span className="text-green-300 font-medium">positive</span>, and value
        meaningful connections 🤝.
      </p>
    </div>
  );
}
