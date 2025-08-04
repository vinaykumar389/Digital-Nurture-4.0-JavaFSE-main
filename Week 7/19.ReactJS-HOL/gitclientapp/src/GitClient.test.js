import axios from 'axios';
import GitClient from './GitClient';

jest.mock('axios');

describe('Git Client Tests', () => {
  test('should return repository names for techiesyed', async () => {
    const mockData = [
      { name: 'Repo1' },
      { name: 'Repo2' },
    ];
    
    axios.get.mockResolvedValue({ data: mockData });

    const gitClient = new GitClient();
    const repos = await gitClient.getRepositories('techiesyed');

    expect(repos).toEqual(['Repo1', 'Repo2']);
  });
});
