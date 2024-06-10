/*
  Warnings:

  - The primary key for the `Parques` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_mantenimiento` on the `Parques` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Parques" DROP CONSTRAINT "Parques_pkey",
DROP COLUMN "id_mantenimiento",
ADD COLUMN     "id_parques" SERIAL NOT NULL,
ADD CONSTRAINT "Parques_pkey" PRIMARY KEY ("id_parques");
