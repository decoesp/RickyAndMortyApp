import React from 'react';
import { Link } from 'react-router-dom';

interface Actor {
  id: string;
  name: string;
  image: string;
  gender: string;
  status: string;
}

interface CardListsProps {
  actor: Actor;
}

const CardLists: React.FC<CardListsProps> = ({ actor }) => {
  return (
    <div className="serviceContainer">
      <Link to={`/actor/${actor.id}`} className="link">
        <div className="containerTiles">
          <div className="repoTile">
            <div className="repoContainer">
              <img src={actor.image} alt={actor.image} />
              <div className="repoContainer-info">
                <div className="repositoryName">
                  <h3>{actor.name}</h3>
                </div>
                <div className="repositoryForks">
                  <span className="green">Gender: {actor.gender}</span>
                </div>
              </div>

              <div className="overview">
                <h4>Status: <span className="statusSpan" style={actor.status === "Alive" ? { color: 'green' } : actor.status === "Dead" ? { color: 'red' } : { color: 'gray' }} >{actor.status}</span> </h4>
                <span className="repoLinkBtn">See More</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardLists;