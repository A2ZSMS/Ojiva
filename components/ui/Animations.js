import { Children, Fragment, cloneElement, isValidElement } from 'react';

/* ─────────────────────────────────────────────────────────
   SCROLL REVEALS — server-renderable, no animation library.
   Each wrapper only adds data attributes + CSS variables; one shared
   IntersectionObserver (RevealObserver, mounted in the root layout)
   toggles them and Reveal.css runs the transition.

   Same behaviour as the old framer-motion version:
   - content is fully visible in the static HTML (SEO + LCP safe)
   - after hydration only blocks that start BELOW the fold are hidden,
     then revealed once when scrolled into view
   - nothing hides on slow / save-data connections or with
     prefers-reduced-motion
───────────────────────────────────────────────────────── */

/* Reveal — generic primitive.
   variant: up | in | left | right | item (preset offsets, see Reveal.css),
            or custom (no preset — offsets come from vars only)
   vars:    per-element overrides, e.g. { '--rv-y': '30px', '--rv-o': 1 }
   group:   this element triggers its [member] descendants instead of itself
   member:  revealed when its closest group enters the viewport
   margin:  viewport inset in px before the trigger counts as visible */
export function Reveal({
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  vars,
  group = false,
  member = false,
  margin,
  className,
  style,
  children,
  ...rest
}) {
  const s = { ...vars, ...style };
  if (delay) s['--rv-delay'] = `${delay}s`;
  return (
    <Tag
      className={className || undefined}
      style={Object.keys(s).length ? s : undefined}
      data-reveal={variant}
      data-reveal-group={group ? '' : undefined}
      data-reveal-member={member ? '' : undefined}
      data-rv-margin={margin}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* RevealGroup — trigger only (no own animation) for Reveal members */
export function RevealGroup({ as: Tag = 'div', margin, children, ...rest }) {
  return <Tag data-reveal-group="" data-rv-margin={margin} {...rest}>{children}</Tag>;
}

/* FadeUp — primary entrance, used for sections & cards */
export function FadeUp({ children, delay = 0, className = '' }) {
  return <Reveal variant="up" delay={delay} className={className}>{children}</Reveal>;
}

/* FadeIn — opacity only, no movement */
export function FadeIn({ children, delay = 0, className = '' }) {
  return <Reveal variant="in" delay={delay} className={className}>{children}</Reveal>;
}

/* SlideLeft — slides in from left */
export function SlideLeft({ children, delay = 0, className = '' }) {
  return <Reveal variant="left" margin={80} delay={delay} className={className}>{children}</Reveal>;
}

/* SlideRight — slides in from right */
export function SlideRight({ children, delay = 0, className = '' }) {
  return <Reveal variant="right" margin={80} delay={delay} className={className}>{children}</Reveal>;
}

/* Give each StaggerItem its index so the stagger delay is in the HTML.
   Walks fragments and plain DOM elements, like framer's variant tree did. */
function indexItems(children, stagger, counter = { i: 0 }) {
  return Children.map(children, (child) => {
    if (!isValidElement(child)) return child;
    if (child.type === StaggerItem || child.type === StaggerGridItem) {
      return cloneElement(child, { _delay: counter.i++ * stagger });
    }
    if ((child.type === Fragment || typeof child.type === 'string') && child.props.children) {
      return cloneElement(child, undefined, indexItems(child.props.children, stagger, counter));
    }
    return child;
  });
}

/* StaggerContainer — wraps a list of StaggerItems */
export function StaggerContainer({ children, className = '', staggerDelay = 0.08 }) {
  return (
    <RevealGroup className={className || undefined}>
      {indexItems(children, staggerDelay)}
    </RevealGroup>
  );
}

/* StaggerItem — child of StaggerContainer (visible in the static HTML;
   hides only when its container starts below the fold) */
export function StaggerItem({ children, className = '', _delay = 0 }) {
  return <Reveal variant="item" member delay={_delay} className={className}>{children}</Reveal>;
}

/* ─────────────────────────────────────────────────────────
   PASSTHROUGH STUBS
   These render children directly with no animation.
   Existing code that imports them won't break.
───────────────────────────────────────────────────────── */
export function TiltCard3D({ children, className = '', intensity, style }) {
  return <div className={className} style={style}>{children}</div>;
}

export function MagneticButton({ children, className = '', intensity }) {
  return <div className={className}>{children}</div>;
}

export function BlurReveal({ children, delay, className = '' }) {
  return <FadeIn delay={delay} className={className}>{children}</FadeIn>;
}

export function ParallaxSection({ children, className = '', speed }) {
  return <div className={className}>{children}</div>;
}

export function TextReveal({ text, className = '', tag: Tag = 'p' }) {
  return <Tag className={className}>{text}</Tag>;
}

export function ScrollScale({ children, className = '' }) {
  return <div className={className}>{children}</div>;
}

export function ClipReveal({ children, className = '', direction }) {
  return <FadeUp className={className}>{children}</FadeUp>;
}

export function RotateIn({ children, delay = 0, className = '' }) {
  return <FadeUp delay={delay} className={className}>{children}</FadeUp>;
}

export function ScalePop({ children, delay = 0, className = '' }) {
  return <FadeUp delay={delay} className={className}>{children}</FadeUp>;
}

export function HeroEntrance({ children, index = 0 }) {
  return <>{children}</>;
}

export function FloatingElement({ children, className = '', amplitude, duration, delay }) {
  return <div className={className}>{children}</div>;
}

export function StaggerGrid({ children, className = '', columns }) {
  return <StaggerContainer className={className}>{children}</StaggerContainer>;
}

export function StaggerGridItem({ children, className = '', _delay = 0 }) {
  return <StaggerItem className={className} _delay={_delay}>{children}</StaggerItem>;
}
