import axios from 'axios';

const GITHUB_API_BASE = 'https://api.github.com';
const GITHUB_USERNAME = 'laraib-dev'; // Replace with your actual GitHub username

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  created_at: string;
}

export interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
}

export const fetchGitHubUser = async (): Promise<GitHubUser> => {
  const response = await axios.get(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`);
  return response.data;
};

export const fetchGitHubRepos = async (): Promise<GitHubRepo[]> => {
  const response = await axios.get(
    `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
  );
  return response.data;
};

export const fetchTopRepos = async (limit: number = 6): Promise<GitHubRepo[]> => {
  const repos = await fetchGitHubRepos();
  return repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count || 
                    new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
    .slice(0, limit);
};

export const getLanguageColor = (language: string | null): string => {
  const colors: Record<string, string> = {
    JavaScript: '#f7df1e',
    TypeScript: '#3178c6',
    React: '#61dafb',
    HTML: '#e34c26',
    CSS: '#264de4',
    Python: '#3776ab',
    Java: '#007396',
    'C++': '#00599c',
    Ruby: '#cc342d',
    Go: '#00add8',
    Rust: '#dea584',
    Vue: '#4fc08d',
    Svelte: '#ff3e00',
    default: '#6e7681',
  };
  return colors[language || 'default'] || colors.default;
};
