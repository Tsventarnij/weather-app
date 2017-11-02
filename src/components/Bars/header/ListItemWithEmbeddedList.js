import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import onClickOutside from 'react-onclickoutside'
import styled from 'styled-components'

/*actions*/
import {toggleEmbeddedMenu} from '../../../actions/menuActions'


class ListItemWithEmbeddedList extends Component {

    handleClickOutside = () => {
        this.props.toggleEmbeddedMenu(false);
    };


    _handleEmbeddedMenuToggle = () => {
        this.props.menu.embeddedMenuOpened ?
            this.props.toggleEmbeddedMenu(false)
            :
            this.props.toggleEmbeddedMenu(true)
    };

    render() {

        return (
           <StyledBar>
        <span
            className="nav-bar"
            onClick={this._handleEmbeddedMenuToggle}
            title="legals">
          Select city
        </span>
                {this.props.menu.embeddedMenuOpened ?
                    <StyledListItemWithEmbeddedList>
                    <ul className="nav-bar__list embedded">
                        <li className="nav-bar__list-item embedded">
                            <Link
                                to="/703447/today"
                                className="nav-bar__link embedded"
                                onClick={this._handleEmbeddedMenuToggle}>
                                Kyyiv
                            </Link>
                        </li>
                        <li className="nav-bar__list-item embedded">
                            <Link
                                to="/709930/today"
                                className="nav-bar__link embedded"
                                onClick={this._handleEmbeddedMenuToggle}>
                                Dnipropetrovsk
                            </Link>
                        </li>
                        <li className="nav-bar__list-item embedded">
                            <Link
                                to="/687700/today"
                                className="nav-bar__link embedded"
                                onClick={this._handleEmbeddedMenuToggle}>
                                Zaporizhzhya
                            </Link>
                        </li>
                        <li className="nav-bar__list-item embedded">
                            <Link
                                to="/703845/today"
                                className="nav-bar__link embedded"
                                onClick={this._handleEmbeddedMenuToggle}>
                                Kryvyy Rih
                            </Link>
                        </li>
                    </ul>
                    </StyledListItemWithEmbeddedList>
                    : null}
           </StyledBar>
        );
    }
}

function mapStateToProps(state) {
    return {
        menu: state.menu,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleEmbeddedMenu: (payload) => {
            dispatch(toggleEmbeddedMenu(payload));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(onClickOutside(ListItemWithEmbeddedList))

const StyledBar = styled.div`
    color:gray;
`;
//TODO z index
const StyledListItemWithEmbeddedList = styled.div`
  &.nav-bar__list-item.parent{
    position: relative;
  }
  
  .nav-bar__link{
  
    &:hover{
      text-decoration: underline;
    }
  }
  
  .nav-bar__list.embedded{
        z-index: 5;
      position: absolute;
      background: WhiteSmoke;
      top: 40px;
      width: 215px;
      padding: 10px 0;
      border-top: 1px solid gray;
      margin: 0;
      
      .nav-bar__list-item.embedded{
        display: block;
        .nav-bar__link.embedded{
          padding: 10px 20px;
          display: block;
          border: 0;
          font-size: 16px;
          &:hover{
            background: lightgray;
            color: white;
            text-decoration: none;
          }
        }
      }
    }
`;
