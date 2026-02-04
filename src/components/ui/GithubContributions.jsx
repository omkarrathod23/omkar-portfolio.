import React from "react";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar"; // ✅ FIXED
import { useTheme } from "../../context/ThemeContext";

const GithubContributions = () => {
  const { theme } = useTheme();

  return (
    <section id="github" className="container py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card-glass p-8 flex flex-col gap-6"
      >
        <h2 className="text-lg font-semibold">
          GitHub <span className="text-secondary">Contributions</span>
        </h2>

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
    </section>
  );
};

export default GithubContributions;

