import p from './Post.module.css'

const Post = () =>{
    return <div className = {p.item}>
          <img src="https://funny-photo.s3.amazonaws.com/preview/navi_avatar/smiling-girl-blue-face-effect.jpg"/>
          post 1
          <div>
              <span>Like</span>
          </div>
          </div>
}

export default Post;