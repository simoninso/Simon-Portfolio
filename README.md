# Simon Portfolio

Akong portfolio pag himo  
  
Tech Stack

- **React** + **TypeScript** — UI and type-safe code
- **Vite** — development and build tool
- **Tailwind CSS** — styling and responsive design
- **React Router** — page navigation
- **clsx** + **tailwind-merge** — `cn()` utility for Tailwind classes


### Step 1 Project setup

- Created the app with React + Vite + TypeScript
- Added Tailwind CSS and alias paths (`@/`)
- Created the `cn()` helper in `src/lib/cn.ts`



### Step 2  Folder structure (rubric requirement)

- `common/`  Header, ThemeProvider
- `ui/`  Button ProfileAvatar ThemeToggle SectionHeader etc
- `features/`  HeroSection AboutSection ServicesSection etc
- `pages/`  only render Section components
- `layouts/`  MainLayout wraps all pages in the router



### Step 3  Pages and routing


| Route       | Page     | Section(s)                     |
| ----------- | -------- | ------------------------------ |
| `/`         | Home     | HeroSection                    |
| `/services` | Services | ServicesSection                |
| `/about`    | Resume   | AboutSection                   |
| `/skills`   | Work     | SkillsSection, ProjectsSection |
| `/contact`  | Contact  | ContactSection                 |




### Step 4  Design features

- Purple + sky blue color theme (different from a mint-green style)
- Rounded profile photo with glow effect
- Card-based services and project list layout
- Skill progress bars on the Work page
- Light/dark mode using `useState` and `localStorage`
- Simple fade-in and hover animations



## Project Structure

```
src/
├── components/
│   ├── common/       # Header, ThemeProvider
│   ├── ui/           # Button, Card, ProfileAvatar, ThemeToggle, etc.
│   └── features/     # HeroSection, AboutSection, ServicesSection, etc.
├── layouts/          # MainLayout
├── pages/            # Home, About, Services, Skills, Contact
├── lib/              # cn.ts, theme.ts
└── styles/           # global.css
```



## Getting Started

```bash
npm install
npm run dev
npm run build
```



## Author

**Simon**  BSIT 3-B   
  
Teacher : Sir Ariel batoon  
  


Built as a Prelim Exam portfolio project.
