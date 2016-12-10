var React = require("react")
var ReactRouter = require("react-router")
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var IndexRoute = ReactRouter.IndexRoute
var browserHistory = ReactRouter.browserHistory


var Routes = React.createClass({
  render: function() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App} />
        <IndexRoute component={Profile} />
        <Route path="map" component={Map} />
        <Route path="lists" component={Lists} />
        <Route path="suggest" component={Suggest} />
        <Route path="notifications" component={Notifications} />
      </Router>
    );
  }
});

//ReactDOM.render(Routes);

module.exports = Routes;

