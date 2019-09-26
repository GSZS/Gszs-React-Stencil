/**
 * @ Author: Gszs
 * @ Create Time: 2019-07-20 23:21:02
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-26 11:34:59
 * @ Description: 404
 */


import React from 'react';
import img from '@/assets/image/404.png';


class NotFound extends React.Component {
	state = {
		animated: ''
	};
	enter = () => {
		this.setState({ animated: 'hinge' })
	};
	render() {
		return (
			<div className="center" style={{ height: '100%', background: '#ececec', overflow: 'hidden' }}>
				<img src={img} alt="404" className={`animated swing ${this.state.animated}`} onMouseEnter={this.enter} />
			</div>
		)
	}
}

export default NotFound;