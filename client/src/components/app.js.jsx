var React = require("react")
var ReactRouter = require("react-router")
var Link = ReactRouter.Link
var browserHistory = ReactRouter.browserHistory

var App = React.createClass({
  getInitalState: function() {
    return ({});
  },

  navButtons: function() {
    return(
      <ul className="nav navbar-nav">
        <Link to='map'>
          Map
        </Link>
        <Link to='lists'>
          Lists
        </Link>
        <Link to='suggest'>
          Suggest
        </Link>
        <Link to='notifications'>
          Notifications
        </Link>
      </ul>
    );
  },

  render : function () {
    return (
      <div id={"TEST"}>test</div>
    );
  }

});

React.DOM.render(App, document.getElementById('map'));

