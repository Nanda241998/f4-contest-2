// actions/authActions.js

export const login = (username, password) => {
    return (dispatch) => {
      return fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Invalid username or password')
        }
      })
      .then(data => {
        localStorage.setItem('token', data.token)
        localStorage.setItem('id', data.id)
        dispatch(loginSuccess(data.token, data.id))
      })
      .catch(error => {
        dispatch(loginFailure(error.message))
      })
    }
  }
  
  export const loginSuccess = (token, id) => ({
    type: 'LOGIN_SUCCESS',
    payload: { token, id }
  })
  
  export const loginFailure = (error) => ({
    type: 'LOGIN_FAILURE',
    payload: { error }
  })
  