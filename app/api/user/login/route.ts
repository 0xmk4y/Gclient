import { getIronSession } from "iron-session";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { SessionData } from "@/types/types";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  console.log("Login API");
  const { email, password } = await req.json();
  console.log(email);

  if (!email || !password) {
    return new Response(
      JSON.stringify({ message: "Email and password are required" }),
      { status: 400 }
    );
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return new Response(JSON.stringify({ message: "Invalid email or password" }), {
        status: 401,
      });
    }
    const User: { id: number; email: string, firstName: String, lastName: String } = {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName
    };

    const res = new Response(JSON.stringify({message: "Login successsfull", user: User }), { status: 200 });

    const session = await getIronSession<SessionData>(req, res, {
      password: process.env.SECRET_COOKIE_PASSWORD as string,
      cookieName: "session",
      ttl: 60 * 60 * 24, // 1 day
    });

    session.user = {
      id: user.id,
      email: user.email,
      role: "user"
    };
    
    await session.save();

    return res;

  } catch (error) {
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}
