/*
  Warnings:

  - You are about to drop the column `nombre` on the `Reglamentos` table. All the data in the column will be lost.
  - Added the required column `Nombre` to the `Reglamentos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reglamentos" DROP COLUMN "nombre",
ADD COLUMN     "Nombre" TEXT NOT NULL;
