const React = require("react");
const Navbar = require("../components/Navbar");

class Edit extends React.Component {
  render() {
   
  
    console.log(this.props.blog);
    const { blog } = this.props;
    return (
      <div>
<head>
   <link rel="stylesheet" href="/CSS/app.css" />
</head>
<Navbar loggedInUser= {loggedInUser}/>
        <h1>Edit Blog</h1>

        <form action={`/blog/${blog._id}?_method=PUT`} method='POST'>
          <label htmlFor="title">Title</label>
          <input type="text" value={blog.title} name='title'/> <br />

          <label htmlFor="body">Body</label>
          <textarea
            type="text"
            value={blog.body}
            rows="24"
            cols="50"
            name='body'
          ></textarea>{" "}
          <br />

          <label htmlFor="sponsored">Sponsored?</label>
          <input type='checkbox' name='sponsored' defaultChecked={blog.sponsored ? 'on': null}/><br />

          <input type='submit' value='Update Blog'/>

        </form>
        
        <form action={`/blog/${blog._id}?_method=delete`} method='post'>
            <input type='submit' value='Delete Blog' />
        </form>
      </div>
    );
  }
}

module.exports = EditBlog;