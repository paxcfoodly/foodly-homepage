/**
 * Landing page shell.
 * Section components are composed here — implementations land in Phase 4.
 */
export default function Home() {
  return (
    <>
      {/* <Nav /> */}
      {/* <Hero /> */}
      {/* <Problem /> */}
      {/* <Features /> */}
      {/* <Workflow /> */}
      {/* <AllFeaturesGrid /> */}
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      {/* <CTA /> */}
      {/* <Footer /> */}
      {/* <FloatingPill /> */}

      <main className="min-h-screen flex items-center justify-center px-8">
        <div className="text-center max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-light px-4 py-1.5 text-xs font-bold text-teal-dark mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse-brand" />
            Phase 3 · routes ready
          </div>
          <h1 className="font-serif text-5xl leading-tight">
            Foodly — <em className="text-teal not-italic">scaffolding</em>
          </h1>
          <p className="mt-4 font-mono text-sm text-stone">
            sections arrive in Phase 4 · trial at <code>/trial</code>
          </p>
        </div>
      </main>
    </>
  );
}
