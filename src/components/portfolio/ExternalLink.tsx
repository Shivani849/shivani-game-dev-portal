import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

export function ExternalLink({ href, onClick, children, rel, target, ...props }: ExternalLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented) {
      return;
    }

    const isWebUrl = /^https?:\/\//i.test(href);

    if (!isWebUrl) {
      return;
    }

    event.preventDefault();

    if (typeof window !== "undefined") {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <a
      {...props}
      href={href}
      target={target ?? "_blank"}
      rel={rel ?? "noreferrer noopener"}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}