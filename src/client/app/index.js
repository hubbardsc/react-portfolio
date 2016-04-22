var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router
var Route = require('react-router').Route
var Link = require('react-router').Link

var Contact = React.createClass({
  render: function() {
    return (
	    <div>	
	    	<div className="col-xs-12 col-md-2 menu">
				<hr />
				<Link to="/"><span className="title">HOME</span></Link><br />
				<Link to="/resume"><span className="title">RESUME</span></Link><br />
				<Link to="/contact"><span className="title">CONTACT</span></Link><br />
				<hr />
			</div>
		    <div className="col-md-10 col-xs-12 projects">
				<hr />
				<div className="col-xs-12">
					<h2>Contact</h2>
					
					<div className="col-xs-12 spacer">
						<h4>Email</h4>
						<p>steven.c.hubbard@gmail.com</p>
					</div>
					<div className="col-xs-12 spacer">
						<h4>Phone</h4>
						<p>(804) 909-2481</p>
					</div>
				</div>
			</div>
		</div>
    );
  }
});

var Resume = React.createClass({
  render: function() {
    return (
    	<div>
    		<div className="col-xs-12 col-md-2 menu">
				<hr />
				<Link to="/"><span className="title">HOME</span></Link><br />
				<Link to="/resume"><span className="title">RESUME</span></Link><br />
				<Link to="/contact"><span className="title">CONTACT</span></Link><br />
				<hr />
			</div>
	    	<div className="col-md-10 col-xs-12 projects">
				<hr />
				<h2>Steven Hubbard</h2>
				<hr />
				
				<div className="col-xs-12 spacer">
					<h4>Education</h4>
					<div className="col-xs-12">
						<ul className="col-xs-12">
							<li>Varina High School</li>
							<li>Virginia Commonwealth University - Business Administration</li>
						</ul>
					</div>
				</div>
				
				<div className="col-xs-12 spacer">
					<h4>Skills</h4>
					<ul className="col-xs-12 col-md-4">
						<li>JQuery</li>
						<li>PHP</li>
						<li>MySQL</li>
					</ul>
					<ul className="col-xs-12 col-md-4">
						<li>HTML</li>
						<li>CSS</li>
						<li>GIT</li>
					</ul>
					<ul className="col-xs-12 col-md-4">
						<li>SCRUM</li>
						<li>JavaScript</li>
						<li>React</li>
					</ul>
				</div>

				<div className="col-xs-12 spacer">
					<h4>Certifications</h4>
					<p> 
						SCRUM Master
					</p>
				</div>

				<div className="col-xs-12 spacer">
					<h4>Experience</h4>
					<p> 
						2015 - Current<br />
						Apprentice Developer<br />
					    Maxx Potential<br />
					    Richmond, Va<br />
					</p>
					<p>
					    Primarily focused on front-end web development using HTML and JavaScript with back-end development using PHP and MySQL. I’ve been the lead designer on all projects in my portfolio with the exception of Unitel, which I was asked to get back on track. In my current environment, we use agile methodologies to complete sprints and are responsible for estimating our time requirements and completing the projects in a timely fashion.  
						We have an environment that allows us the luxury of both developing skill in our chosen languages while experimenting with new and interesting technologies. While PHP has been my staple language, I have been given the opportunity to try newer technologies such as React. This has also enabled me to pick up new technologies quickly by relating them to what I already know.

					</p>
					<hr />
					<p> 
						2009-2015<br />
						Assistant Manager<br />
					    Food Lion<br />
					    Richmond, Va<br />
					</p>
					<p>
					    Responsible for day-to-day operations, inventory control processes, training new employees, profits and losses, volunteering for charity campaigns, and standard practices. 
					</p>
					<hr />
					<p> 
						2004-2009<br />
						Assistant Manager<br />
					    Colonial Foods LLC<br />
					    Richmond, Va<br />
					</p>
					<p>
					    Responsible for day-to-day operations, training new employees, increasing sales revenue, monitoring supplies, tracking inventory, and standard practices.
					</p>
				</div>
			</div>
		</div>
    );
  }
});

var Portfolio = React.createClass({
  render: function() {
    return (
    	<div>
	    	<div className="col-xs-12 col-md-2 menu">
				<hr />
				<Link to="/"><span className="title">HOME</span></Link><br />
				<Link to="/resume"><span className="title">RESUME</span></Link><br />
				<Link to="/contact"><span className="title">CONTACT</span></Link><br />
				<hr />
			</div>
		    <div className="col-md-10 col-xs-12 projects">
				<hr />
				<div className="col-md-4 col-sm-6">
					<div className="whitebox">
						<a href="http://ec2-54-175-18-30.compute-1.amazonaws.com/smartbox/form.html" target="_blank">
							<img src="images/smartbox_logo.jpg" alt="smartbox logo" />
						</a>
					</div>
				</div>
				<div className="col-md-4 col-sm-6">
					<div className="whitebox padding20">
						<a href="http://stg.reward-referrals.com" target="_blank">
							<img src="images/reward_referrals_logo.png" alt="reward referrals logo" />
						</a>
					</div>
				</div>
				<div className="col-md-4 col-sm-6">
					<div className="whitebox">
						<a href="http://frrdev.parseapp.com/vbqRZb5OYh" target="_blank">
							<img src="images/frr_logo.png" alt="frr logo" />
						</a>
					</div>
				</div>
				<div className="col-md-4 col-sm-6">
					<div className="whitebox padding20">
						<a href="http://unitelmarketing.com" target="_blank">
							<img src="images/unitel_logo.png" alt="unitel logo" />
						</a>
					</div>
				</div>
				<div className="col-md-4 col-sm-6">
					<div className="whitebox padding10">
						<a href="http://ec2-54-175-18-30.compute-1.amazonaws.com/dice/dice.php" target="_blank">
							<img src="images/dice.png" alt="dice" />
						</a>
					</div>
				</div>
				<div className="col-md-4 col-sm-6">
					<div className="whitebox padding10">
						<a href="http://ec2-54-175-18-30.compute-1.amazonaws.com/login.php" target="_blank">
							<img src="images/read_write_logo.png" alt="read write logo" />
						</a>
					</div>
				</div>
				<div className="col-md-4 col-sm-6">
					<div className="whitebox padding10">
						<a href="http://ec2-54-175-18-30.compute-1.amazonaws.com/markel/markel.html" target="_blank">
							<img src="images/markel_logo.jpeg" alt="markel logo" />
						</a>
					</div>
				</div>
				<div className="col-md-4 col-sm-6 parent">
					<div className="whitebox comingSoon padding20">
						<img src="images/river_oak_logo.png" />
					</div>
					<h3 className="comingSoonText">Coming Soon</h3>
				</div>
			</div>
		</div>
    );
  }
});


ReactDOM.render((
  <Router>
    <Route path="/" component={Portfolio} />
    <Route path="/resume" component={Resume} />
    <Route path="/contact" component={Contact} />
  </Router>
), document.getElementById('root'));
