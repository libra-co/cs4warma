import AnnouncementCard from "./components/AnnouncementCard";
import ManagementTeam from "./components/ManagementTeam";
import Statistic from "./components/Statistic";
import VoiceChannel from "./components/VoiceChannel";

export default function Home() {
  return (
    <div className="px-4 flex flex-col gap-14 my-12">
      <AnnouncementCard />
      <ManagementTeam />
      <Statistic />
      <VoiceChannel />
    </div>
  );
}
