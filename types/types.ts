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
  learner_id: number;
  learner: Learner;
  amount: number;
  date: Date;
  status: string;
  details: string;
  createdat: Date;
  updatedat: Date;
};

export type Learner = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  program: string;
  gender: string;
  location: string;
  phone: string;
  disabled: boolean;
  image: string;
  description: string;
  createdat: Date;
  updatedat: Date;
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