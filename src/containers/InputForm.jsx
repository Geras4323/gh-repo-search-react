import React from 'react';

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
      <form onSubmit={handleSubmit}>
        <input ref={username} type="text" placeholder='Username' />
        <input ref={role} type="text" placeholder='Role' />
        <button>Enter data</button>
      </form>
    </>
  )
}

export { InputForm }