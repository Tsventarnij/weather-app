import React, {Component} from 'react'
import {Link} from 'react-router'
import styled from 'styled-components'


/*components*/
import ListItemWithEmbeddedList from './ListItemWithEmbeddedList'

class NavBar extends Component {

    render() {


        return (
            <StyledNavBar className="nav-bar">
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">

                            <a className="navbar-brand" href="/">Weather App</a>
                        </div>
                        <div className="nav-bar_dropdown">
                            <ListItemWithEmbeddedList/>
                        </div>
                    </div>
                </nav>
            </StyledNavBar>
        );
    }
}




export default NavBar

const StyledNavBar = styled.nav`
    
   	
        .nav-bar_dropdown{
        margin: 15px;
        font-size: 16px;
        font-weight: 600; 
     inli
      }
`;