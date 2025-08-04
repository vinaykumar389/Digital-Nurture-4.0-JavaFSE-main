import React, { useEffect, useState } from 'react';
import GitClient from './GitClient';

function App() {
  const [repos, setRepos] = useState([]);
  const gitClient = new GitClient();

  useEffect(() => {
    gitClient.getRepositories('techiesyed')
      .then(data => setRepos(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Repositories:</h1>
      <ul>
        {repos.map((repo, index) => (
          <li key={index}>{repo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
