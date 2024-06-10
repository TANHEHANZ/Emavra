/*
  Warnings:

  - You are about to drop the column `multimediaId` on the `EmavaTransparente` table. All the data in the column will be lost.
  - Added the required column `tipo` to the `EmavaTransparente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EmavaTransparente" DROP COLUMN "multimediaId",
ADD COLUMN     "tipo" TEXT NOT NULL;
