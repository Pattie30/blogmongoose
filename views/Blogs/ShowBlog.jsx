const React = require('react')

class ShowBlog extends React.Component {
    render(){
        const { blog } = this.props
        return (
            <body style={myStyle.body}>

                <h1>Blogs Show Page</h1>
                
            <div style={myStyle.font1}>
                

                    <h2>{blog.title}</h2>
                    <br/>
                    <h3>{blog.body}</h3> 
                    <br/>
                    <h3>{blog.author}</h3>


                    
            </div>
            </body>
        )
    }
}

const myStyle = {
    body: {
    backgroundImage: 'url("https://c4.wallpaperflare.com/wallpaper/580/751/766/earth-sunset-blue-horizon-wallpaper-preview.jpg")' ,
    backgroundSize: 'cover',
    backgroundPosition: 'center center fixed',
    backgroundRepeat: 'no-repeat',
    margin: '-8px',
    padding: '10px',
    width: '100%',
    backgroundAttachment: 'fixed',
    },
    font1:{
    color: 'white',
    fontSize: '20px',
    textAlign: 'center center',
    margin: '30px',
    fontFamily: 'Tahoma',
    },
}


module.exports = ShowBlog