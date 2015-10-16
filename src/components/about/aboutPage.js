"use strict";

var React = require('react');

var About = React.createClass({
  render: function () {
    return (
      <div>
        <h1>About</h1>
        <p>
          <ul>
            <li>First Item</li>
            <li>Second Item</li>
          </ul>
        </p>
      </div>
    );
  }
});

module.exports = About;
