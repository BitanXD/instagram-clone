export default function ProfileDisplay({img_source, username}){
    return(
        <div className="flex gap-4 mt-4 text-sm justify-center items-center">
            <img src={img_source} alt={username} className="h-7 rounded-full" />{username}
            <button className="text-blue-600 hover:text-blue-400 hover:underline">Follow</button>
        </div>
    )
}