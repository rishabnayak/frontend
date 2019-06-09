import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { defaults, theme } from "../../Defaults.js";
import Person from './Person.jsx';
import TeamNames from './TeamNames.jsx';
import { SyncLoader } from "react-spinners";

class Team extends Component {
    
    state = {
	loading: "Our lastest team list is loading ...",
	directors: null,
	organizers: null,
	organizer_app: null
    }
    
    componentWillMount() {

	fetch(defaults.teamInfo + "directors.json",
	      {
		  method: "GET", 
		  mode: "cors"
	      }
	).then(response => response.json())
         .then(data =>
             this.setState({
                 directors: data.directors
             })   
         )

	fetch(defaults.teamInfo + "organizer_app.json",
	      {
		  method: "GET", 
		  mode: "cors"
	      }
	).then(response => response.json())
         .then(data =>
             this.setState({
                 organizer_app: data
             })   
         )

	fetch(defaults.teamInfo + "organizers.json",
	      {
		  method: "GET", 
		  mode: "cors"
	      }
	).then(response => response.json())
         .then(data =>

             this.setState({
                 organizers: data
             })   
         )

    }
    


    
    render() {

	if (this.state.directors && this.state.organizers) {
	    return (	    
		    <Container fluid style={{ width: "100%", minHeight: "100vh", textAlign: "center", backgroundColor: theme.secondary[1] }} className="d-flex align-items-center">
			<div style={{ zIndex: 3, color: "white", width: "100%", marginTop: 50 }}>
			    <Container>
				<h1 className="display-3"> The HackRU Organizing Team </h1>
				<p> The organizing team for HackRU plans and runs the hackathon twice a year! We strive to organize an event that brings together people interested in working on tech projects in a fun, creative, and supportive environment.  We hope hackers can learn new tech skills and explore new ideas! </p>
				

				{this.state.organizer_app.organizer_app ?
				 (
				     <p> Want to help us organize the hackathon and join our dedicated team? Our application can be found <a href={this.state.organizer_app.organizer_app}>  here </a>.</p>
				 )
				:
				 (
				     <p> Our organizing teams are not currently accepting applications, but please keep in touch with us by visiting our website, hackru.org, and checking out our social media! </p>
				 )}
				
				<h4 className="display-4" > Directors </h4>
				<Row>
				    {this.state.directors.map((person) =>
					<Col xs={6} sm={3} style={{marginBottom: 20}}>
					    <Person key={person.id}
						    name={person.name} title={person.title}  image={ defaults.teamInfo + 'images/' + person.image} />
					</Col>
				    )}
				    
				</Row>

				<h4 className="display-4"> Organizers </h4>


				
				
				

				<div className=" row justify-content-center ">
				    {this.state.organizers.map((team) =>
					<Col xs={6} sm={4}>
					    <TeamNames key={team.id} teamName={team.team_name} people={team.members} />
					</Col>
				    )}

				</div>


			    </Container>
			</div>
		    </Container>
		
	    );} else {
		return (
		    <Container fluid style={{ width: "100%", minHeight: "100vh", textAlign: "center", backgroundColor: theme.secondary[1] }} className="d-flex align-items-center">
			<div style={{ zIndex: 3, color: "white", width: "100%", marginTop: 50 }}>
			    <Container>				
				<div style={{ width: "100%", textAlign: "center" }} align="center" className="align-items-center" key={0}>
				    <SyncLoader color="rgba(255, 255, 255, 0.25)" />
				</div>
			    </Container>
			</div>
		    </Container>

		)
	    }
    }
}
export default Team;