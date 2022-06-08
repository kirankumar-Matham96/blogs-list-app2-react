import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const updatedBlogDetails = {
    author: blogDetails.author,
    avatarUrl: blogDetails.avatar_url,
    id: blogDetails.id,
    imageUrl: blogDetails.image_url,
    title: blogDetails.title,
    topic: blogDetails.topic,
  }

  return (
    <li className="blog-item-container">
      <img
        src={updatedBlogDetails.imageUrl}
        alt="blog"
        className="blog-item-image"
      />
      <p className="blog-item-topic">{updatedBlogDetails.topic}</p>
      <p className="blog-item-title">{updatedBlogDetails.title}</p>
      <div className="blog-item-profile-container">
        <img
          src={updatedBlogDetails.avatarUrl}
          alt="avatar"
          className="blog-item-avatar"
        />
        <p className="blog-item-author-name">{updatedBlogDetails.author}</p>
      </div>
    </li>
  )
}

export default BlogItem
