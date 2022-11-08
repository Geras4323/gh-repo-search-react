import React from 'react';

import { useLocalStorage } from '../hooks/useLocalStorage';

function InputForm() {
  const username = React.useRef()
  const role = React.useRef()
  const [title, setTitle] = React.useState()
  const { data, saveToLS } = useLocalStorage('USER', '')


  React.useEffect(() => {
    if (data) {
      setTitle(`Username: ${data.username} --- ${data.role}`)
    }
  }, [data])

  function handleSubmit(e) {
    e.preventDefault()
    saveToLS({
      username: username.current.value,
      role: role.current.value,
    })
  }

  return (
    <>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <input ref={username} type="text" placeholder='Username' />
        <input ref={role} type="text" placeholder='Role' />
        <button>Enter data</button>
      </form>
    </>
  )
}

export { InputForm }