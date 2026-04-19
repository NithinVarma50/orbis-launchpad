import { Mail, Twitter, Github } from "lucide-react";

type Props = {
  orientation?: "vertical" | "horizontal";
  className?: string;
};

const icons = [
  { Icon: Mail, label: "Email" },
  { Icon: Twitter, label: "Twitter" },
  { Icon: Github, label: "Github" },
];

const SocialIcons = ({ orientation = "vertical", className = "" }: Props) => {
  return (
    <div
      className={`flex ${orientation === "vertical" ? "flex-col" : "flex-row"} gap-3 ${className}`}
    >
      {icons.map(({ Icon, label }) => (
        <a
          key={label}
          href="#"
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
