var GreeterMessage = React.createClass({
    render: function () {
        var name = this.props.name;
        var message = this.props.message;
        return (
            <div>
                <h1>Hello {name}</h1>
                <p>{message}</p>
            </div>
        );
    }
});

var GreeterForm = React.createClass({
    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="name" placeholder="enter name" style={{display : 'block'}} />
                    <textarea  ref="message" cols="30" rows="7" placeholder="enter message" style={{display : 'block'}} ></textarea>
                    <button>Submit</button >
                </form>
            </div>
        );
    },
    onFormSubmit: function (e) {
        e.preventDefault();
        var name = this.refs.name.value;
        if (name.length > 0) {
            this.refs.name.value = '';
            this.props.onNewName(name);
        }
        var message = this.refs.message.value;
        if(message.length>0){
            this.refs.message.value = '';
            this.props.onNewMessage(message);
        }
    }
});

var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React',
            message: 'this is the default message'
        }
    },
    getInitialState: function () {
        return {
            name: this.props.name,
            message : this.props.message
        }
    },
    handleNewName: function (name) {
        this.setState({
            name
        });
    },
    handleNewMessage : function(message){
        this.setState({
            message
        });
    },
    render: function () {
        var name = this.state.name;
        var message = this.state.message;
        return (
            <div>
                <GreeterMessage name={name} message={message} />
                <GreeterForm onNewName={this.handleNewName} onNewMessage={this.handleNewMessage} />
            </div>
        );
    }
});


ReactDOM.render(
    <Greeter name="Abdelhamid" message="this is an overriden message" />,
    document.getElementById('app')
);
