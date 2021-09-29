import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import MainPage from "../components/pages/MainPage";
import { CACHE_KEYS } from "../modules/cache/cacheKeys";
import { queryClient } from "../modules/cache/queryCLient";
import { useCrudBribesListMutation } from "../modules/mutations/mutations";
import { useGetAllListQuery } from "../modules/queries/queries";
import RoutesName from "../utils/routes";

function MainPageContainer() {
  const { push } = useHistory();
  const { data, isLoading: loadingAllBribes } = useGetAllListQuery({
    useErrorBoundary: true,
  });
  const { mutate, loading: loadingDelete } = useCrudBribesListMutation();
  const [list, setList] = useState(data || []);
  useEffect(() => {
    setList(data || []);
  }, [data]);
  const onListChange = useCallback((list: Definitions.List[]) => {
    setList(list || []);
  }, []);
  const onSuccess = useCallback(() => {
    queryClient.invalidateQueries(CACHE_KEYS.all_BRIBES);
  }, []);
  const onDelete = useCallback(
    (id?: number) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();
      mutate({ id: `${id}`, method: "DELETE" }, { onSuccess });
    },
    [mutate, onSuccess]
  );
  const onItemClick = useCallback(
    (id?: number) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (e.defaultPrevented) {
        return;
      }
      push(`${RoutesName["/edit-list"]}/${id}`);
    },
    [push]
  );

  return (
    <MainPage
      list={list}
      onListChange={onListChange}
      loadingAllBribes={loadingAllBribes}
      onDelete={onDelete}
      loadingDelete={loadingDelete}
      onItemClick={onItemClick}
    />
  );
}

export default MainPageContainer;
