import React from "react";
import Header from "../components/layout/Header";
import UserCard from "../components/common/UserCard";
import { UserProps } from "../interfaces";

interface UsersPageProps {
  users: UserProps[];
}

function UsersPage({ users }: UsersPageProps) {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Users</h1>
        <div className="grid gap-4">
          {users.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              address={`${user.address.street}, ${user.address.city}`}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default UsersPage;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
}
