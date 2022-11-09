import React from 'react';
import './ReposTable.css';

function ReposTable({reposLocal}) {
  return (
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
  )
}

export { ReposTable }