import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () =>{
    return <div>
      my posts
      <div>new posts
          <textarea></textarea>
          <button>Add post</button>
      </div>
      <Post message= "Hi! How are you?" likeCount= "13"/>
      <Post message= "It's my first react app!" likeCount= "23"/>
      <Post message= "It's very good!" likeCount= "1"/>
    </div>
    
}

export default MyPosts;