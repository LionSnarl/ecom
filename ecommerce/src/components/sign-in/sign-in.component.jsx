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
      <form>
        <input name="email" value={this.state.email} required />
        <label>email</label>
        <input name="password" value={this.state.password} required />
        <label>password</label>
      </form>
    </div>
  }
}

export default SignIn
