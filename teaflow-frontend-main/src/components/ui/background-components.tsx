// Adjust path as needed

export const Component = () => {
  return (
    <div className="min-h-screen w-full relative bg-white">
      {/* Soft Yellow Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, #FFF991 0%, transparent 70%)
          `,
          opacity: 0.6,
          mixBlendMode: "multiply",
        }}
      />
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-6xl italic md:text-7xl font-bold text-center leading-tight mt-20">
          Run a milk tea shop
          <br />
          <span className="italic font-serif text-primary">
            Scale with strategy.
          </span>
        </h1>

        <p className="text-muted-foreground text-lg mt-4">
          TeaFlow helps multi-store owners monitor, compare, and grow smarter.
        </p>

        {/* Imported Image */}
      </div>

      

      {/* Your Content/Components */}
    </div>
  );
};
