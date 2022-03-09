import React from 'react';

import programmer from '../images/programmer.png';
import heart from '../images/heart.png';

const subTitle = '< FULL STACK />';

function Header() {
  return (
    <header>
      <div className="container-texts">
        <h1 className="name">Renata</h1>
        <h1 className="last-name">Nunes</h1>
        <h2 className="sub-title-1">DESENVOLVEDORA WEB</h2>
        <h2 className="sub-title-2">{ subTitle }</h2>
        {
          ['tecnologia', 'educação', 'linhas de código'].map((text, index) => (
            <div className="container-heart-text" key={ index }>
              <img className="img-heart" src={ heart } alt="heart" />
              <p className="text-header">{ text }</p>
            </div>
          ))
        }
      </div>
      <img className="img-programmer" src={ programmer } alt="programmer" />
    </header>
  );
}

export default Header;
