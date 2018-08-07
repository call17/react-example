import React from 'react'
import { render } from 'react-dom'
import routes from './routes'
import { MemberList } from './components/ui/MemberList'

window.React = React

render(
	routes,
	document.getElementById('react-container'))
