# YASHODAYOS - Career Guidance Platform

**Your Academic Success & Holistic Development is Our Only Success**

## Overview

YASHODAYOS is a comprehensive career guidance and educational planning platform designed for students from Class 9 to Post-Graduation. It provides personalized career pathways, scholarship information, exam preparation resources, and skill development guidance.

## Features

### 📚 Educational Modules
- **Class 9**: Foundation building with 16 opportunities
- **Class 10**: Stream selection (Science, Commerce, Arts)
- **Class 11-12**: Specialization and exam preparation
- **Graduation**: 10+ career pathways with detailed information
- **Post-Graduation**: MBA, M.Tech, PhD, and professional courses

### 🎯 Career Exploration
- 10+ detailed career profiles
- Salary ranges (entry, mid, senior levels)
- Educational roadmaps
- Required skills
- Job opportunities (government & private)
- Demand scores and growth projections

### 🏆 Scholarships & Financial Aid
- 50+ scholarship opportunities
- Eligibility criteria
- Application deadlines
- Direct links to apply
- Save for later feature

### 📝 Entrance & Competitive Exams
- 20+ entrance exams (JEE, NEET, CLAT, etc.)
- 10+ competitive exams (UPSC, SSC, Police, Army, etc.)
- Exam dates, eligibility, and salary information
- Syllabus and preparation resources

### 💡 Future Skills
- 25+ in-demand skills
- Difficulty levels and duration
- Career applications
- Learning resources (videos, courses, books)
- Market demand scores

### 🗺️ Interactive Career Roadmap
- Visual representation of education path
- Career progression flow
- Stream-based pathways
- Color-coded difficulty levels

### 🔍 Global Search
- Instant search across all content
- Careers, scholarships, exams, and skills
- Relevance-based ranking
- Real-time suggestions

### 🖥️ Admin Panel
- CRUD operations for all content
- Manage careers, scholarships, exams, and skills
- Add news and announcements
- Upload PDF resources and videos
- User management

## Tech Stack

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **State Management**: React Context API

## Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/drganeshpatiloffice-cmyk/YASHODAYOS.git
cd YASHODAYOS
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open browser**
```
http://localhost:3000
```

## Project Structure

```
YASHODAYOS/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Home page
│   │   ├── dashboard/               # Dashboard
│   │   ├── careers/                 # Career exploration
│   │   ├── scholarships/            # Scholarships page
│   │   ├── exams/                   # Exams information
│   │   ├── skills/                  # Future skills
│   │   ├── roadmap/                 # Career roadmap
│   │   ├── admin/                   # Admin panel
│   │   ├── about/                   # About page
│   │   ├── contact/                 # Contact page
│   │   ├── privacy/                 # Privacy policy
│   │   ├── layout.tsx               # Root layout
│   │   └── globals.css              # Global styles
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.tsx           # Navigation bar
│   │   │   ├── Card.tsx             # Reusable card
│   │   │   ├── Button.tsx           # Reusable button
│   │   │   └── Input.tsx            # Input field
│   │   ├── modules/
│   │   │   ├── Class9Module.tsx
│   │   │   ├── Class10Module.tsx
│   │   │   ├── Class1112Module.tsx
│   │   │   ├── GraduationModule.tsx
│   │   │   └── PostGraduationModule.tsx
│   │   └── index.ts
│   ├── context/
│   │   └── CareerContext.tsx        # Global state
│   ├── hooks/
│   │   ├── useGlobalSearch.ts       # Search functionality
│   │   └── useCareerRoadmap.ts      # Roadmap data
│   ├── data/
│   │   ├── database.ts              # Careers data
│   │   ├── scholarships.ts          # Scholarships data
│   │   ├── entranceExams.ts         # Entrance exams
│   │   ├── competitiveExams.ts      # Competitive exams
│   │   ├── futureSkills.ts          # Skills data
│   │   └── schemes.ts               # Government schemes
│   └── types/
│       └── index.ts                 # TypeScript types
├── public/
│   └── favicon.ico
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
├── package.json
└── README.md
```

## Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with hero and features |
| `/dashboard` | Main dashboard with search and stats |
| `/careers` | Career exploration with filters |
| `/scholarships` | Scholarship listings and applications |
| `/exams` | Entrance and competitive exams info |
| `/skills` | Future skills with categories |
| `/roadmap` | Interactive career roadmap |
| `/admin` | Admin panel for content management |
| `/about` | About YASHODAYOS |
| `/contact` | Contact us form |
| `/privacy` | Privacy policy |

## Key Features Explained

### Global Search
The search functionality (`useGlobalSearch` hook) enables instant searching across:
- Careers (name, description, skills)
- Scholarships (name, provider, description)
- Exams (name, organization, category)
- Skills (name, description, applications)

Results are ranked by relevance and limited to top 20 results.

### Career Roadmap
The roadmap visualization shows:
- Educational progression from Class 9 to Post-Graduation
- Stream-based branching (Science, Commerce, Arts)
- Career pathways from each stream
- Post-graduation options
- Color-coded difficulty levels
- Directional flow with animated arrows

### Admin Panel
Features include:
- Tabbed interface for different content types
- CRUD operations with side panel forms
- Add, edit, and delete capabilities
- Real-time UI updates
- Form validation

## Customization

### Adding New Careers
Edit `src/data/database.ts` and add to the `careers` array.

### Adding New Scholarships
Edit `src/data/scholarships.ts` and add to the `scholarships` array.

### Changing Colors
Modify `tailwind.config.ts` to update:
- Primary: `#00d9ff`
- Secondary: `#ff006e`
- Accent: `#8338ec`

### Adding New Pages
1. Create folder in `src/app/your-page`
2. Add `page.tsx` file
3. Update navigation in `Navbar.tsx`

## Performance Optimizations

- ✅ Image optimization with Next.js
- ✅ Code splitting and lazy loading
- ✅ Optimized animations with Framer Motion
- ✅ Memoized search results
- ✅ Responsive design for all devices
- ✅ Fast navigation with Next.js routing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see LICENSE file for details.

## Contact

**YASHODAYOS Team**
- Email: info@yashodayos.com
- Website: https://yashodayos.com
- Location: Pune, Maharashtra, India

## Acknowledgments

- Dr. Ganesh Patil (Founder & Educational Counselor)
- All contributors and supporters
- Open source community

---

**"Your Academic Success & Holistic Development is Our Only Success"**
