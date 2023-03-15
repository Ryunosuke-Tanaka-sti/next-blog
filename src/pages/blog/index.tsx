import { GetStaticProps } from 'next';

import { client } from '@/lib/microSMCClient';

import { BlogType } from '@/types/microCMS';

type Props = {
  blog: BlogType[];
};

const BlogPage = (props: Props) => {
  const { blog } = props;
  return (
    <main id="blog">
      <ul className="flex flex-row items-center">
        {blog.map((value) => (
          <h1 key={value.id}>
            {value.id} {value.title} {value.publishedAt.toLocaleString()}
            <a href={`blog/${value.id}`}>link</a>
          </h1>
        ))}
      </ul>
    </main>
  );
};
export default BlogPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.get({ endpoint: 'blogs' });
  return {
    props: {
      blog: data.contents,
    },
  };
};
