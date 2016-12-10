var CategoryButton = React.createClass({
  propTypes: {
    image_path: React.PropTypes.string
  },

  getInitialState: function() {
    return({
      active: false
    });
  },

  toggleActive: function() {
    if (this.state.active === false) {
      this.setState({active: true})
    }
    else {
      this.setState({active: false})
    }
  },

  activeShaded: function() {
    if (this.state.active === true) {
      return 'danger'
    };
  },

  render: function() {
    return(
      <button className={this.activeShaded}
        onClick={this.toggleActive} >
        <i className={this.props.image_path} />
      </button>
    );
  }
});
