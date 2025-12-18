import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Heart, Coffee, Rocket } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import SkillsGrid from '@/components/about/SkillsGrid';

const experiences = [
  {
    icon: Rocket,
    title: 'Modern Tech Stack',
    description: 'Expertise in React.js, Next.js, TypeScript, and modern frontend frameworks.',
  },
  {
    icon: Palette,
    title: 'UI/UX Focus',
    description: 'Creating beautiful, intuitive interfaces with attention to detail and user experience.',
  },
  {
    icon: Zap,
    title: 'Performance First',
    description: 'Building fast, optimized applications with best practices and clean code.',
  },
  {
    icon: Heart,
    title: 'Passionate Developer',
    description: 'Constantly learning and staying updated with the latest web technologies.',
  },
];

const About = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="About Me"
          subtitle="Get to know more about my journey, skills, and what drives me as a developer."
        />

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
             <img src="/laraib.png"/>
              {/* <Code2 className="w-10 h-10 text-primary" /> */}
            </div>
            <h3 className="text-2xl font-bold mb-4">Hello! I'm Laraib</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a passionate Front-End Developer based in Pakistan. With a strong foundation 
              in modern web technologies, I specialize in creating responsive, user-friendly web 
              applications that deliver exceptional user experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey in web development started in the end of 2024, and since then, I've been 
              dedicated to mastering the craft of building beautiful digital experiences. I believe 
              in writing clean, maintainable code and staying curious about emerging technologies.
            </p>
          </div>
        </motion.div>

        {/* What I Bring */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12">
            What I <span className="gradient-text">Bring</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 text-center hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-12">
            My <span className="gradient-text">Tech Stack</span>
          </h3>
          <div className="max-w-4xl mx-auto">
            <SkillsGrid />
          </div>
        </motion.section>

        {/* Fun Facts */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto text-center">
            <Coffee className="w-10 h-10 text-primary mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-4">Fun Fact</h4>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or playing games.
            </p>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default About;
