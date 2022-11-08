import React from 'react'
import './App.css'

import { InputForm } from './containers/InputForm';

import { SearchRepos } from './containers/SearchRepos';

export default function App() {
  const [userData, setUserData] = React.useState({})


  return (
    <div className="App">
      {userData.username &&
        <h1>{`Username: ${userData.username} --- ${userData.role}`}</h1>
      }

      <InputForm
        setUserData={setUserData}
      />

      <SearchRepos
        username={userData.username}
      />
    </div>
  )
}