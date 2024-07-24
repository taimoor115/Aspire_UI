import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  className?: string;
}

export interface CardProps {
  icon: string;
  title: string;
  description: string;
  id: number;
}

interface Item {
  id: number;
  item: string;
}
export interface FooterItemsProps {
  title: string;
  items: Item[];
}

export interface QuestionListProps {
  question: string;
}

export interface TeamCardProps {
  name: string;
  url: string;
  designation: string;
}
