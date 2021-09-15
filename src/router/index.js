import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import Home from './home'
import Upload from './upload'
import History from './history'

function AppRouter() {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route path='/upload' component={Upload} />
					<Route path='/' exact component={Home} />
					<Route path='/history' exact component={History} />
				</Switch>
			</Layout>
		</Router>
	)
}

export default AppRouter
