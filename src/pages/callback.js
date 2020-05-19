import React from "react"
import { handleAuthentication } from "../utils/auth"

export default () => {
  handleAuthentication()

  return <p>Logging you in...</p>
}
