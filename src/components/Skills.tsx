"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface Skill {
  name: string;
  category: string;
  level: "proficient" | "familiar" | "learning";
}

interface SkillsProps {
  skills: Skill[];
}

const levelColors = {
  proficient: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  familiar: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  learning: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
};

const levelLabels = {
  proficient: "Proficient",
  familiar: "Familiar",
  learning: "Learning",
};

export function Skills({ skills }: SkillsProps) {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.level]) {
      acc[skill.level] = [];
    }
    acc[skill.level].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const levels: ("proficient" | "familiar" | "learning")[] = ["proficient", "familiar", "learning"];

  return (
    <section id="skills" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4 tracking-tight">Skills</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Technologies and tools I work with, organized by proficiency level.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {levels.map((level, levelIndex) => (
          <motion.div
            key={level}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: levelIndex * 0.1 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Badge
                variant="outline"
                className={`${levelColors[level]} border font-semibold`}
              >
                {levelLabels[level]}
              </Badge>
              <span className="text-sm text-muted-foreground">
                {groupedSkills[level]?.length || 0} skills
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {groupedSkills[level]?.map((skill, skillIndex) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: skillIndex * 0.05 }}
                  className="px-3 py-1.5 text-sm font-medium rounded-lg bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
