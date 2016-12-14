var React 	= require('react');
var axios 	= require('axios');
var signIn 	= require('./signIn.js');
var signUp 	= require('./signUp.js');
var signUp 	= require('./contact.js');
var signUp 	= require('./profile.js');

// Component for the entire Navbar:
var Navbar = React.createClass({
	componentWillMount: function() {
		var self = this;
	},
	render: function() {
		return (
				 
			<nav className="navbar navbar-default navbar-fixed-top" role="navigation">
				<div className="container">
					<div className="navbar-header page-scroll">
						<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand page-scroll" href="#">Team Tow</a>
					</div>
					<div className="collapse navbar-collapse navbar-ex1-collapse">
						<ul className="nav navbar-nav">
							<li>
								<a className="truckClass" href="/truck/signup-signin">TOW TRUCK</a>
							</li>
							<li>
								<a className="page-scroll" href="/users/signup-signin">Sign In</a>
							</li>
							<li>
								<a className="page-scroll" href="/users/signup">New User</a>
							</li>
							<li>
								<a className="page-scroll" href="#contact">Contact</a>
							</li>
							<li>
								<a href="#"><span class="glyphicon glyphicon-user"></span> Profile</a>
							</li>
							 <li>
								<a href="/users/sign-out"><span class="glyphicon glyphicon-log-in"></span> Sign Out</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
});

module.exports = Navbar;