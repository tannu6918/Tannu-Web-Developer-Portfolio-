import { motion } from 'framer-motion';

const variants = {
  primary:
    'bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-glow hover:shadow-glow-blue',
  outline:
    'border border-accent-purple/50 text-white hover:bg-accent-purple/10 hover:border-accent-purple',
  ghost: 'text-white/80 hover:text-white hover:bg-white/5',
};

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  icon: Icon,
  type = 'button',
  disabled = false,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold font-outfit transition-all duration-300 ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {Icon && <Icon className="text-lg" />}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${classes} ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  );
}
