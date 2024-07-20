export default function StoryGreen({url, username}){
    return(
        <div className="flex flex-col justify-center items-center p-2 overflow-hidden">
            <img src={url} className="h-12 rounded-full border-2 border-gray-400 hover:cursor-pointer p-1 m-2" alt="" />
            <span className="hover:cursor-pointer">{username}</span>
        </div>
    )
}