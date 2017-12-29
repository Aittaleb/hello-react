var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

ReactDOM.render(
    <Greeter name="Hamid" message="this is an overriden message" />,
    document.getElementById('app')
);
