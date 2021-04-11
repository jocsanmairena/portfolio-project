import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'
//import 'isomorphic-unfetch'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/index.scss'

import Navbar from '../components/shared/Navbar'
import Hero from '../components/shared/Hero'

const apolloClient = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
})

const MyApp = ({ Component, pageProps }) => {
  const isHomePage = () => Component.name === 'Home'

  return (
    <ApolloProvider client={apolloClient}>
      <div className='portfolio-app'>
        <Navbar />
        {isHomePage() && <Hero />}
        <div className='container'>
          <Component {...pageProps} />
        </div>
        {/* FOOTER STARTS */}
        {isHomePage() && (
          <footer
            id='sticky-footer'
            className='py-4 bg-black text-white-50 py-3'
          >
            <div className='container text-center'>
              <small>Copyright &copy; Your Website</small>
            </div>
          </footer>
        )}
        {/* FOOTER ENDS */}
      </div>
    </ApolloProvider>
  )
}

export default MyApp

// _app.js is a special component. _app.js code executes first, before rendering any page under the pages folder.
// We do not need to speficy the node_modules folder to retrive bootstrap.
// import 'bootstrap/dist/css/bootstrap.min.css'
// import '@/styles/index.scss'
// import App from 'next/app'
// import Hero from '@/components/shared/Hero'
// import NavBar from '@/components/shared/NavBar'

/* 
Component takes the value of the page you are navigating to.
Component takes only the page values defined under the pages folder.
If Component is home, then only then output Hero 
*/
// const MyApp = ({ Component, pageProps }) => {
//   return (
//     <>
//       <div className='portfolio-app'>
//         <NavBar />
//         {pageProps.appData}
//         {Component.name === 'Home' && <Hero />}
//         <div className='container'>
//           <Component {...pageProps} />
//         </div>
//       </div>
//     </>
//   )
// }

/* 
Only top most level page getInititalProps gets call.
How to call other pages getInititalProps, when getInititalProps already called at _app.js?
1. _app.js code executes every time we navigate to a new page.  
2. getInitialProps receives a single argument called context.
3. context it's an object with the pathname property.
4. pathname shows the current page path or route.
5. we import App from 'next/app'
6. App references a new page to be render. If the new page contains the getInitialProps function,
    then only then, call App.getInitialProps(context). Then, merge _app.js getInitialProps with otherPageInitialProps.
 */
// MyApp.getInitialProps = async context => {
//   console.log('GET INITIAL PROPS _APP')

//   const otherPageInitialProps =
//     App.getInitialProps && (await App.getInitialProps(context))

//   console.log(otherPageInitialProps)

//   return {
//     pageProps: {
//       appData: 'Hello _app.js page component',
//       ...otherPageInitialProps.pageProps
//     }
//   }
// }

// export default MyApp

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
