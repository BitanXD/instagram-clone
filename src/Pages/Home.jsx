import SideMenu from "../Components/SideMenu";
import Suggestion from "../Components/Suggestion";
import TimelinePosts from "../Components/TimelinePosts";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between">
        <SideMenu></SideMenu>
        <TimelinePosts></TimelinePosts>
        <div className=" h-[100vh]">
            <Suggestion></Suggestion>
        </div>
      </div>
    </div>
  );
}
