const React = require("react");

class Delete extends React.Component {
  render() {
    const {blog} = this.props.blog
    return (
      <div>
        <h1>Delete Blog</h1>

        <form action="blog" method='delete'>
          Title: <input type="text" name="title" defaultValue={blog.title} />
          <br />
          Body: <input type="text" name='body' defaultValue={blog.body} />
          <br />
          Author: <input type="text" name="author" defaultValue={blog.author} />
          <br />
          Likes: <input type="text" name="likes" defaultValue={blog.likes} />
          <br />
          Sponsored: <input type="checkbox" name="isSponsored" defaultValue={blog.sponsored} />
          <br />
          <input type="submit" value="Delete Blog" />
        </form>
        <Footer />
      </div>
    );
  }
}

module.exports = Delete;
