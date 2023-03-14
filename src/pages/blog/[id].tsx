import { GetStaticPaths, GetStaticProps } from 'next';

import { client } from '@/lib/microSMCClient';

import { BlogType } from '@/types/microCMS';

type Props = {
  blog: BlogType;
};

const BlogContentPage = (props: Props) => {
  const { blog } = props;
  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt.toLocaleString()}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.content}`,
        }}
      />
    </main>
  );
};
export default BlogContentPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blogs' });
  console.log(data);
  console.log('xxxxxxxxxxxxxxxxxxxxx');

  const paths = data.contents.map((content: any) => `/blog/${content.id}`);
  console.log(paths);

  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps<Props> = async (context: any) => {
  const id = context.params.id;
  console.log('xxxxxxxxxxx');

  console.log(id);
  console.log('xxxxxxxxxxxxxxxx');

  const data = await client.get({ endpoint: 'blogs', contentId: id });
  console.log(data as BlogType);

  return {
    props: {
      blog: data,
    },
  };
};
