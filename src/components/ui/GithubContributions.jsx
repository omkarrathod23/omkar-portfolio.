import React from "react";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "../../context/ThemeContext";
import { Github } from "lucide-react";

const GithubContributions = () => {
  const { theme } = useTheme();

  return (
    <section id="github" className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 sm:px-6"
      >
        <div className="text-center mb-10 md:mb-12">
          <motion.div
            className="flex items-center justify-center gap-2 mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            data-robot-msg="My GitHub activity"
          >
            <Github className="text-accent-primary" size={20} />
            <span className="text-accent-primary text-sm font-bold uppercase tracking-widest">
              Activity
            </span>
          </motion.div>

          <motion.h2
            className="text-2xl md:text-3xl font-bold text-accent-primary mb-3 tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Contributions
          </motion.h2>
          <motion.p
            className="text-secondary text-sm md:text-base max-w-lg mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Building in public with consistent contributions and open-source projects.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="p-6 md:p-8 bg-bg-secondary border border-accent-primary/5 rounded-2xl overflow-hidden flex justify-center"
          data-robot-msg="Building in public"
        >
          <div className="w-full overflow-x-auto flex justify-center">
            <GitHubCalendar
              username="omkarrathod23"
              year={2026}
              colorScheme={theme}
              blockSize={13}
              blockMargin={4}
              fontSize={12}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GithubContributions;
