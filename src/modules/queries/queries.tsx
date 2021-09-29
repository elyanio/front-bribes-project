import { useQuery, UseQueryOptions } from "react-query";
import endpointRegister, { addParams } from "../../utils/endpointRegister";
import fetchCreator from "../../utils/fetchCreator";
import { CACHE_KEYS } from "../cache/cacheKeys";

export const fetchBribesCount = (list: Definitions.NumberList) =>
  fetchCreator({
    path: addParams(endpointRegister["get-bribes"], list),
    method: "GET",
  });

export const useBribesCountQuery = (
  params: Definitions.NumberList,
  argsQuery?: UseQueryOptions<Definitions.Bribes, Error, Definitions.Bribes>
) =>
  useQuery<Definitions.Bribes, Error, Definitions.Bribes>(
    [CACHE_KEYS.BRIBES_COUNT, params],
    () => fetchBribesCount(params),
    {
      ...argsQuery,
    }
  );

export const fetchAllList = () =>
  fetchCreator({
    path: endpointRegister["get-all-list"],
    method: "GET",
  });

export const useGetAllListQuery = (
  argsQuery?: UseQueryOptions<Definitions.List[], Error, Definitions.List[]>
) =>
  useQuery<Definitions.List[], Error, Definitions.List[]>(
    [CACHE_KEYS.all_BRIBES],
    () => fetchAllList(),
    {
      ...argsQuery,
    }
  );

export const fetchList = ({ id }: { id?: string }) =>
  fetchCreator({
    path: `${endpointRegister["list"]}/${id}`,
    method: "GET",
  });

export const useGetListQuery = (
  params: { id?: string },
  argsQuery?: UseQueryOptions<Definitions.List, Error, Definitions.List>
) =>
  useQuery<Definitions.List, Error, Definitions.List>(
    [CACHE_KEYS.GET_BRIBES, params],
    () => fetchList(params),
    {
      ...argsQuery,
    }
  );
