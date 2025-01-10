"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function BirthdayMainPage() {
  const { data: session, status } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/logIn"); // Redirect if not logged in
    }
  }, [status, router]);

  if (status === "loading") return <p>Loading...</p>;

  return session ? (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-white bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: "url('/birthday-bg.jpg')" }}
      />

      {/* Floating Hearts Animation */}
      <div className="absolute w-24 h-24 bg-pink-400/30 rounded-full blur-3xl animate-bounce top-10 left-16"></div>
      <div className="absolute w-16 h-16 bg-rose-400/40 rounded-full blur-2xl animate-bounce bottom-10 right-20 delay-200"></div>

      {/* Main Content */}
      <div className="relative text-center p-6 max-w-3xl">
        <h1 className="text-5xl font-extrabold text-pink-200 drop-shadow-lg animate-fade-in">
          🎂 Happy Birthday, My Love! 💖
        </h1>
        <p className="mt-4 text-lg text-white/90 font-light">
          Today is all about you, my queen. You are the light of my life, and I
          hope this day brings you as much joy as you bring to me every day! 🎈
        </p>

        {/* Featured Image */}

        <img
          src="/birthday-girl.jpg"
          alt="Birthday Girl"
          className="mt-6 w-80 h-80 rounded-full shadow-lg border-4 border-pink-300"
        />

        {/* Birthday Video */}
        <div className="mt-6">
          <video
            className="w-full max-w-lg rounded-lg shadow-lg border-2 border-rose-500"
            controls
          >
            <source src="/birthday-video.MOV" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Loving Message */}
        <p className="mt-6 text-xl font-semibold text-rose-300">
          "You are my happiness, my love, and my greatest gift. 💕"
        </p>
        <p className="mt-6 text-xl font-semibold text-rose-300">
          Happy birthday my love 🎉🎂❤️ မြန်မာအချိန်နဲ့ပဲ
          မွေးနေ့ဆုတောင်းပေးလိုက်မယ် ဘာလို့လဲဆိုတော့ မြန်မာမှာပဲမွေးခဲ့လာတာကို
          ၂၃ ဆိုပေမဲ့နုနေလို့ ကလေးပဲထင်ရတယ်ဘေပီလေး ဘေပီလေးက
          အကောင်းဆုံး၊အတော်ဆုံးပါပဲ ဘေပီလုပ်တာတွေမှာ
          ဘေပီလေးအခုလာမယ်နောက်နောင်မှာ စိတ်တိုတာလေးတွေလျော့ပါ
          စိတ်တိုရက်ဘေပီလေးပဲပင်ပန်းတယ်
          ကိုကိုကြောင့်စိတ်တိုတာကိုပဲပြောတာမဟုတ်ပါဘူး ဘေပီလေး ဟိုတစ်ခေါက် taxi
          သမားကို စိတ်တိုတည်းကမှတ်မိနေတာ❤️🙄 ဘေပီလေး ကို ကိုကို
          အများရီးချစ်ပေးပ့မယ်နော် ဘေပီလေး က ကိုယ်လုပ်ချင်ရာဆို
          အရမ်းလုပ်တတ်ပေမဲ့ မကောင်းတာတွေမလုပ်ဘူးဆို ကိုကိုယုံပါတယ် ဘေပီလေးက
          မိဘကိုလည်း သိတတ်တယ် တခါတလေဆိုအဖေအကြောင်းပြောတော့ အော်ဘေပီလေးက သိတတ်တတ်
          လူပဲလိုထင်ပီးသား အမေကလည်း အရမ်းချစ်တော့
          ကလေးလေးလိုပဲနေနေတာမဆန်းလှပါဘူးနော်ဘေပီ အော်ကိုကို post တင်ပီးတော့တော့
          မတင်တော့ဘူးနော်ဘေပီလေး ဘာလိုလဲဆိုတော့ postတင်တာကိုကို
          လုံးဝမကြိုက်တာမို့လို့ပါ share တောင် မ share တာကြာပီ ဘေပီလေးက
          အတော်ဆုံးလေးပဲ ကိုကို ကမ္ဘာမှာ အဲ့ကြောင့် ဘေပီလေးက ဘယ်သူနဲ့မှ
          ယှဉ်စရာမလိုဘူး ဘေပီခင်တဲ့သူငယ်ချင်းဘာညာပြောတာပါ
          တခြားမတွေးပါနဲ့ဘေပီလေးရေ ဘေပီလေး ကိုကို
          ကိုစောင့်နိုင်ပ့မလား😢၇လလောက်ကို ဒီအပေါ်ကစာတွေက လွန်ခဲ့တဲ့ ရက်တွေက
          စိတ်ကူးပေါက်ပေါက်သလိုရေးထားတာခလေးလေးရေ အခု လုပ်ပေးတဲ့ present
          ကိုကြိုက် လောက်ပ့မလားဘေပီလေးက🥺 ဘေပီလေးတွက်ကို ကိုကို
          တန်ဖိုးကြီးတာပေးမှာပါ ကိုကို ကိုယ်တိုင်ရှာတဲ့ပိုက်ဆံနဲ့ပဲ
          ကိုကိုခလေးကို စတွေ့တည်းက ချစ်သူဖစ်ချင်ခဲ့တာပါ ကိုကို ကိုဘယ်လောက်ထိ
          ပြတ်မယ်စဉ်းစားမယ်ပြောပြော လက်မလွှတ်ပါဘူးကိုကို
          က🥺အရမ်းကိုချစ်တာမလို့ပါချစ်သူလေးကို❤️ ဘေပီအပေါ်ကို မဟုတ်တာမလုပ်ပါဘူး
          ကိုကို ဘက်က ကတိပေးချင်ပါသေးတယ် ခလေးရေ ❤️❤️❤️❤️❤️ ဆုတောင်းကခုမှပေးမာ -
          မွေးနေ့မှစ၍ စိတ်၏ချမ်းသာခြင်း ကိုယ်၏ကျန်းမာခြင်း နှင့် ကောင်းသော
          လောကဓံတရားတို့သာရပါစေဗျ❤️ ဘေပီချစ်သောကိုကို❤️
        </p>
      </div>
    </div>
  ) : null;
}
