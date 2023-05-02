import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './components/screens/Home/Home'
import Layout from './components/layout/Layout'
import { AppProvider } from './context/context'

ReactDOM.render(
	<React.StrictMode>
		<AppProvider>
			<Layout>
				<Home />
			</Layout>
		</AppProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
