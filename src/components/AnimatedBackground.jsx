export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0 animate-gradient-bg opacity-40"
        style={{
          background:
            'linear-gradient(-45deg, #0a0a0f, #1a1033, #0f1729, #1e1b4b, #0a0a0f)',
          backgroundSize: '400% 400%',
        }}
      />
      <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] animate-blob rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="absolute -right-1/4 bottom-0 h-[600px] w-[600px] animate-blob rounded-full bg-blue-600/15 blur-[120px] [animation-delay:4s]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
}
