/*
  Warnings:

  - You are about to drop the column `prioridad` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `sub_categoriaId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the `Categoria` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sub_Categoria` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_sub_categoriaId_fkey";

-- DropForeignKey
ALTER TABLE "Sub_Categoria" DROP CONSTRAINT "Sub_Categoria_categoriaId_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "prioridad",
DROP COLUMN "sub_categoriaId";

-- DropTable
DROP TABLE "Categoria";

-- DropTable
DROP TABLE "Sub_Categoria";

-- CreateTable
CREATE TABLE "Proyectos" (
    "id_categoria" SERIAL NOT NULL,
    "cuerpoPrincipalId" INTEGER NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "Proyectos_pkey" PRIMARY KEY ("id_categoria")
);

-- CreateTable
CREATE TABLE "Noticias" (
    "id_sub_categoria" SERIAL NOT NULL,
    "cuerpoPrincipalId" INTEGER NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "Noticias_pkey" PRIMARY KEY ("id_sub_categoria")
);

-- CreateTable
CREATE TABLE "EmavaTransparente" (
    "id_transparencia" SERIAL NOT NULL,
    "cuerpoPrincipalId" INTEGER NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "EmavaTransparente_pkey" PRIMARY KEY ("id_transparencia")
);

-- CreateTable
CREATE TABLE "CuerpoPrincipal" (
    "id_cuerpoprincipal" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "multimediaId" INTEGER NOT NULL,

    CONSTRAINT "CuerpoPrincipal_pkey" PRIMARY KEY ("id_cuerpoprincipal")
);

-- AddForeignKey
ALTER TABLE "Proyectos" ADD CONSTRAINT "Proyectos_cuerpoPrincipalId_fkey" FOREIGN KEY ("cuerpoPrincipalId") REFERENCES "CuerpoPrincipal"("id_cuerpoprincipal") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proyectos" ADD CONSTRAINT "Proyectos_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id_post") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Noticias" ADD CONSTRAINT "Noticias_cuerpoPrincipalId_fkey" FOREIGN KEY ("cuerpoPrincipalId") REFERENCES "CuerpoPrincipal"("id_cuerpoprincipal") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Noticias" ADD CONSTRAINT "Noticias_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id_post") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmavaTransparente" ADD CONSTRAINT "EmavaTransparente_cuerpoPrincipalId_fkey" FOREIGN KEY ("cuerpoPrincipalId") REFERENCES "CuerpoPrincipal"("id_cuerpoprincipal") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmavaTransparente" ADD CONSTRAINT "EmavaTransparente_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id_post") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CuerpoPrincipal" ADD CONSTRAINT "CuerpoPrincipal_multimediaId_fkey" FOREIGN KEY ("multimediaId") REFERENCES "Multimedia"("id_multimedia") ON DELETE RESTRICT ON UPDATE CASCADE;
