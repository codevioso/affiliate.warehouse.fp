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
  { id: "how", label: "How it works", href: "#how-it-works" },
  { id: "tracking", label: "Tracking", href: "#tracking" },
  { id: "pricing", label: "Pricing", href: "#pricing" },
  { id: "faq", label: "FAQ", href: "#faq" },
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
    title: "Participate together",
    description:
      "Rather than purchasing separately through individual accounts, preferred contractors may purchase through our national corporate accounts. Aggregated purchasing volumes may enable access to pricing structures typically available to larger operators, subject to supplier approval and terms.",
  },
  {
    title: "Order through wholesaler access",
    description:
      "Contractors order as normal through Affiliate Warehouse-enabled wholesaler access.",
  },
  {
    title: "Optional price alerts",
    description:
      "Optional email alerts notify users when prices increase or decrease compared to prior purchases.",
  },
  {
    title: "Compare pricing anytime",
    description:
      "Pricing can be compared at any time against their original trade accounts.",
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

