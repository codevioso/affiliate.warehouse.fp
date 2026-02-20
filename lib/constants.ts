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
  { id: "fees", label: "Fees & incentives", href: "#fees" },
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
    question: "What wholesaler accounts do I get access to?",
    answer:
      "Where available, preferred contractors can get access to trade accounts such as TradeZone, Ideal Electrical, and Voltex. Access depends on supplier approval and terms.",
  },
  {
    question: "How does Affiliate Warehouse make money?",
    answer:
      "Affiliate Warehouse retains 1.1% of verified discount only. There is no fee when there is no discount.",
  },
  {
    question: "Am I locked in?",
    answer:
      "No. There are no contracts or lock-ins. Participation is voluntary and you can stop using the service at any time.",
  },
  {
    question: "How do I know pricing is improving?",
    answer:
      "You can compare against your original trade accounts. Side-by-side visibility lets you see the difference on the same products and suppliers.",
  },
  {
    question: "Is this compliant with supplier systems?",
    answer:
      "Yes — same backend access and traceability. All purchases remain job-coded, fully traceable, and processed through normal wholesaler channels.",
  },
  {
    question: "What if it stops being useful?",
    answer:
      "Stop using it at any time. There are no lock-ins or minimums.",
  },
  {
    question: "How are better prices achieved?",
    answer:
      "Through aggregated purchasing volume across our independent preferred contractors nationally. Volume and consistency can support access to pricing tiers that benefit both contractors and suppliers, within existing wholesaler systems.",
  },
];

