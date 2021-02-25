import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () =>{
    return <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>New posts
          <div><textarea></textarea></div>
          <div><button>Add post</button></div>
      </div>
      <div className={s.oldPosts}>
        <Post message= "Hi! How are you?" likeCount= "13"/>
        <Post message= "It's my first react app!" likeCount= "23"/>
        <Post message= "It's very good!" likeCount= "1"/>
      </div>
    </div>
    
}

export default MyPosts;