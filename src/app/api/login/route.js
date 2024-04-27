import { PrismaClient } from '@prisma/client';
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(request) {
    const { email, password } = request.body;
    try {

    } catch (error) {

    }
}