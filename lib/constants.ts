export type NavItem = {
  id: string;
  label: string;
  href: `#${string}`;
};

export type Feature = {
  title: string;
  description: string;
};

export type Step = {
  title: string;
  description: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export const NAV_ITEMS: NavItem[] = [
  { id: "features", label: "Features", href: "#features" },
  { id: "how", label: "How it works", href: "#how-it-works" },
  { id: "tracking", label: "Tracking", href: "#tracking" },
  { id: "pricing", label: "Pricing", href: "#pricing" },
  { id: "trust", label: "Trust & compliance", href: "#trust" },
  { id: "faq", label: "FAQ", href: "#faq" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const FEATURES: Feature[] = [
  {
    title: "Corporate pricing access",
    description:
      "Introduce corporate-level trade accounts where available—without disrupting your current wholesaler relationships.",
  },
  {
    title: "Price tracking & alerts",
    description:
      "Optional alerts for price changes on common lines so quotes and margins stay predictable.",
  },
  {
    title: "Standardized procurement view",
    description:
      "See supplier pricing, availability signals, and job-level notes in one place.",
  },
  {
    title: "Contractor-first onboarding",
    description:
      "A conservative review process designed to be wholesaler-safe and operationally simple.",
  },
];

export const STEPS: Step[] = [
  {
    title: "Request access",
    description:
      "Submit basic business details so we can confirm eligibility and fit.",
  },
  {
    title: "Connect suppliers",
    description:
      "List primary supplier(s). We help set up corporate-level trade access where available.",
  },
  {
    title: "Track & compare",
    description:
      "Monitor key items and categories, with optional price-change alerts.",
  },
  {
    title: "Use on live jobs",
    description:
      "Apply improved pricing where it helps; no lock-ins, no obligations.",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "Do I have to change wholesalers?",
    answer:
      "No. Affiliate Warehouse is designed to be wholesaler-safe. You keep your current relationships and choose when to use any improved pricing access.",
  },
  {
    question: "What does “No discount = no charge” mean?",
    answer:
      "If we don’t improve your pricing access in a way that helps your landed cost, there’s no performance fee.",
  },
  {
    question: "Is there a contract or minimum spend?",
    answer:
      "No lock-ins and no minimums. You stay in control of where you buy and when you use the service.",
  },
  {
    question: "How do price alerts work?",
    answer:
      "Alerts are optional. You can track specific lines or categories and receive notifications when pricing changes.",
  },
  {
    question: "Is this compliant for suppliers and wholesalers?",
    answer:
      "We take a conservative approach: no diversion, no public discount claims, and a review process aligned with standard trade account practices.",
  },
];

