import React from 'react';
import Feed from '../Feed';

import {
   Container,
   Banner,
   Avatar,
   ProfileData,
   LocationIcon,
   CakeIcon,
   Followage,
   EditButton,
  } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Kiron Castro</h1>
        <h2>@CastroK</h2>

        <p>
          Developer at <a href="https:https://github.com/Kiron-castro">@TecnoCastro</a>
        </p>
        <ul>
          <li>
            <LocationIcon />
            São Bernardo do Campo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 16 de outubro de 2000
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672</strong> seguidores
          </span>

        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;