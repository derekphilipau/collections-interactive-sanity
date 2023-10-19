import { PortableText } from '@portabletext/react';

export default function ArtworkBody({ description }) {
  return (
    <div className="max-w-2xl mx-auto">
      <PortableText value={description} />
    </div>
  );
}
