export interface WelcomeMessage {
  title: string;
  description: string;
}

export interface CardProps {
  title: string;
  content: string;
}
export interface ButtonProps {
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  label: string;
  onClick?: () => void;
}
export interface PostProps {
  title: string;
  content: string;
  userId: number;
}
export interface UserProps {
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
}
