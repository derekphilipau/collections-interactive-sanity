import markdownStyles from "../markdown-styles.module.css";
import { PortableText } from "@portabletext/react";

export default function ArtworkBody({ description }) {
  return (
    <div className={`max-w-2xl mx-auto ${markdownStyles.markdown}`}>
      <PortableText value={description} />
    </div>
  );
}
