const React = require('react');
const User = require('./models/UserSchema');

class Edit extends React.Component {
    render(){
        console.log('from edit page', this.props.User);
        return(
            <div>
                <h1>
                     Edit Page
                </h1>
<form action={`/User/${User._id}?_method=put`} method='post'>
    username: <input type='text' name='name' defaultValue={User.name} />

     <br/>
    email: <input type= 'text' name='color' detaultValue={User.color} />

     
    password: <input type= 'text' name='color' detaultValue={User.color} />
   
    <input type='submit' value='Update Fruit' />

</form>

            </div>
        )
    }
}