import ThemeProvider from './theme/ThemeProvider'
import AppRouter from './router'

export const App = () => {
	return (
		<ThemeProvider>
				<AppRouter />
		</ThemeProvider>
	)
}
