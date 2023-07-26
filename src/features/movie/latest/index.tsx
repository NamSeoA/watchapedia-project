import React from "react";
import styled from "@emotion/styled";

import useLatestMovie from './useLatestMovie';
import Card from '../../../components/Card';

const Base = styled.div`
  margin-bottom: 42px;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;

const LatestMovieSection: React.FC = () => {
  const { data: latestMovieResponse, isLoading } = useLatestMovie();
    
  const getYear = (release_date: string) => release_date.split('-')[0] || '';

  return (
    <Base>
      <Title>최근 개봉작</Title>
      {
        isLoading ? (
          <div>Loading...</div>
        ) : (
          // Optional Chaining, Short-Circuit Evaluation
          // latestMovieResponse?.data가 null 또는 undefined가 아니면서 해당 객체의 data 프로퍼티가 truthy 값인 경우에만 괄호 안의 코드가 실행
          latestMovieResponse?.data && (
            <Card
              key={latestMovieResponse.data.id}
              linkUrl={`/movie/${latestMovieResponse.data.id}`}
              title={latestMovieResponse.data.title}
              posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${latestMovieResponse.data.poster_path}`}
              voteAverage={latestMovieResponse.data.vote_average}
              year={getYear(latestMovieResponse.data.release_date)}
            />
          )
        )
      }
    </Base>
  )
}

export default LatestMovieSection;