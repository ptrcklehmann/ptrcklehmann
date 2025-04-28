/* eslint-disable @next/next/no-img-element */
import { LinkPreview } from ".";
import {
  LinkPreviewCard,
  PreviewDescription,
  PreviewImage,
  PreviewUrl,
} from "./styled";

export const PreviewCard = ({
    linkPreviewData,
    coords,
}: {
    linkPreviewData: LinkPreview;
    coords: { x: number; y: number };
}) => {
  const { images, title, description } = linkPreviewData;
  let customTitle = title === 'Google Maps' ? "Lehmann's farm" : title;
  return (
      <LinkPreviewCard
          style={{
              top: coords.y,
              left: coords.x,
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
      >
          {images && images[0] ? <PreviewImage src={images[0]} alt={title} /> : null}
          <PreviewUrl>{customTitle}</PreviewUrl>
          <PreviewDescription>{description}</PreviewDescription>
      </LinkPreviewCard>
  );
};
