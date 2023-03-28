import React, { Suspense, useLayoutEffect } from 'react'
import { HashRouter as Router, Route, withRouter } from 'react-router-dom';

// Preloader
const Preloader = React.lazy(() => import("./components/layouts/Preloader"));
const Home = React.lazy(() => import("./components/pages/Home"));
const About = React.lazy(() => import("./components/pages/About"));
const Menutwo = React.lazy(() => import("./components/pages/Menutwo"));
const Contact = React.lazy(() => import("./components/pages/Contact"));

const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children || null
})

function App() {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <ScrollToTop>
          <Preloader />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/menu" component={Menutwo} />
          <Route path="/contact" component={Contact} />
        </ScrollToTop>
      </Suspense>
    </Router>
  );
}

export default App;
