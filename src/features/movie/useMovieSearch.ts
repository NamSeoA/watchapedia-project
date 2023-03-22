// custom Hook
import { useQuery } from "react-query";
import { searchApi } from "../../apis/movieApi";
import { ListResponse, Movie } from "../../types";
import { AxiosError, AxiosResponse } from "axios";

const useMovieSearch = (query: string) => {
    
    const queryFn = () => searchApi(query);

    // 세번째 인자로 둔 이유 {enabled: Boolean(query)} : search keyword가 있을 때만 useMovieSearch hook 동작
    const { isLoading, isError, data } = useQuery<AxiosResponse<ListResponse<Movie>>, AxiosError>(['searchMovie', query], queryFn, { enabled: Boolean(query) })

    return {
      isLoading,
      isError,
      data: data?.data
    }
    
}

export default useMovieSearch;