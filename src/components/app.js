"use strict";

var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;
var $ = require('jquery');
var jQuery = $;

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <RouteHandler />
        </div>
      </div>
    );
  }
});

module.exports = App;
