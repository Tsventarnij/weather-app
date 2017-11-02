import React, {Component} from 'react'
import styled from 'styled-components'

/*components*/
import Header from './Bars/Header'

class MasterApp extends Component {

    render() {

        return (
        <div>    <Header/>
        <div className="container theme-showcase">

            <StyledContent>
              {this.props.children}
            </StyledContent>
        </div>
        </div>
        );
    }
}

export default MasterApp;

const StyledContent = styled.div`
    margin: 15px;
    `;
