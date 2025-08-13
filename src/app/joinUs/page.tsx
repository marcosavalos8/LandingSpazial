import OnBoarding from "@/app/joinUs/components/OnBoarding";
import JoinUsLayout from "@/layouts/JoinUsLayout";
import JoinUs from "@/app/joinUs/components/JoinUs";
import Roles from "@/app/joinUs/components/Roles";
import VideoTop from "@/app/joinUs/components/videoTop";
import VideoBottom from "@/app/joinUs/components/videoBottom";
const page = () => {
  return (
    <main className="w-full px-4 md:px-8 mt-4">
      <VideoTop />
      <JoinUs />
      <OnBoarding />
      <section className="py-8">
        <h1 className="text-left font-bold text-[40px] mb-6 dark:text-white text-[#2C2A2A]">
          Roles in our company
        </h1>
        <Roles />
      </section>
      <VideoBottom id="video-bottom" />
    </main>
  );
};

export default page;
