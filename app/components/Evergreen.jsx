var React = require('react');
var soap = require('soap');

var Evergreen = React.createClass({

  render: function() {
    return(
    <div>
      <h1>Login</h1>
        <form ref="form" onSubmit={this.onSubmit} className="login-form">
        <input type="text" ref="username" placeholder="Enter Username"/>
        <input type="text" ref="password" placeholder="Enter Password"/>
        <button>Start</button>
      </form>
    </div>
  )
  }
});

module.exports = Evergreen;
