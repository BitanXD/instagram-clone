export default function StoryOrange({url, username}){
    return(
        <div className="">
            <img src={url} className="h-10 border-2 border-orange-600 p-1 rounded-full m-2 hover:cursor-pointer" alt="" />
            <span className="hover:cursor-pointer">{username}</span>
        </div>
    )
}