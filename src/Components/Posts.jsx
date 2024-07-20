
import TimeLineUserPost from "./TimeLineUserPost/TimeLineUserPost";


export default function Posts({username, time, url, limit}){
    return(
        <div className="flex flex-col">
            
            <div className="post-image mt-1 m-3">
                <div className="flex gap-2 m-3">
                    <img src="https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg" className="h-8 rounded-full" alt="" />
            {username} • {time}
                </div>
            
                {/* <img src="https://hips.hearstapps.com/hmg-prod/images/funny-dog-captions-1563456605.jpg" className="h-[250px]" alt="" /> */}
                <TimeLineUserPost url = {url} limit ={limit}></TimeLineUserPost>
            </div>
            <div className="post-footer flex mt-1 m-3 gap-3">
                <img src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/external-love-social-media-ui-tanah-basah-basic-outline-tanah-basah.png" className="h-5 hover:cursor-pointer hover:opacity-60" alt="" />
                <img src="https://img.icons8.com/external-inkubators-detailed-outline-inkubators/25/external-comment-video-interface-inkubators-detailed-outline-inkubators.png" className="h-5 hover:cursor-pointer hover:opacity-60" alt="" />
                <img src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/64/external-paper-plane-design-thinking-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png" className="h-5 hover:cursor-pointer hover:opacity-60" alt="" />
                <img src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/external-bookmark-social-media-ui-tanah-basah-basic-outline-tanah-basah.png" className="h-5 hover:cursor-pointer hover:opacity-60" alt="" />
            </div>
        </div>
    )
}