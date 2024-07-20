import ProfileDisplay from "./ProfileDisplay/ProfileDisplay";

export default function Suggestion(){
    return(
        <div className="flex flex-col ml-0 mt-10 mr-10 pr-20">
            <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex gap-4">
                    <h2>Suggested for you </h2><span className="text-blue-600 hover:text-blue-400 hover:cursor-pointer hover:underline">See all</span>
                </div>
                
            
            
            <ProfileDisplay img_source={'https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg'} username={'bitan_sarkar'}></ProfileDisplay>
            <ProfileDisplay img_source={'https://cdn4.vectorstock.com/i/1000x1000/15/38/young-woman-profile-avatar-beautiful-girl-female-vector-34601538.jpg'} username={'sonia_kundu'}></ProfileDisplay>
            <ProfileDisplay img_source={'https://avatars.githubusercontent.com/u/30511472?v=4'} username={'big_boy_9'}></ProfileDisplay>
            <ProfileDisplay img_source={'https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg'} username={'starboy__2023'}></ProfileDisplay>
            </div>
            <div className="flex flex-col gap-2 text-[11px] mt-10">
                <div className="flex gap-2 font-bold">
                    <span className="hover:underline">About</span>
                <span className="hover:underline">Help</span>
                <span className="hover:underline">API</span>
                <span className="hover:underline">Press</span>
                <span className="hover:underline">Jobs</span>
                <span className="hover:underline">Privacy</span>
                <span className="hover:underline">Terms</span>
                <span className="hover:underline">Locations</span>
                <span className="hover:underline">Languages</span>
                </div>
                <div>
                    <span className="font-bold">© {new Date().getFullYear()} INSTAGRAM FROM META</span>
                </div>
            </div>
        </div>
    )
}