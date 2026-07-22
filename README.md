# Template site complet — prêt à copier par client

Copie **intégrale** de ce dossier dans `clients/NOM-CLIENT/site/`, puis adapter le contenu.

## Copier pour un nouveau client

```powershell
cd d:\biz-site

# 1. Dossier client (docs Phase 0)
Copy-Item -Recurse "clients\_modele" "clients\NOM-CLIENT"

# 2. Code site (ce template)
Copy-Item -Recurse "template-vitrine\site-complet\*" "clients\NOM-CLIENT\site\" -Force

# 3. Installer les dépendances
cd clients\NOM-CLIENT\site
npm install

# 4. Lancer
npm run dev
```

## Fichiers à modifier par client

| Fichier | Contenu |
|---------|---------|
| `config.ts` | Nom entreprise, ville, téléphone, zones |
| `app/layout.tsx` | Title et description SEO |
| `app/page.tsx` | Sections du site (textes depuis `../phase-0/contenu/`) |
| `public/images/` | Photos du client |

## Ne pas copier depuis un autre projet

- `node_modules/` → recréer avec `npm install`
- `.next/` → recréé au lancement
- `.git/` → `git init` par client si besoin

## Structure

```
site-complet/
├── app/                 # Pages Next.js
├── components/          # Composants (à decouper depuis page.tsx plus tard)
├── lib/                 # api.ts, utilitaires
├── hooks/
├── types/
├── data/                # Contenu de secours CMS
├── public/images/       # Photos client
├── config.ts            # Config entreprise
└── instructions.md      # Mémoire IA
```
