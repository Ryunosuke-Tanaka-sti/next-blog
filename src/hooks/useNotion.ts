import { Client } from "@notionhq/client";
import {
  GetPageResponse,
  ListBlockChildrenResponse,
} from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

export const getPageContent = async ({
  pageId,
}: {
  pageId: string;
}): Promise<GetPageResponse> => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};
export const getPageContentChildren = async ({
  pageId,
}: {
  pageId: string;
}): Promise<ListBlockChildrenResponse> => {
  const response = await notion.blocks.children.list({ block_id: pageId });

  //   const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

// export const useNotoin = () => {
//   const notion = new Client({
//     auth: process.env.NOTION_SECRET,
//   });

//   const getPageContent = async ({
//     pageId = "",
//   }: {
//     pageId: string;
//   }): Promise<GetPageResponse> => {
//     const response = await notion.pages.retrieve({ page_id: pageId });
//     return response;
//   };
//   return { getPageContent };
// };
