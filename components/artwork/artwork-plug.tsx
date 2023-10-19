import Link from 'next/link';

import Avatar from '../avatar';
import Date from '../date';
import CoverImage from '../image/cover-image';

export default function ArtworkPlug({
  title,
  coverImage,
  date,
  bio,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} image={coverImage} />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <Date dateString={date} />
      </div>
      <p className="mb-4 text-lg leading-relaxed">{bio}</p>
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  );
}
