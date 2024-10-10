import { PortableText, PortableTextComponents } from "@portabletext/react";

const customComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <img
        src={value.asset.url}
        alt={value.alt || "Image"}
        className="my-4 rounded-lg"
      />
    ),
  },
  block: {
    normal: ({ children }) => (
      <p className="my-2 text-base leading-relaxed">{children}</p>
    ),
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold my-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mt-8 my-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mt-8 my-3">{children}</h3>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => {
      const target = value.href.startsWith("http") ? "_blank" : undefined;
      return (
        <a
          href={value.href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="text-blue-500 underline hover:text-blue-700"
        >
          {children}
        </a>
      );
    },
  },
};

const RichContentBlock = ({ content }) => {
  return (
    <div className="font-sans">
      <PortableText value={content} components={customComponents} />
    </div>
  );
};

export default RichContentBlock;
