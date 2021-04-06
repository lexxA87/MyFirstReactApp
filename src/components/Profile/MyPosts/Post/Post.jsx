import s from './Post.module.css'

const Post = (props) =>{
    return <div className = {s.item}>
          <img alt={""} src="https://funny-photo.s3.amazonaws.com/preview/navi_avatar/smiling-girl-blue-face-effect.jpg"/>
          {props.message}
          <div>
              <span>{props.likeCount} Like</span>
          </div>
          </div>
}

export default Post;