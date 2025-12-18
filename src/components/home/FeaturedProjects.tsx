import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/common/SectionHeading';
import ProjectCard from '@/components/projects/ProjectCard';
import type { GitHubRepo } from '@/services/github';

interface FeaturedProjectsProps {
  repos: GitHubRepo[];
  loading: boolean;
}

const FeaturedProjects = ({ repos, loading }: FeaturedProjectsProps) => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="Here are some of my recent works. Check out my GitHub for more projects."
        />

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="glass-card rounded-xl p-6 animate-pulse">
                <div className="h-4 w-24 bg-secondary rounded mb-4" />
                <div className="h-6 w-3/4 bg-secondary rounded mb-2" />
                <div className="h-16 bg-secondary rounded mb-4" />
                <div className="flex gap-2">
                  <div className="h-6 w-16 bg-secondary rounded" />
                  <div className="h-6 w-16 bg-secondary rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.slice(0, 6).map((repo, index) => (
              <ProjectCard key={repo.id} repo={repo} index={index} />
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" asChild>
            <Link to="/projects" className="flex items-center gap-2">
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
