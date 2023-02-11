import React from 'react';
import { useOutletContext } from 'react-router-dom';
import DetailsRow from './DetailsRow/DetailsRow';
import {
  AddressSec,
  Desc,
  Hr1,
  LatAndLong,
  LocationSection,
  MainDiv,
  MapContainer,
  MasterPhoto,
  Name,
  ProfileContainer,
  Seperator,
  Title,
  Value,
} from './UserDetailsStyle';

const UserDetails = () => {
  const user = useOutletContext();

  return (
    <MainDiv>
      <ProfileContainer>
        <MasterPhoto src={user?.profilepicture} />
        <Name>{user?.name}</Name>
        <DetailsRow name="Username" value={user?.name} />
        <DetailsRow name="e-mail" value={user?.email} />
        <DetailsRow name="Phone" value={user?.phone.split(' ')[0]} />
        <DetailsRow name="Website" value={user?.website} />
        <Hr1 />
        <Title>Company</Title>
        <DetailsRow name="Name" value={user?.company?.name} />
        <DetailsRow name="Catchphrase" value={user?.company?.catchPhrase} />
        <DetailsRow name="bs" value={user?.company?.bs} />
      </ProfileContainer>

      <Seperator />

      <LocationSection>
        <Title>Address :</Title>
        <AddressSec>
          <DetailsRow name="Street" value={user?.address?.street} />
          <DetailsRow name="Suite" value={user?.address?.suite} />
          <DetailsRow name="City" value={user?.address?.city} />
          <DetailsRow name="Zipcode" value={user?.address?.zipcode} />
        </AddressSec>

        <MapContainer>
          <img src="/public/assets/images/map.webp" alt="map" />
          <span>
            Dont have access to google maps api key so given a placeholder
          </span>
        </MapContainer>

        <LatAndLong>
          <Desc>Lat : </Desc>
          <Value> {user?.address?.geo?.lat}</Value>
          <Desc>Long : </Desc>
          <Value> {user?.address?.geo?.lng}</Value>
        </LatAndLong>
      </LocationSection>
    </MainDiv>
  );
};

export default UserDetails;
