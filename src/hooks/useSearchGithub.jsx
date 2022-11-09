import React from 'react';
import axios from 'axios';

function useSearchGithub(username) {
  const [repos, setRepos] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  const api = axios.create({
    baseURL: 'https://api.github.com/users/',
    params: {
      per_page: 100,
    }
  })

  React.useEffect(() => {
    setLoading(true)
    async function retrieveData() {
      const { data } = await api.get(`${username}/repos`)
      setRepos(data);
      // console.log('retrieved')
      setLoading(false);
    }
    retrieveData();
  }, [username])

  return {
    repos,
    loading,
  }
}

export { useSearchGithub }