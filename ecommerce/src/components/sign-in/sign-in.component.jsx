import React from 'react'

class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    }
  }
  render() {
    return
    ;<div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
    </div>
  }
}

export default SignIn
