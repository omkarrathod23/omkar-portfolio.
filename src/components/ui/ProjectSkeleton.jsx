import React from 'react';
import { motion } from 'framer-motion';

const ProjectSkeleton = ({ viewMode = 'grid' }) => {
    if (viewMode === 'list') {
        return (
            <div className="border border-white/5 bg-white/[0.02] rounded-xl p-4">
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Image Skeleton */}
                    <div className="w-full md:w-48 h-32 flex-shrink-0 rounded-lg bg-white/5 animate-pulse" />

                    {/* Content Skeleton */}
                    <div className="flex-1 space-y-3">
                        <div className="h-6 bg-white/5 rounded w-3/4 animate-pulse" />
                        <div className="h-4 bg-white/5 rounded w-full animate-pulse" />
                        <div className="h-4 bg-white/5 rounded w-2/3 animate-pulse" />
                        <div className="flex gap-2">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="h-6 w-16 bg-white/5 rounded animate-pulse" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="border border-white/5 bg-white/[0.02] rounded-xl overflow-hidden"
        >
            {/* Image Skeleton */}
            <div className="aspect-video bg-white/5 animate-pulse" />

            {/* Content Skeleton */}
            <div className="p-6 md:p-8 space-y-4">
                <div className="h-8 bg-white/5 rounded w-3/4 animate-pulse" />
                <div className="h-4 bg-white/5 rounded w-full animate-pulse" />
                <div className="h-4 bg-white/5 rounded w-5/6 animate-pulse" />

                {/* Metrics Skeleton */}
                <div className="grid grid-cols-3 gap-4 py-4">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="space-y-2">
                            <div className="h-5 bg-white/5 rounded w-full animate-pulse" />
                            <div className="h-3 bg-white/5 rounded w-2/3 mx-auto animate-pulse" />
                        </div>
                    ))}
                </div>

                {/* Tech Stack Skeleton */}
                <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="h-6 w-20 bg-white/5 rounded animate-pulse" />
                    ))}
                </div>

                {/* Button Skeleton */}
                <div className="h-10 bg-white/5 rounded animate-pulse" />
            </div>
        </motion.div>
    );
};

export default ProjectSkeleton;
