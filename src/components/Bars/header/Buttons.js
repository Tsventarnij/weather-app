import React, {Component} from 'react'
import {Link} from 'react-router'
import styled from 'styled-components'

class Buttons extends Component {

    render(){
        return (
          <div>
              {/*<Link to={"/"+this.props.city+"/yesterday"}>{this.props.active==="yesterday"?<Button primary>Yesterday</Button>:<Button>Yesterday</Button>}</Link>*/}
              <Link to={"/"+this.props.city+"/today"}>{this.props.active==="today"?<Button primary>Today</Button>:<Button>Today</Button>}</Link>
              <Link to={"/"+this.props.city+"/tommorow"}>{this.props.active==="tommorow"?<Button primary>Tommorow</Button>:<Button>Tommorow</Button>}</Link>
              <Link to={"/"+this.props.city+"/week"}>{this.props.active==="week"?<Button primary>Week</Button>:<Button >Week</Button>}</Link>
          </div>
        );

    }
}

export default Buttons

const Button = styled.button`
	/* Adapt the colours based on primary prop */
	background: ${props => props.primary ? 'lightblue' : 'white'};
	color: ${props => props.primary ? 'white' : 'dimgray'};

	font-size: 1em;
	margin: 1em;
	padding: 0.15em 1em;
	border: 2px solid lightblue;
	border-radius: 3px;
`;
