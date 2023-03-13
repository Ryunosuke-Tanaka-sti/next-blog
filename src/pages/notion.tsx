import { getPageContentChildren } from "@/hooks/useNotion";
import { GetPageResponse } from "@notionhq/client/build/src/api-endpoints";

export default function NotionPage({ data }: { data: GetPageResponse }) {
  console.log(data);

  return (
    <>
      notion page
      <div>{JSON.stringify(data)}</div>
    </>
  );
}

export const getStaticProps = async () => {
  //   const result = await getPageContent({
  //     pageId: "7687b9eb2c0e4296b02e8114941184a7",
  //   });
  const result = await getPageContentChildren({
    pageId: "7687b9eb2c0e4296b02e8114941184a7",
  });

  return {
    props: {
      data: result,
    },
  };
};
// https://www.notion.so/Tailwind-Visual-Studio-Code-Browser-Sync-7687b9eb2c0e4296b02e8114941184a7?pvs=4
