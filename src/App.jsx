import React from 'react';
import './App.css'

import { InputForm } from './containers/InputForm';
import { SearchRepos } from './containers/Repos';


export default function App() {
  const [userData, setUserData] = React.useState({})

  return (
    <div className="App">
      <p className="description">Enter a GitHub username to see its repositories</p>

      {userData.username &&
        <header>
          <h1>{`Username: ${userData.username}`}</h1>
        </header>
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