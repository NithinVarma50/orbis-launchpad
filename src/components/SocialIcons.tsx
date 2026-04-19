import { Mail, Globe, Github } from "lucide-react";

type Props = {
  orientation?: "vertical" | "horizontal";
  className?: string;
};

const icons = [
  { Icon: Mail, label: "Email", href: "mailto:varmanithin029@gmail.com" },
  { Icon: Globe, label: "Portfolio", href: "https://pixelprophett-portfolio.vercel.app" },
  { Icon: Github, label: "Github", href: "https://github.com/NithinVarma50" },
];

const SocialIcons = ({ orientation = "vertical", className = "" }: Props) => {
  return (
    <div
      className={`flex ${orientation === "vertical" ? "flex-col" : "flex-row"} gap-3 ${className}`}
    >
      {icons.map(({ Icon, label, href }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={label}
          className="liquid-glass rounded-[1rem] w-14 h-14 flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          <Icon className="w-5 h-5 text-cream" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
