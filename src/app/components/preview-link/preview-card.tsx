/* eslint-disable @next/next/no-img-element */
import { LinkPreview } from ".";
import {
  LinkPreviewCard,
  PreviewDescription,
  PreviewImage,
  PreviewUrl,
} from "./styled";

export const PreviewCard = ({
  linkData,
  coords,
}: {
  linkData: LinkPreview;
  coords: { x: number; y: number };
}) => {
  const { images, title, url, description } = linkData;
  return (
    <LinkPreviewCard
      style={{
        top: coords.y + 10,
        left: coords.x + 10,
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
    >
      {images[0] ? <PreviewImage src={images[0]} alt={title} /> : null}
      <PreviewUrl>{url}</PreviewUrl>
      <PreviewDescription>{description}</PreviewDescription>
    </LinkPreviewCard>
  );
};
