// import Image from "next/image";
import Carousel from "@/components/Carousal";
import Timeline from "@/components/Timeline";
// import Chatbox from "@/components/chatbox";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 lg:p-36 bg-no-repeat bg-fixed bg-center bg-opacity-10"
    style={{ backgroundImage: "url('/images/world-3.png')" }}
    >
      <Carousel />
      <Timeline />
      {/* <Chatbox /> */}
    </main>
  );
}
