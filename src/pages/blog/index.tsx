import { GetStaticProps } from 'next';

import { client } from '@/lib/microSMCClient';

import { BlogType } from '@/types/microCMS';

type Props = {
  blog: BlogType[];
};

const BlogPage = (props: Props) => {
  const { blog } = props;
  return (
    <>
      <ul>
        {blog.map((value) => (
          <li key={value.id}>
            {value.id} {value.title} {value.publishedAt.toLocaleString()}
            <a href={`blog/${value.id}`}>link</a>
          </li>
        ))}
      </ul>
    </>
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
