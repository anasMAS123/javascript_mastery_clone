import { groq } from "next-sanity";
import { readClient } from "./lib/client";
import { buildQuery } from "./utils";

interface GetResourcesParams {
  query: string;
  category: string;
  page: string;
}
export const getResourcesPlaylist = async () => {
  try {
    const getResourcesPlaylist = await readClient.fetch(
      groq`*[_type == "resourcePlaylist"]{
      _id , 
      title , 
      resources[0...6]->{
      title,
      downloadLink , 
      "image":poster.asset ->url ,
      views ,
      slug,
      category,
        }
      }`
    );

    return getResourcesPlaylist;
  } catch (error) {}
};

export const getResources = async (params: GetResourcesParams) => {
  const { query, category, page } = params;

  try {
    const resources =
      await readClient.fetch(groq`${buildQuery({ type: "resource", query, category, page: parseInt(page) })}{
    title,
    _id , 
    downloadLink , 
    "image":poster.asset ->url,
    views,
    slug,
    category
    }`);

    return resources;
  } catch (error) {}
};
