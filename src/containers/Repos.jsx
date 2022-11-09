import React from 'react';
import './Repos.css';

import { useSearchGithub } from '../hooks/useSearchGithub';
import { ReposTable } from '../components/ReposTable';


function SearchRepos({username}) {
  const { repos, loading } = useSearchGithub(username)
  const [reposLocal, setReposLocal] = React.useState()  // for when reloading
  const criteria = React.useRef()

  React.useEffect(() => {
    setReposLocal(repos)
  }, [repos])

  function filterRepos() {
    const filteredRepos = repos.filter(repo => (
      repo.name.includes(criteria.current.value)
    ))
    setReposLocal(filteredRepos)
  }

  return (
    <section className="repos_section">
      <label htmlFor="filter">Filter by name:</label>
      <input
        id="filter"
        ref={criteria}
        className="criteria_input"
        type="text"
        placeholder="Criteria"
        onChange={filterRepos}
      />

      {loading &&
        <p className="loading_msg">Retrieving data...</p>
      }
      {repos.length > 0 && !loading &&
        <ReposTable
          reposLocal={reposLocal}
        />
      }
    </section>
  )
}

export { SearchRepos };