import { useMutation } from "react-query";
import endpointRegister from "../../utils/endpointRegister";
import fetchCreator from "../../utils/fetchCreator";

type CrudList = {
  body?: Definitions.NumberList;
  method: ApiNameSpace.Method;
  id?: string;
};

export const crudBribesList = ({ body, method, id }: CrudList) =>
  fetchCreator({
    path: `${endpointRegister["list"]}${id ? `/${id}` : ""}`,
    method,
    body,
  });

export const useCrudBribesListMutation = () => {
  const {
    data,
    error,
    isLoading: loading,
    mutate,
  } = useMutation<Definitions.NumberList, Error, CrudList>(crudBribesList);
  return { loading, data, error, mutate };
};
