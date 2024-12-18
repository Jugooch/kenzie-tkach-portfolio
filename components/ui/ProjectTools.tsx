"use client";

interface ProjectToolsProps {
  tools: string[];
}

export function ProjectTools({ tools }: ProjectToolsProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-serif text-left">Tools Used</h3>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}