import React from 'react';
import './SearchRepos.css';

import { useSearchGithub } from '../hooks/useSearchGithub';


function SearchRepos({username}) {
  const { repos } = useSearchGithub(username)
  const [reposLocal, setReposLocal] = React.useState()  // for when reloading

  React.useEffect(() => {
    setReposLocal(repos)
  }, [repos])

  return (
    <section className="topsection">
      {repos.length > 0 &&
        <table>
          <thead className="table-head">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Language</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {reposLocal.map(repo => (
              <tr key={repo.name}>
                <td>{repo.name}</td>
                <td>{repo.description}</td>
                <td>{repo.language}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </section>
  )
}

export { SearchRepos };