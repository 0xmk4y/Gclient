export type Admin = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  contact: string;
  createdAt: Date;
  updatedAt: Date;
};

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Course = {
  id: number;
  title: string;
  price: number;
  duration: string;
  instructor: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Invoice = {
  id: number;
  learnerId: number;
  learner: Learner;
  amount: number;
  date: Date;
  status: string;
  details: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Learner = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  program: string;
  gender: string;
  location: string;
  phone: string;
  disabled: boolean;
  image: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};


export type SessionData = {
  user?: {
    id?: number;
    firstName?: string;
    lastName?: string;
    email: string;
    contact?: string;
    role: "admin" | "user";
  };
}