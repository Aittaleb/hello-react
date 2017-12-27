var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter');

ReactDOM.render(
    <Greeter name="Abdelhamid" message="this is an overriden message" />,
    document.getElementById('app')
);
