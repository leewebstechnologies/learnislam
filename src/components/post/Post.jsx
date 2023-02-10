import "./post.css";

const Post = ({post}) => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategory">Music </span>
          <span className="postCategory">Life</span>
        </div>
        <span className="postTitle">{post.title}</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, eum
        ipsum. Quibusdam nam dignissimos totam accusantium debitis sit rem ex
        facere provident consequatur et dolor reprehenderit magni non, nostrum
        placeat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptate, eum ipsum. Quibusdam nam dignissimos totam accusantium
        debitis sit rem ex facere provident consequatur et dolor reprehenderit
        magni non, nostrum placeat! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Voluptate, eum ipsum. Quibusdam nam dignissimos totam
        accusantium debitis sit rem ex facere provident consequatur et dolor
        reprehenderit magni non, nostrum placeat!
      </p>
    </div>
  );
};

export default Post;
