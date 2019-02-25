import React from 'react';
import Section from '../components/Section';


export default function Blackjack(props) {
	// React Router is injecting some props which we can use by default
	console.log(props);
  return (
    <Section
      path='/'
      color='#4286f4'
      heading='Blackjack'
      content='This is my Blackjack game.'
    />
  );
}
