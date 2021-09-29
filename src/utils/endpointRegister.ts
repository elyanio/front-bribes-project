import querystring from "querystring";

// eslint-disable-next-line @typescript-eslint/naming-convention
enum endpointRegister {
  "get-bribes" = "get-bribes",
  "get-all-list" = "get-all-list",
  "list" = "list",
}

export default endpointRegister;


export const addParams = (path: string, params: querystring.ParsedUrlQueryInput) => {
  const paramsString = querystring.stringify(params);
  return `${path}?${paramsString}`;
};