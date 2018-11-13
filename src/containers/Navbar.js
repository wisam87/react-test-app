import React, { Component } from 'react';

class Navbar extends Component {

    render() {
        return (
        	<div className="topbar">
			    <div className="topbar-left">
			        <a href="/" className="logo"><span>SRMS</span><i className="mdi mdi-layers"></i></a>
			    </div>

			   
			    <div className="navbar navbar-default" role="navigation">
			        <div className="container-fluid">

			           
			            <ul className="nav navbar-nav list-inline navbar-left">
			                <li className="list-inline-item">
			                    <button className="button-menu-mobile open-left">
			                        <i className="mdi mdi-menu"></i>
			                    </button>
			                </li>
			                <li className="list-inline-item">
			                    <h4 className="page-title">Share Registry Management System | React</h4>
			                </li>
			            </ul>

			            <nav className="navbar-custom">

			                <ul className="list-unstyled topbar-right-menu float-right mb-0">

			                    <li>
			                        
			                        <div className="notification-box">
			                            <ul className="list-inline mb-0">
			                                <li>
			                                    <a  className="right-bar-toggle">
			                                        <i className="mdi mdi-bell-outline noti-icon"></i>
			                                    </a>
			                                    <div className="noti-dot">
			                                        <span className="dot"></span>
			                                        <span className="pulse"></span>
			                                    </div>
			                                </li>
			                            </ul>
			                        </div>
			                       
			                    </li>

			                    <li className="hide-phone">

			                        <form className="app-search">
			                            <input type="text" placeholder="Search Transaction..."
			                                   className="form-control"/>
			                            <button type="submit"><i className="fa fa-search"></i></button>
			                        </form>

			                    </li>

			                </ul>
			            </nav>
			        </div>
			    </div>
			</div>
        );
    }
}
 
export default Navbar;