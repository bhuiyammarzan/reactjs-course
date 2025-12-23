import React from "react";
import useFetch from "../hooks/useFetch";

type UserResponse = { name: string };

const User: React.FC = () => {
  const { data, loading, error } = useFetch<UserResponse>(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error occurred!</h3>;

  return (
    <>
      <h1>User found</h1>
      <h3>Name: {data?.name ?? "Unknown"}</h3>
    </>
  );
};

export default User;