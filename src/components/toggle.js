import React from "react"

import { Collapse, Navbar, Nav, NavItem, NavLink } from "reactstrap"

export default class Example extends React.Component {
  constructor(props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: true,
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <div onClick={this.toggleNavbar}>
            <div className="Spin">
              <div className="btn-line"></div>
              <div className="btn-line"></div>
              <div className="btn-line"></div>
            </div>
          </div>
          <Collapse isOpen={!this.state.collapsed} navbar>
            <div className="menu">
              <div className="menu-branding" href="/">
                {" "}
                <div className="portrait"></div>
              </div>
            </div>

            <Nav navbar className="menu-nav">
              <NavItem className="nav-item">
                <NavLink className="current" href="/">
                  Home
                </NavLink>
              </NavItem>

              <NavItem className="nav-item">
                <NavLink href="/about">About Me </NavLink>
              </NavItem>

              <NavItem className="nav-item">
                <NavLink href="/work"> My Work </NavLink>
              </NavItem>

              <NavItem className="nav-item">
                <NavLink href="/contact"> Contact </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
