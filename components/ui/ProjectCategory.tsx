"use client";

interface ProjectCategoryProps {
  category: string;
}

export function ProjectCategory({ category }: ProjectCategoryProps) {
  return (
    <span className="inline-flex px-3 py-1 text-sm font-medium text-muted-foreground bg-muted rounded-full self-start order-first">
      {category}
    </span>
  );
}