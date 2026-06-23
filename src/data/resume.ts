/**
 * Single source of truth for site content, transcribed from Anthony's resume.
 *
 * TODO markers (search "TODO:") flag things to collect from Anthony as the
 * site grows: a headshot, hardware/CAD photos, and deeper project write-ups.
 * Update values here and every section follows.
 */

export const profile = {
  name: "Anthony DiFerdinando",
  firstName: "Anthony",
  lastName: "DiFerdinando",
  role: "Mechanical Engineer",
  // Newport Beach, CA — used as a datum callout in the hero.
  location: "Newport Beach, CA",
  geo: "33.6189° N, 117.9298° W",
  email: "ajdiferd@gmail.com",
  phone: "(949) 214-6728",
  phoneHref: "+19492146728",
  linkedin: "linkedin.com/in/anthony-diferdinando",
  linkedinHref: "https://www.linkedin.com/in/anthony-diferdinando",
  status: "Open to roles",
  rev: "2026.06",
  disciplines: ["Mechanical Analysis", "Full-Cycle Project Management", "Systems Engineering"],
  // Lead paragraph (recruiter-facing, condensed from the resume summary).
  summary:
    "Mechanical engineer who takes complex electromechanical hardware from concept through production, spanning avionics displays, hydraulic systems, and military-grade electronics. I write test procedures, troubleshoot hardware, and validate systems alongside electrical and manufacturing teams to ship reliable hardware for demanding operational environments.",
  focus: ["Avionics displays", "Hydraulic systems", "Military-grade electronics"],
} as const

/** The strongest quantified wins — these lead the page. */
export const results = [
  { value: "1080p", label: "Apache display resolution", note: "upgraded from 720p" },
  { value: "−20%", label: "Avionics system cost", note: "Apache UFD redesign" },
  { value: "+30%", label: "Annual production", note: "90 gpm winch redesign" },
  { value: "9 → 24", label: "Chips per wafer", note: "saw-parameter retune" },
] as const

export type Experience = {
  company: string
  role: string
  location: string
  start: string
  end: string
  summary?: string
  bullets: string[]
}

export const experience: Experience[] = [
  {
    company: "Symbolic Displays Inc.",
    role: "Mechanical Engineer",
    location: "Santa Ana, CA",
    start: "May 2025",
    end: "Present",
    summary: "Avionics displays for aircraft and simulation systems, concept through production.",
    bullets: [
      "Redesigned the Apache Enhanced Up Front Display: 720p → 1080p resolution, upgraded video processing, and a 20% system cost reduction.",
      "Developed an in-house 3-axis vibration test procedure and fixture for Apache MPD displays, enabling internal qualification and cutting external testing lead time and cost.",
      "Integrate avionics subsystems with electrical engineers: wire-harness design, PCB/IC component specification, and mechanical packaging of electrical hardware.",
      "Manage multiple hardware projects across the full production cycle while supporting machinists and technicians.",
    ],
  },
  {
    company: "FAST Semiconductor",
    role: "Engineer",
    location: "Anaheim, CA",
    start: "Dec 2024",
    end: "Mar 2025",
    summary: "Machine shop and cleanroom production of medical and military-grade electronics.",
    bullets: [
      "Manufactured and tested military-grade hardware in a controlled cleanroom: eutectic soldering, wire bonding, board integration, and quality inspection.",
      "Ran visual and X-ray inspection to verify hardware quality and product conformance.",
      "Reprogrammed silicon wafer-saw parameters to raise yield from 9 to 24 chips per wafer.",
    ],
  },
  {
    company: "Motion Flow Control Products",
    role: "Systems Engineer",
    location: "Santa Ana, CA",
    start: "Jul 2023",
    end: "Apr 2024",
    summary: "Integration, testing, and troubleshooting of fluid-power and electromechanical systems.",
    bullets: [
      "Redesigned a 90 gpm winch system for manufacturability, with lower cost and a 30% increase in annual production.",
      "Developed an 80 gpm system for a plywood press with four independent cylinder circuits that unload, press, and lift sheets.",
      "Inspected, documented, and troubleshot the Water World attraction at Universal Studios alongside a senior engineer.",
    ],
  },
  {
    company: "General Dynamics NASSCO",
    role: "Engineering Intern",
    location: "San Diego, CA",
    start: "May 2022",
    end: "Aug 2022",
    summary: "Centralized enterprise-wide engineering reporting into Tableau dashboards.",
    bullets: [
      "Built Tableau dashboards that replaced 10 pages of weekly reports, saving 8–10 hours per week.",
      "Shadowed senior engineers during installation of a reduction gear.",
    ],
  },
]

export type Project = {
  title: string
  org: string
  period: string
  blurb: string
  tags: string[]
  // TODO: add a real image once Anthony sends CAD renders / build photos.
  image?: string
}

export const projects: Project[] = [
  {
    title: "Speed-Matching Treadmill",
    org: "ASU · Mechanical System Design",
    period: "2019–2023",
    blurb:
      "A smart treadmill that senses the runner's position and matches belt speed to keep them centered. Lidar sensing feeds a MATLAB/Simulink ESC that sorts the user into five speed zones, driving a 2 hp, 25,000 rpm motor through a custom drivetrain for a seamless outdoor-run feel.",
    tags: ["Lidar", "MATLAB / Simulink", "Drivetrain", "Controls"],
  },
  {
    title: "FEA for Car Attachments",
    org: "ASU · Structural Analysis",
    period: "2019–2023",
    blurb:
      "Structural analysis of automotive components: simulation models for stress, deformation, displacement, Von Mises, and reaction forces, documented in a formal report. Parts were engineered in SOLIDWORKS and AutoCAD Inventor to refine designs and select materials.",
    tags: ["FEA", "SOLIDWORKS", "Inventor", "Materials"],
  },
]

export const skills = [
  {
    group: "CAD / Digital Design",
    items: ["SOLIDWORKS", "Autodesk Inventor", "Fusion 360", "AutoCAD", "Navisworks", "Quartus Prime"],
  },
  {
    group: "Modeling & Simulation",
    items: ["MATLAB & Simulink", "Finite-Element Analysis", "Structural & Fatigue", "Python (basic)"],
  },
  {
    group: "Mechanical Design",
    items: ["Hydraulic & Pneumatic Systems", "Systems Engineering", "GD&T", "Design-for-Manufacture"],
  },
  {
    group: "Prototyping & Test",
    items: ["3D Printing (Cura, Bambu)", "Arduino Control", "Soldering & Fabrication", "Tooling Design"],
  },
] as const

export const education = [
  {
    school: "Arizona State University",
    location: "Mesa, AZ",
    period: "2019 – 2023",
    degree: "B.S.E, Mechanical Engineering Systems",
    detail: "Focus: Technological Entrepreneurship Management · 3.4 GPA · Dean's List",
  },
  {
    school: "Barrett, The Honors College",
    location: "Mesa, AZ",
    period: "2019 – 2023",
    degree: "Honors College",
    detail: "Maintained a 3.25+ cumulative GPA while earning 36 honors credits.",
  },
] as const

/** Section order — also used to number "sheets" in the title block. */
export const sections = [
  { id: "profile", label: "Profile" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "capabilities", label: "Capabilities" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const
