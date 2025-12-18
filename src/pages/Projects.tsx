import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { useGitHub } from '@/hooks/useGitHub';
import SectionHeading from '@/components/common/SectionHeading';
import ProjectCard from '@/components/projects/ProjectCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const filterOptions = ['All', 'React', 'TypeScript', 'JavaScript', 'CSS', 'Node.js', 'API'];

const Projects = () => {
  const { repos, loading, error } = useGitHub();
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRepos = useMemo(() => {
    return repos.filter((repo) => {
      const matchesSearch =
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        repo.description?.toLowerCase().includes(searchQuery.toLowerCase());

      if (activeFilter === 'All') return matchesSearch;

      const matchesFilter =
        repo.language?.toLowerCase() === activeFilter.toLowerCase() ||
        repo.topics.some((topic) =>
          topic.toLowerCase().includes(activeFilter.toLowerCase())
        );

      return matchesSearch && matchesFilter;
    });
  }, [repos, activeFilter, searchQuery]);

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="My Projects"
          subtitle="A collection of my work fetched directly from GitHub. Filter by technology to find what interests you."
        />

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          {/* Search */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 bg-secondary border-border"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filterOptions.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className="transition-all duration-300"
              >
                {filter}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-muted-foreground mb-8"
        >
          Showing {filteredRepos.length} project{filteredRepos.length !== 1 ? 's' : ''}
        </motion.p>

        {/* Error State */}
        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card rounded-xl p-8 text-center max-w-md mx-auto"
          >
            <p className="text-muted-foreground mb-4">{error}</p>
            <p className="text-sm text-muted-foreground">
              Displaying demo projects for preview purposes.
            </p>
          </motion.div>
        )}

        {/* Loading State */}
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
        ) : filteredRepos.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card rounded-xl p-12 text-center max-w-md mx-auto"
          >
            <Filter className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria.
            </p>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepos.map((repo, index) => (
              <ProjectCard key={repo.id} repo={repo} index={index} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Projects;
