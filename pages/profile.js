import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <h1> your dashboard </h1>
      {isAuthenticated && (
        <div>
          <p>{user.email}</p>
        </div>
      )}
    </>
  );
};

export default Profile;
