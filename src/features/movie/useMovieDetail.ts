import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { detailApi } from '../../apis/movieApi';
import { MovieDetail } from '../../types';

const useMovieDetail = (id: string) => {

    //query function
    const queryFn = () => detailApi(id);

    return useQuery<AxiosResponse<MovieDetail>, AxiosError>(['movieDetail', id], queryFn)
}

export default useMovieDetail;