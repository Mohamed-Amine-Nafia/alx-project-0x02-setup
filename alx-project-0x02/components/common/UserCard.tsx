import { type UserProps } from "@/interfaces";

const UserCard = ({ name, email, address }: UserProps) => (
  <div className="p-4 border rounded shadow">
    <h3 className="text-xl font-bold">{name}</h3>
    <p>{email}</p>
    <p className="text-sm text-gray-500">
      {address.street}, {address.city}
    </p>
  </div>
);

export default UserCard;
