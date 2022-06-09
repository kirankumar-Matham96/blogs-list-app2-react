import Loader from 'react-loader-spinner'
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
    // const response = await fetch('https://apis.ccbp.in/blogs').then(res =>
    //   res.json(),
    // )
    const initialResponse = await fetch('https://apis.ccbp.in/blogs')
    const response = await initialResponse.json()
    this.setState({blogsList: response, isLoading: false})
  }

  render() {
    const {blogsList, isLoading} = this.state
    return (
      <ul className="blogs-list-container">
        {!isLoading ? (
          blogsList.map(eachBlog => (
            <BlogItem blogDetails={eachBlog} key={eachBlog.id} />
          ))
        ) : (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        )}
      </ul>
    )
  }
}

export default BlogList
