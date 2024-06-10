/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Parques" (
    "id_mantenimiento" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "Parques_pkey" PRIMARY KEY ("id_mantenimiento")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Parques" ADD CONSTRAINT "Parques_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id_post") ON DELETE RESTRICT ON UPDATE CASCADE;
