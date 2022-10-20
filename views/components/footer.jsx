const React = require('react');
class Footer extends React.Component {
    render() {
        return(
            <nav style={styles.container}>
                <a href=''><i class="bi bi-facebook"></i></a>
                <a href=''><i class="bi bi-github"></i></a>
                <a href=''><i class="bi bi-stack-overflow"></i></a>
                <a href=''><i class="bi bi-reddit"></i></a>
                <a href=''><i class="bi bi-twitter"></i></a>
            </nav>
        )
    }
}

const styles = {
    container : {
        display:"flex",
        justifyContent: 'space-between',
        background: '#89cff0'
        //must match a background in app.css
    }
}


module.exports = Footer