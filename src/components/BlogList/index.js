import {Component} from 'react'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {
    blogsList: [],
    isLoading: true,
  }

  componentDidMount = () => {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs').then(res =>
      res.json(),
    )
    console.log({response})
    this.setState({blogsList: response, isLoading: false})
  }

  render() {
    const {blogsList, isLoading} = this.state

    return (
      <div className="blogs-list-container">
        {isLoading
          ? blogsList.map(eachBlog => (
              <BlogItem blogDetails={eachBlog} key={eachBlog.id} />
            ))
          : blogsList.map(eachBlog => (
              <BlogItem blogDetails={eachBlog} key={eachBlog.id} />
            ))}
      </div>
    )
  }
}

export default BlogList
