import {
  GithubIcon, Linkedin01Icon, Mail01Icon, InstagramIcon, YoutubeIcon, NewTwitterIcon
} from 'hugeicons-react';

export const portfolioData = {
  hero: {
    name: "Bhrigu Kumar Deka",
    title: "Dexter",
    pronunciation: "( vreé-goo )",
    roles: ["UI UX Designer", "Frontend Developer"],
    description: [
      "Bridging the gap between creativity and functionality to bring ideas to life through human-centered design and clean code."
    ],
    profileImage: "/images/profile/profile2.png",
    profileVideo: "/videos/profile-video.webm",
    cvLink: "/CV/BHRIGU KUMAR DEKA.pdf",
    socials: [
      { name: "Email", icon: Mail01Icon, link: "mailto:vrigukumar710@email.com" },
      { name: "GitHub", icon: GithubIcon, link: "https://github.com/BhriguKumarDeka" },
      { name: "LinkedIn", icon: Linkedin01Icon, link: "https://www.linkedin.com/in/bhrigukumardeka/" },
      { name: "X", icon: NewTwitterIcon, link: "https://x.com/Dexterwithspecs" },
      { name: "Instagram", icon: InstagramIcon, link: "https://www.instagram.com/jolpaan/" },
      { name: "YouTube", icon: YoutubeIcon, link: "https://www.youtube.com/@dexv2602" },
    ]
  },
  projects: [
    {
      id: 'dimlight',
      slug: 'dimlight',
      title: 'DimLight',
      description: 'AI Sleep Monitor & Wellness App',
      fullDescription: 'DimLight is a comprehensive wellness solution designed to help users understand and improve their sleep patterns. By leveraging AI, the app provides personalized insights based on sleep data, helping users identify trends and make informed changes to their lifestyle. The app also features a suite of relaxation tools, including guided breathing exercises and ambient soundscapes, to create the perfect environment for sleep.',
      features: [
        'AI Analysis: Advanced sleep tracking and personalized insights',
        'Breathing Tools: Guided exercises to lower stress before bed',
        'Soundscapes: High-fidelity ambient audio environments',
        'Journaling: Track long-term wellness improvements'
      ],
      techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express.js', 'MongoDB'],
      videoUrl: 'https://youtu.be/zstXil5LhA0?si=iLe_8riC_oqzqKuB',
      link: 'https://www.dimlight.space',
      year: '2025',
      image: '/images/projects/DimlightOgImage.png',
      category: 'Web Projects',
    },
    {
      id: 'orders',
      slug: 'orders',
      title: 'Orders',
      description: 'Unified Order Management App',
      fullDescription: 'Orders simplifies the complex landscape of online shopping by aggregating data from various e-commerce platforms. Users can track all their purchases, manage return windows, and receive notifications for shipping updates in a single, intuitive interface. This eliminates the need to check multiple apps and websites, providing a streamlined experience for the modern consumer.',
      features: [
        'Unified Tracking: View orders from all major e-commerce platforms',
        'Return Logic: Stay notified about expiring return windows',
        'Smart Notifications: Real-time updates on shipping and delivery',
        'History Vault: Access your complete purchase history instantly',
        'Fast Filter: Search through thousands of orders with ease'
      ],
      techStack: ['Figma', 'Balsamiq', 'Miro', 'Prototyping', 'User Interviews'],
      figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F0Ym2EXSxhoravrc2XL7vYM%2FOrders%3Fpage-id%3D350%253A8003%26node-id%3D350-8004%26viewport%3D133%252C292%252C0.3%26t%3DOj4hKskcTb7VC5kl-1%26scaling%3Dcontain%26content-scaling%3Dfixed',
      link: 'https://www.figma.com/proto/0Ym2EXSxhoravrc2XL7vYM/Orders?page-id=350%3A8003&node-id=350-8004&viewport=133%2C292%2C0.3&t=Oj4hKskcTb7VC5kl-1&scaling=contain&content-scaling=fixed',
      year: '2025',
      image: '/images/projects/OrdersOgImage.png',
      category: 'UI Projects',
    },
    {
      id: 'archon',
      slug: 'archon',
      title: 'Archon',
      description: 'RAG based Policy Assistant',
      fullDescription: 'Archon was developed for the Smart India Hackathon (SIH) to solve the challenge of navigating complex government policies. By using Retrieval-Augmented Generation (RAG), it allows users to ask natural language questions and receive precise answers backed by official documents. It simplifies legal jargon and provides a direct path to understanding one\'s rights and responsibilities.',
      features: [
        'RAG Search: Semantic search across thousands of legal papers',
        'Amendment Tracker: Real-time alerts for policy changes',
        'Language Simplifier: Turns legal jargon into plain English',
        'Doc Verification: Blockchain-backed document source checking',
        'Admin Portal: Centralized dashboard for policy management'
      ],
      techStack: ['RAG', 'Vector', 'OpenAI API', 'React', 'LangChain'],
      link: 'https://www.figma.com/proto/GGStlrHc9eBRQHqR5lxvKz/SIH?page-id=2%3A11&node-id=70-118&viewport=1270%2C-514%2C0.2&t=d3bRQRokhmUtkRay-1&scaling=contain&content-scaling=fixed',
      year: '2025',
      image: '/images/projects/ArchonOgImage.png',
      category: 'Web Projects',
    },
    {
      id: 'swallet',
      slug: 'swallet',
      title: 'SWallet',
      description: 'Personal Digital Wallet App',
      fullDescription: 'SWallet is a highly secure digital vault for all your sensitive information. Beyond just payments, it stores identification, membership cards, and sensitive notes with enterprise-grade encryption. The focus is on a friction-less user experience without compromising on security, allowing for quick access when you need it most.',
      features: [
        'Secure Vault: Military-grade encryption for personal data',
        'Biometrics: Fast and secure access via fingerprint or face ID',
        'Card Sync: Seamless integration with Apple and Google Wallets',
        'Document Scanner: High-resolution scanning for digital IDs',
        'Subscription Guard: Keep track of all recurring payments'
      ],
      techStack: ['Figma', 'Prototyping', 'User Interviews'],
      figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F7gXCW0TG77wj6dVdm0ZafX%2FSWallet%3Fpage-id%3D142%253A1181%26node-id%3D346-2685%26viewport%3D183%252C-194%252C0.1%26t%3DkxeO3FBzaNwddIbP-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D346%253A2685',
      link: 'https://www.figma.com/proto/7gXCW0TG77wj6dVdm0ZafX/SWallet?page-id=142%3A1181&node-id=346-2685&viewport=183%2C-194%2C0.1&t=kxeO3FBzaNwddIbP-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=346%3A2685',
      year: '2025',
      image: '/images/projects/SWalletOgImage.png',
      category: 'UI Projects',
    },
    {
      id: 'flow-by-spotify',
      slug: 'flow-by-spotify',
      title: 'Flow by Spotify',
      description: 'Productivity & Well-Being App',
      fullDescription: 'Flow is an experimental extension of the Spotify ecosystem that bridges the gap between entertainment and productivity. It creates personalized soundscapes based on your task intensity and emotional state, helping users enter and stay in a "flow state". The project involved deep user research into the psychology of deep work and audio stimulus.',
      features: [
        'Flow Engine: AI-generated soundscapes that react to focus',
        'Task Sync: Pomodoro-style cycles integrated with audio',
        'Focus Timer: Progressive audio feedback for work sessions',
        'Well-being Stats: Detailed analytics on your productivity trends',
        'Library Integration: Access your full Spotify history and favorites'
      ],
      techStack: ['Figma', 'Design Thinking', 'User-Research', 'Adobe Photoshop'],
      figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FoVU35kRPdNWYNAR7iFUDvm%2FFlow%3Fpage-id%3D0%253A1%26node-id%3D46-119%26viewport%3D152%252C77%252C0.34%26t%3DXldlV1rAlDgYm9er-1%26scaling%3Dscale-down-width%26content-scaling%3Dfixed',
      link: 'https://www.figma.com/proto/oVU35kRPdNWYNAR7iFUDvm/Flow?page-id=0%3A1&node-id=46-119&viewport=152%2C77%2C0.34&t=XldlV1rAlDgYm9er-1&scaling=scale-down-width&content-scaling=fixed',
      year: '2025',
      image: '/images/projects/HeroImageFlow.png',
      category: 'Case Studies',
    },
    {
      id: 'nyaysaathi',
      slug: 'nyaysaathi',
      title: 'NyaySaathi',
      description: 'Legal AI Chatbot',
      fullDescription: 'NyaySaathi aims to democratize legal information in India. The platform provides easy-to-understand explanations of legal processes, rights, and legal aid options. With an AI-powered assistant, users can get initial guidance on common legal issues and be directed to professional help if needed, bridging the accessibility gap in the justice system.',
      features: [
        'AI Assistant: 24/7 multi-lingual guidance for common legal issues',
        'Resource Library: Comprehensive guides translated for readability',
        'Clinic Finder: Geo-located legal aid centers and clinics',
        'Rights Awareness: Interactive modules on fundamental legal rights',
        'Status Tracking: Simple interface to monitor legal proceedings'
      ],
      techStack: ['Figma', 'UI Design', 'Prototyping', 'User Research'],
      figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FNaFzrjQb1OIvc0roDdvEcQ%2FNyaySaathi%3Fpage-id%3D0%253A1%26node-id%3D213-50%26viewport%3D-257%252C-263%252C0.22%26t%3DjKeLC5t3A7XsTSa2-1%26scaling%3Dmin-zoom%26content-scaling%3Dfixed',
      link: 'https://www.figma.com/proto/NaFzrjQb1OIvc0roDdvEcQ/NyaySaathi?page-id=0%3A1&node-id=213-50&viewport=-257%2C-263%2C0.22&t=jKeLC5t3A7XsTSa2-1&scaling=min-zoom&content-scaling=fixed',
      year: '2025',
      image: '/images/projects/NyaySaathiOgImage.png',
      category: 'UI Projects',
    }, {
      id: 'wishgrid',
      slug: 'wishgrid',
      title: 'WishGrid',
      description: 'Wishlist Management Web App',
      fullDescription: 'WishGrid is a utility-focused application for compulsive shoppers and planners. It provides a clean, grid-based interface to save items from across the web. The key feature is the ability to export and analyze data, helping users make better financial decisions by seeing their potential spending in a structured format.',
      features: [
        'Grid View: Highly visual bookmarking for all your desires',
        'CSV Export: One-click export for financial analysis',
        'Price Tracking: Monitor price drops and availability changes',
        'Collaboration: Share entire wishlists with friends and family',
        'Smart Search: Instant filtering by category or price point'
      ],
      techStack: ['Vanilla JS', 'Tailwind CSS', 'PHP', 'MySQL'],
      videoUrl: 'https://youtu.be/fZntk46hxl8?si=29THjtd-JeJznDNP',
      link: 'https://github.com/BhriguKumarDeka/WishGrid',
      year: '2025',
      image: '/images/projects/WishgridOgImage.png',
      category: 'Web Projects',
    }
  ],
  experience: [
    {
      role: 'Graphic Designer',
      company: 'Cisco Student Club',
      period: '2024 - 2025',
      description: 'Created visually engaging graphics and managed social media content to enhance club visibility and engagement among students.',
      technologies: ['Figma', 'Adobe Photoshop', 'Inkscape']
    },
    {
      role: 'Freelance Graphic Designer',
      company: 'Freelance',
      period: '2021 - 2023',
      description: 'Designed Creatives for various clients including logos, brochures, and social media content. Made Spotify album cover arts and YouTube thumbnails',
      technologies: ['Adobe Photoshop', 'Inkscape', 'Blender']
    }
  ],

  //custom svg from folder public/images/icons
  skills: [
    { name: 'Figma', Icon: '/images/icons/Figma.svg' },
    { name: 'CSS', Icon: '/images/icons/CSS3.svg' },
    { name: 'Tailwind', Icon: '/images/icons/Tailwind CSS.svg' },
    { name: 'Motion', Icon: '/images/icons/Motion.svg' },
    { name: 'JS', Icon: '/images/icons/JavaScript.svg' },
    { name: 'React', Icon: '/images/icons/React.svg' },
    { name: 'Node', Icon: '/images/icons/Node.js.svg' },
    { name: 'Git', Icon: '/images/icons/Git.svg' },
    { name: 'Postman', Icon: '/images/icons/Postman.svg' },
    { name: 'C++', Icon: '/images/icons/C++.svg' },
    { name: 'Python', Icon: '/images/icons/Python.svg' },
    { name: 'MongoDB', Icon: '/images/icons/MongoDB.svg' },
    { name: 'SQL', Icon: '/images/icons/SQL Developer.svg' },
    { name: 'AWS', Icon: '/images/icons/AWS.svg' },
    { name: 'Docker', Icon: '/images/icons/Docker.svg' },
    { name: 'Kubernetes', Icon: '/images/icons/Kubernetes.svg' },
    { name: 'Jenkins', Icon: '/images/icons/Jenkins.svg' },
    { name: 'Apache Tomcat', Icon: '/images/icons/Apache Tomcat.svg' },
    { name: 'PhotoShop', Icon: '/images/icons/Adobe Photoshop.svg' },
    { name: 'Blender', Icon: '/images/icons/Blender.svg' },
    { name: 'Lottie', Icon: '/images/icons/Lottie.svg' },
  ],
  footer: {
    year: new Date().getFullYear(),
    text: "All rights reserved.",
    love: "Built with love by Bhrigu Kumar Deka"
  }
};
