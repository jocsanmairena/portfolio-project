//App is used to references whatever page is about to be render.
import App from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/index.scss'
import Hero from '../components/shared/Hero'
import NavBar from '../components/shared/NavBar'

/* Page Template */
/* Component takes each page value defined in the pages folder */
const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			<div className="portfolio-app">
				<NavBar />
				{pageProps.appData}
				{/* If Component is home, then only then output Hero */}
				{Component.name === 'Home' && <Hero />}
				<div className="container">
					<Component {...pageProps} />
				</div>
			</div>
		</>
	)
}
/* 
When getInitialProps defined at _app.js., getInitialProps will not be called on other pages without the import App from 'next/app' configuration.
getInitialProps receives a single argument called context, it's an object with the following properties:
      pathname - Current route. That is the path of the page in /pages
      query - Query string section of URL parsed as an object
      asPath - String of the actual path (including the query) shown in the browser
      req - HTTP request object (server only)
      res - HTTP response object (server only)
      err - Error object if any error is encountered during the rendering
*/
MyApp.getInitialProps = async (context) => {
	//App refers to (whatever page is about to be render).
	//App.getInitialProps checks if there exist a getInitialProps in App.
	//If there is a getInitialProps in App, then(&&) we execute getInitialProps function: App.getInitialProps().
	console.log('getInitialProps of _App')
	const initialProps =
		App.getInitialProps && (await App.getInitialProps(context))

	return {
		pageProps: {
			appData: 'Hello _App Component',
			...initialProps.pageProps,
		},
	}
}
export default MyApp

/*
Next.js uses the App component to initialize pages.
You can override it and control the page initialization.
Which allows you to do amazing things like:

Persisting layout between page changes
Keeping state when navigating pages
Custom error handling using componentDidCatch
Inject additional data into pages
Add global CSS
To override the default App, create the file ./pages/_app.js as shown below:

// import App from 'next/app'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
The Component prop is the active page, so whenever you navigate between routes, Component will change to the new page. Therefore, any props you send to Component will be received by the page.

pageProps is an object with the initial props that were preloaded for your page by one of our data fetching methods, otherwise it's an empty object.

Caveats
If your app is running and you just added a custom App, you'll need to restart the development server. Only required if pages/_app.js didn't exist before.
Adding a custom getInitialProps in your App will disable Automatic Static Optimization in pages without Static Generation.
TypeScript
If you’re using TypeScript, take a look at our TypeScript documentation.

Related
For more information on what to do next, we recommend the following sections:

Automatic Static Optimization
Next.js automatically optimizes your app to be static HTML whenever possible. Learn how it works here.
Custom Error Page
Learn more about the built-in Error page.
 */
