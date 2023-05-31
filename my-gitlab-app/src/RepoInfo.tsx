import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RepoInfo: React.FC = () => {
  const [repoData, setRepoData] = useState<any>(null);

  useEffect(() => {
    // Make API request to fetch GitLab repo information
    axios.get("https://gitlab.example.com/api/v4/projects")
      .then(response => {
        setRepoData(response.data);
      })
      .catch(error => {
        console.error('Error fetching repo information:', error);
      });
  }, []);

  if (!repoData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Repository Information</h2>
      <p>Name: {repoData.name}</p>
      <p>Description: {repoData.description}</p>
      <p>URL: <a href={repoData.url}>{repoData.url}</a></p>
    </div>
  );
};

export default RepoInfo;