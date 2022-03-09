import React from 'react';

import contacts from '../helpers/contacts';

import photo from '../images/renata.jpeg';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import doc from '../images/doc.png';

const icons = [linkedin, github, doc];

function AboutMe() {
  return (
    <section className="section-about-me">
      <h1 className="about-me-title">SOBRE MIM</h1>
      <div className="container-about-me">
        <img className="img-profile" src={ photo } alt="profile" />
        <p className="text-1">
          Iniciei minha carreira na área de desenvolvimento em abril de 2021
          e desde então, descobri uma nova paixão.
          <br />
          <br />
          A possibilidade de impactar
          a vida das pessoas através de aplicações inovadoras vai de encontro com meus
          objetivos pessoais, por isso acredito genuinamente
          no poder que simples linhas de código possuem.
        </p>
        <p className="text-2">
          Sou engenheira mecatrônica de formação, professora de coração e busco
          agora construir uma trajetória como DEV.
          <br />
          <br />
          Busco crescer pessoal e
          profissionalmente em um ambiente colaborativo, onde eu possa aprender muito e
          continuar compartilhando meu conhecimento, como tenho feito até aqui.
        </p>
        <div>
          <p className="text-3">
            Amo chocolate,
            <br />
            desejo conhecer o mundo
            <br />
            e as pessoas que tem nele.
            <br />
            <br />
            Então bora nos conectar?
          </p>
          <p className="text-4">
            Fique à vontade também para me dar um chocolate, ok?!
            <span> 😉</span>
          </p>
          {
            contacts.map(({ text, url }, index) => (
              <a className="contact" href={ url } target="blank" key={ index }>
                <img className="img-icon" src={ icons[index] } alt="icon" />
                { text }
              </a>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
