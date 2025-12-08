"use client";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  category: string;
}

export function Skills({ skills }: { skills: Skill[] }) {
  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <section id="skills" className="section-padding">
      <h2 className="text-3xl font-bold mb-12 tracking-tight">Skills & Technologies</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category, idx) => (
          <motion.div 
            key={category}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-2xl"
          >
            <h3 className="text-lg font-semibold mb-6 text-primary uppercase tracking-wider text-sm">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills
                .filter(s => s.category === category)
                .map(skill => (
                  <div 
                    key={skill.name}
                    className="px-4 py-2 rounded-lg border border-border bg-background/50 font-medium hover:border-primary/50 transition-colors"
                  >
                    {skill.name}
                  </div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
