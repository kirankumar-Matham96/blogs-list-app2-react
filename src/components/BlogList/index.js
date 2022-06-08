import {Loader} from 'react-loader-spinner'
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
    // const {blogsList, isLoading} = this.state
    const {blogsList} = this.state
    return (
      <ul className="blogs-list-container">
        {blogsList.map(eachBlog => (
          <BlogItem blogDetails={eachBlog} key={eachBlog.id} />
        ))}
      </ul>
    )
  }
}

export default BlogList
