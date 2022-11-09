import React from 'react';
import './InputForm.css';

import { useLocalStorage } from '../hooks/useLocalStorage';

function InputForm({ setUserData }) {
  const username = React.useRef()
  const role = React.useRef()
  const { data, saveToLS } = useLocalStorage('USER', '')


  React.useEffect(() => {
    if (data) {
      setUserData({
        username: data.username,
        role: data.role,
      })
    }
  }, [data])

  function handleSubmit(e) {
    e.preventDefault()
    if (username.current.value) {
      saveToLS({
        username: username.current.value,
        role: role.current.value,
      })
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <input
          className="form_input"
          ref={username}
          type="text"
          placeholder='Username'
        />
        <input
          className="form_input"
          ref={role}
          type="text"
          placeholder='Role'
        />
        <button>Enter data</button>
      </form>
    </>
  )
}

export { InputForm }