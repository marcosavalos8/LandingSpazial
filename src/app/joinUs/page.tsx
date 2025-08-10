import OnBoarding from "@/components/joinUs/onBoarding/OnBoarding";
import JoinUsLayout from "@/layouts/JoinUsLayout";
import JoinUs from "@/components/joinUs/JoinUs";
import Roles from "@/components/joinUs/roles/Roles";
import VideoTop from "@/components/joinUs/navBarTop/videoTop";
import VideoBottom from "@/components/joinUs/footerBottom/videoBottom";
const page = () => {
  return (
    <JoinUsLayout>
      <VideoTop />
      <JoinUs />
      <OnBoarding />
      <section className="py-8">
        <h1 className="text-left font-bold text-[40px] mb-6 dark:text-white text-[#2C2A2A]">
          Roles in our company
        </h1>

        <Roles />
      </section>
      <VideoBottom />
    </JoinUsLayout>
  );
};

export default page;
