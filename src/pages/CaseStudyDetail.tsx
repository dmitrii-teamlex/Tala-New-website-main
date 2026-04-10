import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import {
  TalaPageLayout,
  TalaCaseCover,
  TalaCaseSidebar,
  TalaTestimonialCard,
  TalaStepCard,
  TalaStatCard,
} from "@/components/tala";

/* ── Case study types ── */
interface CaseStudy {
  slug: string;
  logo: string;
  logoSrc?: string;
  logoFlip?: boolean;
  logoMono?: boolean;
  tags: string[];
  title: string;
  about: {
    title: string;
    description: string;
    bullets: string[];
    metadata: { label: string; value: string }[];
  };
  testimonial: {
    quote: string;
    authorName: string;
    authorRole: string;
    authorImage: string;
  };
  challenge: { intro: string; points: string[] };
  solution: {
    name: string;
    description: string;
    capabilities: { title: string; description: string }[];
  };
  howWeDidIt: { num: number; title: string; bullets: string[]; impact: string }[];
  results: { value: string; label: string; description: string }[];
}

/* ── All case studies (sourced from client briefs) ── */
const caseStudies: Record<string, CaseStudy> = {
  alps2alps: {
    slug: "alps2alps",
    logo: "Alps2Alps",
    logoSrc: "/images/brand-alps.svg",
    tags: ["AI", "Transportation", "Programmatic SEO"],
    title: "Doubling organic demand for Alps2Alps with programmatic SEO",
    about: {
      title: "About the client",
      description:
        "Alps2Alps is a European airport transfer service connecting major travel hubs — Geneva, Zurich, Innsbruck, Milan — with hundreds of ski resorts across the Alps.",
      bullets: [
        "Capturing route-based search demand at scale",
        "Converting high-intent searches into bookings",
        "Reducing dependency on paid acquisition during peak season",
      ],
      metadata: [
        { label: "Industry", value: "Transportation" },
        { label: "Location", value: "Global" },
        { label: "Investors", value: "Private" },
      ],
    },
    testimonial: {
      quote:
        "Teamlex helped us unlock a massive amount of organic demand we were previously missing. Their structured, ROI-focused approach to SEO delivered results faster than we expected.",
      authorName: "Raitis Bullits",
      authorRole: "CEO & Co-founder / Alps2Alps",
      authorImage: "/images/author-raitis.jpg",
    },
    challenge: {
      intro:
        "Before working with Teamlex, Alps2Alps relied heavily on paid ads to drive bookings. The problem wasn't demand — it was coverage.",
      points: [
        "Only a small portion of valuable routes had dedicated landing pages",
        'Thousands of searches like "Geneva to Chamonix transfer" or "airport taxi to Val Thorens" had no optimized destination',
        "Scaling content manually was too slow to match seasonal demand",
      ],
    },
    solution: {
      name: "Programmatic SEO Agent",
      description:
        "Teamlex deployed a Programmatic SEO Agent to turn route demand into a scalable acquisition channel. Instead of creating pages one by one, we built a system designed to scale predictably.",
      capabilities: [
        {
          title: "Demand-first route selection",
          description:
            "We identified routes with the highest search demand and revenue potential, so every page launched had a clear ROI case.",
        },
        {
          title: "Route clustering by intent",
          description:
            "Routes were grouped into logical clusters (airports, hotels, regional routes) to cover different user intents at scale.",
        },
        {
          title: "Automated page generation",
          description:
            "AI-generated thousands of route-specific pages using controlled templates, metadata, and internal linking.",
        },
        {
          title: "Optimized for Google and AI search",
          description:
            "Pages were structured to rank in traditional search and appear in AI overviews like ChatGPT and Gemini.",
        },
      ],
    },
    howWeDidIt: [
      {
        num: 1,
        title: "Demand analysis & opportunity mapping",
        bullets: [
          "Analyzed thousands of route-based search queries",
          "Mapped demand against revenue potential",
          "Identified gaps competitors weren't covering",
        ],
        impact: "Clear prioritization of pages that could drive both traffic and bookings.",
      },
      {
        num: 2,
        title: "Route clustering & template design",
        bullets: [
          "Grouped routes into structured clusters based on intent",
          "Designed SEO-first templates for each cluster",
          "Defined page structure, metadata, and internal linking rules",
        ],
        impact: "A repeatable framework for launching thousands of pages without quality loss.",
      },
      {
        num: 3,
        title: "Programmatic page generation",
        bullets: [
          "Automated generation of route-specific pages at scale",
          "Controlled batch releases to ensure stable indexation",
          "Built smart internal linking to accelerate crawl and ranking",
        ],
        impact: "Thousands of long-tail queries covered in weeks — not years.",
      },
      {
        num: 4,
        title: "Optimization for AI-driven search",
        bullets: [
          "Structured content for Google and AI search engines",
          "Optimized pages for LLM visibility (ChatGPT, Gemini, Perplexity)",
          "Ensured answers were machine-readable and intent-aligned",
        ],
        impact: "Alps2Alps started appearing not just in search results, but as trusted answers in AI overviews.",
      },
    ],
    results: [
      { value: "10,000+", label: "SEO landing pages launched", description: "Targeting real, high-intent transfer routes at scale." },
      { value: "2x", label: "Organic traffic growth", description: "Driven by expanded query coverage across Google and AI search." },
      { value: "+100%", label: "Search visibility", description: "Across long-tail, non-brand queries previously untapped." },
      { value: "+3,000", label: "New keywords", description: "Thousands of high-intent searches that were previously uncovered now bring traffic." },
    ],
  },

  "lev-haolam": {
    slug: "lev-haolam",
    logo: "Lev HaOlam",
    logoSrc: "/images/brand-levhaolam.svg",
    tags: ["SEO", "E-commerce", "Content"],
    title: "+85% organic growth from a scalable SEO engine built from scratch",
    about: {
      title: "About the client",
      description:
        "Lev HaOlam is an e-commerce and subscription box company showcasing Israeli-made products from small, family-owned businesses across Judea, Samaria, and the Golan Heights.",
      bullets: [
        "Strong brand loyalty but no systematic organic growth channel",
        "Needed scalable SEO framework tied to the product catalog",
        "Missed top-of-funnel demand around recipes and product usage",
        "Product pages alone couldn't drive discovery at scale",
      ],
      metadata: [
        { label: "Industry", value: "E-commerce" },
        { label: "Location", value: "Israel" },
        { label: "Investors", value: "Private" },
      ],
    },
    testimonial: {
      quote:
        "Teamlex approached our project with precision and respect for our brand values. They helped us grow organic traffic in a way that felt authentic, and the results followed.",
      authorName: "Denis Iurov",
      authorRole: "Marketing Director / Lev HaOlam",
      authorImage: "/images/author-denis.jpg",
    },
    challenge: {
      intro:
        "Lev HaOlam's organic presence had grown naturally — but without structure. The goal was to build organic growth as a repeatable system, not a one-off effort.",
      points: [
        "No scalable SEO framework tied to the product catalog",
        "Missed top-of-funnel demand around recipes and product usage",
        "Product pages alone couldn't drive discovery at scale",
      ],
    },
    solution: {
      name: "Programmatic SEO for e-commerce",
      description:
        "Teamlex rebuilt Lev HaOlam's SEO foundation from scratch — a brand-safe, value-aligned SEO system designed for broad, measurable organic reach.",
      capabilities: [
        {
          title: "Recipe-led demand expansion",
          description:
            'Generated recipe and usage pages targeting queries like "how to use the product" and "what to cook" to expand top-of-funnel reach.',
        },
        {
          title: "Product-led conversion capture",
          description:
            "Built SEO-optimized product pages for Israeli goods to capture commercial intent and drive orders.",
        },
        {
          title: "Programmatic scaling",
          description:
            "Launched content through a structured, automated system designed to grow with the catalog.",
        },
        {
          title: "Future-ready structure",
          description:
            "Enabled easy expansion via new recipes, products, categories, and FAQ blocks.",
        },
      ],
    },
    howWeDidIt: [
      {
        num: 1,
        title: "Demand analysis & content opportunity mapping",
        bullets: [
          "Analyzed search behavior around Israeli products, cooking, and usage",
          "Prioritized informational and commercial queries",
          "Mapped content directly to the product assortment",
        ],
        impact: "Clear focus on content that drives discovery and supports sales.",
      },
      {
        num: 2,
        title: 'Recipe-based content expansion',
        bullets: [
          'Generated recipe and "how to use" pages',
          "Targeted top-of-funnel cooking and usage queries",
          "Linked recipes directly to relevant products",
        ],
        impact: "Expanded reach beyond brand-driven traffic.",
      },
      {
        num: 3,
        title: "Product and commercial page scaling",
        bullets: [
          "Built SEO-optimized product pages",
          "Captured non-brand, high-intent searches",
          "Strengthened internal linking across the site",
        ],
        impact: "Improved conversion potential from organic traffic.",
      },
      {
        num: 4,
        title: "Programmatic SEO framework",
        bullets: [
          "Designed a modular, scalable page system",
          "Enabled fast expansion with minimal manual effort",
          "Prepared the site for future category and FAQ growth",
        ],
        impact: "A long-term organic growth engine aligned with the catalog.",
      },
    ],
    results: [
      { value: "+85%", label: "Growth in organic clicks", description: "Driven by recipe-led content and product page expansion." },
      { value: "+90%", label: "Increase in organic impressions", description: "As coverage expanded across informational and commercial queries." },
      { value: "1,000+", label: "SEO pages launched", description: "Recipes, product pages, and scalable content blocks supporting discovery and conversion." },
      { value: "+40%", label: "Increase in organic orders", description: "Search traffic started contributing directly to e-commerce sales." },
    ],
  },

  respontika: {
    slug: "respontika",
    logo: "Respontika",
    logoSrc: "/images/logo-respontika.svg",
    tags: ["AI", "Digital Products", "Creative"],
    title: "3× more creatives produced with higher CTR and lower CPA",
    about: {
      title: "About the client",
      description:
        "Respontika is a performance-focused company where creative quality directly impacts acquisition efficiency. Creative content drives higher CTR, lower CPA, and scales paid channels without performance decay.",
      bullets: [
        "Driving higher CTR through better creatives",
        "Lowering CPA while scaling volume",
        "Scaling paid channels without performance decay",
        "Manual creative research didn't scale with performance needs",
      ],
      metadata: [
        { label: "Industry", value: "Digital products" },
        { label: "Location", value: "Global" },
        { label: "Investors", value: "Private" },
      ],
    },
    testimonial: {
      quote:
        "Teamlex helped us scale creative production without losing quality. We now produce more ads, faster — and with better performance.",
      authorName: "Lada Klishchenko",
      authorRole: "CEO / Respontika",
      authorImage: "/images/author-lada.jpg",
    },
    challenge: {
      intro:
        "Before partnering with Teamlex, Respontika needed a way to produce more creatives while improving performance metrics.",
      points: [
        "Competitor creative analysis was manual and time-consuming",
        "Insights didn't translate quickly into production-ready ideas",
        "Scaling volume often meant sacrificing quality",
        "CTR and CPA improvements were inconsistent",
      ],
    },
    solution: {
      name: "Data-driven content intelligence",
      description:
        "Teamlex built a system that turns competitor creative signals into production-ready ideas and variations — automatically.",
      capabilities: [
        {
          title: "Automated competitor creative collection",
          description: "Gathered competitor ads and reference content from multiple sources in a centralized system.",
        },
        {
          title: "Performance pattern analysis",
          description:
            "Creatives were analyzed by topics, hooks, offers, visuals, and the link between creative elements and results.",
        },
        {
          title: "Batch idea and format generation",
          description: "Insights were translated into structured outputs: ideas → formats → variations.",
        },
        {
          title: "Production-ready delivery",
          description: "The team received ready-to-use creative concepts that could be shipped immediately.",
        },
      ],
    },
    howWeDidIt: [
      {
        num: 1,
        title: "Competitor creative collection & indexing",
        bullets: [
          "Collected ads and creatives from key competitors",
          "Covered multiple platforms",
          "Centralized all references in a single system",
        ],
        impact: "Full visibility into what competitors were running and scaling.",
      },
      {
        num: 2,
        title: "Creative-to-performance analysis",
        bullets: [
          "Analyzed hooks, offers, visuals, and formats",
          "Mapped creative patterns to performance outcomes",
          "Identified repeatable winning elements",
        ],
        impact: "Clear understanding of what drives higher CTR and lower CPA.",
      },
      {
        num: 3,
        title: "Batch creative generation",
        bullets: [
          "Generated ideas in structured batches",
          "Produced multiple formats and variations per concept",
          "Ensured consistency across creatives",
        ],
        impact: "More output without quality degradation.",
      },
      {
        num: 4,
        title: "Scalable creative pipeline",
        bullets: [
          "Turned insights into a repeatable workflow",
          "Reduced reliance on manual analysis",
          "Enabled continuous creative testing and iteration",
        ],
        impact: "A predictable system for creative scaling tied to performance.",
      },
    ],
    results: [
      { value: "3×", label: "Increase in creative output", description: "More ads produced without expanding the team." },
      { value: "+25%", label: "Improvement in CTR", description: "Driven by better topic and hook selection." },
      { value: "–20%", label: "Reduction in CPA", description: "Thanks to higher-quality creative testing." },
      { value: "70%", label: "Less time on competitor analysis", description: "Automation replaced manual research." },
    ],
  },

  "ask-ayurveda": {
    slug: "ask-ayurveda",
    logo: "Ask Ayurveda",
    logoSrc: "/images/brand-ayurveda.svg",
    logoFlip: true,
    tags: ["SEO", "Wellness", "Programmatic SEO"],
    title: "20K monthly organic traffic built from scratch with a systematic SEO engine",
    about: {
      title: "About the client",
      description:
        "Ask Ayurveda is an Indian wellness platform connecting users with qualified Ayurvedic doctors for free and paid consultations, covering symptoms, remedies, and trusted wellness knowledge.",
      bullets: [
        "Ask health-related questions and get expert answers",
        "Access trusted wellness knowledge in a growing digital health market",
        "Product was ready — but organic visibility was starting from zero",
      ],
      metadata: [
        { label: "Industry", value: "Wellness" },
        { label: "Location", value: "India" },
        { label: "Investors", value: "Y Combinator, Worklife Ventures, 100+ investors" },
      ],
    },
    testimonial: {
      quote:
        "Working with Teamlex has been a fantastic experience for us. Their expertise helped us launch our platform effectively, and we're already seeing strong organic results.",
      authorName: "Jake Ars",
      authorRole: "Marketing Director / Ask Ayurveda",
      authorImage: "/images/author-jake.jpg",
    },
    challenge: {
      intro:
        "Ask Ayurveda faced a classic early-stage SEO challenge: build organic traffic, credibility, and demand efficiently from scratch.",
      points: [
        "New domain with no search authority",
        "No existing organic traffic",
        "Heavy competition from established health portals",
        "High trust requirements in a medical-adjacent niche",
      ],
    },
    solution: {
      name: "SEO AI agent",
      description:
        "An SEO AI agent combined demand-driven page creation with E-E-A-T compliance and expert oversight.",
      capabilities: [
        {
          title: "Demand-driven page creation",
          description: "We built pages based on real search demand and user intent, not guesswork.",
        },
        {
          title: "Programmatic content clusters",
          description:
            "Content was structured into scalable clusters: symptoms, conditions, ingredients, doctor Q&A, and educational blog content.",
        },
        {
          title: "Medical-safe SEO foundation",
          description: "All content followed E-E-A-T principles to ensure credibility, safety, and long-term rankings.",
        },
        {
          title: "Automation with expert oversight",
          description: "AI handled research, clustering, and structure — while experts ensured medical accuracy and tone.",
        },
      ],
    },
    howWeDidIt: [
      {
        num: 1,
        title: "Market research & opportunity mapping",
        bullets: [
          "Analyzed wellness and Ayurveda search demand in India",
          "Identified low-competition, high-intent queries",
          "Prioritized clusters by relevance and scalability",
        ],
        impact: "A clear roadmap to grow traffic from zero without chasing overly competitive keywords.",
      },
      {
        num: 2,
        title: "Technical SEO foundation",
        bullets: [
          "Fixed crawlability, indexing, and schema issues",
          "Optimized site structure and mobile performance",
          "Set up ongoing SEO health monitoring",
        ],
        impact: "A technically sound platform ready to scale content safely.",
      },
      {
        num: 3,
        title: "Programmatic content production",
        bullets: [
          "Built a semantic core across symptoms, ingredients, protocols, and FAQs",
          "Generated structured, SEO-optimized pages at scale",
          "Ensured internal linking across all clusters",
        ],
        impact: "Fast expansion of organic coverage without manual bottlenecks.",
      },
      {
        num: 4,
        title: "Authority & performance optimization",
        bullets: [
          "Implemented E-E-A-T guidelines across all content",
          "Tracked rankings, clicks, and engagement weekly",
          "Continuously optimized pages based on performance data",
        ],
        impact: "Compounding visibility and trust in a sensitive wellness niche.",
      },
    ],
    results: [
      { value: "20K+", label: "Monthly organic visits", description: "Achieved within the first months after launch." },
      { value: "Top 20", label: "Strategic keywords ranked", description: "Improved visibility across core wellness queries." },
      { value: "+85%", label: "Month-over-month growth", description: "Sustained growth after the SEO system launch." },
      { value: "100%", label: "Expert-reviewed content", description: "Every published page reviewed for medical accuracy." },
    ],
  },

  flylane: {
    slug: "flylane",
    logo: "Flylane",
    logoSrc: "/images/brand-flylane.svg",
    tags: ["SEO", "Education", "AI"],
    title: "Generated 408K monthly visitors with AI-powered programmatic SEO",
    about: {
      title: "About the client",
      description:
        "Flylane is a global education platform that connects students with top international schools and universities, simplifying the journey of finding, comparing, and applying to institutions worldwide.",
      bullets: [
        "Global education platform for schools and universities",
        "Demand for international programs increasing",
        "Needed large-scale visibility to attract students",
      ],
      metadata: [
        { label: "Industry", value: "Education" },
        { label: "Location", value: "Global" },
        { label: "Investors", value: "Private" },
      ],
    },
    testimonial: {
      quote:
        "Teamlex's programmatic SEO strategy transformed our digital presence, taking us from zero to 408,000 monthly organic visitors. Their innovative approach to content automation and SEO has revolutionized how students find educational opportunities through our platform.",
      authorName: "Alex Zheltov",
      authorRole: "CEO & Co-founder / Flylane",
      authorImage: "/images/author-alex-zheltov.jpg",
    },
    challenge: {
      intro:
        "Despite a strong business model, Flylane struggled to reach its audience online. The education search market was dominated by established players.",
      points: [
        "Zero organic visibility for school and university-related searches",
        "Need for thousands of localized, accurate pages for institutions",
        "Limited resources for manual content creation and SEO management",
      ],
    },
    solution: {
      name: "Programmatic SEO agent",
      description:
        "Teamlex deployed a programmatic SEO agent to automate page generation, content creation, and optimization at scale — turning Flylane's database into a powerful SEO engine.",
      capabilities: [
        {
          title: "Data architecture and planning",
          description:
            "Designed a scalable database for thousands of educational institutions, mapping user intent and search behavior to guide content templates.",
        },
        {
          title: "Technical infrastructure",
          description:
            "Dynamic page generation and automated metadata updates, ensuring each institution page was SEO-optimized and crawlable.",
        },
        {
          title: "Content automation",
          description:
            "AI-powered content creation generated accurate, localized descriptions with brand consistency across thousands of pages.",
        },
        {
          title: "SEO strategy and internal linking",
          description:
            "Topic clusters and smart internal links connected schools, programs, and regions — maximizing discoverability and rankings.",
        },
      ],
    },
    howWeDidIt: [
      {
        num: 1,
        title: "Mass generation of SEO-optimized pages",
        bullets: [
          "Built dynamic page templates for thousands of schools and universities",
          "Automated metadata and on-page SEO elements",
          "Integrated structured institutional data for relevance and compliance",
        ],
        impact: "Massive keyword coverage and faster time-to-index for every page.",
      },
      {
        num: 2,
        title: "AI-powered content creation",
        bullets: [
          "Developed a custom AI writing model trained on education-related data",
          "Generated unique, high-quality descriptions for each institution",
          "Automated updates to keep content current and accurate",
        ],
        impact: "Consistent, human-quality content produced at scale without manual effort.",
      },
      {
        num: 3,
        title: "Internal linking and topic clustering",
        bullets: [
          "Connected institutions, programs, and regions through smart interlinking",
          "Built hierarchical topic clusters to enhance authority and navigation",
          "Automated link updates to maintain structure as content scaled",
        ],
        impact: "Improved SEO authority and user engagement across categories.",
      },
      {
        num: 4,
        title: "User experience and performance optimization",
        bullets: [
          "Developed advanced search and filtering tools for easy exploration",
          "Enhanced page load speed and mobile responsiveness",
          "Streamlined navigation for a seamless experience across regions",
        ],
        impact: "Faster browsing, higher engagement, and improved conversion flow.",
      },
    ],
    results: [
      { value: "408K+", label: "Monthly organic visitors", description: "Scaled from zero to 408,000 monthly visitors through AI-driven SEO automation." },
      { value: "50K+", label: "Keyword rankings on Google", description: "Dominated high-intent educational queries across global search markets." },
      { value: "+50%", label: "Increase in consultation requests", description: "More qualified leads driven by improved visibility and content relevance." },
      { value: "$250K+", label: "Additional revenue", description: "Organic growth translated into measurable financial impact within months." },
    ],
  },

  elirox: {
    slug: "elirox",
    logo: "Elirox",
    logoSrc: "/images/brand-elirox.svg",
    tags: ["AI", "Fintech", "Programmatic SEO"],
    title: "300+ SEO pages launched to build Elirox's organic channel from scratch",
    about: {
      title: "About the client",
      description:
        "Elirox is a fintech platform focused on algorithmic trading, serving advanced users in a market dominated by established competitors and technically complex products.",
      bullets: [
        "No stable organic acquisition channel",
        "Operated in a niche with high competition and expensive paid traffic",
        "Needed to explain complex trading logic clearly and at scale",
      ],
      metadata: [
        { label: "Industry", value: "Fintech" },
        { label: "Location", value: "Global" },
        { label: "Investors", value: "Private" },
      ],
    },
    testimonial: {
      quote:
        "Teamlex helped us build an organic growth channel in one of the toughest fintech niches. Their structured approach to programmatic SEO made it possible to scale complex topics without sacrificing quality or accuracy.",
      authorName: "Andrey Yashin",
      authorRole: "CEO / Elirox",
      authorImage: "",
    },
    challenge: {
      intro:
        "Algorithmic trading is one of the most difficult SEO categories. Elirox needed more than content — they needed a systematic way to build organic demand.",
      points: [
        "Keywords are competitive and saturated",
        "Content requires technical accuracy and structured explanations",
        "Manual SEO doesn't scale across products, integrations, and strategies",
      ],
    },
    solution: {
      name: "Programmatic SEO Agent",
      description:
        "Teamlex built a system designed to scale predictably across Elirox's entire product ecosystem.",
      capabilities: [
        {
          title: "Cluster-first opportunity mapping",
          description: "Identified topic clusters based on search demand and business value before creating any pages.",
        },
        {
          title: "Full product ecosystem coverage",
          description:
            "Pages were built around platform features, broker integrations, trading strategies, and prop firm compatibility.",
        },
        {
          title: "Batch-based page generation",
          description:
            "AI-powered templates enabled controlled publishing of page bundles without sacrificing quality or structure.",
        },
        {
          title: "Scalable foundation for expansion",
          description: "The system allows Elirox to continuously add new page bundles as features and integrations grow.",
        },
      ],
    },
    howWeDidIt: [
      {
        num: 1,
        title: "Demand analysis & opportunity mapping",
        bullets: [
          "Analyzed thousands of fintech and algorithmic trading search queries",
          "Mapped topics against product relevance and business value",
          "Identified gaps competitors weren't covering",
        ],
        impact: "Clear prioritization of pages that could drive both qualified traffic and platform sign-ups.",
      },
      {
        num: 2,
        title: "Topic clustering by product and intent",
        bullets: [
          "Grouped queries into structured clusters (platform features, integrations, strategies)",
          "Separated educational, commercial, and product-led intents",
          "Defined which clusters should convert users vs. educate them",
        ],
        impact: "A clear SEO architecture aligned with the full Elirox product ecosystem.",
      },
      {
        num: 3,
        title: "Programmatic page generation in batches",
        bullets: [
          "Set up templates for each cluster and page type",
          "Generated and published pages in controlled batches",
          "Ensured consistency across structure, logic, and terminology",
        ],
        impact: "Hundreds of high-quality pages launched without sacrificing accuracy or control.",
      },
      {
        num: 4,
        title: "Building a scalable organic growth system",
        bullets: [
          "Established a repeatable workflow for new page bundles",
          "Enabled easy expansion as new features, brokers, and strategies launch",
          "Turned SEO into a long-term acquisition channel, not a one-off project",
        ],
        impact: "A scalable organic channel that can grow alongside the product and business.",
      },
    ],
    results: [
      { value: "+180%", label: "Growth in organic impressions", description: "Driven by rapid coverage of high-demand trading and product topics." },
      { value: "+120%", label: "Increase in organic clicks", description: "As pages started ranking for non-brand, high-intent algorithmic trading queries." },
      { value: "300+", label: "SEO pages launched", description: "Across product features, integrations, strategies, and commercial sections." },
      { value: "First", label: "Organic registrations & leads", description: "Inbound sign-ups generated from search — without relying on paid acquisition." },
    ],
  },

  semrush: {
    slug: "semrush",
    logo: "Semrush",
    logoSrc: "/images/brand-semrush.svg",
    tags: ["AI", "SaaS", "Video Content"],
    title: "Built a self-optimizing AI system for Semrush's video production",
    about: {
      title: "About the client",
      description:
        "Semrush is a global SaaS company and leading authority in SEO and marketing analytics. As a credibility-first brand, Semrush depends on high-quality educational content, consistent brand voice, and fast reaction to market trends.",
      bullets: [
        "High-quality educational content",
        "Consistent brand voice",
        "Fast reaction to market and platform trends",
        "Scaling social video output without scaling headcount",
      ],
      metadata: [
        { label: "Industry", value: "SaaS, Marketing analytics" },
        { label: "Location", value: "Global" },
        { label: "Investors", value: "Private" },
      ],
    },
    testimonial: {
      quote:
        "Teamlex built a system that plans, creates, publishes, and improves our video content automatically. It replaced fragmented production with a single continuous loop that actually scales.",
      authorName: "Olga Andrienko",
      authorRole: "VP of Brand Marketing / Semrush",
      authorImage: "/images/author-olga.jpg",
    },
    challenge: {
      intro:
        "Semrush needed to publish daily video content across multiple social platforms — but their setup was a collection of disconnected manual steps.",
      points: [
        "Manual video production depended on multiple tools, roles, and handoffs that didn't scale",
        "Content couldn't react fast enough to trends — timing and relevance were inconsistent",
        "There was no repeatable system that could run, learn, and improve content on its own",
      ],
    },
    solution: {
      name: "AI video content agent",
      description:
        "Teamlex designed and implemented a fully autonomous AI video content agent — a living workflow embedded into Semrush's operations that plans, creates, publishes, and improves video content automatically.",
      capabilities: [
        {
          title: "End-to-end automation",
          description: "A single AI system handled strategy, scripting, editing, publishing, and optimization in one continuous content loop.",
        },
        {
          title: "Real-time trend scanning",
          description: "The agent monitored social platforms daily to detect trending topics, formats, and signals worth producing.",
        },
        {
          title: "AI video creation",
          description: "Scripts, visuals, and final videos were generated automatically, fully aligned with Semrush's brand and tone.",
        },
        {
          title: "Hands-free publishing & optimization",
          description:
            "Videos were auto-scheduled and published via integrations, while performance data continuously refined future content.",
        },
      ],
    },
    howWeDidIt: [
      {
        num: 1,
        title: "AI-driven trend and topic analysis",
        bullets: [
          "Continuously running AI layer monitors social platforms in real time",
          "Automatically mapped detected trends to Semrush's content pillars and audience segments",
          "Used predictive performance signals to prioritize topics most likely to drive reach",
        ],
        impact: "Content planning shifted from static calendars to demand-driven decisions with higher engagement potential.",
      },
      {
        num: 2,
        title: "Automated video creation and editing",
        bullets: [
          "Built an end-to-end AI production pipeline generating scripts, visuals, and captions",
          "Trained the system on Semrush's brand guidelines for consistent tone and visual identity",
          "Eliminated multi-role handoffs by running creation and editing in a single system",
        ],
        impact: "Video production moved from multi-day, multi-role coordination to same-day, fully on-brand output.",
      },
      {
        num: 3,
        title: "AI avatar deployment and publishing automation",
        bullets: [
          "Deployed a branded AI avatar as a persistent on-screen presenter",
          "Integrated automated scheduling and multi-platform publishing through n8n",
          "Synced publishing logic with the content calendar for reliable execution",
        ],
        impact: "A streamlined, end-to-end workflow from idea to publish running without human intervention.",
      },
      {
        num: 4,
        title: "Performance optimization and feedback",
        bullets: [
          "Automatically collected and analyzed watch time, CTR, and audience retention",
          "Fed performance insights back into scripting and visual decisions",
          "Established continuous learning loops so the system optimizes itself over time",
        ],
        impact: "The content engine doesn't just scale output — it continuously improves results without added operational effort.",
      },
    ],
    results: [
      { value: "~75%", label: "Viral video rate", description: "Most videos reached high visibility through algorithmic recommendations." },
      { value: "–35%", label: "Production time", description: "Reduced to hours instead of days — full videos generated same-day." },
      { value: "+40%", label: "Engagement & subscriber growth", description: "Accelerated growth across new accounts and content channels." },
      { value: "4x", label: "Operational efficiency", description: "The AI agent replaced the equivalent of four creative roles — strategist, creator, editor, and analyst." },
    ],
  },

  "bina-school": {
    slug: "bina-school",
    logo: "Bina School",
    logoSrc: "/images/brand-bina.svg",
    tags: ["AI", "Education", "Content"],
    title: "+30% higher content win rate through data-driven idea selection",
    about: {
      title: "About the client",
      description:
        "Bina School is an online-first international education platform offering structured, high-quality learning for children across multiple regions. Short-form video content plays a key role in brand awareness and audience education.",
      bullets: [
        "Brand awareness across social platforms",
        "Audience education for parents",
        "Demand generation for alternative schooling",
        "Virality is rare, but effort is constant",
      ],
      metadata: [
        { label: "Industry", value: "Education" },
        { label: "Location", value: "Global" },
        { label: "Investors", value: "Private" },
      ],
    },
    testimonial: {
      quote:
        "Teamlex completely changed how we approach short-form content. Instead of guessing ideas, we now focus on formats and topics that are proven to perform.",
      authorName: "Ruslan Zaydullin",
      authorRole: "CEO / Bina School",
      authorImage: "/images/author-ruslan.jpg",
    },
    challenge: {
      intro:
        "In short-form platforms, only a small percentage of posts drive meaningful reach. Before Teamlex, Bina's team was investing time into ideas without validated potential.",
      points: [
        "The team invested time into ideas without validated potential",
        "Performance varied widely across posts",
        "There was no systematic way to predict which formats would win",
      ],
    },
    solution: {
      name: "Data-driven content intelligence",
      description:
        "Teamlex built a system to separate signal from noise in short-form content — only producing ideas with statistically higher success probability.",
      capabilities: [
        {
          title: "Top 1% competitor analysis",
          description:
            "Collected and analyzed viral content from key competitors across major short-form platforms to isolate the highest-performing posts.",
        },
        {
          title: "Pattern and signal extraction",
          description: "Each viral post was broken down into topics, hooks, structure, duration, visuals, and recurring formats.",
        },
        {
          title: "Idea selection framework",
          description: "A process that prioritizes ideas with statistically higher success probability, based on real performance data.",
        },
        {
          title: "Noise elimination",
          description: "Low-signal ideas were filtered out before production, saving time and resources.",
        },
      ],
    },
    howWeDidIt: [
      {
        num: 1,
        title: "Competitor content collection & benchmarking",
        bullets: [
          "Collected short-form content from key competitors",
          "Covered multiple platforms",
          "Ranked content by engagement and reach",
        ],
        impact: "Clear visibility into what actually performs at scale.",
      },
      {
        num: 2,
        title: "Top-1% performance isolation",
        bullets: [
          "Filtered only the highest-performing posts",
          "Removed average and low-signal content",
          "Focused analysis on repeatable success",
        ],
        impact: "Reduced noise and narrowed focus to proven winners.",
      },
      {
        num: 3,
        title: "Pattern and format analysis",
        bullets: [
          "Analyzed topics, hooks, structure, pacing, and visuals",
          "Identified repeating formats and content mechanics",
          "Mapped patterns across multiple viral examples",
        ],
        impact: "Actionable insights instead of abstract inspiration.",
      },
      {
        num: 4,
        title: "Idea selection system",
        bullets: [
          "Built a repeatable process for choosing ideas",
          "Prioritized formats with higher statistical win rates",
          "Aligned production with what works most often",
        ],
        impact: "Higher performance consistency with the same production effort.",
      },
    ],
    results: [
      { value: "+30%", label: "Increase in content win rate", description: "More posts reaching above-average performance thresholds." },
      { value: "Top 1%", label: "Competitor content analyzed", description: "Only the highest-performing posts used as benchmarks." },
      { value: "100s", label: "Viral content pieces reviewed", description: "Across platforms, topics, and formats." },
      { value: "–25%", label: "Reduction in wasted effort", description: "By cutting low-probability ideas before execution." },
    ],
  },

  "axevil-capital": {
    slug: "axevil-capital",
    logo: "Axevil Capital",
    logoSrc: "/images/brand-axevil.svg",
    tags: ["SEO", "Fintech", "Programmatic SEO"],
    title: "+320% organic traffic growth for a private market investment platform through programmatic SEO",
    about: {
      title: "About the client",
      description:
        "Axevil Capital is a private market investment platform providing access to pre-IPO stocks, alternative assets, and private equity opportunities for qualified investors.",
      bullets: [
        "Minimal organic presence for high-intent investment queries",
        "Relied primarily on paid channels and direct outreach",
        "Lacked a scalable content framework connecting stock coverage to search demand",
      ],
      metadata: [
        { label: "Industry", value: "Fintech, Private markets" },
        { label: "Location", value: "Global" },
        { label: "Investors", value: "Private" },
      ],
    },
    testimonial: {
      quote:
        "Teamlex understood that in private markets, trust starts with visibility. They built an organic system that positions us where investors actually search — and it scales as our coverage grows.",
      authorName: "Alexander Ivanov",
      authorRole: "Co-founder and CEO / Axevil Capital",
      authorImage: "/images/author-alexander.jpg",
    },
    challenge: {
      intro:
        "Private market investing is one of the most competitive and trust-sensitive SEO categories. Axevil needed to move from scattered content efforts to a programmatic, scalable SEO system.",
      points: [
        "High-intent investment queries dominated by established financial publishers",
        "Content needed to be both technically accurate and SEO-optimized — doesn't scale manually",
        "Stock coverage expanded continuously, requiring a content system that could keep pace",
      ],
    },
    solution: {
      name: "Programmatic SEO for investment platforms",
      description:
        "A scalable engine that maps investor search demand to stock pages, solution pages, and comparison content — generating optimized pages in controlled batches.",
      capabilities: [
        {
          title: "Stock-level demand mapping",
          description:
            "Analyzed investor search behavior across pre-IPO stocks, private companies, and alternative assets — identifying high-intent queries for each listing.",
        },
        {
          title: "Solution-aligned page architecture",
          description:
            "Built page templates structured around investment solutions, asset classes, and investor intent — ensuring every page addresses a specific search need.",
        },
        {
          title: "Scalable stock page generation",
          description:
            "AI-powered templates produced SEO-optimized stock pages at scale, maintaining consistency in data presentation and compliance standards.",
        },
        {
          title: "Competitor comparison framework",
          description:
            "Created systematic comparison pages positioning Axevil against alternative platforms — capturing high-intent, decision-stage search traffic.",
        },
      ],
    },
    howWeDidIt: [
      {
        num: 1,
        title: "Market research & competitor analysis",
        bullets: [
          "Full landscape audit of the private market investment SEO space",
          "Analyzed top-ranking competitors to identify content gaps and keyword opportunities",
          "Mapped investor search behavior across stock, solution, and comparison queries",
        ],
        impact: "A clear picture of where organic opportunity existed — and which competitors were underserving specific search intents.",
      },
      {
        num: 2,
        title: "Stock-level keyword clustering",
        bullets: [
          "Collected and organized thousands of investment-related keywords into clusters per stock and asset class",
          "Grouped clusters by investor intent: research, comparison, and transaction",
          "Prioritized high-intent, high-volume queries aligned with conversion goals",
        ],
        impact: "A scalable keyword architecture that connects every page to real investor search demand.",
      },
      {
        num: 3,
        title: "Stock page & solution page generation",
        bullets: [
          "Designed modular templates for individual stock pages, solution overviews, and asset class landing pages",
          "Generated pages in controlled batches with data accuracy and compliance standards",
          "Deployed pages with structured data, meta optimization, and trust signals",
        ],
        impact: "Hundreds of high-quality pages launched across the platform's full stock and solution coverage.",
      },
      {
        num: 4,
        title: "Competitor comparison page framework",
        bullets: [
          "Created a systematic framework for comparison pages: Axevil vs. competing platforms",
          "Targeted decision-stage search queries where investors evaluate alternatives",
          "Built each comparison with objective data points, feature breakdowns, and clear positioning",
        ],
        impact: "Captured high-intent traffic from investors actively evaluating their options.",
      },
    ],
    results: [
      { value: "+320%", label: "Growth in organic traffic", description: "Driven by systematic, stock-level content covering high-demand private market queries." },
      { value: "+250%", label: "Increase in organic impressions", description: "As coverage expanded across stock, solution, and comparison pages." },
      { value: "400+", label: "SEO pages launched", description: "Across individual stocks, asset classes, solution pages, and comparison content." },
      { value: "Top 10", label: "Rankings for high-intent keywords", description: "Axevil now ranks on page one for competitive investment queries." },
    ],
  },

  "gaianet-ai": {
    slug: "gaianet-ai",
    logo: "GaiaNet AI",
    logoSrc: "/images/brand-gaianet.svg",
    tags: ["AI", "Crypto", "Social Content"],
    title: "Built a self-scaling social content engine that drove +350% community growth",
    about: {
      title: "About the client",
      description:
        "GaiaNet AI is a decentralized AI infrastructure project building open-source tools for running AI models on distributed nodes. Operating at the intersection of AI and crypto, the project needed to build community trust and ecosystem awareness.",
      bullets: [
        "Inconsistent social media output across platforms",
        "No systematic content pipeline tied to trending topics",
        "Couldn't scale content production to match crypto community pace",
      ],
      metadata: [
        { label: "Industry", value: "Crypto, Decentralized AI" },
        { label: "Location", value: "Global" },
        { label: "Investors", value: "Venture-backed" },
      ],
    },
    testimonial: {
      quote:
        "Teamlex didn't just automate our social media — they built a system that understands crypto culture, reacts to trends in real time, and grows our community while we focus on building the product.",
      authorName: "Matt Yi",
      authorRole: "Co-Founder / GaiaNet AI",
      authorImage: "",
    },
    challenge: {
      intro:
        "Crypto communities move fast. Projects that fail to maintain consistent, trend-responsive social presence lose mindshare to competitors within days.",
      points: [
        "Social media content was produced reactively, driven by internal bandwidth not market signals",
        "No automated system for detecting trending topics, ecosystem events, or viral opportunities",
        "Content had to span multiple platforms with platform-specific optimization",
      ],
    },
    solution: {
      name: "AI-powered social content engine",
      description:
        "A fully autonomous social content engine — a living system that monitors, creates, distributes, and optimizes content across all channels.",
      capabilities: [
        {
          title: "Real-time trend detection",
          description:
            "AI-powered monitoring across crypto Twitter, ecosystem news, competitor activity, and developer communities.",
        },
        {
          title: "Automated content pipeline",
          description:
            "End-to-end content generation workflows producing platform-optimized posts, threads, and announcements from trend signals.",
        },
        {
          title: "Multi-platform distribution",
          description:
            "Automated publishing and formatting for X/Twitter, Discord, Telegram, and LinkedIn — each with platform-specific optimization.",
        },
        {
          title: "Community growth loops",
          description:
            "Engagement-driven feedback loops analyzing community response patterns and continuously refining content strategy.",
        },
      ],
    },
    howWeDidIt: [
      {
        num: 1,
        title: "Social landscape analysis & trend mapping",
        bullets: [
          "Mapped the crypto social media landscape to identify key influencers and engagement patterns",
          "Analyzed competitor social strategies to find positioning opportunities",
          "Identified trending topics and narratives driving engagement in decentralized AI",
        ],
        impact: "A data-driven foundation for every content decision — not guesswork.",
      },
      {
        num: 2,
        title: "Automated content pipeline development",
        bullets: [
          "Built end-to-end AI content pipelines transforming trend signals into ready-to-publish content",
          "Trained the system on GaiaNet's brand voice and technical positioning",
          "Established quality gates ensuring technical accuracy and brand consistency at volume",
        ],
        impact: "Content production shifted to systematic, scalable output — 5-10x more content without adding headcount.",
      },
      {
        num: 3,
        title: "Multi-platform distribution & optimization",
        bullets: [
          "Designed platform-specific content templates for X/Twitter, Discord, Telegram, LinkedIn",
          "Implemented automated scheduling and publishing with platform-optimized formatting",
          "Built cross-platform amplification workflows",
        ],
        impact: "Consistent, optimized presence across every platform without managing each channel manually.",
      },
      {
        num: 4,
        title: "Trend detection & real-time response system",
        bullets: [
          "Deployed AI-powered monitoring agents tracking crypto Twitter and ecosystem news in real time",
          "Built automated response workflows generating relevant content within minutes of trend detection",
          "Established prioritization logic focused on trends most relevant to GaiaNet's positioning",
        ],
        impact: "GaiaNet consistently publishes trend-responsive content faster than competitors.",
      },
    ],
    results: [
      { value: "+350%", label: "Community growth", description: "Driven by systematic, trend-responsive content across crypto communities." },
      { value: "+280%", label: "Increase in social engagement", description: "As content aligned with real-time ecosystem trends through continuous optimization." },
      { value: "5x", label: "Content output volume", description: "Automated pipelines enabled 5x content volume across all platforms." },
      { value: "~70%", label: "Reduction in production time", description: "AI-powered workflows replaced manual content creation." },
    ],
  },

  engagelabs: {
    slug: "engagelabs",
    logo: "Engagelabs",
    logoSrc: "/images/brand-engagelabs.png",
    logoMono: true,
    tags: ["AI", "SaaS", "Content"],
    title: "+35% higher content win rate with a faster, script-driven pipeline",
    about: {
      title: "About the client",
      description:
        "Engagelabs is a global customer engagement platform helping brands communicate with users across messaging, email, and mobile channels. Short-form video content drives product education and demand generation.",
      bullets: [
        "Product education through short-form content",
        "Brand awareness across global markets",
        "Demand generation at scale",
        "A lot of content effort, but few top-performing wins",
      ],
      metadata: [
        { label: "Industry", value: "SaaS" },
        { label: "Location", value: "Global" },
        { label: "Investors", value: "Private" },
      ],
    },
    testimonial: {
      quote:
        "Teamlex helped us move from intuition-based content to a repeatable system. We now know what works — and can produce it faster than ever.",
      authorName: "Mark Okhman",
      authorRole: "CEO / Engagelabs",
      authorImage: "",
    },
    challenge: {
      intro:
        "Engagelabs produced large amounts of content regularly, but only a small fraction reached top engagement metrics. The team needed a way to increase hit rate and speed at the same time.",
      points: [
        "Large amounts of content were produced regularly",
        "Only a small fraction reached top engagement metrics",
        "Idea selection relied heavily on intuition",
        "Script preparation slowed down production",
      ],
    },
    solution: {
      name: "Data-driven content intelligence",
      description:
        "Teamlex built a system that transforms competitor insights into production-ready scripts — doubling speed and win rate.",
      capabilities: [
        {
          title: "Top 1% competitive analysis",
          description: "Analyzed competitor content to isolate only the highest-performing videos and formats.",
        },
        {
          title: "Pattern extraction for production",
          description: "Winning content was broken down into repeatable patterns: hooks, structure, pacing, visuals, and angles.",
        },
        {
          title: "Automated script generation",
          description:
            "Based on proven patterns, we automated hooks, script structure, and multiple variations for different audiences and angles.",
        },
        {
          title: "Production-ready delivery",
          description: "The team received ready-to-use scripts they could push straight into production.",
        },
      ],
    },
    howWeDidIt: [
      {
        num: 1,
        title: "Competitive content collection & ranking",
        bullets: [
          "Collected short-form content from key competitors",
          "Covered multiple platforms",
          "Ranked videos by engagement and reach",
        ],
        impact: "Clear visibility into what truly performs at the top level.",
      },
      {
        num: 2,
        title: "Top-1% performance isolation",
        bullets: [
          "Filtered only the highest-performing content",
          "Removed average and low-signal examples",
          "Focused analysis on repeatable success",
        ],
        impact: "Sharper insights with far less noise.",
      },
      {
        num: 3,
        title: "Pattern and format breakdown",
        bullets: [
          "Analyzed hooks, structure, pacing, visuals, and CTAs",
          "Identified repeatable winning formats",
          "Mapped patterns across multiple viral examples",
        ],
        impact: "Clear production guidelines instead of abstract inspiration.",
      },
      {
        num: 4,
        title: "Script automation and delivery",
        bullets: [
          "Automated generation of scripts based on proven patterns",
          "Created multiple variations per idea",
          "Delivered scripts ready for immediate production",
        ],
        impact: "Faster content preparation with higher confidence in outcomes.",
      },
    ],
    results: [
      { value: "+35%", label: "Increase in content win rate", description: "More videos reaching top engagement thresholds." },
      { value: "–60%", label: "Time spent per script", description: "From manual writing to automated, production-ready drafts." },
      { value: "3×", label: "More scripts per week", description: "Without increasing team workload." },
      { value: "Top 1%", label: "Competitor content as benchmarks", description: "Only proven formats influenced production." },
    ],
  },

  inxy: {
    slug: "inxy",
    logo: "Inxy",
    logoSrc: "/images/brand-inxy.svg",
    tags: ["SEO", "SaaS", "Automation"],
    title: "+60% organic growth powered by a fully automated SEO system",
    about: {
      title: "About the client",
      description:
        "Inxy is a technology-driven company focused on scalable digital growth. Like many product-led teams, Inxy needed organic traffic — but without building a large content team or running constant SEO checklists.",
      bullets: [
        "Needed organic traffic without a large content team",
        "Wanted to avoid constant manual SEO checklists",
        "Required scalable internal linking and page creation",
      ],
      metadata: [
        { label: "Industry", value: "SaaS" },
        { label: "Location", value: "Global" },
        { label: "Investors", value: "Private" },
      ],
    },
    testimonial: {
      quote:
        "Teamlex helped us turn SEO into an automated system. We no longer manage pages manually, yet organic traffic keeps growing.",
      authorName: "Serge Kuznetsov",
      authorRole: "CEO / Inxy.io",
      authorImage: "/images/author-serge.jpg",
    },
    challenge: {
      intro:
        "Inxy needed a way to grow organic traffic automatically, without breaking site structure or indexation.",
      points: [
        "Content updates were manual and time-consuming",
        "Internal linking wasn't scalable",
        "Pages quickly became outdated",
        "Creating new SEO pages required ongoing human effort",
      ],
    },
    solution: {
      name: "SEO AI Agent",
      description:
        "A fully automated SEO system that handles internal linking, content updates, and page creation — so SEO runs in the background.",
      capabilities: [
        {
          title: "Automated internal linking",
          description: "The agent continuously optimized internal links based on site structure and search demand.",
        },
        {
          title: "Rule-based content updates",
          description:
            "Pages were updated automatically using predefined templates and logic, keeping content fresh without manual edits.",
        },
        {
          title: "Programmatic page creation",
          description: "New pages and sections were created wherever search demand existed, following strict structural rules.",
        },
        {
          title: "Built-in quality control",
          description: "Data-driven checks ensured scaling never damaged crawlability, indexation, or site architecture.",
        },
      ],
    },
    howWeDidIt: [
      {
        num: 1,
        title: "SEO automation setup",
        bullets: [
          "Connected Teamlex's SEO AI Agent",
          "Defined rules for page structure, updates, and linking",
          "Aligned automation with Inxy's site architecture",
        ],
        impact: "A hands-off SEO foundation ready to scale safely.",
      },
      {
        num: 2,
        title: "Internal linking automation",
        bullets: [
          "Continuously optimized internal link structure",
          "Ensured new and existing pages were properly connected",
          "Prevented orphaned or over-linked pages",
        ],
        impact: "Stronger crawlability and faster ranking distribution.",
      },
      {
        num: 3,
        title: "Content updating and expansion",
        bullets: [
          "Automatically refreshed existing pages",
          "Generated new pages and sections based on demand",
          "Used templates to maintain consistency",
        ],
        impact: "Content stayed relevant without manual intervention.",
      },
      {
        num: 4,
        title: "Data-driven scaling and control",
        bullets: [
          "Monitored indexation and performance signals",
          "Iterated rules based on real data",
          "Prevented structural SEO issues while scaling",
        ],
        impact: "Predictable growth without technical debt.",
      },
    ],
    results: [
      { value: "+60%", label: "Increase in organic clicks", description: "Driven by continuous content expansion and linking." },
      { value: "+70%", label: "Growth in organic impressions", description: "As new pages and sections were indexed." },
      { value: "450+", label: "Pages created or updated", description: "Without manual content production." },
      { value: "–80%", label: "Reduction in manual SEO work", description: "Routine tasks fully handled by the AI agent." },
    ],
  },

  "wow-how-studio": {
    slug: "wow-how-studio",
    logo: "Wow How Studio",
    logoSrc: "/images/brand-wowwoh.svg",
    tags: ["AI", "Video Production", "Content"],
    title: "Built a scalable content engine that turned organic reach into a growth channel",
    about: {
      title: "About the client",
      description:
        "Wow How Studio is a US-based video production and animation company serving clients across tech, e-commerce, and entertainment. As the company grew, it needed to reduce dependency on paid acquisition and build a consistent organic channel.",
      bullets: [
        "No systematic approach to social media or organic content",
        "Relied on portfolio showcases and word-of-mouth",
        "Lacked a repeatable content framework across platforms",
      ],
      metadata: [
        { label: "Industry", value: "Video Production, Animation" },
        { label: "Location", value: "United States" },
        { label: "Investors", value: "Private" },
      ],
    },
    testimonial: {
      quote:
        "Teamlex didn't just give us content — they built a system that learns and scales. Our organic reach went from inconsistent to predictable.",
      authorName: "Alex Grin",
      authorRole: "CEO / Wow How Studio",
      authorImage: "",
    },
    challenge: {
      intro:
        "Wow How Studio needed to scale organic reach across social media — but had no repeatable process in place.",
      points: [
        "Content creation was ad hoc, driven by internal availability rather than strategy",
        "No competitive intelligence on what was actually working in their niche",
        "Content output couldn't keep pace with the volume required for meaningful traction",
      ],
    },
    solution: {
      name: "AI-powered content engine",
      description:
        "A fully automated content engine — a self-improving system embedded into Wow How Studio's operations that researches, creates, publishes, and optimizes content.",
      capabilities: [
        {
          title: "Full market intelligence",
          description: "Comprehensive market scan to understand content demand, audience behavior, and platform dynamics in the video production space.",
        },
        {
          title: "Competitor-driven strategy",
          description: "Identified and analyzed top-performing competitors to extract formats, topics, and posting patterns that drive engagement.",
        },
        {
          title: "Scalable template system",
          description: "Modular content templates enabling rapid creation of on-brand, platform-optimized content at scale.",
        },
        {
          title: "Performance-driven iteration",
          description: "Automated performance tracking and feedback loops so the system continuously refines output based on real engagement data.",
        },
      ],
    },
    howWeDidIt: [
      {
        num: 1,
        title: "Full market scan & audience research",
        bullets: [
          "Mapped the competitive landscape across social platforms in video production",
          "Analyzed content demand patterns and platform-specific trends",
          "Identified underserved content opportunities",
        ],
        impact: "A data-driven foundation for every content decision.",
      },
      {
        num: 2,
        title: "Competitor identification & content analysis",
        bullets: [
          "Identified top-performing competitors across YouTube, Instagram, LinkedIn, TikTok",
          "Analyzed their content strategy: formats, posting cadence, engagement patterns",
          "Extracted actionable insights on what resonates with the target audience",
        ],
        impact: "Clear understanding of what works in the space — and where Wow How could differentiate.",
      },
      {
        num: 3,
        title: "Scalable content template development",
        bullets: [
          "Designed a modular template system covering multiple formats and platforms",
          "Built templates that maintain brand consistency while allowing rapid customization",
          "Optimized for platform-specific algorithms and audience expectations",
        ],
        impact: "Content production shifted from one-off creation to systematic, scalable output.",
      },
      {
        num: 4,
        title: "Performance optimization & iteration",
        bullets: [
          "Automated feedback loops connecting performance data to content decisions",
          "Refined templates, topics, and formats based on engagement trends",
          "Built a continuous improvement cycle that compounds results over time",
        ],
        impact: "The content engine continuously improves results without added operational effort.",
      },
    ],
    results: [
      { value: "+220%", label: "Growth in organic reach", description: "Driven by systematic, platform-optimized content in the video production space." },
      { value: "+180%", label: "Increase in social engagement", description: "As content aligned more closely with audience interests and platform algorithms." },
      { value: "3x", label: "Content output volume", description: "Scalable template system enabled 3x volume without adding headcount." },
      { value: "~60%", label: "Reduction in production time", description: "Automated workflows replaced manual production, freeing the team for creative direction." },
    ],
  },

  "harey-zahav": {
    slug: "harey-zahav",
    logo: "Harey Zahav",
    logoSrc: "/images/brand-hareyzahav.svg",
    tags: ["SEO", "Real Estate", "Programmatic SEO"],
    title: "+145% organic traffic from a scalable SEO engine built for Israeli real estate",
    about: {
      title: "About the client",
      description:
        "Harey Zahav is an Israel-based real estate developer focused on residential and mixed-use projects across central and southern Israel.",
      bullets: [
        "Minimal organic visibility in competitive Israeli real estate",
        "Relied primarily on paid channels and offline marketing",
        "Lacked scalable content strategy tied to search demand",
      ],
      metadata: [
        { label: "Industry", value: "Real estate development" },
        { label: "Location", value: "Israel" },
        { label: "Investors", value: "Private" },
      ],
    },
    testimonial: {
      quote:
        "Teamlex brought structure to our digital growth. They didn't just create pages — they built a system that positions us where buyers and investors actually search.",
      authorName: "Yaron Cohen",
      authorRole: "Marketing Director / Harey Zahav",
      authorImage: "",
    },
    challenge: {
      intro:
        "Harey Zahav operated in one of the most competitive local SEO markets — Israeli real estate. The goal was to move from zero organic presence to a scalable, repeatable growth system.",
      points: [
        "Established competitors dominated high-intent property search queries",
        "No structured SEO framework for projects, locations, and buyer intent",
        "Content had to speak to multiple audiences: local buyers, diaspora investors, agents",
      ],
    },
    solution: {
      name: "Programmatic SEO for real estate",
      description:
        "A scalable engine that maps search demand to development projects, locations, and buyer intent — generating optimized pages in controlled batches.",
      capabilities: [
        {
          title: "Market-driven demand mapping",
          description:
            "Analyzed competitor content, parsed top-performing pages, and identified semantic clusters tied to real estate search behavior across Israel.",
        },
        {
          title: "Project-aligned page architecture",
          description:
            "SEO page templates structured around specific developments, neighborhoods, and property types — each serving a clear search intent.",
        },
        {
          title: "Scalable content generation",
          description:
            "Produced approximately 150 SEO-optimized pages using AI-powered templates with consistency in structure and technical SEO standards.",
        },
        {
          title: "Internal linking for authority",
          description:
            "Strategic internal linking framework connecting project pages, location pages, and informational content to strengthen topical authority.",
        },
      ],
    },
    howWeDidIt: [
      {
        num: 1,
        title: "Market research & competitor analysis",
        bullets: [
          "Full landscape audit of the Israeli real estate SEO market",
          "Analyzed top-ranking competitors to identify content gaps",
          "Mapped search demand across locations, property types, and buyer intent",
        ],
        impact: "A clear picture of where organic opportunity existed.",
      },
      {
        num: 2,
        title: "Semantic clustering & content architecture",
        bullets: [
          "Organized thousands of keywords into structured semantic clusters",
          "Grouped clusters by project, location, property type, and buyer journey stage",
          "Defined content hierarchy prioritizing high-intent topics first",
        ],
        impact: "A scalable content map that connected every page to real search demand.",
      },
      {
        num: 3,
        title: "Programmatic page generation & deployment",
        bullets: [
          "Developed ~150 SEO-optimized pages across projects, locations, and property types",
          "Used AI-powered templates to maintain consistency in quality and technical SEO",
          "Deployed pages in controlled batches to monitor indexing and impact",
        ],
        impact: "A repeatable system that scales with every new development Harey Zahav launches.",
      },
      {
        num: 4,
        title: "Internal linking implementation",
        bullets: [
          "Built a strategic internal linking framework connecting project pages and location hubs",
          "Strengthened topical authority signals across the entire site",
          "Ensured crawlability and link equity distribution aligned with priority pages",
        ],
        impact: "Improved site architecture that reinforces organic rankings and supports long-term growth.",
      },
    ],
    results: [
      { value: "+145%", label: "Growth in organic traffic", description: "Driven by targeted, project-specific content covering key Israeli markets." },
      { value: "+170%", label: "Increase in organic impressions", description: "As semantic clusters expanded coverage across all query types." },
      { value: "~150", label: "SEO pages launched", description: "Across developments, locations, and buyer intent pages — built as a scalable system." },
      { value: "Top 10", label: "Rankings for high-intent keywords", description: "Harey Zahav now ranks on page one for competitive real estate terms." },
    ],
  },

  "nmbr-homes": {
    slug: "nmbr-homes",
    logo: "nmbr.homes",
    logoSrc: "/images/brand-nmbr.svg",
    tags: ["SEO", "PropTech", "Programmatic SEO"],
    title: "+210% organic traffic from a programmatic SEO engine built for multi-market real estate",
    about: {
      title: "About the client",
      description:
        "nmbr.homes is a real estate technology platform providing data-driven property valuations, market analytics, and investment insights across multiple geographic markets.",
      bullets: [
        "Limited organic visibility outside its initial market",
        "Manual location pages couldn't keep pace with expansion",
        "No structured SEO framework connecting research to content",
      ],
      metadata: [
        { label: "Industry", value: "PropTech, Real estate analytics" },
        { label: "Location", value: "Global" },
        { label: "Investors", value: "Private" },
      ],
    },
    testimonial: {
      quote:
        "Teamlex gave us the infrastructure to scale organic across markets we couldn't have reached manually. Every new location we enter now has a content system ready from day one.",
      authorName: "Evgeny Pisarev",
      authorRole: "Founder / nmbr.homes",
      authorImage: "/images/author-evgeny.png",
    },
    challenge: {
      intro:
        "nmbr.homes operated in a space where organic discovery is critical — buyers, investors, and agents search for property data by location, property type, and market condition. But the company had no system to capture this demand at scale.",
      points: [
        "Organic visibility was limited to one market — new regions had zero search presence",
        "Location-based SEO required individual keyword research and optimization for each market",
        "Established competitors dominated search with deep topical authority across major markets",
      ],
    },
    solution: {
      name: "Programmatic SEO for multi-market expansion",
      description:
        "Teamlex designed and deployed a Programmatic SEO system purpose-built for nmbr.homes' geographic expansion model — a scalable engine that maps search demand to locations, property types, and buyer intent.",
      capabilities: [
        {
          title: "Market-driven demand mapping",
          description:
            "Deep keyword research across target markets to identify location-specific search patterns, property-related queries, and investment-intent signals.",
        },
        {
          title: "Location-based page architecture",
          description:
            "Modular templates structured around cities, neighborhoods, property types, and market conditions — ensuring every page serves a clear search intent.",
        },
        {
          title: "Programmatic content generation",
          description:
            "AI-powered templates produce SEO-optimized location pages at scale, maintaining consistency in structure, data accuracy, and technical SEO standards.",
        },
        {
          title: "Strategic internal linking",
          description:
            "Cross-market internal linking framework connecting location pages, market overview hubs, and informational content to strengthen topical authority.",
        },
      ],
    },
    howWeDidIt: [
      {
        num: 1,
        title: "Market research & geographic opportunity mapping",
        bullets: [
          "Full landscape audit across target geographic markets to identify organic demand",
          "Analyzed search behavior patterns by location, property type, and buyer intent",
          "Mapped competitor presence and content gaps in each target region",
        ],
        impact: "A clear picture of where organic opportunity existed — and which markets to prioritize first.",
      },
      {
        num: 2,
        title: "Keyword clustering & content architecture",
        bullets: [
          "Organized thousands of location-specific keywords into structured semantic clusters",
          "Grouped clusters by market, property type, investment intent, and informational queries",
          "Defined a content hierarchy prioritizing high-volume, high-intent topics in each region",
        ],
        impact: "A scalable content map connecting every page to real search demand across markets.",
      },
      {
        num: 3,
        title: "Location-based page generation",
        bullets: [
          "Modular templates for city, neighborhood, property type, and market overview pages",
          "Generated and deployed pages in controlled batches per market, ensuring data accuracy",
          "Each page built with structured data, meta optimization, and localized content signals",
        ],
        impact: "Hundreds of high-quality location pages launched without sacrificing accuracy or consistency.",
      },
      {
        num: 4,
        title: "Programmatic SEO framework deployment",
        bullets: [
          "Repeatable system for entering new markets — from research to live pages in days",
          "Automated workflows for keyword discovery, template population, and quality assurance",
          "Continuous expansion as nmbr.homes enters new regions",
        ],
        impact: "A long-term organic growth engine that scales with the business — not against it.",
      },
      {
        num: 5,
        title: "Internal linking & authority building",
        bullets: [
          "Strategic internal linking connecting location pages to market hubs and informational content",
          "Strengthened topical authority signals across every target market",
          "Ensured crawlability and link equity distribution aligned with priority pages",
        ],
        impact: "Improved site architecture that reinforces organic rankings and supports multi-market growth.",
      },
    ],
    results: [
      { value: "+210%", label: "Growth in organic traffic", description: "Driven by systematic, location-specific content covering high-demand property and investment queries across regions." },
      { value: "+185%", label: "Increase in organic impressions", description: "As geographic coverage expanded across informational, commercial, and location-based queries." },
      { value: "500+", label: "SEO pages launched", description: "Across cities, neighborhoods, property types, and market overview pages — built as a scalable system." },
      { value: "12", label: "New markets covered", description: "Each new market entered with a full content infrastructure from day one, powered by programmatic SEO." },
    ],
  },
};

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const cs = slug ? caseStudies[slug] : undefined;

  if (!cs) {
    return <Navigate to="/case-studies" replace />;
  }

  return (
    <TalaPageLayout className="!bg-tala-10">
      {/* ═══ BACK BUTTON ═══ */}
      <section className="pt-6 md:pt-8">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10">
          <Link to="/case-studies" className="inline-flex items-center gap-3 group">
            <div className="w-[42px] h-[42px] rounded-pill border border-tala-90 flex items-center justify-center group-hover:bg-tala-100 group-hover:text-tala-0 transition-colors">
              <ArrowLeft size={20} />
            </div>
            <span className="font-headline font-medium text-body-m md:text-body-l text-tala-90">Back to cases</span>
          </Link>
        </div>
      </section>

      {/* ═══ CASE COVER ═══ */}
      <section className="pt-5 md:pt-6 pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10">
          <TalaCaseCover
            logo={
              cs.logoSrc ? (
                <img src={cs.logoSrc} alt={cs.logo} className={`h-8 w-auto ${cs.logoFlip ? "-scale-y-100" : ""} ${cs.logoMono ? "brightness-0 opacity-80" : ""}`} />
              ) : (
                <span className="font-headline font-bold text-[22px] text-tala-90">{cs.logo}</span>
              )
            }
            tags={cs.tags}
            title={cs.title}
          />
        </div>
      </section>

      {/* ═══ SIDEBAR + CONTENT ═══ */}
      <section className="pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-10 items-start">
            <div className="w-full lg:w-auto lg:sticky lg:top-[100px]">
              <TalaCaseSidebar
                title={cs.about.title}
                description={cs.about.description}
                bullets={cs.about.bullets}
                metadata={cs.about.metadata}
              />
            </div>

            <div className="flex-1 flex flex-col min-w-0 w-full">
              {/* Testimonial */}
              <TalaTestimonialCard
                variant="quote-block"
                quote={cs.testimonial.quote}
                authorName={cs.testimonial.authorName}
                authorRole={cs.testimonial.authorRole}
                authorImage={cs.testimonial.authorImage}
              />

              {/* The challenge */}
              <div className="mt-12 md:mt-16 lg:mt-20 flex flex-col gap-4 md:gap-5">
                <div className="flex items-center">
                  <h2 className="font-headline font-bold text-[28px] leading-[28px] md:text-[36px] md:leading-[34px] lg:text-[42px] lg:leading-[40px] text-tala-60">The challenge</h2>
                </div>
                <div className="bg-tala-0 rounded-[32px] md:rounded-[40px] p-6 md:p-10 flex flex-col gap-4 md:gap-5">
                  <p className="font-body text-[14px] leading-[18px] md:text-[16px] md:leading-[18px] text-tala-80">{cs.challenge.intro}</p>
                  <div className="flex flex-col">
                    {cs.challenge.points.map((point, i) => (
                      <div
                        key={i}
                        className="border border-tala-20 rounded-[28px] md:rounded-[40px] p-4 md:p-5 flex items-center gap-4 md:gap-5 mb-[-1px]"
                      >
                        <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-[60px] bg-tala-10 flex items-center justify-center">
                          <span className="font-headline font-medium text-[18px] md:text-[24px] leading-[26px] text-tala-90">
                            {i + 1}
                          </span>
                        </div>
                        <p className="font-headline font-medium text-[16px] leading-[22px] md:text-[20px] md:leading-[26px] lg:text-[24px] lg:leading-[28px] text-tala-90">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* The solution */}
              <div className="mt-12 md:mt-16 flex flex-col gap-4 md:gap-5">
                <h2 className="font-headline font-bold text-[28px] leading-[28px] md:text-[36px] md:leading-[34px] lg:text-[42px] lg:leading-[40px]">
                  <span className="text-tala-60">The solution — </span>
                  <span className="text-tala-100">{cs.solution.name}</span>
                </h2>
                <div className="bg-tala-0 rounded-[32px] md:rounded-[40px] p-6 md:p-10 flex flex-col gap-4 md:gap-5">
                  <p className="font-body text-[14px] leading-[18px] md:text-[16px] md:leading-[18px] text-tala-80">{cs.solution.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {cs.solution.capabilities.map((cap) => (
                      <div
                        key={cap.title}
                        className="border border-tala-20 rounded-[28px] md:rounded-[40px] px-6 py-5 md:px-8 md:py-6 flex flex-col gap-2 md:gap-3 mr-[-0.5px] mb-[-0.5px]"
                      >
                        <h4 className="font-body text-[20px] leading-[24px] md:text-[24px] md:leading-[28px] text-tala-100">{cap.title}</h4>
                        <p className="font-body text-[14px] leading-[18px] md:text-[16px] md:leading-[18px] text-tala-60">{cap.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* How we did it */}
              <div className="mt-12 md:mt-16 flex flex-col gap-3 md:gap-4">
                <h2 className="font-headline font-bold text-[28px] leading-[28px] md:text-[36px] md:leading-[34px] lg:text-[42px] lg:leading-[40px] text-tala-60 mb-2 md:mb-4">How we did it</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {cs.howWeDidIt.map((step) => (
                    <TalaStepCard
                      key={step.num}
                      step={step.num}
                      title={step.title}
                      bullets={step.bullets}
                      impact={step.impact}
                    />
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="mt-12 md:mt-16 flex flex-col gap-3 md:gap-4">
                <h2 className="font-headline font-bold text-[28px] leading-[28px] md:text-[36px] md:leading-[34px] lg:text-[42px] lg:leading-[40px] text-tala-60 mb-2 md:mb-4">Results</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                  {cs.results.map((stat) => (
                    <TalaStatCard
                      key={stat.value}
                      stat={stat.value}
                      label={stat.label}
                      description={stat.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TalaPageLayout>
  );
}
