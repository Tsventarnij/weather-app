import React, {Component} from 'react'
import {Link} from 'react-router'
import styled from 'styled-components'

class Buttons extends Component {

    render(){
        return (
          <StyledBtnsBlock>
              {/*<Link to={"/"+this.props.city+"/yesterday"}>*/}
                  {/*{this.props.active==="yesterday"?<Button primary>Yesterday</Button>:<Button>Yesterday</Button>}*/}
              {/*</Link>*/}

              <Link activeClassName="active" to={"/"+this.props.city+"/today"}>
                      <Button>Today</Button>
              </Link>
              <Link activeClassName="active" to={"/"+this.props.city+"/tommorow"}>
                      <Button>Tommorow</Button>
              </Link>

              <Link activeClassName="active" to={"/"+this.props.city+"/week"}>
                  <Button >Week</Button>
              </Link>

          </StyledBtnsBlock>
        );

    }
}

export default Buttons


const StyledBtnsBlock = styled.div`
    a.active{
        button{
            background: lightblue;
            color: white;
        }
    }
`;
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
