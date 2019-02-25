import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Blackjack from '../screens/Blackjack';
import RockPaperScissors from '../screens/RockPaperScissors';
import TicTacToe from '../screens/TicTacToe';
import Section from './Section';

//  DYNAMIC ROUTING
const apps = [
	{ id: '1', Component: Blackjack },
	{ id: '2', Component: RockPaperScissors },
	{ id: '3', Component: TicTacToe },
];

function App(props) {
	// get the component that matches the /:id parameter
	// in the path prop in the <Route />
	// the parameter in the path (/:id) can be named whatever
	const { Component } = apps.find(
		app => app.id === props.match.params.id,
	);
	return <Component />;
}

const StyledContainer = styled.div`
  padding: 20px;
  height: 100%;

  nav {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
  }
`;

// Rebuilding the Routing without React Router - the old way with history API
// Will need HOC to add routing to current components
/*
const Blackjack = withRouteMatching(BlackjackPlain);
const RockPaperScissors = withRouteMatching(RockPaperScissorsPlain);
const TicTacToe = withRouteMatching(TicTacToePlain);
*/

export default function Container() {
  return (
	// With React Router you need to wrap your App in Router component.
	// This is enough to do only once.
	<Router>
		<StyledContainer>
		<nav>
			{/* Replace <a> with <Link /> component that takes 'to' prop */}
			{/* <Link to='/'>Black</Link>
			<Link to='/rock_paper_scissors'>Rock</Link>
			<Link to='/tic_tac_toe'>Tic</Link>
			<Link to='/contact'>Contact</Link> */}

			{/* DYNAMICAL ROUTING */}
			<Link to='/apps/1'>Black</Link>
			<Link to='/apps/2'>Rock</Link>
			<Link to='/apps/3'>Tic</Link>
			<Link to='/contact'>Contact</Link>
		</nav>

		{/* DYNAMIC ROUTING */}
		<Route path='/apps/:id' component={App} />

		{/* <Blackjack path='/' /> */}
		{/* Route is Blackjack. It is the underlying Component */}
		{/* <Route exact path='/' component={Blackjack} /> */}

		{/* <RockPaperScissors path='/rock_paper_scissors' /> */}
		{/* <Route path='/rock_paper_scissors' component={RockPaperScissors} /> */}

		{/* <TicTacToe path='/tic_tac_toe' /> */}
		{/* <Route path='/tic_tac_toe' component={TicTacToe} /> */}

		<Section
			color='#d6247a'
			heading='Contact'
			content='Contact me always renders.'
		/>
		</StyledContainer>
	</Router>
  );
}

// Rebuilding the Routing without React Router - the old way with history API
/*
function withRouteMatching(Component) {
	return class WithRouteMatching extends React.Component {
		// Need to track path in state, so the render() method re-runs
		// when the path is changed (you click on the <Link/>)
		state = { path: location.pathname }

		setPath = () => {
			// This will update the state with current pathname (URL)
			this.setState({ path: location.pathname });
		}

		// We need to setup an event listener to listen for popstate and run the setPath method
		componentDidMount() {
			window.addEventListener('popstate', this.setPath);
		}

		render() {
			const pathsMatch = location.pathname === this.props.path;
			const shouldAlwaysRender = !this.props.path;

			if (pathsMatch || shouldAlwaysRender) {
				return <Component {...this.props} />;
			}
			return null;
		}
	};
}

class Link extends React.Component {
	navigateTo = () => {
		history.pushState(null, null, this.props.to);
	}

	render() {
		return (
			<a onClick={this.navigateTo} href="#">{this.props.children}</a>
		);
	}
}
*/
