import React from 'react';
import { 
  Cpu, 
  Building2, 
  Zap, 
  Factory, 
  Stethoscope, 
  MonitorPlay, 
  Box, 
  Code2, 
  Terminal, 
  Shapes, 
  Layers, 
  Glasses, 
  Gamepad2 
} from 'lucide-react';

export const SERVICES = [
  { 
    title: "Interactive Product Showcases", 
    useCase: "Complex products are difficult to explain — leading to lost deals and confusion.",
    solution: "Interactive, real-time 3D experiences that let customers explore features and components.",
    result: "Higher engagement, clearer understanding, and faster purchase decisions.",
    icon: <MonitorPlay /> 
  },
  { 
    title: "Heavy Machinery Training", 
    useCase: "Training operators on real equipment is risky and expensive.",
    solution: "Physics-based simulations for safe, hands-on training.",
    result: "Reduced errors, lower training costs, and improved operational safety.",
    icon: <Factory /> 
  },
  { 
    title: "Surgical & Healthcare", 
    useCase: "Medical training requires precision without real-world risk.",
    solution: "High-fidelity simulation environments for procedures and device training.",
    result: "Better preparedness, improved accuracy, and safer outcomes.",
    icon: <Stethoscope /> 
  },
  { 
    title: "Digital Twins & AEC", 
    useCase: "Stakeholders struggle to visualize projects before construction.",
    solution: "Real-time walkthroughs and digital twins for immersive project exploration.",
    result: "Faster approvals, better communication, and improved client confidence.",
    icon: <Building2 /> 
  },
  { 
    title: "AI Training Sandboxes", 
    useCase: "AI systems require controlled environments for training and testing.",
    solution: "Simulated 3D environments for training autonomous systems and models.",
    result: "Faster and cost-efficient development cycles. Safer real-world deployment.",
    icon: <Cpu /> 
  },
  { 
    title: "Energy & Smart Utilities", 
    useCase: "Complex infrastructure systems are difficult to monitor and optimize.",
    solution: "Interactive visualization tools for energy networks and smart systems.",
    result: "Improved decision-making, efficiency, reduced cost, and system reliability.",
    icon: <Zap /> 
  }
];

export const TECH_ECOSYSTEM = [
  {
    category: "CORE ENGINES",
    items: [
      { name: "Unity 3D", desc: "Enables real-time interactive experiences across devices.", expertise: "9+ Years Mastered", icon: <Box /> },
      { name: "Unreal Engine 5", desc: "High-fidelity visualization for premium product experiences", expertise: "Expert Level", icon: <Gamepad2 /> }
    ]
  },
  {
    category: "GRAPHICS & SIMULATION",
    items: [
      { name: "Blender", desc: "High-quality 3D asset creation for realistic visuals and videos.", expertise: "Advanced Pipeline", icon: <Shapes /> },
      { name: "HLSL & Compute Shaders", desc: "GPU-accelerated physics and advanced rendering pipelines.", expertise: "Low-level Mastery", icon: <Zap /> }
    ]
  },
  {
    category: "INTELLIGENCE & LOGIC",
    items: [
      { name: "C++ / C# / .NET", desc: "Architecture for robust backend systems and modular logic.", expertise: "Enterprise Grade", icon: <Code2 /> },
      { name: "Python", desc: "Powers AI-driven simulations and intelligent systems.", expertise: "AI & Automation", icon: <Terminal /> }
    ]
  },
  {
    category: "INFRASTRUCTURE & HARDWARE",
    items: [
      { name: "XR Hardwares", desc: "Native integration for Meta Quest, HTC Vive, and AR platforms.", expertise: "Multi-device Sync", icon: <Glasses /> },
      { name: "Cross-Platform Deploy", desc: "Optimized deployment for Mobile, PC, Web, and Console.", expertise: "Global Scale", icon: <Layers /> }
    ]
  }
];

