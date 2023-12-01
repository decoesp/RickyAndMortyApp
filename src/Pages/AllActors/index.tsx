import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import CardLists from '../CardLists';

interface Character {
  id: string;
  name: string;
  image: string;
  status: string;
  gender: string;
}

interface PageInfo {
  pages: number;
  count: number;
  next: number | null;
  prev: number | null;
}

interface CharactersData {
  characters: {
    info: PageInfo;
    results: Character[];
  };
}

const GET_ALL_ACTORS = gql`
  query($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        pages
        count
        next
        prev
      }
      results {
        id
        name
        image
        status
        gender
      }
    }
  }
`;

function AllActors() {
    const { data, loading, fetchMore } = useQuery<CharactersData>(GET_ALL_ACTORS, {
        variables: { page: 1, filter: {} }
      });
    
      const [nextPBtn, setNextPBtn] = useState<number | null>(1);
      const [allActors, setAllActors] = useState<Character[]>([]);
    
      useEffect(() => {
        if (data) {
          setNextPBtn(data.characters.info.next);
          setAllActors(data.characters.results);
        }
      }, [data]);

      
  const nextPageFun = () => {
    fetchMore({
      variables: { page: nextPBtn, filter: {} },
      updateQuery: (_prevResult, { fetchMoreResult }) => {
        return fetchMoreResult as CharactersData;
      }
    });
  };

  const prevPageFun = () => {
    fetchMore({
      variables: { page: data?.characters.info.prev, filter: {} },
      updateQuery: (_prevResult, { fetchMoreResult }) => {
        return fetchMoreResult as CharactersData;
      }
    });
  };

  useEffect(() => {
    if (data) {
      setNextPBtn(data.characters.info.next);
      setAllActors(data.characters.results);
    }
  }, [data]);

  return (
    <>
      <div className="container">
        {!allActors.length ? (
          <h2>Data is fetching....</h2>
        ) : (
          allActors.map((individualActor, iValue) => (
            <CardLists key={iValue} actor={individualActor} />
          ))
        )}
      </div>
      <div className="paginationBtns">
        <button disabled={nextPBtn !== null && nextPBtn > 2 ? false : true} onClick={prevPageFun} className="buttons">
          Prev Page
        </button>
        <button onClick={nextPageFun} className="buttons">
          Next Page
        </button>
      </div>
    </>
  );
}

export default AllActors;
