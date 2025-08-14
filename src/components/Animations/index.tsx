import { motion } from 'framer-motion';
import { ReactNode } from 'preact/compat';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export function AnimatedSection({ 
  children, 
  delay = 0, 
  direction = 'up',
  className 
}: AnimatedSectionProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: 50, opacity: 0 };
      case 'down': return { y: -50, opacity: 0 };
      case 'left': return { x: -50, opacity: 0 };
      case 'right': return { x: 50, opacity: 0 };
      default: return { y: 50, opacity: 0 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitialPosition()}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut"
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export function FloatingElement({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-10, 10, -10],
        rotate: [-1, 1, -1]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}

export function ScaleOnHover({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}
    >
      {children}
    </motion.div>
  );
}

export function TypewriterText({ text, className }: { text: string, className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: index * 0.1
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}

export function PulseButton({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 8px rgba(78, 205, 196, 0.8)"
      }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: [
          "0px 0px 0px rgba(78, 205, 196, 0.4)",
          "0px 0px 20px rgba(78, 205, 196, 0.4)",
          "0px 0px 0px rgba(78, 205, 196, 0.4)"
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}

export function SlideInFromLeft({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export function SlideInFromRight({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export function FadeInUp({ children, delay = 0, className }: { children: ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut"
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
