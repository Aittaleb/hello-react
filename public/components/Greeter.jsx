var React = require('react');
var GreeterForm = require('./GreeterForm');
var GreeterMessage = require('./GreeterMessage');

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
            message: this.props.message
        }
    },
    handleNewName: function (name) {
        this.setState({
            name
        });
    },
    handleNewMessage: function (message) {
        this.setState({
            message
        });
    },
    handleNewUpdate : function(updates){
       this.setState(updates);
    },
    render: function () {
        var name = this.state.name;
        var message = this.state.message;
        return (
            <div>
                <GreeterMessage name={name} message={message} />
                <GreeterForm onNewName={this.handleNewName} onNewMessage={this.handleNewMessage} onNewUpdate={this.handleNewUpdate} />
            </div>
        );
    }
});

module.exports =  Greeter;
