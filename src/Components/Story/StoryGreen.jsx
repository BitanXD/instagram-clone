export default function StoryGreen({url, username}){
    return(
        <div className="flex flex-col justify-center items-center">
            <img src={url} className="h-10 border-2 border-green-500 hover:cursor-pointer p-1 rounded-full m-2" alt="" />
            <span className="hover:cursor-pointer">{username}</span>
        </div>
    )
}