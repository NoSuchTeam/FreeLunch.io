var React = require("react")
var ReactDOM = require("react-dom")
var ReactRouter = require("react-router")
var Link = ReactRouter.Link
var browserHistory = ReactRouter.browserHistory
var Routes = require('./routes');

/*Link = function () {
  return <div onClick={function () {
    browserHistory.push(this.route)
  }}>{this.contents}</div>

}

Link = React.createClass({

  getInitialState : function () {
//    this.onClick = this.onClick.bind(this);
    return {};
  },

  pushRoute : function () {
    console.log('executing push for ' + route);
//    browserHistory.push(route);
  },

  render : function () {
    var route = this.props.to,
        getClick = function () {
          return function () {browserHistory.push(route)};
        };

    return (
      <button onClick={getClick()}>{this.props.contents}</button>
    );
  }

});
*/
var App = React.createClass({
  getInitalState: function() {
    return ({});
  },

  navButtons: function() {
    return(
      <ul role="nav" className="nav navbar-nav">
        <Link to={'/map'}>
          Map
        </Link>
        <Link to={'/lists'}>
          Lists
        </Link>
        <Link to={'/suggest'}>
          Suggest
        </Link>
        <Link to={'/notifications'}>
          Notifications
        </Link>
      </ul>
    );
  },

  render : function() {
    return(
      <ul role="nav" className="nav navbar-nav">
        <Link to={'/map'}>
          Map
        </Link>
        <Link to={'/lists'}>
          Lists
        </Link>
        <Link to={'/suggest'}>
          Suggest
        </Link>
        <Link to={'/notifications'}>
          Notifications
        </Link>
      </ul>
    );
  }/*,

  render : function () {
    return(
      <ul className="nav navbar-nav">
        <Link to='/map' contents="Map">
        </Link>
        <Link to='/lists' contents="List">
        </Link>
        <Link to='/suggest' contents="Suggest">
        </Link>
        <Link to='/notifications' contents="Notifications">
        </Link>
      </ul>
    );
  }*/
});

window.onload = function () {
  ReactDOM.render(React.createElement(Routes), document.getElementById('map'));
};

