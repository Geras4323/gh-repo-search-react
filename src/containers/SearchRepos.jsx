import React from 'react';

import { useSearchGithub } from '../hooks/useSearchGithub';


function SearchRepos({username}) {
  const { repos } = useSearchGithub(username)

  return (
    <>
      {repos.length > 0 &&
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Language</th>
            </tr>
          </thead>
          <tbody>
            {repos.map(repo => (
              <tr key={repo.name}>
                <td>{repo.name}</td>
                <td>{repo.description}</td>
                <td>{repo.language}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </>
  )
}

export { SearchRepos };