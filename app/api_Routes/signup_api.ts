"use server";

import bcrypt from 'bcrypt';
import prisma from '../lib/prisma';

export async function Register({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return {
      msg: 'User already exists',
      status: false,
    };
  }

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
 
    return {
      alert: 'User created successfully',
      status: true,
    };
  } catch (e) {
    console.error('Signup error:', e);
    return {
      msg: 'Error while creating your account',
      status: false,
    };
  }
}
