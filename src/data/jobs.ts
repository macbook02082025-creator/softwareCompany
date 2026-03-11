export interface Job {
  id: string;
  title: string;
  dept: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export const jobs: Job[] = [
  {
    id: "staff-infra",
    title: "Staff Infrastructure Engineer",
    dept: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "₹2.4Cr – ₹3.2Cr + Equity",
    description: "Lead the design and evolution of our global edge-compute platform. You will be responsible for systems that handle 50M+ events daily with ultra-low latency.",
    requirements: [
      "10+ years of experience in distributed systems.",
      "Expert-level knowledge of Kubernetes, Terraform, and AWS/GCP.",
      "Proficiency in Go or Rust.",
      "Proven track record of building planet-scale infrastructure."
    ],
    responsibilities: [
      "Architect and implement multi-region failover strategies.",
      "Set technical standards for the global infrastructure team.",
      "Optimize P99 latency across all core services.",
      "Ensure SOC-2 compliance at the system level."
    ]
  },
  {
    id: "principal-ml",
    title: "Principal ML Engineer — LLM Systems",
    dept: "AI / ML",
    location: "Remote",
    type: "Full-time",
    salary: "₹2.6Cr – ₹3.8Cr + Equity",
    description: "Define the architecture for our LLM orchestration layer. You'll work on cutting-edge RAG pipelines and custom fine-tuning workflows.",
    requirements: [
      "Extensive experience with PyTorch or JAX.",
      "Deep understanding of Transformer architectures.",
      "Experience deploying large-scale models in production.",
      "PhD or equivalent research experience in Computer Science."
    ],
    responsibilities: [
      "Lead development of proprietary LLM orchestration frameworks.",
      "Design high-throughput inference pipelines.",
      "Integrate emerging AI research into production products.",
      "Optimize model performance and reduce token costs."
    ]
  },
  {
    id: "lead-designer",
    title: "Lead Product Designer",
    dept: "Product Design",
    location: "Remote",
    type: "Full-time",
    salary: "₹1.8Cr – ₹2.4Cr + Equity",
    description: "Own the visual and interactive identity of our flagship products. We seek a designer who lives at the intersection of aesthetic precision and functional clarity.",
    requirements: [
      "8+ years of experience in digital product design.",
      "Mastery of Figma and high-fidelity prototyping tools.",
      "Strong portfolio showcasing complex system design.",
      "Experience leading design sprints and mentoring."
    ],
    responsibilities: [
      "Define and maintain the Nexus design system.",
      "Work closely with engineering for pixel-perfect implementation.",
      "Conduct user research and translate findings into UI.",
      "Drive creative direction for new product initiatives."
    ]
  }
];
