import { useState, useEffect } from 'react';
import { fetchGitHubUser, fetchGitHubRepos, } from '@/services/github';
import type {GitHubRepo, GitHubUser } from '@/services/github'

export const useGitHub = () => {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [userData, reposData] = await Promise.all([
          fetchGitHubUser(),
          fetchGitHubRepos(),
        ]);
        setUser(userData);
        setRepos(reposData);
        setError(null);
      } catch (err) {
        console.error('Error fetching GitHub data:', err);
        setError('Failed to fetch GitHub data. Please try again later.');
        // Set demo data for preview
        setRepos([
          {
            id: 1,
            name: 'portfolio-website',
            description: 'My personal portfolio website built with React and Tailwind CSS',
            html_url: 'https://github.com/demo/portfolio',
            homepage: 'https://portfolio.demo.com',
            stargazers_count: 42,
            forks_count: 12,
            language: 'TypeScript',
            topics: ['react', 'tailwind', 'portfolio'],
            updated_at: new Date().toISOString(),
            created_at: new Date().toISOString(),
          },
          {
            id: 2,
            name: 'ecommerce-app',
            description: 'Full-stack e-commerce application with payment integration',
            html_url: 'https://github.com/demo/ecommerce',
            homepage: 'https://shop.demo.com',
            stargazers_count: 85,
            forks_count: 23,
            language: 'JavaScript',
            topics: ['react', 'nodejs', 'mongodb'],
            updated_at: new Date().toISOString(),
            created_at: new Date().toISOString(),
          },
          {
            id: 3,
            name: 'weather-dashboard',
            description: 'Real-time weather dashboard with beautiful visualizations',
            html_url: 'https://github.com/demo/weather',
            homepage: 'https://weather.demo.com',
            stargazers_count: 34,
            forks_count: 8,
            language: 'React',
            topics: ['react', 'api', 'weather'],
            updated_at: new Date().toISOString(),
            created_at: new Date().toISOString(),
          },
          {
            id: 4,
            name: 'task-manager',
            description: 'Productivity app with drag-and-drop kanban boards',
            html_url: 'https://github.com/demo/tasks',
            homepage: null,
            stargazers_count: 56,
            forks_count: 15,
            language: 'TypeScript',
            topics: ['react', 'typescript', 'dnd'],
            updated_at: new Date().toISOString(),
            created_at: new Date().toISOString(),
          },
          {
            id: 5,
            name: 'chat-application',
            description: 'Real-time chat application with WebSocket',
            html_url: 'https://github.com/demo/chat',
            homepage: 'https://chat.demo.com',
            stargazers_count: 28,
            forks_count: 6,
            language: 'JavaScript',
            topics: ['react', 'websocket', 'chat'],
            updated_at: new Date().toISOString(),
            created_at: new Date().toISOString(),
          },
          {
            id: 6,
            name: 'blog-platform',
            description: 'Modern blog platform with markdown support',
            html_url: 'https://github.com/demo/blog',
            homepage: null,
            stargazers_count: 67,
            forks_count: 19,
            language: 'TypeScript',
            topics: ['nextjs', 'typescript', 'blog'],
            updated_at: new Date().toISOString(),
            created_at: new Date().toISOString(),
          },
        ]);
        setUser({
          login: 'laraib-dev',
          avatar_url: '',
          html_url: 'https://github.com/laraib-dev',
          name: 'Laraib',
          bio: 'Front-End Developer',
          public_repos: 25,
          followers: 150,
          following: 80,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { user, repos, loading, error };
};
