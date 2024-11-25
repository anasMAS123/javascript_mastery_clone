import qs from "query-string";

interface BuildQueryParams {
  type: string;
  query: string;
  category: string;
  page: number;
  perPage?: number;
}

export function buildQuery(params: BuildQueryParams) {
  const { type, query, category, page = 1, perPage = 10 } = params;

  const conditions = [`*[_type=="${type}"`];

  if (query) conditions.push(`title match "*${query}*"`);

  if (category && category !== "all")
    conditions.push(`category == "${category}"`);

  const offset = (page - 1) * perPage;
  const limit = perPage;

  return conditions.length > 1
    ? `${conditions[0]} && (${conditions
        .slice(1)
        .join(" && ")})][${offset}...${limit}]`
    : `${conditions[0]}][${offset}...${limit}]`;
}

//this has nothing to do with sanity but i will write it here
interface URLQueryParams {
  params: string;
  key?: string;
  value?: string | null;
  keysToRemove?: string[];
}
export function formURLQuery({
  params,
  key,
  value,
  keysToRemove,
}: URLQueryParams) {
  //get the params which initially will be empty array{}
  //it is important to check your previous url parameters no to delete smth by wrong
  const currentURL = qs.parse(params);

  // if there is keyToRemove array loop over it and delete these keys from keyToRemove
  if (keysToRemove) {
    keysToRemove.forEach((keyToRemove) => {
      delete currentURL[keyToRemove];
    });
  }
  // update your search parameters by adding new one
  if (key && value) {
    currentURL[key] = value;
  }

  // return merged url the base current one + your queries/parameters
  //{ skipNull: true }: This option tells the function to ignore any query parameters with null values, so they don’t appear in the final URL
  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentURL,
    },
    { skipNull: true }
  );
}
