import { SVG } from '@svgdotjs/svg.js';

const OctagonWithTrapezoids = () => {
  // Octagon coordinates
  const octagonPoints = Array.from({ length: 8 }, (_, i) => {
    const angle = (i * 45) + 22.5;  // 45 degrees between each point, starting from a 22.5 degree offset
    const x = 150 + 110 * Math.cos((angle * Math.PI) / 180);
    const y = 150 + 110 * Math.sin((angle * Math.PI) / 180);
    return `${x},${y}`;
  }).join(' ');

  // Trapezoid dimensions
  const trapezoidHeight = 45;
  const trapezoidWidth = 70;

  
  // Create an SVG.js instance
  const draw = SVG().size(300, 400);
  
  // Render the octagon
  draw.polygon(octagonPoints).fill('white').center(150,150);

  // Render trapezoids around the octagon
  Array.from({ length: 8 }).forEach((_, index) => {
    const angle = (360 / 8) * index;
    const x = 150 + 130 * Math.cos((angle * Math.PI) / 180);
    const y = 150 + 130 * Math.sin((angle * Math.PI) / 180);

    draw.rect(trapezoidWidth, trapezoidHeight)
      .move(x - trapezoidWidth / 2, y - trapezoidHeight / 2)
      .rotate(angle + 90.5)
      .fill('gray');
  });

  // Convert the SVG.js drawing to React component
  const svgComponent = draw.svg();
  
  return (
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', }}>
      <div dangerouslySetInnerHTML={{ __html: svgComponent }} />
    </div>  );
};

export default OctagonWithTrapezoids;