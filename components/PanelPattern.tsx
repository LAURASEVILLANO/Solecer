// Patrón repetible de celdas solares, usado como textura de fondo.
// No requiere imágenes externas — se dibuja en SVG puro.
export default function PanelPattern({
  id,
  opacity = 0.5,
  color = "#F5B400",
}: {
  id: string;
  opacity?: number;
  color?: string;
}) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
      <defs>
        <pattern id={id} width="46" height="46" patternUnits="userSpaceOnUse" patternTransform="rotate(-6)">
          <rect x="2" y="2" width="42" height="42" rx="3" fill="none" stroke={color} strokeOpacity={opacity} strokeWidth="1.4" />
          <line x1="2" y1="23" x2="44" y2="23" stroke={color} strokeOpacity={opacity} strokeWidth="1" />
          <line x1="23" y1="2" x2="23" y2="44" stroke={color} strokeOpacity={opacity} strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
