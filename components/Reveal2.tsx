"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Visible par défaut : le contenu ne doit jamais rester caché si le
  // JavaScript ne s'exécute pas (erreur, navigateur sans JS, crawler...).
  // On ne bascule en mode "masqué en attente d'animation" qu'après le
  // montage, et seulement si l'élément est encore hors du champ de vision.
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const element = ref.current;
    if (prefersReducedMotion || !element) return;

    const alreadyInView =
      element.getBoundingClientRect().top < window.innerHeight * 0.85;
    if (alreadyInView) return; // déjà visible à l'écran : pas d'animation, pas de flash

    setIsVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // Signature "scan reveal": the content is unmasked left-to-right like a
  // technical drawing being traced out, instead of a simple fade/slide.
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        clipPath: isVisible ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
        transitionProperty: "opacity, clip-path",
      }}
    >
      {children}
    </div>
  );
}
