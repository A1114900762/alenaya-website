'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  status: string;
  statusColor?: 'green' | 'amber' | 'blue';
  index?: number;
}

const statusStyles = {
  green: 'bg-green-50 text-green-700 border-green-200',
  amber: 'bg-amber-50 text-amber-700 border-amber-200',
  blue:  'bg-blue-50 text-blue-700 border-blue-200',
};

const statusDots = {
  amber: 'bg-amber-500',
  blue:  'bg-blue-500',
};

export default function ProjectCard({ title, description, status, statusColor = 'green', index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all duration-400"
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="text-sm font-black text-dark leading-snug group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
        <span className={`shrink-0 inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border ${statusStyles[statusColor]}`}>
          {statusColor === 'green' ? (
            <CheckCircle2 size={12} aria-hidden="true" />
          ) : (
            <span className={`w-1.5 h-1.5 rounded-full ${statusDots[statusColor]}`} aria-hidden="true" />
          )}
          {status}
        </span>
      </div>
      <p className="text-xs text-gray-500 leading-relaxed whitespace-pre-line">{description}</p>
    </motion.div>
  );
}
