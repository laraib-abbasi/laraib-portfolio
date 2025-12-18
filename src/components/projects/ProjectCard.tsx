import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';
import {  getLanguageColor } from '@/services/github';
import type {GitHubRepo} from '@/services/github';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  repo: GitHubRepo;
  index: number;
}

const ProjectCard = ({ repo, index }: ProjectCardProps) => {
  const formattedDate = new Date(repo.updated_at).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="glass-card rounded-xl p-6 hover-lift group"
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: getLanguageColor(repo.language) }}
            />
            <span className="text-sm text-muted-foreground font-mono">
              {repo.language || 'Unknown'}
            </span>
          </div>
          <span className="text-xs text-muted-foreground">{formattedDate}</span>
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {repo.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
          {repo.description || 'No description available'}
        </p>

        {/* Topics */}
        {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {repo.topics.slice(0, 4).map((topic) => (
              <span
                key={topic}
                className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
              >
                {topic}
              </span>
            ))}
          </div>
        )}

        {/* Stats */}
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4" />
            <span>{repo.stargazers_count}</span>
          </div>
          <div className="flex items-center gap-1">
            <GitFork className="w-4 h-4" />
            <span>{repo.forks_count}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            asChild
          >
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          </Button>
          {repo.homepage && (
            <Button
              size="sm"
              className="flex-1"
              asChild
            >
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
