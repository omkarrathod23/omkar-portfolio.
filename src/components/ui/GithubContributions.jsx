import React from "react";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "../../context/ThemeContext";
import { Github } from "lucide-react";

const GithubContributions = () => {
  const { theme } = useTheme();

  return (
    <section id="github" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="mb-10 md:mb-14">
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent-primary text-sm font-black uppercase tracking-[0.2em]">
              GitHub Activity
            </span>
            <Github className="text-accent-primary" size={18} />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-black text-accent-primary mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Contributions & Activity
          </motion.h2>
          <motion.p
            className="text-secondary text-base md:text-lg max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Building in public with consistent contributions and open-source projects
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="p-6 md:p-8 bg-bg-secondary border border-accent-primary/10 rounded-2xl overflow-x-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-xl font-bold text-accent-primary">
              2026 Contribution Graph
            </h3>
          </div>

          <div className="overflow-x-auto">
            <GitHubCalendar
              username="omkarrathod23"
              year={2026}
              colorScheme={theme}
              blockSize={14}
              blockMargin={4}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GithubContributions;
