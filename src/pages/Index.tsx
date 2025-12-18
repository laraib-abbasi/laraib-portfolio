import { useGitHub } from '@/hooks/useGitHub';
import HeroSection from '@/components/home/HeroSection';
import GitHubStats from '@/components/home/GitHubStats';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import SectionHeading from '@/components/common/SectionHeading';

const Index = () => {
  const { user, repos, loading } = useGitHub();

  return (
    <main>
      <HeroSection />
      
      {/* GitHub Stats Section */}
      <section className="py-16 border-y border-border bg-card/30">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="GitHub Stats"
            subtitle="My open source contributions and activity"
          />
          <GitHubStats user={user} loading={loading} />
        </div>
      </section>

      <FeaturedProjects repos={repos} loading={loading} />
    </main>
  );
};

export default Index;
