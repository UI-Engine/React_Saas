// Landing.tsx
import React from "react";
import { Card, Button, Badge } from "flowbite-react";
import { FaGithub, FaReact } from "react-icons/fa";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Zap } from "lucide-react";

const features = [
  {
    title: "Modular Components",
    description:
      "Pre-built, customizable UI elements that accelerate development and ensure consistency across your app.",
    icon: "box",
  },
  {
    title: "Built-in Theming",
    description:
      "Light & dark modes out of the box, powered by CSS variables—no extra work needed to delight your users.",
    icon: "moon-stars",
  },
  {
    title: "Responsive & Accessible",
    description:
      "Mobile-first design with WCAG-compliant contrast ratios, so everyone can use your product anywhere.",
    icon: "device-mobile",
  },
  {
    title: "Open-Source & Extensible",
    description:
      "Community-driven code that you can fork, extend, or integrate—save thousands of lines by standing on our shoulders.",
    icon: "code",
  },
];

const todos = [
  "🛠️ Form Elements (inputs, selects, toggles)",
  "📊 Data Tables & Charts",
  "🔔 Notifications & Toasts",
  "👥 Auth & User Management",
  "📦 Package & Publishing Workflow",
  "📝 Editor, Canvas & Workflow Designer",
];

const techStack = [
  {
    name: "React",
    icon: <FaReact size={40} className="tech-icon text-blue-500" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={40} className="tech-icon text-blue-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={40} className="tech-icon text-teal-400" />,
  },
  {
    name: "HTML5",
    icon: <SiHtml5 size={40} className="tech-icon text-orange-500" />,
  },
  {
    name: "CSS3",
    icon: <SiCss3 size={40} className="tech-icon text-blue-300" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={40} className="tech-icon text-yellow-400" />,
  },
  {
    name: "Lucide Icons",
    icon: <Zap size={40} className="tech-icon text-indigo-500" />,
  },
];

const Landing: React.FC = () => (
  <div className="space-y-20 p-8 max-w-6xl mx-auto">
    {/* 0. Overview Section */}
    <section className="space-y-4 text-center">
      <h1 className="text-5xl font-extrabold">SaaS UI Engine</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
        SaaS UI Engine is a thoughtfully crafted React & Tailwind template that
        bundles production-ready components, flexible theming, and best-practice
        patterns into a single, open-source toolkit. Designed by developers for
        developers, it reduces boilerplate so your team can focus on business
        logic and ship faster.
      </p>
      <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Featuring comprehensive documentation, TypeScript support, and seamless
        integration with Flowbite React, SaaS UI Engine is built to scale with
        your product—whether you’re a bootstrapped startup or an enterprise
        team.
      </p>
    </section>

    {/* 1. Hero & Feature Grid */}
    <section className="space-y-8">
      <h2 className="text-3xl font-semibold text-center">Key Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <Card
            key={f.title}
            className="border hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center space-x-3">
              <Badge icon={f.icon as any} size="lg" />
              <h3 className="text-xl font-semibold">{f.title}</h3>
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
              {f.description}
            </p>
          </Card>
        ))}
      </div>
    </section>

    {/* 2. Tech Stack Animation */}
    <section className="space-y-6 text-center w-full">
      <h2 className="text-3xl font-semibold text-primary">Our Tech Stack</h2>
      <div className="tech-marquee overflow-hidden">
        <div className="tech-marquee-inner flex gap-16">
          {[...techStack, ...techStack].map((tech, idx) => (
            <div
              key={idx}
              className="tech-card flex flex-col items-center space-y-2"
            >
              {tech.icon}
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 3. About & Benefits */}
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold text-center">
        Why Choose This Template?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-white dark:bg-gray-800">
          <h4 className="text-lg font-medium">Rapid Development</h4>
          <p className="mt-1 text-gray-600 dark:text-gray-300 text-sm">
            Get started in minutes with pre-configured layouts, authentication
            flows, and utility classes that conform to a consistent design
            system.
          </p>
        </Card>
        <Card className="bg-white dark:bg-gray-800">
          <h4 className="text-lg font-medium">Customizable Themes</h4>
          <p className="mt-1 text-gray-600 dark:text-gray-300 text-sm">
            Tweak colors, spacing, and typography via CSS variables or Tailwind
            config to match your brand without diving deep into CSS.
          </p>
        </Card>
        <Card className="bg-white dark:bg-gray-800">
          <h4 className="text-lg font-medium">Community & Support</h4>
          <p className="mt-1 text-gray-600 dark:text-gray-300 text-sm">
            Join an active open-source community on GitHub—report issues, submit
            PRs, and discuss best practices with other SaaS builders.
          </p>
        </Card>
        <Card className="bg-white dark:bg-gray-800">
          <h4 className="text-lg font-medium">Production Ready</h4>
          <p className="mt-1 text-gray-600 dark:text-gray-300 text-sm">
            All components are unit-tested, accessible, and optimized for
            performance so you can confidently deploy to production.
          </p>
        </Card>
      </div>
    </section>

    {/* 4. TODO & Contribution */}
    <section className="space-y-8 text-center">
      <h2 className="text-3xl font-semibold">Roadmap & Contribution</h2>
      <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
        Help us build out the remaining core components—pick a card to get
        started:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {todos.map((item) => (
          <Card
            key={item}
            className="cursor-pointer hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
              {item}
            </h3>
          </Card>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <Button
          as="a"
          href="https://github.com/UI-Engine/React_Saas"
          target="_blank"
          rel="noopener noreferrer"
          color="gray"
          className="relative overflow-hidden inline-flex items-center space-x-2 px-6 py-3 rounded-md group"
        >
          <FaGithub
            size={20}
            className="transition-colors duration-200 group-hover:text-white"
          />
          <span className=" transition-colors duration-200 group-hover:text-white">
            Contribute on GitHub
          </span>
          {/* Continuous Shine effect */}
          <span className="absolute inset-0 bg-white opacity-20 blur-md transform -translate-x-full animate-[shine_2s_ease-in-out_infinite]"></span>
        </Button>
      </div>
    </section>

    {/* 4. End Goal */}
    <section className="space-y-4 text-center">
      <h2 className="text-3xl font-semibold">Our Vision</h2>
      <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
        To enable developers to build and ship SaaS products effortlessly by
        providing a complete, modular UI foundation—so you can focus on
        innovation, not infrastructure.
      </p>
      <div className=" flex justify-center">
        <Button color="primary">Get Started — It’s Free</Button>
      </div>
    </section>
  </div>
);

export default Landing;
