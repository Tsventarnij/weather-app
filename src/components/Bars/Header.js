import React, {Component} from 'react'
import styled from 'styled-components'
/*components*/
import NavBar from './header/NavBar'


const StyleHeader = styled.section`
    padding:0;  
    
   	background: lightgreen;
`;

class Header extends Component {

    render() {

        return (

                <StyleHeader >


                    <NavBar       classes="col-lg-7 col-md-6 col-sm-8 col-xs-6"/>



                </StyleHeader>

        );
    }
}

export default Header
