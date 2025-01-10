"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const goingToLogIn = () => {
    router.push("/logIn");
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-400 to-purple-600 text-white p-6">
      {/* Background Animation */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/birthday-bg.jpg')" }}
      />

      {/* Main Content */}
      <div className="relative text-center max-w-2xl">
        <h1 className="text-5xl font-bold drop-shadow-lg animate-fade-in">
          🎉 Happy Birthday My Love! 🎂
        </h1>
        <p className="mt-4 text-lg text-white/90">
          Let's make this day extra special with beautiful memories and endless
          joy. 💖
        </p>
        <button
          className="mt-6 px-6 py-3 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:bg-purple-200 transition-all duration-300"
          onClick={goingToLogIn}
        >
          Get Started
        </button>
      </div>

      {/* Floating Balloons */}
      <div className="absolute bottom-0 left-1/4 w-10 h-10 bg-red-400 rounded-full animate-bounce"></div>
      <div className="absolute bottom-10 right-1/4 w-12 h-12 bg-yellow-400 rounded-full animate-bounce delay-200"></div>
      <div className="absolute bottom-20 left-1/2 w-8 h-8 bg-blue-400 rounded-full animate-bounce delay-400"></div>
    </div>
  );
}
