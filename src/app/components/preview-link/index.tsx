/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import { LinkPreviewCard } from "./styled";

type HoverPreviewLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  label: string;
};

export function HoverPreviewLink({ label, ...props }: HoverPreviewLinkProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [showPreview, setShowPreview] = useState(false);
  const [linkData, setLinkData] = useState<any>(null);

  const handleMouseEnter = async () => {
    setShowPreview(true);
    console.log("props.href", props.href);
    try {
      const response = await fetch(
        `/api/link-preview?url=${props.href as string}`
      );
      const data = await response.json();
      setLinkData(data);
    } catch (err) {
      console.error("Failed to fetch link preview:", err);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setShowPreview(false);
  };

  console.log("linkData", linkData);

  return (
    <>
      <Link
        href={props.href as string}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        {...props}
      >
        {label}
      </Link>

      {showPreview && linkData && (
        <LinkPreviewCard
          style={{
            top: coords.y + 10,
            left: coords.x + 10,
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
        >
          {linkData.images?.[0] && (
            <img
              src={linkData.images[0]}
              alt="Preview"
              style={{ width: "70%", height: "auto", marginBottom: "0.5rem" }}
            />
          )}
          <span
            style={{
              fontWeight: "bold",
              fontSize: "1rem",
              marginBottom: "0.25rem",
            }}
          >
            {linkData.url}
          </span>
          <div style={{ fontSize: "0.9rem" }}>{linkData.description}</div>
        </LinkPreviewCard>
      )}
    </>
  );
}
