import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import NewListPage from "../components/pages/NewListPage";
import { CACHE_KEYS } from "../modules/cache/cacheKeys";
import { queryClient } from "../modules/cache/queryCLient";
import { useCrudBribesListMutation } from "../modules/mutations/mutations";
import {
  useBribesCountQuery,
  useGetListQuery,
} from "../modules/queries/queries";
import RoutesName from "../utils/routes";

function NewListPageContainer() {
  const { id } = useParams<{ id: string }>();
  const { data: listToEdit } = useGetListQuery({ id }, { enabled: !!id });
  const { push } = useHistory();
  const [n, setN] = useState<string>("");
  const [list, setList] = useState<number[]>([]);
  useEffect(() => {
    const edit = listToEdit?.q.split(", ") as any as number[] | undefined;
    setList(edit || []);
    setN(`${edit?.length}` || "0");
  }, [listToEdit?.q]);
  const { data, isLoading: loadingBribesCount } = useBribesCountQuery(
    { q: list },
    { enabled: !!list.length }
  );
  const { mutate, loading: loadingSaveBribes } = useCrudBribesListMutation();
  const onNChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setN(e.currentTarget.value);
  }, []);

  const onCreateList = useCallback(() => {
    if (isNaN(parseInt(n))) {
      setList([]);
      return;
    }
    setList(new Array(parseInt(n)).fill(0).map((m, i) => i + 1));
  }, [n]);

  const onListChange = useCallback((list: number[]) => {
    setList(list || []);
  }, []);

  const onSuccess = useCallback(() => {
    queryClient.invalidateQueries(CACHE_KEYS.all_BRIBES);
    push(RoutesName["/"]);
  }, [push]);

  const onSaveBribesList = useCallback(() => {
    mutate(
      {
        id,
        method: id ? "PATCH" : "POST",
        body: { q: list, result: `${data?.bribes}` },
      },
      { onSuccess }
    );
  }, [data?.bribes, id, list, mutate, onSuccess]);

  return (
    <NewListPage
      onNChange={onNChange}
      onCreateList={onCreateList}
      list={list}
      onListChange={onListChange}
      loadingBribesCount={loadingBribesCount}
      bribesCount={data?.bribes || 0}
      onSaveBribesList={onSaveBribesList}
      loadingSaveBribes={loadingSaveBribes}
      n={n}
    />
  );
}

export default NewListPageContainer;
