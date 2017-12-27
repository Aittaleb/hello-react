var React = require('react');
var GreeterForm = React.createClass({
    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="name" placeholder="enter name" style={{ display: 'block' }} />
                    <textarea ref="message" cols="30" rows="7" placeholder="enter message" style={{ display: 'block' }} ></textarea>
                    <button>Submit</button >
                </form>
            </div>
        );
    },
    onFormSubmit: function (e) {
        e.preventDefault();
        var name = this.refs.name.value;
        var message = this.refs.message.value;
        var updates = {};
        if (name.length > 0) {
            this.refs.name.value = '';
         //  this.props.onNewName(name);
            updates.name = name ;
        }
        if (message.length > 0) {
            this.refs.message.value = '';
        //    this.props.onNewMessage(message);
            updates.message = message;
        }
        this.props.onNewUpdate(updates);
    }
});

module.exports = GreeterForm;