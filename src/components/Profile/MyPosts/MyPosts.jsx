import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () =>{

    let posts = [
      {message: "Hi! How are you?", likeCount: 15},
      {message: "It's my first React App!", likeCount: 99},
      {message: "It's very good!", likeCount: 1},
      {message: "It's very very good!", likeCount: 3}
    ]

    let postsElement = posts.map( p => <Post message= {p.message} likeCount= {p.likeCount}/>)

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