const React = require('react')

class Navbar extends React.Component{
    render(){
        const {loggedInUser} = this.props
        return(
        <div>
            <head>
                <link rel='stylesheet' href='/CSS/app.css'/>
            </head>
            <nav>
                <a href='/'>Home</a>
                <a href='/blog'>Blogs</a>
                <a href='/blog/new'>Create</a>
                <a href='/user/signup'>Sign in / Sign up</a>
               { loggedInUser && <a href='/user/signout'>Signout</a>}
                { loggedInUser && <span>{loggedInUser}</span>}
            </nav>

        </div>
        )
    }
}

module.exports = Navbar