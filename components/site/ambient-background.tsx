export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#070707]"
    >
      <div className="absolute -top-72 left-1/2 h-[46rem] w-[80rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.10),rgba(255,255,255,0.03)_55%,transparent)]" />

      <div className="orb-drift absolute -left-56 top-[28%] size-[44rem] rounded-full bg-[radial-gradient(closest-side,rgba(170,172,182,0.10),transparent)]" />
      <div className="orb-drift-reverse absolute -right-64 top-[8%] size-[48rem] rounded-full bg-[radial-gradient(closest-side,rgba(200,200,210,0.08),transparent)]" />
      <div className="orb-drift absolute -bottom-72 left-1/2 h-[40rem] w-[70rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(120,122,130,0.14),transparent)]" />

      <div className="bg-grid absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
      <div className="bg-noise absolute inset-0" />
    </div>
  )
}
