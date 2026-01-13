// Adjust path as needed

export const Component = () => {
  return (
    <section className="w-full relative">
      {/* Soft glow */}
      <div className="pointer-events-none absolute top-[-120px] left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full bg-[#88734C]/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 pt-32 text-center">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#88734C]">
          Run a milk tea shop
          <br />
          <span className="font-serif">Scale with strategy.</span>
        </h1>

        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          TeaFlow helps multi-store owners monitor, compare, and grow smarter.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-full bg-[#88734C] px-7 py-3.5 text-white font-semibold hover:bg-[#6e5d3f] transition">
            Get Started
          </button>
          <button className="rounded-full border border-[#88734C] px-7 py-3.5 text-[#88734C] font-semibold hover:bg-[#f5f0d9] transition">
            Learn More
          </button>
        </div>

        <div className="mt-20">
          <img
            src="/image3.jpg"
            alt="Dashboard Preview"
            className="mx-auto w-full max-w-5xl rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};
