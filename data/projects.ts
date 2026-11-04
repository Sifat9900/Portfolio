export type Category = "web" | "app" | "saas";

export interface Point { t: string; d: string }
export interface Swatch { name: string; hex: string }
export interface Shot { label: string; desc: string; src: string; w: number; h: number; alt: string }

export interface Project {
  id: string;
  cat: Category;
  name: string;
  kind: string;
  /** Short summary used on project cards */
  cardSummary: string;
  tags: string[];
  title: string;
  summary: string;
  industry: string;
  service: string;
  platform: string;
  where: string;
  url: string;
  domain: string;
  headline: string;
  bg: string;
  primary: string;
  accent: string;
  img: string;
  overview: string;
  problems: Point[];
  solutions: Point[];
  palette: Swatch[];
  fonts: string;
  styleNote: string;
  result: string;
  gallery: Shot[];
}

/** Case-study order (used for "Next project" and "Related projects"). */
export const projects: Project[] = [
  {
    "id": "nova",
    "cat": "saas",
    "name": "Nova Pathways Website Builder",
    "kind": "SaaS product · Website builder",
    "cardSummary": "A website builder product for Nova Pathways, with its own design system and landing page.",
    "tags": [
      "SaaS",
      "Design system",
      "UK"
    ],
    "title": "Nova Builder — a website builder for Nova Pathways",
    "summary": "A new website builder product for Nova Pathways, from design system to builder screens and landing page.",
    "industry": "SaaS · Website builder",
    "service": "Design system, product UI, landing page",
    "platform": "Web app · Desktop & mobile",
    "where": "United Kingdom",
    "url": "",
    "domain": "Nova Builder",
    "headline": "Build your website with Nova Builder",
    "bg": "#0A1A3A",
    "primary": "#F97316",
    "accent": "#C084FC",
    "img": "/images/nova/thumb.jpg",
    "overview": "Nova Builder is a website builder product from Nova Pathways that lets people create a website from ready-made templates, with AI help, online-store features and simple pricing plans. I started by building a design system from the existing Nova Pathways homepage, then designed the product screens and marketing pages, desktop first and then mobile, following layout references from stakeholders. The screens shown here include the Templates gallery, with search, category filters and template cards, and the sign-up flow with Google, Apple or email.",
    "problems": [
      {
        "t": "A brand-new product",
        "d": "The builder had to feel like part of Nova Pathways from day one."
      },
      {
        "t": "Complex editing flows",
        "d": "Building a website involves many tools, panels and states that can quickly overwhelm people."
      },
      {
        "t": "Two screen sizes",
        "d": "The landing page had to work on desktop and mobile while following stakeholder layouts."
      }
    ],
    "solutions": [
      {
        "t": "A design system first",
        "d": "Colours, type and components taken from the existing Nova Pathways homepage, so every screen stays on brand."
      },
      {
        "t": "Focused builder screens",
        "d": "Clear panels and controls that keep the canvas in focus."
      },
      {
        "t": "Desktop first, then mobile",
        "d": "A landing page designed for desktop and adapted carefully for mobile."
      }
    ],
    "palette": [
      {
        "name": "Nova Orange",
        "hex": "#F97316"
      },
      {
        "name": "Deep Navy",
        "hex": "#0A1A3A"
      },
      {
        "name": "Soft Lavender",
        "hex": "#C084FC"
      }
    ],
    "fonts": "Clean geometric sans for headings and UI",
    "styleNote": "A warm orange for actions and highlights on deep navy, with soft lavender and orange glows, rounded cards and generous white space so templates stay the hero.",
    "result": "A consistent design system and a full set of builder and landing-page screens ready for development.",
    "gallery": [
      {
        "label": "Templates",
        "desc": "Search, category filters and template cards",
        "src": "/images/nova/templates.jpg",
          "w": 1600,
          "h": 2195,
        "alt": "Templates page with search, filters and template cards"
      },
      {
        "label": "Sign up",
        "desc": "Create a free account with Google, Apple or email",
        "src": "/images/nova/signup.jpg",
          "w": 2000,
          "h": 1333,
        "alt": "Sign-up screen: create your free account"
      }
    ]
  },
  {
    "id": "william",
    "cat": "web",
    "name": "William College",
    "kind": "Website · Higher education",
    "cardSummary": "A website for a London and Leeds higher-education provider delivering Law, Business and related degrees with UK university partners.",
    "tags": [
      "Ed-tech",
      "UK",
      "Website"
    ],
    "title": "William College — a career-focused college for Law and Business",
    "summary": "A website for a higher-education provider in London and Leeds that delivers university degrees in Law, Business, Criminology, Psychology and Policing.",
    "industry": "Higher education",
    "service": "Website UI/UX, desktop & mobile",
    "platform": "Website · Responsive",
    "where": "London & Leeds, UK",
    "url": "https://www.williamcollege.ac.uk/",
    "domain": "williamcollege.ac.uk",
    "headline": "Advance your Law expertise with our courses",
    "bg": "#1D2A5C",
    "primary": "#2A3A78",
    "accent": "#FFD600",
    "img": "/images/william/thumb.jpg",
    "overview": "William College is a higher-education provider delivering programmes centred on Law, Business and related disciplines through partnerships with UK universities, including Bath Spa University and Birkbeck, University of London. With campuses in Stratford, London and Leeds, it focuses on students from non-traditional backgrounds. I designed the website from the course-led homepage to About, Student Services, Wellbeing, Student Life, Employability and campus pages, for desktop and mobile.",
    "problems": [
      {
        "t": "A lot of support to explain",
        "d": "Academic, advisory, financial, accessibility, wellbeing and careers support all needed a clear home."
      },
      {
        "t": "Trust for a newer provider",
        "d": "Students need to understand the university partnerships behind their degree."
      },
      {
        "t": "Sensitive information",
        "d": "Wellbeing and incident reporting content must feel safe, calm and easy to find."
      }
    ],
    "solutions": [
      {
        "t": "Clear service hubs",
        "d": "Student Services, Wellbeing and Employability pages organised into cards and sections with one idea each."
      },
      {
        "t": "Partnerships up front",
        "d": "About and footer sections highlight Bath Spa University and Birkbeck as trusted partners."
      },
      {
        "t": "A bold, consistent system",
        "d": "Navy and bright yellow with strong headings, photo-led blocks and a calm structure for sensitive topics."
      }
    ],
    "palette": [
      {
        "name": "College Navy",
        "hex": "#1D2A5C"
      },
      {
        "name": "William Yellow",
        "hex": "#FFD600"
      }
    ],
    "fonts": "Sora-style geometric sans",
    "styleNote": "Deep navy for trust and structure, bright yellow for headlines and calls to action, with photography of real students and campuses throughout.",
    "result": "A confident, student-first website that explains courses, support and campus life clearly for a growing college.",
    "gallery": [
      {
        "label": "Home",
        "desc": "Course search, about, popular courses, events, campuses and news",
        "src": "/images/william/home.jpg",
          "w": 309,
          "h": 2000,
        "alt": "William College home page"
      },
      {
        "label": "About Us",
        "desc": "Vision, mission, academic focus and university partnerships",
        "src": "/images/william/about.jpg",
          "w": 404,
          "h": 2000,
        "alt": "William College About Us page"
      },
      {
        "label": "Student support",
        "desc": "Academic services, advisory, financial and accessibility support",
        "src": "/images/william/support.jpg",
          "w": 525,
          "h": 2000,
        "alt": "William College student support page"
      },
      {
        "label": "Wellbeing",
        "desc": "Disability support, workshops, incident reporting and help after reporting",
        "src": "/images/william/wellbeing.jpg",
          "w": 268,
          "h": 2000,
        "alt": "William College wellbeing page"
      },
      {
        "label": "Student life",
        "desc": "Student benefits, career prospects and opportunities",
        "src": "/images/william/student-life.jpg",
          "w": 523,
          "h": 2000,
        "alt": "William College student life page"
      },
      {
        "label": "Employability",
        "desc": "Careers support, appointments and Career Passport",
        "src": "/images/william/employability.jpg",
          "w": 587,
          "h": 2000,
        "alt": "William College employability page"
      },
      {
        "label": "Stratford campus",
        "desc": "Campus highlights, facilities and location",
        "src": "/images/william/stratford.jpg",
          "w": 475,
          "h": 2000,
        "alt": "William College Stratford campus page"
      }
    ]
  },
  {
    "id": "zenith",
    "cat": "web",
    "name": "Zenith Academy",
    "kind": "Website · Brand system",
    "cardSummary": "Course discovery and joint admissions for a consortium of UK institutions.",
    "tags": [
      "Ed-tech",
      "Design system",
      "UK"
    ],
    "title": "Zenith Academy — one application, many institutions",
    "summary": "Brand identity, design system and website for a consortium of UK institutions offering joint admissions.",
    "industry": "Ed-tech · Healthcare",
    "service": "Brand, design system, website",
    "platform": "Website · Desktop & mobile",
    "where": "United Kingdom",
    "url": "https://academy.zahs.co.uk/",
    "domain": "academy.zahs.co.uk",
    "headline": "Discover Courses. Find Institutions. Explore Opportunities.",
    "bg": "#072B3F",
    "primary": "#0D8DCE",
    "accent": "#1EE2BD",
    "img": "/images/zenith/thumb.jpg",
    "overview": "Zenith Academy is a consortium of institutions offering joint admissions through one shared application route. Students can browse courses, institutions, locations and subjects, read student stories and start an application from one place. I designed the brand, a complete UI design system in Figma and the website itself, including the Locations page where students explore vibrant UK cities through photo-led city cards, a clear call to action and a full footer.",
    "problems": [
      {
        "t": "Many institutions, one journey",
        "d": "Students compare courses across several institutions, which can quickly feel scattered."
      },
      {
        "t": "Many ways to search",
        "d": "People look by course, institution, location or subject, and every path has to reach the same simple application."
      },
      {
        "t": "A new brand to trust",
        "d": "A new consortium needs an identity that feels credible from the very first screen."
      }
    ],
    "solutions": [
      {
        "t": "A unified brand system",
        "d": "Primary blue and secondary teal with 10-step scales and semantic tokens, applied through Figma variables."
      },
      {
        "t": "Discovery built around intent",
        "d": "Course, institution, location and subject browsing that all end in one “Apply now” route."
      },
      {
        "t": "Two moods, one identity",
        "d": "A dark hero with glass cards for impact, balanced by a light editorial homepage for reading."
      }
    ],
    "palette": [
      {
        "name": "Primary Blue",
        "hex": "#0D8DCE"
      },
      {
        "name": "Secondary Teal",
        "hex": "#1EE2BD"
      }
    ],
    "fonts": "Dacht for headings · Onest for body",
    "styleNote": "H1–H6 and body text styles, with every fill bound to a Figma variable instead of a hard-coded colour.",
    "result": "A complete brand and UI system in Figma, and a live website where students discover courses and start one application.",
    "gallery": [
      {
        "label": "Locations",
        "desc": "Explore UK cities, city cards, call to action and footer",
        "src": "/images/zenith/locations.jpg",
          "w": 1440,
          "h": 2517,
        "alt": "Zenith Academy Locations page"
      }
    ]
  },
  {
    "id": "tep",
    "cat": "web",
    "name": "Trusted Edu Path",
    "kind": "Website · Rebrand",
    "cardSummary": "Rebrand and website for a UK university outreach partner.",
    "tags": [
      "Ed-tech",
      "Rebrand",
      "UK"
    ],
    "title": "Trusted Edu Path — a rebrand for university outreach",
    "summary": "A refreshed brand and website for a UK university outreach partner, co-branded with NCG.",
    "industry": "Ed-tech",
    "service": "Rebrand, website UI/UX",
    "platform": "Website · Responsive",
    "where": "London · Birmingham · Leicester",
    "url": "https://www.trustededupath.com/",
    "domain": "trustededupath.com",
    "headline": "Your path. Your trust. Our education.",
    "bg": "#0E2350",
    "primary": "#1F4FB8",
    "accent": "#E0413F",
    "img": "/images/tep/thumb.jpg",
    "overview": "Trusted Edu Path offers accredited foundation degrees across campuses in London, Birmingham and Leicester, and helps universities with marketing, outreach and recruitment. The rebrand, driven by the client’s brief, brings the partner NCG red together with Trusted Edu Path blue.",
    "problems": [
      {
        "t": "Two brands, one voice",
        "d": "The site had to carry both Trusted Edu Path and its partner NCG without feeling split."
      },
      {
        "t": "Three campuses, many dates",
        "d": "Course information across three campuses needed to be easy to compare."
      },
      {
        "t": "From interest to interview",
        "d": "Prospective students needed a clear path from browsing to booking an interview."
      }
    ],
    "solutions": [
      {
        "t": "A shared palette",
        "d": "NCG red combined with Trusted Edu Path blue, used consistently across every page."
      },
      {
        "t": "Clear course listings",
        "d": "Courses shown with campus and start dates so students can plan quickly."
      },
      {
        "t": "A four-step enrolment guide",
        "d": "Simple steps and an FAQ that end with interview booking."
      }
    ],
    "palette": [],
    "fonts": "",
    "styleNote": "",
    "result": "A clearer, co-branded website that guides students from choosing a course to booking their interview.",
    "gallery": [
      {
        "label": "Home",
        "desc": "Hero, partner services, NCG courses and the four-step enrolment path",
        "src": "/images/tep/home.jpg",
          "w": 450,
          "h": 2000,
        "alt": "Trusted Edu Path home page"
      },
      {
        "label": "About Us",
        "desc": "Story, impact numbers, core values and strategic aims",
        "src": "/images/tep/about.jpg",
          "w": 458,
          "h": 2000,
        "alt": "Trusted Edu Path About Us page"
      },
      {
        "label": "Courses",
        "desc": "Searchable catalogue with filters and course cards",
        "src": "/images/tep/courses.jpg",
          "w": 932,
          "h": 2000,
        "alt": "Trusted Edu Path courses page"
      },
      {
        "label": "Course details",
        "desc": "Modules, entry requirements, assessment and fees",
        "src": "/images/tep/course-detail.jpg",
          "w": 488,
          "h": 2000,
        "alt": "FdA Integrated Health, Social Care and Wellbeing course page"
      },
      {
        "label": "Campus",
        "desc": "Harbour Exchange campus, map and interview times",
        "src": "/images/tep/campus.jpg",
          "w": 850,
          "h": 2000,
        "alt": "Trusted Edu Path campus page"
      },
      {
        "label": "Partner with us",
        "desc": "Partnership programmes and reasons to partner",
        "src": "/images/tep/partner.jpg",
          "w": 833,
          "h": 2000,
        "alt": "Trusted Edu Path Partner With Us page"
      },
      {
        "label": "Contact",
        "desc": "Contact cards, message form, map and opening hours",
        "src": "/images/tep/contact.jpg",
          "w": 974,
          "h": 2000,
        "alt": "Trusted Edu Path contact page"
      }
    ]
  },
  {
    "id": "zsos",
    "cat": "web",
    "name": "ZSOS",
    "kind": "Website",
    "cardSummary": "Free UK higher-education guidance, from course match to enrolment.",
    "tags": [
      "Ed-tech",
      "UK"
    ],
    "title": "ZSOS — guiding students into UK higher education",
    "summary": "A website for ZETA System of Smartlearning, a free education guidance service based in London.",
    "industry": "Ed-tech",
    "service": "Website UI/UX",
    "platform": "Website · Responsive",
    "where": "London, UK",
    "url": "https://www.zsos.co.uk/",
    "domain": "zsos.co.uk",
    "headline": "Leading your journey to Education.",
    "bg": "#0B1533",
    "primary": "#C98A3E",
    "accent": "#F6C98F",
    "img": "/images/zsos/thumb.jpg",
    "overview": "ZSOS helps students navigate UK higher education, from finding the right course to enrolment, free of charge. The website explains its services, lists courses, shares blogs and lets students apply or register, with a separate page for people who want to join as student advisors.",
    "problems": [
      {
        "t": "A confusing system",
        "d": "UK admissions can feel overwhelming, especially for first-time applicants."
      },
      {
        "t": "Trust in free support",
        "d": "A free guidance service has to look credible and explain exactly what it offers."
      },
      {
        "t": "Two audiences",
        "d": "The site speaks to students and to people who want to become advisors."
      }
    ],
    "solutions": [
      {
        "t": "One clear structure",
        "d": "About, Services, Courses and Blog, with a direct Apply Now route."
      },
      {
        "t": "Proof up front",
        "d": "FAQs and student testimonials placed where questions come up."
      },
      {
        "t": "A dedicated Join Us page",
        "d": "A separate journey for recruiting student advisors."
      }
    ],
    "palette": [],
    "fonts": "",
    "styleNote": "",
    "result": "A friendly, structured website that takes students from first question to registration.",
    "gallery": [
      {
        "label": "Home",
        "desc": "Hero, about, courses, why ZETA, testimonials, services, blog and FAQ",
        "src": "/images/zsos/home.jpg",
          "w": 272,
          "h": 2000,
        "alt": "ZSOS home page"
      },
      {
        "label": "About Us",
        "desc": "Who we are, core values, direction and the team",
        "src": "/images/zsos/about.jpg",
          "w": 530,
          "h": 2000,
        "alt": "ZSOS About Us page"
      },
      {
        "label": "Services",
        "desc": "Six core services and the four-step process",
        "src": "/images/zsos/services.jpg",
          "w": 614,
          "h": 2000,
        "alt": "ZSOS Services page"
      },
      {
        "label": "Courses",
        "desc": "All courses in a two-column card grid",
        "src": "/images/zsos/courses.jpg",
          "w": 515,
          "h": 2000,
        "alt": "ZSOS courses page"
      },
      {
        "label": "Course details",
        "desc": "CertHE Computing: key facts, structure and requirements",
        "src": "/images/zsos/course-detail.jpg",
          "w": 612,
          "h": 2000,
        "alt": "ZSOS CertHE Computing course page"
      },
      {
        "label": "Admissions",
        "desc": "Intake landing page with enquiry form and universities",
        "src": "/images/zsos/admission.jpg",
          "w": 482,
          "h": 2000,
        "alt": "ZSOS admissions landing page"
      },
      {
        "label": "Career",
        "desc": "Student advisor role, responsibilities and application form",
        "src": "/images/zsos/career.jpg",
          "w": 520,
          "h": 2000,
        "alt": "ZSOS career page"
      },
      {
        "label": "Blog",
        "desc": "Article grid with categories and dates",
        "src": "/images/zsos/blog.jpg",
          "w": 824,
          "h": 2000,
        "alt": "ZSOS blog page"
      },
      {
        "label": "Blog article",
        "desc": "Article layout with table of contents and related posts",
        "src": "/images/zsos/blog-article.jpg",
          "w": 602,
          "h": 2000,
        "alt": "ZSOS blog article page"
      },
      {
        "label": "Support",
        "desc": "FAQ accordion and a help call to action",
        "src": "/images/zsos/support.jpg",
          "w": 1000,
          "h": 2000,
        "alt": "ZSOS support page"
      },
      {
        "label": "Contact",
        "desc": "Contact details, message form and map",
        "src": "/images/zsos/contact.jpg",
          "w": 969,
          "h": 2000,
        "alt": "ZSOS contact page"
      }
    ]
  },
  {
    "id": "lpc",
    "cat": "web",
    "name": "London Professional College",
    "kind": "Website · Online college",
    "cardSummary": "Accredited online courses and diplomas, including Access to HE.",
    "tags": [
      "Ed-tech",
      "E-learning"
    ],
    "title": "London Professional College — online learning made clear",
    "summary": "A website for accredited, fully online courses and diplomas across England.",
    "industry": "Ed-tech · E-learning",
    "service": "Website UI/UX, desktop & mobile",
    "platform": "Website · Desktop & mobile",
    "where": "London, UK",
    "url": "https://www.lpc.ac.uk/",
    "domain": "lpc.ac.uk",
    "headline": "Unlock Your Potential, Start Your Journey.",
    "bg": "#2A1608",
    "primary": "#F47A20",
    "accent": "#FFD3B0",
    "img": "/images/lpc/thumb.jpg",
    "overview": "LPC provides accredited online courses, including Access to Higher Education and Level 3 qualifications, regulated by Ofqual and the QAA. The site covers courses, the Learner Loan, applications, careers and a blog, plus sign-in to the learning portal. I designed the website for desktop and mobile, including the Contact page with a friendly message form, an embedded map, three support cards (chat, visit, call) and an illustrated London skyline footer.",
    "problems": [
      {
        "t": "Qualifications are hard to compare",
        "d": "Terms like Access to HE and Level 3 are new to many learners."
      },
      {
        "t": "Funding questions",
        "d": "Learners need to understand loans before they commit."
      },
      {
        "t": "Two kinds of visitor",
        "d": "New applicants and current learners both land on the homepage."
      }
    ],
    "solutions": [
      {
        "t": "Course browsing by level",
        "d": "Clear course pages for each qualification."
      },
      {
        "t": "A Learner Loan page",
        "d": "Funding explained in a space of its own."
      },
      {
        "t": "Separate entry points",
        "d": "An application form for new learners and portal sign-in for current ones."
      }
    ],
    "palette": [
      {
        "name": "LPC Orange",
        "hex": "#F47A20"
      },
      {
        "name": "Ink Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Warm Cream",
        "hex": "#FFF1E6"
      }
    ],
    "fonts": "Poppins",
    "styleNote": "A bright orange from the LPC logo for actions and highlighted words, crisp black headings and warm cream panels, with a London skyline illustration that ties the brand to the city.",
    "result": "A clear online college website that explains courses and funding, then moves learners to apply.",
    "gallery": [
      {
        "label": "Contact",
        "desc": "Contact form with map, support cards and the illustrated footer",
        "src": "/images/lpc/contact.jpg",
          "w": 1440,
          "h": 2417,
        "alt": "London Professional College contact page"
      }
    ]
  },
  {
    "id": "ebs",
    "cat": "web",
    "name": "Elizabeth Business School",
    "kind": "Website",
    "cardSummary": "Business school site for Bac+2 to Bac+5 programmes in France.",
    "tags": [
      "Ed-tech",
      "France"
    ],
    "title": "Elizabeth Business School — a business school in Vendée",
    "summary": "A website for Bac+2 to Bac+5 business programmes in Les Sables-d’Olonne, France.",
    "industry": "Ed-tech · Higher education",
    "service": "Website UI/UX",
    "platform": "Website · Responsive",
    "where": "Les Sables-d’Olonne, France",
    "url": "https://www.elizabethbusinessschool.fr/",
    "domain": "elizabethbusinessschool.fr",
    "headline": "L’École de Commerce des Sables-d’Olonne.",
    "bg": "#0E1A3A",
    "primary": "#2A4CA0",
    "accent": "#EBD6C2",
    "img": "/images/ebs/thumb.jpg",
    "overview": "EBS offers programmes in commerce, management, marketing, communication, finance and HR, through both initial and apprenticeship (alternance) tracks. The site covers admissions, open days, campus life, news and a space for partner companies.",
    "problems": [
      {
        "t": "Many programmes, two tracks",
        "d": "Bac+2 to Bac+5 programmes in full-time and alternance formats."
      },
      {
        "t": "Several audiences",
        "d": "Students, parents and partner companies all need different information."
      },
      {
        "t": "Driving open-day visits",
        "d": "Open days are a key step in admissions."
      }
    ],
    "solutions": [
      {
        "t": "Programme pages by track",
        "d": "Initial and alternance routes shown clearly side by side."
      },
      {
        "t": "Paths for each audience",
        "d": "Admissions, campus life and a dedicated partner-company space."
      },
      {
        "t": "Open-day registration",
        "d": "A prominent sign-up across the site."
      }
    ],
    "palette": [],
    "fonts": "",
    "styleNote": "",
    "result": "A French-language school website that makes programmes, admissions and open days easy to find.",
    "gallery": [
      {
        "label": "Home",
        "desc": "Hero, partners, programmes, why choose us, stories and news",
        "src": "/images/ebs/home.jpg",
          "w": 356,
          "h": 2000,
        "alt": "Business school home page"
      },
      {
        "label": "About",
        "desc": "A human-sized school, values, career focus and journey",
        "src": "/images/ebs/about.jpg",
          "w": 453,
          "h": 2000,
        "alt": "Business school about page"
      },
      {
        "label": "Programmes",
        "desc": "All training programmes with Bac+2 to Bac+5 filters",
        "src": "/images/ebs/programmes.jpg",
          "w": 1089,
          "h": 2000,
        "alt": "Business school programmes page"
      },
      {
        "label": "Course details",
        "desc": "BTS NDRC: domains, subjects, careers and key information",
        "src": "/images/ebs/course-detail.jpg",
          "w": 624,
          "h": 2000,
        "alt": "BTS NDRC course page"
      },
      {
        "label": "Pedagogy",
        "desc": "Teaching approach, learning environment and four pillars",
        "src": "/images/ebs/pedagogy.jpg",
          "w": 557,
          "h": 2000,
        "alt": "Business school pedagogy page"
      },
      {
        "label": "Work-study",
        "desc": "Alternance hub for students and companies, with key numbers",
        "src": "/images/ebs/work-study.jpg",
          "w": 655,
          "h": 2000,
        "alt": "Business school work-study page"
      },
      {
        "label": "Admissions",
        "desc": "Four-step journey, pathways, checklist and interview tips",
        "src": "/images/ebs/admissions.jpg",
          "w": 590,
          "h": 2000,
        "alt": "Business school admissions page"
      },
      {
        "label": "Campus life",
        "desc": "Life in Les Sables-d’Olonne, practical info and activities",
        "src": "/images/ebs/campus-life.jpg",
          "w": 571,
          "h": 2000,
        "alt": "Business school campus life page"
      },
      {
        "label": "Open days",
        "desc": "Upcoming dates, visit programme and FAQ",
        "src": "/images/ebs/open-days.jpg",
          "w": 506,
          "h": 2000,
        "alt": "Business school open days page"
      },
      {
        "label": "Partners",
        "desc": "Services for companies and how to start a partnership",
        "src": "/images/ebs/partners.jpg",
          "w": 630,
          "h": 2000,
        "alt": "Business school partner page"
      },
      {
        "label": "News article",
        "desc": "Article layout with sidebar, topics and related news",
        "src": "/images/ebs/news-article.jpg",
          "w": 734,
          "h": 2000,
        "alt": "Business school news article page"
      },
      {
        "label": "Contact",
        "desc": "Contact form by audience, map, social links and FAQ",
        "src": "/images/ebs/contact.jpg",
          "w": 621,
          "h": 2000,
        "alt": "Business school contact page"
      }
    ]
  },
  {
    "id": "portal",
    "cat": "saas",
    "name": "Contractor Portal",
    "kind": "SaaS · Web app & mobile",
    "cardSummary": "A portal where contractors find matching jobs, quote, submit RAMS and invoices, and track earnings.",
    "tags": [
      "SaaS",
      "Property",
      "Dashboard"
    ],
    "title": "Contractor Portal — from job invite to paid invoice",
    "summary": "A web and mobile portal where contractors working with property managers find matching jobs, quote, submit compliance documents, invoice and get paid.",
    "industry": "Property · Facilities management",
    "service": "UX/UI design, dashboards, mobile adaptation",
    "platform": "Web app · Desktop & mobile",
    "where": "United Kingdom",
    "url": "",
    "domain": "Contractor Portal",
    "headline": "Hello, Jane Smith",
    "bg": "#0F2A35",
    "primary": "#1E5368",
    "accent": "#9CC7D6",
    "img": "/images/portal/thumb.jpg",
    "overview": "The Contractor Portal connects contractors with property managers. Contractors see work orders that match their specialties and service areas, plus direct invitations. They apply with a quotation covering pricing, timeline, scope of work and payment preferences. Once a quote is accepted they submit RAMS and job completion documents, then raise an invoice, while a dashboard tracks jobs, quotations, invoices and earnings. I designed the desktop screens and a full set of 375px mobile adaptations.",
    "problems": [
      {
        "t": "Many steps per job",
        "d": "Each job moves from invitation to quote, RAMS, completion documents and invoice, which is easy to lose track of."
      },
      {
        "t": "Lots of data to scan",
        "d": "Contractors juggle many work orders with different priorities, statuses and properties."
      },
      {
        "t": "Working on site",
        "d": "Contractors often need to quote and submit documents from their phone."
      }
    ],
    "solutions": [
      {
        "t": "Status-driven next actions",
        "d": "Every job shows its status and one clear next step: Apply, Submit RAMS, Submit Invoice or View Details."
      },
      {
        "t": "Dashboard and flexible views",
        "d": "KPI cards, raised-vs-completed and priority charts, plus card or table views with tabs and search."
      },
      {
        "t": "Mobile adaptations",
        "d": "Tables become stacked cards, forms go single-column and a bottom nav keeps key sections in reach."
      }
    ],
    "palette": [],
    "fonts": "",
    "styleNote": "",
    "result": "A clear, consistent portal that guides contractors from finding work to getting paid, on desktop and mobile.",
    "gallery": [
      {
        "label": "Dashboard",
        "desc": "KPI cards, charts and job cards",
        "src": "/images/portal/home-grid.jpg",
          "w": 1600,
          "h": 1450,
        "alt": "Contractor Portal dashboard with job cards"
      },
      {
        "label": "Dashboard · list view",
        "desc": "The same dashboard with jobs in a table",
        "src": "/images/portal/home-list.jpg",
          "w": 1600,
          "h": 1095,
        "alt": "Contractor Portal dashboard with job table"
      },
      {
        "label": "All jobs",
        "desc": "Status tabs, search and next-step actions",
        "src": "/images/portal/jobs.jpg",
          "w": 1600,
          "h": 1095,
        "alt": "Contractor Portal all jobs table"
      },
      {
        "label": "Job details",
        "desc": "Description, job details and Submit a Quote",
        "src": "/images/portal/job-detail.jpg",
          "w": 1600,
          "h": 766,
        "alt": "Contractor Portal job details page"
      },
      {
        "label": "Submit quotation",
        "desc": "Details, pricing, timeline, scope and payment preferences",
        "src": "/images/portal/quote.jpg",
          "w": 1600,
          "h": 1485,
        "alt": "Contractor Portal quotation form"
      },
      {
        "label": "Quotation submitted",
        "desc": "Confirmation with next steps",
        "src": "/images/portal/submitted.jpg",
          "w": 1600,
          "h": 445,
        "alt": "Contractor Portal quotation submitted confirmation"
      },
      {
        "label": "My quotations",
        "desc": "KPIs, filters and quotation table",
        "src": "/images/portal/quotations.jpg",
          "w": 1600,
          "h": 613,
        "alt": "Contractor Portal My Quotations page"
      },
      {
        "label": "My invoices",
        "desc": "Invoice KPIs, filters and invoice table",
        "src": "/images/portal/invoices.jpg",
          "w": 1600,
          "h": 613,
        "alt": "Contractor Portal My Invoices page"
      },
      {
        "label": "My profile",
        "desc": "Business details, specialties, service areas, banking and payment preferences",
        "src": "/images/portal/profile.jpg",
          "w": 1600,
          "h": 1264,
        "alt": "Contractor Portal profile page"
      },
      {
        "label": "Mobile · Home",
        "desc": "Dashboard as stacked cards with bottom navigation",
        "src": "/images/portal/m-home.jpg",
          "w": 560,
          "h": 2743,
        "alt": "Contractor Portal mobile home"
      },
      {
        "label": "Mobile · Jobs",
        "desc": "Job cards with status and next action",
        "src": "/images/portal/m-jobs.jpg",
          "w": 560,
          "h": 1918,
        "alt": "Contractor Portal mobile jobs list"
      },
      {
        "label": "Mobile · Quote form",
        "desc": "Single-column quotation form",
        "src": "/images/portal/m-quote.jpg",
          "w": 560,
          "h": 3262,
        "alt": "Contractor Portal mobile quotation form"
      }
    ]
  },
  {
    "id": "helpi",
    "cat": "app",
    "name": "Helpi",
    "kind": "Mobile app · Home services",
    "cardSummary": "Book trusted handymen, electricians, plumbers and cleaners in a few taps.",
    "tags": [
      "Home services",
      "Mobile",
      "UK"
    ],
    "title": "Helpi — home services, booked in a few taps",
    "summary": "A mobile app for booking trusted professionals for repairs, installations, cleaning and more.",
    "industry": "Home services",
    "service": "UX research, UI design, prototype",
    "platform": "Mobile app · iOS & Android",
    "where": "United Kingdom",
    "url": "",
    "domain": "",
    "headline": "Your go-to platform for home services",
    "bg": "#0E3A82",
    "primary": "#2270C0",
    "accent": "#8FB2FF",
    "img": "/images/helpi/thumb.jpg",
    "overview": "Helpi is a go-to platform for booking home services. People browse 11 categories, including Handyman, Electrician, Plumber, Drains, Deep and Furniture Cleaning, Painting, Pest Control and Beauty, pick fixed-price services, read exactly what is and isn’t included, then add them to the bag. A short booking flow sets the number of professionals and hours, the address and the schedule before a clear checkout with promo codes.",
    "problems": [
      {
        "t": "Finding reliable help",
        "d": "It is hard to know which tradespeople can be trusted and what they will actually do."
      },
      {
        "t": "Unclear pricing",
        "d": "Quotes vary and people rarely know the cost before someone turns up."
      },
      {
        "t": "Too many steps",
        "d": "Booking usually means phone calls, messages and back-and-forth about times."
      }
    ],
    "solutions": [
      {
        "t": "Clear categories and services",
        "d": "An illustrated category grid and service cards with photo, price and a one-line promise."
      },
      {
        "t": "Transparent service details",
        "d": "Each service shows a starting price, what is included, what is not, and notes."
      },
      {
        "t": "A short, guided booking",
        "d": "Choose professionals and hours, set location, pick a time and check out with a live total."
      }
    ],
    "palette": [
      {
        "name": "Helpi Blue",
        "hex": "#2270C0"
      },
      {
        "name": "Navy Text",
        "hex": "#123A6B"
      }
    ],
    "fonts": "Poppins",
    "styleNote": "One confident blue for brand, prices and actions, with friendly isometric category icons and soft card layouts.",
    "result": "A friendly, trustworthy booking experience that takes people from browsing a service to a confirmed checkout in a few taps.",
    "gallery": [
      {
        "label": "Onboarding 1",
        "desc": "Welcome slide with the Helpi brand",
        "src": "/images/helpi/onb1.jpg",
          "w": 640,
          "h": 1385,
        "alt": "Helpi onboarding slide 1"
      },
      {
        "label": "Onboarding 2",
        "desc": "Plumbing and appliance work",
        "src": "/images/helpi/onb2.jpg",
          "w": 640,
          "h": 1406,
        "alt": "Helpi onboarding slide 2"
      },
      {
        "label": "Onboarding 3",
        "desc": "Fitting and installation",
        "src": "/images/helpi/onb3.jpg",
          "w": 640,
          "h": 1406,
        "alt": "Helpi onboarding slide 3"
      },
      {
        "label": "Get started",
        "desc": "Final onboarding slide with the main action",
        "src": "/images/helpi/onb4.jpg",
          "w": 640,
          "h": 1385,
        "alt": "Helpi onboarding get started"
      },
      {
        "label": "Categories",
        "desc": "11 illustrated service categories",
        "src": "/images/helpi/category.jpg",
          "w": 640,
          "h": 1385,
        "alt": "Helpi category grid"
      },
      {
        "label": "Handyman",
        "desc": "Service cards with price and Add to bag",
        "src": "/images/helpi/handyman.jpg",
          "w": 640,
          "h": 1709,
        "alt": "Helpi handyman services"
      },
      {
        "label": "Electrician",
        "desc": "Electrical services from faults to rewires",
        "src": "/images/helpi/electrician.jpg",
          "w": 640,
          "h": 1874,
        "alt": "Helpi electrician services"
      },
      {
        "label": "Furniture cleaning",
        "desc": "Expandable sub-categories",
        "src": "/images/helpi/furniture.jpg",
          "w": 640,
          "h": 1504,
        "alt": "Helpi furniture cleaning services"
      },
      {
        "label": "Service details",
        "desc": "Price, included, not included and notes",
        "src": "/images/helpi/detail.jpg",
          "w": 640,
          "h": 1513,
        "alt": "Helpi service detail sheet"
      },
      {
        "label": "Booking information",
        "desc": "Professionals, hours, materials and a live total",
        "src": "/images/helpi/booking.jpg",
          "w": 640,
          "h": 1575,
        "alt": "Helpi booking information"
      },
      {
        "label": "Set location",
        "desc": "Address search with map",
        "src": "/images/helpi/location.jpg",
          "w": 640,
          "h": 1378,
        "alt": "Helpi set location"
      },
      {
        "label": "Checkout",
        "desc": "Schedule, contact, promo code and order summary",
        "src": "/images/helpi/checkout.jpg",
          "w": 640,
          "h": 1542,
        "alt": "Helpi checkout"
      }
    ]
  },
  {
    "id": "garibhai",
    "cat": "app",
    "name": "Gari Bhai",
    "kind": "Mobile app · Marketplace",
    "cardSummary": "One app for driver jobs, buying and selling cars, car rental and parking in Bangladesh.",
    "tags": [
      "Automotive",
      "Mobile",
      "Bangladesh"
    ],
    "title": "Gari Bhai — one app for everything on wheels",
    "summary": "A Bangladeshi mobile marketplace connecting drivers, car owners, buyers, sellers and renters, in English and Bangla.",
    "industry": "Automotive · Marketplace",
    "service": "UX research, UI design, mobile app",
    "platform": "Mobile app · iOS & Android",
    "where": "Dhaka, Bangladesh",
    "url": "",
    "domain": "",
    "headline": "Driver jobs, cars, rentals & parking",
    "bg": "#0B2A66",
    "primary": "#29A8E0",
    "accent": "#8ED6F5",
    "img": "/images/garibhai/thumb.jpg",
    "overview": "Gari Bhai brings four services into one app: Driver Jobs (owners hire drivers and drivers find work), Buying & Selling cars, Car Rental and Parking Rental. Users sign up with their phone number, choose English or Bangla, browse listings with filters and favourites, chat with each other, and post their own ads through a guided multi-step form. A My Ads area lets them manage drafts, active, paused and expiring ads.",
    "problems": [
      {
        "t": "Scattered services",
        "d": "Hiring a driver, selling a car and finding parking usually happen in different groups and websites."
      },
      {
        "t": "Trust and key details",
        "d": "Listings need salary, experience, duty hours, condition, BRTA registration and documents to be trusted."
      },
      {
        "t": "Local users, local context",
        "d": "The app has to work in Bangla and English and follow Bangladeshi locations (division, district, thana)."
      }
    ],
    "solutions": [
      {
        "t": "One home, four services",
        "d": "A home screen with Driver Job, Buying Selling, Car Rental and Parking Rental tiles, plus quick search for parking, jobs and drivers."
      },
      {
        "t": "Scannable listing cards",
        "d": "Each card shows the essentials at a glance (salary, experience, duty, seats, fuel, area) with favourites and filters."
      },
      {
        "t": "Guided posting and ad management",
        "d": "Step-by-step forms with required fields, photo uploads and certificates, and a My Ads screen with clear status tags."
      }
    ],
    "palette": [
      {
        "name": "Gari Bhai Blue",
        "hex": "#29A8E0"
      },
      {
        "name": "Deep Navy",
        "hex": "#1F2766"
      }
    ],
    "fonts": "Montserrat",
    "styleNote": "A bright, friendly blue for actions and highlights, deep navy for primary buttons, and soft light-blue cards for categories.",
    "result": "A complete mobile marketplace design that makes hiring drivers, trading cars, renting and parking simple for Bangladeshi users.",
    "gallery": [
      {
        "label": "Splash",
        "desc": "Gari Bhai logo splash screen",
        "src": "/images/garibhai/splash.jpg",
          "w": 640,
          "h": 1332,
        "alt": "Gari Bhai splash screen"
      },
      {
        "label": "Sign up",
        "desc": "Phone sign-up with English / Bangla toggle",
        "src": "/images/garibhai/signup-photo.jpg",
          "w": 640,
          "h": 1421,
        "alt": "Gari Bhai sign-up with photo"
      },
      {
        "label": "Sign up · simple",
        "desc": "Minimal phone-number sign-up",
        "src": "/images/garibhai/signup.jpg",
          "w": 640,
          "h": 1332,
        "alt": "Gari Bhai simple sign-up"
      },
      {
        "label": "Home",
        "desc": "Four service tiles and quick search",
        "src": "/images/garibhai/home.jpg",
          "w": 640,
          "h": 1575,
        "alt": "Gari Bhai home screen"
      },
      {
        "label": "Home feed",
        "desc": "Promo banner and all posts with filter",
        "src": "/images/garibhai/feed.jpg",
          "w": 640,
          "h": 1481,
        "alt": "Gari Bhai home feed"
      },
      {
        "label": "Driver wanted",
        "desc": "Jobs from owners: salary, duty hours, holidays",
        "src": "/images/garibhai/driver-jobs.jpg",
          "w": 640,
          "h": 1693,
        "alt": "Gari Bhai driver jobs list"
      },
      {
        "label": "Drivers available",
        "desc": "Drivers looking for work: experience, age, area",
        "src": "/images/garibhai/drivers.jpg",
          "w": 640,
          "h": 1693,
        "alt": "Gari Bhai drivers list"
      },
      {
        "label": "Car rental",
        "desc": "Rental cars: seats, fuel, outside-city travel",
        "src": "/images/garibhai/rentals.jpg",
          "w": 640,
          "h": 1693,
        "alt": "Gari Bhai car rental list"
      },
      {
        "label": "Post · car details",
        "desc": "Brand, model, condition, BRTA, fuel, location, photos",
        "src": "/images/garibhai/sell-form.jpg",
          "w": 640,
          "h": 1910,
        "alt": "Gari Bhai sell post form"
      },
      {
        "label": "Post · other info",
        "desc": "Tax token, contact, price and seller type",
        "src": "/images/garibhai/other-info.jpg",
          "w": 640,
          "h": 1683,
        "alt": "Gari Bhai post other information form"
      },
      {
        "label": "My ads",
        "desc": "Draft, active, paused and expiring ads",
        "src": "/images/garibhai/my-ads.jpg",
          "w": 640,
          "h": 1414,
        "alt": "Gari Bhai My Ads screen"
      }
    ]
  }
];

/** Order used on the home page and the All projects page. */
export const cardOrder: string[] = ["nova", "helpi", "portal", "garibhai", "william", "tep", "zenith", "zsos", "lpc", "ebs"];

export const orderedProjects: Project[] = cardOrder.map((id) => projects.find((p) => p.id === id)!);

export const getProject = (id: string) => projects.find((p) => p.id === id);

export const categories: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "web", label: "Websites" },
  { id: "app", label: "Mobile apps" },
  { id: "saas", label: "SaaS & dashboards" },
];
