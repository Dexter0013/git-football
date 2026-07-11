export default function Background() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden bg-bg bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Glassmorphic overlay with a little blur to overlay on top of the bg image */}
      <div className="absolute inset-0 bg-[#010012]/45 backdrop-blur-[6px]" />
    </div>
  );
}
