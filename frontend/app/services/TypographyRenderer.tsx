import React from "react";

interface ContentBlock {
  subtitle?: string;
  content: string[];
}

interface TypographyRendererProps {
  title: string;
  blocks: ContentBlock[];
}

const TypographyRenderer: React.FC<TypographyRendererProps> = ({ title, blocks }) => {
  return (
    <div className="space-y-8 pb-[90px]">
      <h2 className="italic text-[24px] sm:text-[28px] lg:text-[35px] font-extrabold leading-tight text-center mt-2">{title}</h2>

      {blocks.map((block, index) => (
        <div key={index} className="space-y-4">
          {block.subtitle && (
            <h3 className="text-xl font-semibold">{block.subtitle}</h3>
          )}
          {block.content.map((paragraph, idx) => (
            <p key={idx} className="text-lg text-gray-800">
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TypographyRenderer;