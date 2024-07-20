import {Link} from 'react-router-dom'

export default function Login(){
    return(
        <div>
        <div className="flex items-center justify-center h-[80vh]">
            <div className="gap-20 mr-20">
                <img src="https://fdn.gsmarena.com/imgroot/news/21/03/instagram-lite-ofic/-1200/gsmarena_003.jpg" alt="Dummy Image" className="h-[300px] rounded-xl" />
            </div>
            <div className="flex flex-col border-2 h-[50vh] p-5">
                <img src="https://st4.depositphotos.com/1050070/21934/i/450/depositphotos_219349048-stock-illustration-chisinau-moldova-september-2018-instagram.jpg" alt="logo" className="h-[100px]" />
                <form action="" className="flex flex-col mt-10">
                    <input className="border-2 gap-3 mb-3 p-3 rounded-lg text-xs" type="text" placeholder="Phone number, username or email"/>
                    <input className="border-2 gap-3 mb-3 p-3 rounded-lg text-xs" type="password" name="password" id="pass" placeholder="password" />
                    <button className="bg-blue-500 mb-3 p-2 rounded-lg hover:bg-blue-400 active:bg-blue-300"><Link to={'/home'}>Log in</Link></button>
                    <a href="#" className='text-xs text-center'>forgot password?</a>
                </form>
                <div className=' mt-3 p-3'>
                    <p className='text-xs'>Don't have an account? <a href="#" className='text-blue-600 hover:text-blue-400 hover:underline'>Sign up</a></p>
                </div>
            </div>
        </div>
        <div className="flex gap-5 justify-center text-xs hover:cursor-pointer">
        <p className=' hover:underline'>Meta</p>
        <p  className=' hover:underline'>About</p>
        <p  className=' hover:underline'>Blog</p>
        <p  className=' hover:underline'>Jobs</p>
        <p  className=' hover:underline'>Help</p>
        <p  className=' hover:underline'>Privacy</p>
        <p  className=' hover:underline'>Terms</p>
    </div>
    <div className="flex justify-center mt-2 text-xs">
        <p>© {new Date().getFullYear()} Instagram from Meta</p>
    </div>
    </div>
    )
}