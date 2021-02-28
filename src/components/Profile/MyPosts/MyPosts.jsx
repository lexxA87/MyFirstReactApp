import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) =>{

    

    let postsElement = props.posts.map( p => <Post message= {p.message} likeCount= {p.likeCount}/>)

    return <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>New posts
          <div><textarea></textarea></div>
          <div><button>Add post</button></div>
      </div>
      <div className={s.oldPosts}>
        { postsElement }
      </div>
    </div>
    
}

export default MyPosts;