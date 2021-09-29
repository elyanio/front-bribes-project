
const fetchCreator = async ({
  path,
  body,
  method,
}: ApiNameSpace.FetchCreatorArgs) => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    mode: "no-cors"
  } as Record<string, string>;

  const options = {
    method,
    headers,
  } as RequestInit;

  if (body) {
    options.body = JSON.stringify(body);
  }

  const fullPath = `${process.env.REACT_APP_API_BASIC_URL}${path}`;

  const response = await fetch(fullPath, options);
  const jsonRes = await response.json();
  return jsonRes;

};

export default fetchCreator;
