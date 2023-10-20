import SanityImage from '@/components/image/sanity-image';

export const portableTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <SanityImage
          image={value}
          width={1200}
          className="my-8 text-center relative"
        />
      );
    },
  },
};
