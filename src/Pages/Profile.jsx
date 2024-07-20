
import StoryGray from "../Components/Story/StoryGray";
// import ThemeSwitch from "../Components/Theme/ThemeSwitch";
import TimeLineUserPost from "../Components/TimeLineUserPost/TimeLineUserPost";




export default function Profile(){
    return(
        <div className="flex flex-col justify-center items-center mt-8 mx-auto gap-12 w-[60vw]">
            {/* <ThemeSwitch></ThemeSwitch> */}
            <div className="mt-0">
                <img className="h-24 border-2 border-orange-600 rounded-full" src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png" alt="" />
                
            </div>
            <div className="flex flex-col">
            <div className="flex gap-5 ">
                <div ><span>bitan_sarkar</span></div>
            <div className="flex gap-2">
                <button className="border-2 p-1 bg-gray-500 text-white rounded-lg hover:bg-gray-600">Edit Profile</button>
            <button className="border-2 p-1 bg-gray-500 text-white rounded-lg hover:bg-gray-600">View Archieve</button>
            </div>
            
            </div>
            <div className="flex  gap-7 mt-3">
                <span>5 post</span>
                <span className="hover:cursor-pointer">400 followers</span>
                <span className="hover:cursor-pointer">250 following</span>
            </div>
            <div className="flex  flex-col mt-3">
                <span className="text-sm">Bitan 😎</span>
                <span className="text-sm">Hi Bitan this side</span>
            </div>
            <div className="flex">
                <StoryGray url={'https://static.vecteezy.com/system/resources/previews/021/971/813/non_2x/cute-square-dog-face-cartoon-head-of-animal-character-minimal-simple-design-puppy-illustration-vector.jpg'} username={'highlight 1'}></StoryGray>
                <StoryGray url={'https://static.vecteezy.com/system/resources/previews/021/971/813/non_2x/cute-square-dog-face-cartoon-head-of-animal-character-minimal-simple-design-puppy-illustration-vector.jpg'} username={'highlight 2'}></StoryGray>
                <StoryGray url={'https://static.vecteezy.com/system/resources/previews/021/971/813/non_2x/cute-square-dog-face-cartoon-head-of-animal-character-minimal-simple-design-puppy-illustration-vector.jpg'} username={'highlight 3'}></StoryGray>
            </div>
            
            </div>
            <div className="flex flex-col">
                <h1 className="flex items-center justify-center text-xl text-gray-500 mb-5 mt-0">Posts</h1>
                <TimeLineUserPost url={'https://picsum.photos/v2/list'} limit="5"></TimeLineUserPost>
            </div>
            
        </div>
    )
}