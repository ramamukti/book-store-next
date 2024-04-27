import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    const books = await prisma.book.findMany();
    return Response.json({ books })
}

export async function POST(request) {
    const { title, author, publisher, year, pages } = request.body;
    try {
        const book = await prisma.book.create({
            data: {
                title,
                author,
                publisher,
                year: parseInt(year),
                pages: parseInt(pages),
                image: request.file.path // add the path to the uploaded image to the book data
            },
        });
        return Response.json({ book });
    } catch (err) {
        console.log("err", err);
        return Response.json({ message: "Book already exists" });
    }
}


