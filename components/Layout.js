import React, { PropTypes } from "react";
import { logOut } from '../redux/actions/user';
import { connect } from 'react-redux';
import { IndexLink, Link } from "react-router";

import Nav from "../components/layout/Nav";
import Message from "../components/layout/Message";

export default class Layout extends React.Component {
	render() {
		const containerStyle = {
			marginTop: "60px"
		};

		return (
			<div>
				<Nav {...this.props}/>
				{/*<Message />*/}
				<div class="container" style={containerStyle}>
					<div class="row">
						<div class="col-lg-12">
							{this.props.children}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
