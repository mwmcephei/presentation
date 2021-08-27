import PropTypes from "prop-types"
import React, { useEffect } from "react"

import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
import { connect } from "react-redux"

// Import Routes all
import { userRoutes, authRoutes } from "./routes/allRoutes"

// Import all middleware
import Authmiddleware from "./routes/middleware/Authmiddleware"

// layouts Format
import VerticalLayout from "./components/VerticalLayout"
import HorizontalLayout from "./components/HorizontalLayout"
import NonAuthLayout from "./components/NonAuthLayout"
import Index from "./components/HorizontalLayout"
import Overview from "./components/PMO_Components/overview"
import Measure_Overview from "./components/PMO_Components/Measure_Overview"
import Measure_Reports from "./components/PMO_Components/Measure_Reports"
import Budget_Report from "./components/PMO_Components/Budget_Report"

// Import scss
import "./assets/scss/theme.scss"




const App = props => {
  function getLayout() {
    let layoutCls = VerticalLayout
    switch (props.layout.layoutType) {
      case "horizontal":
        layoutCls = HorizontalLayout
        break
      default:
        layoutCls = VerticalLayout
        break
    }
    return layoutCls
  }

  const Layout = getLayout()
  return (
    <React.Fragment>
      <Router>
        <Index />
        <Switch>
          <Route path="/">
            <Overview />
          </Route>
          <Route path="/dashboard">
            <Overview />
          </Route>
          <Route path="/measure_overview">
            <Measure_Overview />
          </Route>
          <Route path="/measure_reports">
            <Measure_Reports />
          </Route>
          <Route path="/budget_reports">
            <Budget_Report />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  )
}

App.propTypes = {
  layout: PropTypes.any,
}

const mapStateToProps = state => {
  return {
    layout: state.Layout,
  }
}

export default connect(mapStateToProps, null)(App)
