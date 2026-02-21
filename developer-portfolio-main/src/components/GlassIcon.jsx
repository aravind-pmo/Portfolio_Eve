import React from 'react';
import { cn } from '@/lib/utils';

const GlassIcon = ({
  children,
  size = 'md',
  variant = 'default',
  className = '',
  animated = true,
  glow = false,
  ...props
}) => {
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const variantClasses = {
    default: 'bg-white/10 border-white/20',
    primary: 'bg-primary/10 border-primary/20',
    secondary: 'bg-secondary/10 border-secondary/20',
    accent: 'bg-accent/10 border-accent/20',
    destructive: 'bg-destructive/10 border-destructive/20'
  };

  const baseClasses = cn(
    // Glass morphism base
    'backdrop-blur-md border rounded-xl',
    'shadow-lg shadow-black/10',
    'flex items-center justify-center',
    'relative overflow-hidden',
    
    // Interactive states
    'transition-all duration-300 ease-out',
    'hover:scale-105 hover:shadow-xl hover:shadow-black/20',
    'active:scale-95',
    
    // Animated shimmer effect
    animated && 'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700',
    
    // Glow effect
    glow && 'shadow-2xl shadow-primary/20',
    
    // Size and variant
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  return (
    <div className={baseClasses} {...props}>
      {/* Inner glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl" />
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center">
        {children}
      </div>
      
      {/* Bottom highlight */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
};

// Predefined glass icons with common icons
const GlassIcons = {
  Code: ({ className, ...props }) => (
    <GlassIcon className={className} {...props}>
      <svg className="w-5 h-5 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    </GlassIcon>
  ),
  
  Menu: ({ className, ...props }) => (
    <GlassIcon className={className} {...props}>
      <svg className="w-5 h-5 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </GlassIcon>
  ),
  
  Close: ({ className, ...props }) => (
    <GlassIcon className={className} {...props}>
      <svg className="w-5 h-5 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </GlassIcon>
  ),
  
  Mail: ({ className, ...props }) => (
    <GlassIcon className={className} {...props}>
      <svg className="w-5 h-5 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </GlassIcon>
  ),
  
  Phone: ({ className, ...props }) => (
    <GlassIcon className={className} {...props}>
      <svg className="w-5 h-5 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    </GlassIcon>
  ),
  
  MapPin: ({ className, ...props }) => (
    <GlassIcon className={className} {...props}>
      <svg className="w-5 h-5 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </GlassIcon>
  ),
  
  LinkedIn: ({ className, ...props }) => (
    <GlassIcon className={className} {...props}>
      <svg className="w-5 h-5 text-current" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    </GlassIcon>
  ),
  
  GitHub: ({ className, ...props }) => (
    <GlassIcon className={className} {...props}>
      <svg className="w-5 h-5 text-current" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    </GlassIcon>
  ),
  
  Twitter: ({ className, ...props }) => (
    <GlassIcon className={className} {...props}>
      <svg className="w-5 h-5 text-current" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    </GlassIcon>
  ),

  Send: ({ className, ...props }) => (
    <GlassIcon className={className} {...props}>
      <svg className="w-5 h-5 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    </GlassIcon>
  ),

  Download: ({ className, ...props }) => (
    <GlassIcon className={className} {...props}>
      <svg className="w-5 h-5 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    </GlassIcon>
  ),

  ArrowRight: ({ className, ...props }) => (
    <GlassIcon className={className} {...props}>
      <svg className="w-5 h-5 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </GlassIcon>
  ),

  Database: ({ className, ...props }) => (
    <GlassIcon className={className} {...props}>
      <svg className="w-5 h-5 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="m3 5v14c0 3 4 3 9 3s9 0 9-3V5"></path>
        <path d="m3 12c0 3 4 3 9 3s9 0 9-3"></path>
      </svg>
    </GlassIcon>
  ),

  Server: ({ className, ...props }) => (
    <GlassIcon className={className} {...props}>
      <svg className="w-5 h-5 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
        <line x1="6" x2="6.01" y1="6" y2="6"></line>
        <line x1="6" x2="6.01" y1="18" y2="18"></line>
      </svg>
    </GlassIcon>
  ),

  Globe: ({ className, ...props }) => (
    <GlassIcon className={className} {...props}>
      <svg className="w-5 h-5 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="m3 12h18"></path>
        <path d="M12 3a16.5 16.5 0 0 1 4 9 16.5 16.5 0 0 1-4 9 16.5 16.5 0 0 1-4-9 16.5 16.5 0 0 1 4-9z"></path>
      </svg>
    </GlassIcon>
  ),

  GitBranch: ({ className, ...props }) => (
    <GlassIcon className={className} {...props}>
      <svg className="w-5 h-5 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <line x1="6" x2="6" y1="3" y2="15"></line>
        <circle cx="18" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="m18 9a9 9 0 0 1-9 9"></path>
      </svg>
    </GlassIcon>
  ),

  Layers: ({ className, ...props }) => (
    <GlassIcon className={className} {...props}>
      <svg className="w-5 h-5 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
        <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
        <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
      </svg>
    </GlassIcon>
  ),

  ExternalLink: ({ className, ...props }) => (
    <GlassIcon className={className} {...props}>
      <svg className="w-5 h-5 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="m3 3l18 18"></path>
        <path d="m14 3h7v7"></path>
        <path d="m21 3l-7 7"></path>
        <path d="m3 14v7h7"></path>
      </svg>
    </GlassIcon>
  ),
  
Award: ({ className, ...props }) => (
    <GlassIcon className={className} {...props}>
      <svg
        className="w-5 h-5 text-current"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="8" r="7"></circle>
        <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.11"></path>
      </svg>
    </GlassIcon>
  ),

  Certificate: ({ className, ...props }) => (
    <GlassIcon className={className} {...props}>
      <svg
        className="w-5 h-5 text-current"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="4" width="18" height="14" rx="2"></rect>
        <path d="M7 8h10"></path>
        <path d="M7 12h6"></path>
        <circle cx="18" cy="18" r="3"></circle>
      </svg>
    </GlassIcon>
  ),

  BookOpen: ({ className, ...props }) => (
    <GlassIcon className={className} {...props}>
      <svg
        className="w-5 h-5 text-current"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M2 6a2 2 0 0 1 2-2h7v16H4a2 2 0 0 0-2 2V6z"></path>
        <path d="M22 6a2 2 0 0 0-2-2h-7v16h7a2 2 0 0 1 2 2V6z"></path>
      </svg>
    </GlassIcon>
  ),
  CheckBadge: ({ className, ...props }) => (
    <GlassIcon className={className} {...props}>
      <svg
        className="w-5 h-5 text-current"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 3l2.09 4.26L19 8l-3.5 3.41L16.18 17 12 14.77 7.82 17l.68-5.59L5 8l4.91-.74L12 3z"></path>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    </GlassIcon>
  )
};

export { GlassIcon, GlassIcons };
export default GlassIcon;
