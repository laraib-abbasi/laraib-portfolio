import { motion } from 'framer-motion';
import { Github, Users, BookOpen, Star } from 'lucide-react';
import type { GitHubUser } from '@/services/github';

interface GitHubStatsProps {
  user: GitHubUser | null;
  loading: boolean;
}

const GitHubStats = ({ user, loading }: GitHubStatsProps) => {
  const stats = [
    { icon: BookOpen, label: 'Repositories', value: user?.public_repos || 0 },
    { icon: Users, label: 'Followers', value: user?.followers || 0 },
    { icon: Star, label: 'Following', value: user?.following || 0 },
  ];

  if (loading) {
    return (
      <div className="flex justify-center gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="text-center animate-pulse">
            <div className="w-12 h-12 rounded-lg bg-secondary mx-auto mb-2" />
            <div className="h-8 w-16 bg-secondary rounded mx-auto mb-1" />
            <div className="h-4 w-20 bg-secondary rounded mx-auto" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-wrap justify-center gap-8 md:gap-16"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="text-center group"
        >
          <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
            <stat.icon className="w-6 h-6 text-primary" />
          </div>
          <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </motion.div>
      ))}
      
      <motion.a
        href={user?.html_url || 'https://github.com'}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
        className="text-center group cursor-pointer"
      >
        <div className="w-14 h-14 rounded-xl bg-secondary border border-border flex items-center justify-center mx-auto mb-3 group-hover:border-primary/50 transition-colors">
          <Github className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
        </div>
        <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
          View Profile
        </div>
      </motion.a>
    </motion.div>
  );
};

export default GitHubStats;
