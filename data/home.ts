import type { IconName } from "@/components/Icon";

export const clients = [
  "Planet Education System",
  "Nova Pathways",
  "Zenith Academy",
  "Trusted Edu Path",
  "Solutya",
  "ZSOS",
  "London Professional College",
  "Elizabeth Business School",
  "Rivenox",
  "OnnoRokom",
  "Mediusware",
];

export const services = [
  { title: "Brand identity & style guides", desc: "Logos, colour systems, typography and usage rules your team can apply consistently across web, print and social.", items: ["Style guide", "Colour tokens", "Typography", "Brand assets"] },
  { title: "Website design", desc: "Marketing and institutional websites that explain clearly and convert, designed for desktop and mobile from day one.", items: ["Sitemap", "Wireframes", "UI design", "Responsive layouts"] },
  { title: "Mobile app design", desc: "End-to-end app flows, from research and user journeys to a clickable prototype ready for testing.", items: ["User flows", "Wireframes", "UI kit", "Prototype"] },
  { title: "SaaS & dashboard UX", desc: "Portals and dashboards that make complex data and workflows easy to scan, understand and act on.", items: ["UX audit", "Information architecture", "Tables & forms", "Empty & error states"] },
  { title: "Design systems", desc: "Components, variables and documentation in Figma so your product stays consistent as it grows.", items: ["Components", "Variables", "Tokens", "Documentation"] },
];

export const processSteps: { title: string; tag: string; bg: string; ink: string; icon: IconName; desc: string; items: string[] }[] = [
  { title: "Empathize", tag: "Understand people", bg: "#FFE4EC", ink: "#B0234F", icon: "heart", desc: "I start by listening. Who uses the product, what frustrates them today, and what would make their day easier?", items: ["User research", "User interviews", "Identify problems", "Empathy map"] },
  { title: "Define", tag: "Frame the problem", bg: "#FFE8D2", ink: "#A9470C", icon: "target", desc: "Research turns into one clear problem statement, so the whole team agrees on what we are solving and for whom.", items: ["Competitor analysis", "User personas", "User journey maps", "Goal statement"] },
  { title: "Ideate", tag: "Explore ideas", bg: "#FFF1B8", ink: "#7A5600", icon: "bulb", desc: "Lots of ideas, fast. I sketch directions and organise content so the structure makes sense before any visuals.", items: ["Brainstorming", "Card sorting", "Information architecture", "Paper wireframes"] },
  { title: "Design", tag: "Shape the solution", bg: "#E9E4FF", ink: "#4B2FD6", icon: "penTool", desc: "The best direction becomes wireframes, a design system and polished, clickable prototypes in Figma.", items: ["Wireframes", "Design system", "Visual design", "Prototypes"] },
  { title: "Test", tag: "Learn and refine", bg: "#D9F4E3", ink: "#136B3B", icon: "flask", desc: "Real feedback shows what works. I test, spot patterns and feed improvements straight back into the design.", items: ["Usability checks", "Survey insights", "Affinity mapping", "Improvements"] },
];

export const facts: { icon: IconName; label: string; value: string }[] = [
  { icon: "briefcase", label: "Currently", value: "UI/UX Designer, Planet Education System" },
  { icon: "pin", label: "Based in", value: "Chittagong, Bangladesh" },
  { icon: "cap", label: "Studied", value: "B.Sc CSE, IIUC" },
  { icon: "chat", label: "Speaks", value: "Bangla, English" },
];

export const glance: { icon: IconName; value: string; label: string; note: string; bg: string; ink: string }[] = [
  { icon: "clock", value: "5+", label: "Years of experience", note: "In UI/UX and brand design", bg: "#E9E4FF", ink: "#4B2FD6" },
  { icon: "layers", value: "50+", label: "Projects delivered", note: "Websites, apps and SaaS", bg: "#FFE4EC", ink: "#B0234F" },
  { icon: "monitor", value: "6", label: "Live websites", note: "UK and France", bg: "#D9F4E3", ink: "#136B3B" },
  { icon: "grid", value: "10+", label: "Industries", note: "Ed-tech to fintech", bg: "#FFF1B8", ink: "#7A5600" },
];

export const countries = [
  { code: "UK", name: "United Kingdom", note: "Planet Education System, colleges and SaaS portals", bg: "#E9E4FF", ink: "#4B2FD6" },
  { code: "US", name: "USA", note: "Client websites and product design", bg: "#FFE4EC", ink: "#B0234F" },
  { code: "FR", name: "France", note: "Business school website", bg: "#E0F2FE", ink: "#075985" },
  { code: "MY", name: "Malaysia", note: "Client design projects", bg: "#FFF1B8", ink: "#7A5600" },
  { code: "AE", name: "UAE", note: "Rivenox Global Consultancy, Dubai", bg: "#D9F4E3", ink: "#136B3B" },
  { code: "BD", name: "Bangladesh", note: "Software teams and local apps", bg: "#FFE8D2", ink: "#A9470C" },
];