export const PROJECTS = [
  { 
    id: "interactive-product-showcases", 
    title: "Interactive Product Showcases", 
    cat: "Interactive Product Showcases", 
    video: "/videos/AIandProductDemo_Website.webm",
    desc: "Convert More Buyers. Replace flat 2D photos with immersive 3D sandboxes. Let customers explore your product in real-time, from features to internal components, directly on their device. No explanation needed.",
    secondaryDesc: "This interactive product showcase is a reference implementation of how complex products can be sold more effectively— turning complexity into clarity to drive faster decisions and accelerating sales.",
    tags: ["Photorealistic Rendering", "UX Architecture", "Cross Platform", "Interactive"],
    detail: {
      heroVideo: "/videos/ProductShowCase1.webm",
      proofVideo: "/videos/ProductShowCase7.webm",
      proofImages: [
        "/Images/productshowcase_iphone.jpg",
        "/Images/productshowcase_swatch.jpg"
      ],
      heroTitle: "Increase Product Conversions by Turning Browsing into Interactive Buying Experiences",
      heroSub: "This interactive product showcase is a reference implementation of how complex products can be sold more effectively— turning complexity into clarity to drive faster decisions and accelerating sales.",
      credibilityBadges: [
        "DRIVES HIGHER CONVERSIONS",
        "REMOVES BUYING FRICTION",
        "INTERACTIVE SHOWCASE READY"
      ],
      problemTitle: "Most product pages fail at the most critical moment—decision-making.",
      problemPunchline: "“You’re losing conversions not because of the product—but because of how it’s presented.”",
      pains: [
        "Customers are expected to buy without fully understanding how the product works",
        "Static visuals create uncertainty and hesitation, especially for complex products",
        "Lack of interaction leads to low engagement and early drop-offs",
        "Products appear interchangeable, making price the only differentiator"
      ],
      solutionTitle: "We shifted the buying experience from passive viewing → active exploration.",
      solutionSub: "• Understand functionality instantly without explanation\n• Build confidence through direct interaction\n• Explore the product at their own pace\n\nThe result is a smoother transition from:\nInterest → Understanding → Decision",
      beforePoints: [
        "Passive viewing of static visuals",
        "Buying uncertainty and hesitation",
        "Low engagement and early drop-offs",
        "Price-driven competition"
      ],
      afterPoints: [
        "Active product exploration",
        "Higher purchase confidence",
        "Increased engagement and time on page",
        "Premium product value and differentiation"
      ],
      impactTitle: "This directly impacts conversion rates, engagement, and revenue efficiency.",
      impactSubHeader: "Based on industry benchmarks from similar interactive showcase deployments",
      impactSub: "More conversions from the same traffic. Shorter decision cycles. Higher perceived product value.",
      impact: [
        { label: "Product Engagement", value: "20–40% Increase" },
        { label: "Conversion Rates", value: "Higher" },
        { label: "Customer Confidence", value: "Improved" }
      ],
      useCaseFitDesc: "Built for consumer product companies and complex product manufacturers looking to remove friction from the buying process and increase ROI from existing traffic.",
      useCaseFit: [
        "Consumer product companies",
        "Complex product manufacturers",
        "E-commerce brands with high-value items",
        "Teams looking to increase conversions"
      ],
      highlights: [
        "Converts passive browsing into active product exploration",
        "Reduces hesitation and improves purchase confidence",
        "Increases engagement and time spent on product pages",
        "Strengthens differentiation in competitive markets",
        "Drives higher ROI from existing marketing traffic"
      ],
      softAuthorityText: "Built to demonstrate how interactive product showcases can help teams turn product interest into purchase decisions faster.",
      ctaTitle: "Turn Product Interest into Purchase Decisions. <br /> <span class=\"text-brand-primary\">Convert with Confidence.</span>",
      ctaSub: "We help you remove friction from the buying process—so customers understand faster, engage deeper, and convert with confidence."
    }
  },
  { 
    id: "ai-training-simulations", 
    title: "AI and Training Simulations", 
    cat: "AI and Training Simulations", 
    video: "/videos/Training_Website.webm",
    desc: "Eliminate Human Error — Reduce training risks and onboarding costs with zero-risk simulations.",
    secondaryDesc: "This crane simulation is a production-grade industry prototype designed for real-world training— enabling faster training, lower operational risk, and operator readiness without dependence on physical equipment.",
    tags: ["AI Training", "Simulation", "Heavy Machinery", "Healthcare", "Procedure Validation"],
    detail: {
      heroVideo: "/videos/HeavyMachine_CaseStudy1.webm",
      proofVideo: "/videos/HeavyMachine_CaseStudy2l.webm",
      proofImages: [
        "/Images/sim_img1.webp",
        "/Images/sim_img2.webp"
      ],
      heroTitle: "Reduce Training Errors & Operational Risk Without Using Real Equipment",
      heroSub: "This crane simulation is a production-grade industry prototype designed for real-world training— enabling faster training, lower operational risk, and operator readiness without dependence on physical equipment.",
      credibilityBadges: [
        "Built using real-world systems",
        "Designed for industrial environments",
        "Prototype Demo Ready"
      ],
      problemTitle: "Training crane operators comes with unavoidable trade-offs",
      problemPunchline: "\"You either slow training—or accept higher risk.\"",
      pains: [
        "Real-world practice introduces risk of costly mistakes and safety incidents",
        "Limited machine availability slows down training throughput",
        "New operators often enter job sites underprepared for high-pressure scenarios",
        "Every training mistake has real financial and operational consequences"
      ],
      solutionTitle: "We built a simulation-first training approach that removes this trade-off.",
      solutionSub: "We replace traditional, high-risk training methods with photorealistic, physics-based simulations that allow for infinite repetition in a safe, controlled environment.",
      beforePoints: [
        "Expensive machine downtime",
        "High risk of equipment damage",
        "Limited trainee throughput"
      ],
      afterPoints: [
        "Zero-risk training environment",
        "Infinite repetition at zero cost",
        "Scalable across global teams"
      ],
      impactTitle: "Why This Matters",
      impactSubHeader: "Based on industry benchmarks from similar simulation deployments",
      impactSub: "Safer teams. Faster deployment. Lower financial risk.",
      impact: [
        { label: "Reduction in Training Errors", value: "30–50%" },
        { label: "Faster Onboarding Time", value: "Up to 40%" },
        { label: "Equipment Damage and Costly On-Site Errors", value: "Reduced" }
      ],
      useCaseFitDesc: "Our simulation systems are designed for organizations that manage high-value assets and high-risk operations where traditional training is either too slow, too expensive, or too dangerous.",
      useCaseFit: [
        "Mid-sized construction firms scaling operations",
        "Government training institutes managing large trainee batches",
        "Organizations dealing with high-risk equipment and environments"
      ],
      highlights: [
        "Safer training without real-world consequences",
        "Faster operator readiness and deployment",
        "Scalable training without dependency on physical machines",
        "Consistent learning through repeatable scenarios",
        "Reduced cost and operational risk"
      ],
      softAuthorityText: "Built as a working prototype to demonstrate real-world training transformation — based on real industrial workflows.",
      ctaTitle: "Train Faster. Reduce Risk. <br /> <span class=\"text-brand-primary\">Deploy with Confidence.</span>",
      ctaSub: "We help you validate and deploy simulation-based training systems in 7–14 days."
    }
  },
  { 
    id: "architectural-visualization", 
    title: "Architectural Visualization", 
    cat: "Architectural Visualization", 
    video: "/videos/ArchiViz_Website.webm",
    desc: "Sell the Vision, Faster. Photorealistic VR walkthroughs that allow stakeholders to navigate buildings in real-time. Close deals before the first brick is laid.",
    secondaryDesc: "We developed an interactive 3D visualization capability demonstration to help builders, architects, and interior designers secure faster approvals, eliminate client confusion, and reduce late-stage design changes.",
    tags: ["ArchiViz", "Real-Time Walkthrough", "Digital Twin", "VR", "Large Scale Environment"],
    detail: {
      heroVideo: "/videos/ArchiViz_CaseStudy1.webm",
      proofVideo: "/videos/ArchiViz_CaseStudy2.webm",
      proofImages: [
        "/Images/ArchViz_Pic1.webp",
        "/Images/ArchViz_Pic2.webp"
      ],
      heroTitle: "Close Property Deals Faster & Reduce Costly Design Revisions Before Construction",
      heroSub: "We developed an interactive 3D visualization capability demonstration to help builders, architects, and interior designers secure faster approvals, eliminate client confusion, and reduce late-stage design changes.",
      credibilityBadges: [
        "ACCELERATES CLIENT DECISION-MAKING",
        "REDUCES REVISION RISK",
        "INTERACTIVE EXPERIENCE READY"
      ],
      problemTitle: "Pre-selling or validating a space before it exists creates friction across the entire pipeline.",
      problemPunchline: "“Let Clients Experience the Space Before It’s Built”",
      pains: [
        "Buyers struggle to confidently commit based on static images and floor plans",
        "Misunderstandings around layout and scale lead to late-stage design changes",
        "Approval cycles drag due to lack of clarity and back-and-forth discussions",
        "Every delay impacts cash flow, timelines, and project momentum"
      ],
      solutionTitle: "We shifted the process from visualization → experience.",
      solutionSub: "• Understand the space instantly—no interpretation required\n• Make faster, more confident decisions early\n• Identify costly gaps before they impact execution\n\nThe result is a smoother path from concept → approval → execution.",
      beforePoints: [
        "Costly downtime during design and approvals",
        "High risk of late-stage changes",
        "Slow decision-making due to unclear visualization",
        "Limited client confidence and engagement"
      ],
      afterPoints: [
        "Faster approvals with higher client confidence",
        "Reduced design revisions and rework costs",
        "Clear, experience-driven decision-making",
        "Smoother project flow from planning to execution"
      ],
      impactTitle: "This directly impacts both revenue velocity and project efficiency.",
      impactSubHeader: "Based on industry benchmarks from similar interactive deployments",
      impactSub: "Faster sales cycles. Fewer costly changes. Stronger client trust.",
      impact: [
        { label: "Faster Deal Closures", value: "20–35%" },
        { label: "Costly Design Revisions and Rework", value: "Reduced" },
        { label: "quicker decision-making", value: "Higher buyer confidence" }
      ],
      useCaseFitDesc: "Built for teams selling or validating spaces before they exist—where clarity, speed, and decision confidence directly impact revenue and timelines.",
      useCaseFit: [
        "Builders and real estate developers",
        "Architects and design firms",
        "Interior designers and renovation teams",
        "Teams managing high-value projects"
      ],
      highlights: [
        "Faster client decision-making and approvals",
        "Reduced design friction and revision cycles",
        "Improved clarity before construction begins",
        "Lower financial risk from late-stage changes",
        "Better alignment between stakeholders",
        "Fewer costly changes during execution",
        "Stronger client trust and satisfaction"
      ],
      softAuthorityText: "Built to demonstrate how interactive experiences can help teams sell, validate, and finalize projects faster—before construction begins.",
      ctaTitle: "Accelerate Sales. Reduce Revisions. <br /> <span class=\"text-brand-primary\">Deliver with Confidence.</span>",
      ctaSub: "We transform complex projects into interactive experiences—so clients understand faster, decide sooner, and move forward with confidence."
    }
  },
  { 
    id: "interactive-systems-architecture", 
    title: "Interactive Systems Architecture", 
    cat: "INTERACTIVE & DYNAMIC SYSTEMS ARCHITECTURE", 
    video: "/videos/InteractiveSystemShowcase_Website.mp4",
    desc: "Build Once. Perform Everywhere. Deliver Faster.",
    secondaryDesc: "We developed a structured delivery capability demonstration to help tech, industrial, and product companies launch high-quality interactive demos and training environments faster—without compromising performance or scalability.",
    tags: ["Systems Architecture", "Performance Optimization", "Cross Platform", "Scalable Delivery", "Interactive Systems"],
    detail: {
      heroVideo: "/videos/InteractiveSystem_CaseStudy1.webm",
      proofVideo: "/videos/InteractiveSystem_CaseStudy.mp4",
      proofImages: [
        "/Images/InteractiveSystem_CaseStudyPic1.webp",
        "/Images/InteractiveSystem_CaseStudyPic2.webp"
      ],
      heroTitle: "Deliver High-Quality Interactive Experiences Faster—Without Performance Trade-offs",
      heroSub: "We developed a structured delivery capability demonstration to help tech, industrial, and product companies launch high-quality interactive demos and training environments faster—without compromising performance or scalability.",
      credibilityBadges: [
        "FASTER PROJECT DELIVERY",
        "CONSISTENT PERFORMANCE",
        "SCALABLE ARCHITECTURE"
      ],
      problemTitle: "Most interactive projects break down where it matters most—real-world usage.",
      problemPunchline: "“Delayed launches, inconsistent experiences, and wasted development effort.”",
      pains: [
        "Experiences look impressive but fail to run smoothly on target devices",
        "Performance issues lead to drop-offs, frustration, and reduced engagement",
        "Teams spend excessive time fixing optimization issues late in development",
        "Separate builds for different platforms increase cost, time, and complexity"
      ],
      solutionTitle: "We redesigned the delivery approach around one principle: Performance, quality, and scalability must work together—not compete.",
      solutionSub: "Instead of fixing issues at the end, we ensure every experience is built to:\n• Run smoothly across devices from day one\n• Maintain visual quality without sacrificing performance\n• Scale across platforms without rebuilding\n\nThis shifts the process from reactive optimization to predictable delivery.",
      beforePoints: [
        "Delays caused by performance issues",
        "Limited device compatibility",
        "High rework across platforms",
        "Inconsistent user experience"
      ],
      afterPoints: [
        "Faster and more predictable project delivery",
        "Smooth performance across devices",
        "Single build deployed across multiple platforms",
        "Consistent experience for all users"
      ],
      impactTitle: "This directly impacts speed, scalability, and return on investment.",
      impactSubHeader: "Based on industry benchmarks from similar deployments",
      impactSub: "Launch faster without compromising quality. Reach more users with a single solution. Deliver consistent, reliable experiences at scale.",
      impact: [
        { label: "Rework Reduction", value: "30–50%" },
        { label: "Time-to-Market", value: "Faster" },
        { label: "Device Reach", value: "Broader" }
      ],
      useCaseFitDesc: "Built for industrial and product companies looking to launch high-quality interactive demos and training environments at scale.",
      useCaseFit: [
        "Industrial and manufacturing firms",
        "Product companies with global reach",
        "Teams requiring high-performance interactive tools"
      ],
      highlights: [
        "Faster delivery with fewer delays and rework",
        "Consistent performance across devices",
        "Scalable deployment from a single build",
        "Improved user experience and engagement",
        "Reduced cost and development complexity"
      ],
      softAuthorityText: "Built to demonstrate how a structured delivery approach can help teams launch high-quality interactive experiences faster—without performance trade-offs.",
      ctaTitle: "Build Once. Perform Everywhere. <br /> <span class=\"text-brand-primary\">Deliver Faster.</span>",
      ctaSub: "We help you deliver high-quality interactive systems that launch faster, perform reliably, and scale effortlessly."
    }
  }
];
