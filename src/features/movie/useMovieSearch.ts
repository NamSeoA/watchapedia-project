// custom Hook

import { useQuery } from "react-query";
import { searchApi } from "../../apis/movieApi";
import { ListResponse, Movie } from "../../types";
import { AxiosError, AxiosResponse } from "axios";

const useMovieSearch = (query: string) => {
    // 세번째 인자로 둔 이유 {enabled: Boolean(query)} : search keyword가 있을 때만 useMovieSearch hook 동작
    return useQuery<AxiosResponse<ListResponse<Movie>>, AxiosError>(['searchMovie', query], ()=> searchApi(query), { enabled: Boolean(query) });
}

export default useMovieSearch;