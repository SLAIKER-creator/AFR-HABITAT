"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

// Le contenu est TOUJOURS rendu visible par défaut (SSR, no-JS, crawler,
// JS qui plante...). L'animation n'ajoute qu'un léger effet d'entrée qui ne
// masque jamais complètement le contenu, et un garde-fou (setTimeout) force
// l'affichage final même si l'IntersectionObserver ne se déclenche jamais.
export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasEntered, setHasEntered] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const element = ref.current;
    if (prefersReducedMotion || !element) return;

    const alreadyInView =
      element.getBoundingClientRect().top < window.innerHeight * 0.85;
    if (alreadyInView) return; // déjà visible à l'écran : pas d'animation, pas de flash

    setHasEntered(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(element);

    // Garde-fou : si l'observateur ne se déclenche jamais (bug navigateur,
    // scroll restauré différemment, erreur JS ailleurs...), on affiche
    // quand même le contenu après 1s pour ne jamais rester bloqué caché.
    const failSafe = setTimeout(() => setHasEntered(true), 1000);

    return () => {
      observer.disconnect();
      clearTimeout(failSafe);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        hasEntered ? "opacity-100 translate-y-0" : "opacity-90 translate-y-3"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
