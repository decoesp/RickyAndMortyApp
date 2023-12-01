import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';

interface Character {
  name: string;
  gender: string;
  status: string;
  image: string;
  created: string;
  species: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
    type: string;
  };
}

interface CharacterData {
  character: Character;
}

interface CharacterVars {
  id: string;
}

const GET_SINGLE_ACTOR = gql`
  query($id: ID!) {
    character(id: $id) {
      name
      gender
      status
      image
      created
      species
      origin {
        name
      }
      location {
        name
        type
      }
    }
  }
`;

function IndividualActor() {
  let { actorId } = useParams<{ actorId: string }>();
  let { data, loading } = useQuery<CharacterData, CharacterVars>(GET_SINGLE_ACTOR, { variables: { id: actorId } });

  if (loading) {
    return <h3>Loading Data</h3>;
  }

  return (
    <>
    <Link to="/">Voltar</Link>
      {data ? (
        <div className='actorBox'>
          <div className='imgSide'>
            <img src={data.character.image} alt="" />
            <h1>{data.character.name}</h1>
          </div>
          <div className='detailSide'>
            <div>
              <h3>Status: <span style={data.character.status === "Alive" ? { color: 'green' } : data.character.status === "Dead" ? { color: 'red' } : { color: 'gray' }}>{data.character.status}</span> </h3>
              <h3>Gender: {data.character.gender}</h3>
              <h3>Species: {data.character.species}</h3>
              <h4>Origin: {data.character.origin.name} </h4>
              <h4>Location Type: {data.character.location.type}</h4>
              <h4>Created On: {moment(data.character.created).format('MM-DD-YYYY - HH:mm')}</h4>
              <h5>Last seen location: {data.character.location.name} </h5>
            </div>
          </div>
        </div>
      ) : (
        <p>Fetching data for the clicked item.....</p>
      )}
    </>
  );
}

export default IndividualActor;
