"use strict";

var React = require('react');

var Home = React.createClass({
  render: function () {
    return (
      <div className="jumbotron">
        <h1>My First React Application</h1>
        <p>How does it look?</p>
      </div>
    );
  }
});

module.exports = Home;
