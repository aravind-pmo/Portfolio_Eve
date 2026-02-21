import React, { useEffect, useRef, useState } from 'react';

const PixelBlast = ({
  variant = 'square',
  pixelSize = 3,
  color = '#8B5CF6',
  patternScale = 1.5,
  patternDensity = 0.8,
  speed = 0.3,
  edgeFade = 0.4,
  transparent = true,
  className = '',
  ripples = true,
  liquid = true
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const rippleRef = useRef([]);

  // Separate useEffect for handling canvas size
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateSize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const displayWidth = rect.width;
      const displayHeight = rect.height;

      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;

      const ctx = canvas.getContext('2d');
      ctx.scale(dpr, dpr);
      canvas.style.width = displayWidth + 'px';
      canvas.style.height = displayHeight + 'px';

      setDimensions({ width: displayWidth, height: displayHeight });
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  // Separate useEffect for animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0 || dimensions.height === 0) return;

    const ctx = canvas.getContext('2d');

    // Mouse interaction for ripples
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    const handleClick = (e) => {
      if (ripples) {
        const rect = canvas.getBoundingClientRect();
        rippleRef.current.push({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          radius: 0,
          speed: 2,
          opacity: 1
        });
      }
    };

    if (ripples) {
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('click', handleClick);
    }

    // Create pixels array
    const pixels = [];
    const cols = Math.ceil(dimensions.width / (pixelSize * patternScale));
    const rows = Math.ceil(dimensions.height / (pixelSize * patternScale));

    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        pixels.push({
          x: x * pixelSize * patternScale,
          y: y * pixelSize * patternScale,
          size: pixelSize,
          baseOpacity: Math.random() * patternDensity,
          phase: Math.random() * Math.PI * 2,
          liquidOffset: Math.random() * Math.PI * 2,
          rippleInfluence: 0
        });
      }
    }

    // Animation loop
    let startTime = Date.now();
    
    const animate = () => {
      const currentTime = Date.now();
      const elapsed = (currentTime - startTime) * 0.001 * speed;

      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Update ripples
      if (ripples) {
        rippleRef.current = rippleRef.current.filter(ripple => {
          ripple.radius += ripple.speed;
          ripple.opacity *= 0.95;
          return ripple.opacity > 0.01 && ripple.radius < 300;
        });
      }

      // Draw pixels with enhanced effects
      pixels.forEach(pixel => {
        let opacity = pixel.baseOpacity + Math.sin(elapsed + pixel.phase) * 0.3;
        
        // Liquid effect
        if (liquid) {
          const liquidWave = Math.sin(elapsed * 0.5 + pixel.liquidOffset) * 0.2;
          opacity += liquidWave;
        }
        
        // Ripple influence
        if (ripples) {
          pixel.rippleInfluence = 0;
          rippleRef.current.forEach(ripple => {
            const dist = Math.sqrt(
              Math.pow(pixel.x - ripple.x, 2) + Math.pow(pixel.y - ripple.y, 2)
            );
            if (dist < ripple.radius && dist > ripple.radius - 50) {
              const influence = (1 - Math.abs(dist - ripple.radius) / 50) * ripple.opacity;
              pixel.rippleInfluence += influence * 0.5;
            }
          });
          opacity += pixel.rippleInfluence;
        }
        
        // Edge fade
        const edgeDistX = Math.min(pixel.x / dimensions.width, (dimensions.width - pixel.x) / dimensions.width);
        const edgeDistY = Math.min(pixel.y / dimensions.height, (dimensions.height - pixel.y) / dimensions.height);
        const edgeDist = Math.min(edgeDistX, edgeDistY);
        const fadeMultiplier = edgeFade > 0 ? Math.min(1, edgeDist / edgeFade) : 1;
        
        opacity *= fadeMultiplier;
        opacity = Math.max(0, Math.min(1, opacity));

        if (opacity > 0.01) {
          const alpha = Math.floor(opacity * 255).toString(16).padStart(2, '0');
          ctx.fillStyle = color + alpha;
          
          // Add slight size variation for liquid effect
          const sizeVariation = liquid ? 1 + Math.sin(elapsed * 0.3 + pixel.liquidOffset) * 0.1 : 1;
          const finalSize = pixel.size * sizeVariation;
          
          ctx.fillRect(
            pixel.x - (finalSize - pixel.size) / 2, 
            pixel.y - (finalSize - pixel.size) / 2, 
            finalSize, 
            finalSize
          );
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    if (dimensions.width > 0 && dimensions.height > 0) {
      animate();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (ripples && canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('click', handleClick);
      }
    };
  }, [dimensions.width, dimensions.height, pixelSize, color, patternScale, patternDensity, speed, edgeFade, ripples, liquid]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 ${className}`}
      style={{
        width: '100%',
        height: '100%',
        background: transparent ? 'transparent' : '#000000',
        pointerEvents: ripples ? 'auto' : 'none'
      }}
    />
  );
};

export default PixelBlast;