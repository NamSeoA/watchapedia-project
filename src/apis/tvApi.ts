import axiosInstance from ".";

// 최신 프로그램
export const latestApi = () => axiosInstance.get('/tv/latest');

// 오늘 방영작
export const airingTodayApi = () => axiosInstance.get('/tv/airing_today');

// 생방송
export const onTheAirApi = () => axiosInstance.get('/tv/on_the_air');

// 인기 프로그램
export const popularApi = () => axiosInstance.get('/tv/popular');

// 프로그램 랭킹
export const topRatedApi = () => axiosInstance.get('/tv/top_rated');

// 프로그램 상세
export const detailApi = (tvId: string) => axiosInstance.get(`/tv/${tvId}`);

// 비슷한 프로그램
export const similarApi = (tvId: string) => axiosInstance.get(`/tv/${tvId}/similar`);

// 검색 
export const searchApi = (query: string) => axiosInstance.get(`/search/tv?query=${query}`)

