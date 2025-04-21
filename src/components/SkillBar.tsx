import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface SkillBarProps {
  label: string;
  percentage: number;
}

const SkillBar = ({ label, percentage }: SkillBarProps) => {
  const [width, setWidth] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setWidth(percentage);
    }
  }, [inView, percentage]);

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{label}</span>
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ '--width': `${width}%` } as React.CSSProperties}>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;