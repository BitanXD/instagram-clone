import Posts from "./Posts";
import StoryGreen from "./Story/StoryGreen";
import StoryOrange from "./Story/StoryOrange";


export default function TimelinePosts(){
    return(
        <div className="border-2">
            <div className="flex m-10 gap-2">
                <StoryOrange url={'https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg'} username={'memic'}></StoryOrange>
                <StoryGreen url={'https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg'} username={'ryan'}></StoryGreen>
                <StoryGreen url={'https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg'} username={'ric'}></StoryGreen>
                <StoryOrange url={'https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg'} username={'sldboy'}></StoryOrange>
                <StoryOrange url={'https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg'} username={'po1nting'}></StoryOrange>
                <StoryOrange url={'https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg'} username={'yuhab'}></StoryOrange>
                <StoryOrange url={'https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg'} username={'roy_king'}></StoryOrange>
                <StoryGreen url={'https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg'} username={'skundu'}></StoryGreen>
                <StoryGreen url={'https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg'} username={'chunky_09'}></StoryGreen>
            </div>
            <Posts username={'b1t_exxy_fr'} time={'12h'} url={'https://picsum.photos/v2/list'} limit={10}></Posts>
            <Posts username={'s_kundu'} time={'2h'} url={'https://picsum.photos/v2/list'} limit={1}></Posts>
            <Posts username={'pudding'} time={'5h'} url={'https://picsum.photos/v2/list'} limit={3}></Posts>
        </div>
    )
}