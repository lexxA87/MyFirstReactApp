import p from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () =>{
    return <div>
      my posts
      <div>new posts
          <textarea></textarea>
          <button>Add post</button>
      </div>
      <Post/>
      <Post/>
      <Post/>
    </div>
    
}

export default MyPosts;