export interface TimelineItem { org: string; date: string; role: string; place: string; desc: string; now?: boolean }

export const experience: TimelineItem[] = [
  { org: "Planet Education System", date: "Oct 2025 — Present", role: "UI/UX Designer", place: "London, UK", desc: "PEN Group operates a diverse portfolio of universities, colleges, online learning platforms, and educational service providers across the UK, Ireland, Europe, and beyond.", now: true },
  { org: "Rivenox Global Consultancy", date: "Mar 2024 — Present", role: "UI/UX Designer · Contract basis", place: "Dubai, UAE", desc: "Rivenox is a consultancy leading provider of high-end software services, specializing in web development, enterprise application development, with industry-specific software expertise in e-commerce sectors.", now: true },
  { org: "OnnoRokom Software Ltd.", date: "Mar 2024 — Feb 2025", role: "UI/UX Designer", place: "Karwan Bazar, Dhaka, Bangladesh", desc: "OnnoRokom Software Ltd. is a leading provider of high-end software services, specializing in web development, enterprise application development, with industry-specific software expertise in financial and media sectors." },
  { org: "Mediusware Ltd.", date: "Aug 2023 — Feb 2024", role: "UI/UX Designer", place: "Mohammadpur, Dhaka, Bangladesh", desc: "Incepted in 2015, Mediusware Ltd. has been serving as a leading IT Solution provider in Bangladesh. Here I am working on various projects like fintech, real estate and many more. I enjoy doing projects as much as I do research." },
  { org: "Solutya Pvt. Ltd.", date: "Sep 2022 — Jun 2023", role: "UI/UX Designer", place: "Uttara, Dhaka, Bangladesh", desc: "I worked as a UI/UX Designer. I have completed 5 projects, of which 3 are live, across fintech, real estate and many more." },
];

export const education: TimelineItem[] = [
  { org: "International Islamic University Chittagong", date: "2021", role: "B.Sc (Hons) in Computer Science & Engineering", place: "Chittagong", desc: "An engineering foundation that helps me design things developers can actually build.", now: true },
  { org: "Islamia University College", date: "2015", role: "HSC (Science)", place: "Chittagong", desc: "Higher secondary certificate, science group." },
];

export const tools: { name: string; use: string; bg: string; ink: string; icon: IconName }[] = [
  { name: "Figma", use: "UI & prototyping", bg: "#EFEBFF", ink: "#4B2FD6", icon: "penTool" },
  { name: "Claude", use: "AI research & writing", bg: "#FBEDE6", ink: "#A4441F", icon: "asterisk" },
  { name: "Illustrator", use: "Logos & vectors", bg: "#FFEDD5", ink: "#9A3412", icon: "curve" },
  { name: "Photoshop", use: "Image editing", bg: "#E0F2FE", ink: "#075985", icon: "image" },
  { name: "Notion", use: "Docs & planning", bg: "#F1F1F4", ink: "#16161D", icon: "doc" },
  { name: "Miro", use: "Workshops & flows", bg: "#FEF9C3", ink: "#854D0E", icon: "board" },
];

export const skills = ["UI/UX design", "Prototyping", "Wireframing", "Brand & style guides", "Design systems", "A/B testing"];

export const principles: { num: string; title: string; desc: string; bg: string; ink: string; icon: IconName }[] = [
  { num: "01", title: "Research before pixels", desc: "I enjoy research as much as design, so every decision starts from a real user problem.", bg: "#FFE4EC", ink: "#B0234F", icon: "search" },
  { num: "02", title: "Systems, not one-offs", desc: "Variables, tokens and components keep every screen consistent as the product grows.", bg: "#E9E4FF", ink: "#4B2FD6", icon: "blocks" },
  { num: "03", title: "Built to be built", desc: "A computer-science background means designs that developers can actually ship.", bg: "#D9F4E3", ink: "#136B3B", icon: "code" },
];

export const faqs = [
  { q: "What kind of projects do you take on?", a: "Websites, mobile apps, SaaS products and dashboards, plus brand identities and design systems. I can start from a blank page or improve something that already exists." },
  { q: "Which industries have you worked in?", a: "Ed-tech, fintech and crypto, real estate, healthcare, wellbeing, e-commerce, agencies and AI products — more than ten industries in total." },
  { q: "Can you adapt an existing desktop design for mobile?", a: "Yes. Responsive adaptation is a regular part of my work: I rebuild desktop screens as mobile layouts with proper auto-layout, so they stay consistent with the original system." },
  { q: "Do you work with international teams?", a: "Yes. I’m based in Chittagong, Bangladesh and have designed for teams and clients in the UK, USA, France, Malaysia, the UAE and Bangladesh." },
];
