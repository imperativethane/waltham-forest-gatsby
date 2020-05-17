import React from "react"
import { Router } from "@reach/router"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
import { Link } from "gatsby"
import Settings from './settings'
import Results from "./manager-results"

const Home = () => <p>Home</p>
const MyAccount = () => <p>My Account</p>
const Billing = () => <p>Billing</p>

const Manager = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  return (
    <>
      <nav>
        <Link to="/manager/">My Account</Link>{" "}
        <Link to="/manager/settings/">Settings</Link>{" "}
        <Link to="/manager/results/">Results</Link>{" "}
        <Link to="/manager/billing/">Billing</Link>{" "}
        <a
          href="#logout"
          onClick={e => {
            logout()
            e.preventDefault()
          }}
        >
          Log Out
        </a>
      </nav>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  )
}

export default Manager
