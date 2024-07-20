import {Link} from 'react-router-dom'
export default function SideMenu(){
    return(
        <div className=" h-[100vh] flex flex-col p-10 gap-5">

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtjBw4xwF01ZdKL1cmnYZD3vdavlQPOWA7w&s" className="h-10" alt="" />

            <span className="flex gap-2 hover:cursor-pointer hover:bg-slate-400 w-[200px]"><img src="https://img.icons8.com/ios/50/home--v1.png" className="h-6 text-sm" alt="home-icon" />Home</span>

            <span className="flex gap-2 hover:cursor-pointer hover:bg-slate-400 w-[200px]"><img src="https://img.icons8.com/ios/50/search--v1.png" className="h-6 text-sm" alt="" />Search</span>

            <span className="flex gap-2 hover:cursor-pointer hover:bg-slate-400 w-[200px]"><img src="https://img.icons8.com/external-others-made-by-made/50/external-blogger-blogger-others-made-by-made.png" className="h-6 text-sm" alt="" />Explore</span>

            <span className="flex gap-2 hover:cursor-pointer hover:bg-slate-400 w-[200px]"><img src="https://img.icons8.com/badges/48/instagram-reel.png" className="h-6 text-sm" alt="" />Reels</span>

            <span className="flex gap-2 hover:cursor-pointer hover:bg-slate-400 w-[200px]"><img src="https://img.icons8.com/ios-filled/50/speech-bubble--v1.png" className="h-6" alt="" />Messages</span>

            <span className="flex gap-2 hover:cursor-pointer hover:bg-slate-400 w-[200px]"><img src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/external-love-social-media-ui-tanah-basah-basic-outline-tanah-basah.png" className="h-6 text-sm" alt="" />Notifications</span>

            <span className="flex gap-2 hover:cursor-pointer hover:bg-slate-400 w-[200px]"><img src="https://img.icons8.com/external-thin-kawalan-studio/24/external-instagram-tv-social-media-thin-kawalan-studio.png" className="h-6 text-sm" alt="" />Create</span>
            
            <span className="flex gap-2 hover:cursor-pointer hover:bg-slate-400 w-[200px]"><img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/external-instagram-web-and-social-media-flatart-icons-outline-flatarticons.png" className="h-6 text-sm" alt="" /><Link to={'/profile'}>Profile</Link></span>
        </div>
    )
}