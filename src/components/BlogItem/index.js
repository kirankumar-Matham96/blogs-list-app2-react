import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id} = blogDetails
  const updatedBlogDetails = {
    author: blogDetails.author,
    avatarUrl: blogDetails.avatar_url,
    id: blogDetails.id,
    imageUrl: blogDetails.image_url,
    title: blogDetails.title,
    topic: blogDetails.topic,
  }

  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
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
    </Link>
  )
}

export default BlogItem
