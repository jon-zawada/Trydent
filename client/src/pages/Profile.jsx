import React from 'react';
import ContentWrapper from '../components/common/ContentWrapper';
import { useAuth } from '../hooks/useAuth';

const Profile = () => {
  const { user } = useAuth();
  return (
    <ContentWrapper>
      <h1>Profile</h1>
      {user ? <h2>{user.email}</h2>
        : <h2>NO ONE IS SIGNED IN</h2>}
    </ContentWrapper>
  );
};

export default Profile;
