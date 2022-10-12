const React = require('react')


class Index extends React.Component{
    render(){
        const{blogs} = this.props
       // console.log(this.props.fruit);
        return(
        <div style= {styles.container} className='container'>

            <h1 style= {styles.header}>BLOG Index Page</h1>
            <a style={styles.createBlogBtn} href= '/blogs/new'>Create New Blog</a>
           
            <ul style = {styles.ulContainer}>
             {blogs.map((blogs, idx )=> (
               
               <li style={styles.Item}> 
               The{''} <a href = {`/blogs/${blog._id} `} >{blog.name}{''}</a> {''}
               {''}is {blog.author} {''}
               <br/>
               

    <form action= {'/blogs/${blog._id?_method=DELETE'} method='POST'>
    <input type= 'submit' value= 'delete'/>
    </form>

     <a href={'/blogs/${blog._id}/edit'}>Edit Entry</a>

                </li>
           ) ) }
            </ul>
        </div>
        
    )}
}


const styles = {
    container: {
        backgroundColor: 'royalblue',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    
    header: {
        fontSize: '32px',
        color:' #fff',

    },

    ulContainer: {
        backgroundColor: '#fff',
        padding: '15px'
    },

    createFruitBtn: {
        backgroundColor: '#fff',
        padding: '5px',
        borderRadius: '5px',
        textDecoration: 'none'
    },
    Item: {
        padding: '10px',
        listStyleType: 'none'
    }
}


module.exports = Index