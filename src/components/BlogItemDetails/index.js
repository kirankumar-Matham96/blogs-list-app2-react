import {Component} from 'react'
import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogItemData: {},
    isLoading: true,
  }

  componentDidMount = () => {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`).then(res =>
      res.json(),
    )
    console.log({response})
    const updatedBlogDetails = {
      author: response.author,
      avatarUrl: response.avatar_url,
      id: response.id,
      imageUrl: response.image_url,
      title: response.title,
      topic: response.topic,
      content: response.content,
    }
    this.setState({blogItemData: updatedBlogDetails, isLoading: false})
  }

  render() {
    const {blogItemData, isLoading} = this.state
    console.log({blogItemData, isLoading})

    return (
      <div className="blog-item-details-container">
        <h1 className="blog-item-details-title">{blogItemData.title}</h1>
        <div className="blog-item-details-profile-container">
          <img
            src={blogItemData.avatarUrl}
            alt="avatar"
            className="blog-item-details-avatar"
          />
          <p className="blog-item-details-author-name">{blogItemData.author}</p>
        </div>
        <img
          src={blogItemData.imageUrl}
          alt={blogItemData.title}
          className="blog-item-details-image"
        />
        <p className="description">{blogItemData.content}</p>
      </div>
    )
  }
}

export default BlogItemDetails
