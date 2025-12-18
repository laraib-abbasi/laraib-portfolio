import { motion } from 'framer-motion';

interface Skill {
  name: string;
  icon: string;
  color: string;
}

const skills: Skill[] = [
  { name: 'HTML5', icon: '🌐', color: '#e34c26' },
  { name: 'CSS3', icon: '🎨', color: '#264de4' },
  { name: 'JavaScript', icon: '⚡', color: '#f7df1e' },
  { name: 'TypeScript', icon: '📘', color: '#3178c6' },
  { name: 'React.js', icon: '⚛️', color: '#61dafb' },
  { name: 'Next.js', icon: '▲', color: '#000000' },
  { name: 'Tailwind CSS', icon: '💨', color: '#06b6d4' },
//   { name: 'Node.js', icon: '💚', color: '#339933' },
//   { name: 'Figma', icon: '🎨', color: '#f24e1e' },
  { name: 'Git', icon: '📦', color: '#f05032' },
  { name: 'VS Code', icon: '💻', color: '#007acc' },
  { name: 'REST APIs', icon: '🔗', color: '#ff6b6b' },
];

const SkillsGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="skill-badge flex items-center gap-3 cursor-default"
          style={{
            borderColor: `${skill.color}30`,
          }}
        >
          <span className="text-xl">{skill.icon}</span>
          <span className="font-medium">{skill.name}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsGrid;
