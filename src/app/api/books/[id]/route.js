import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request, { params }) {
    try {
        const { id } = params;
        const book = await prisma.book.findUnique({
            where: { id: Number(id) }
        });
        return Response.json({ book });
    }
    catch (err) {
        console.log(err);
        return Response.json({ message: "Something went wrong" });
    }
}

export async function DELETE(request, { params }) {
    try {
        const { id } = params;
        const book = await prisma.book.delete({
            where: { id: Number(id) },
        });
        return Response.json({ book });
    }
    catch (err) {
        console.log(err);
        return Response.json({ message: "Something went wrong" });
    }
}

