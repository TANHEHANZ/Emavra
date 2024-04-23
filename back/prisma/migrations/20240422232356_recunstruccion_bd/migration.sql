-- CreateTable
CREATE TABLE "User" (
    "id_user" SERIAL NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(150) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "Proyectos" (
    "id_proyectos" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "Proyectos_pkey" PRIMARY KEY ("id_proyectos")
);

-- CreateTable
CREATE TABLE "Noticias" (
    "id_noticias" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "Noticias_pkey" PRIMARY KEY ("id_noticias")
);

-- CreateTable
CREATE TABLE "Manteniemiento" (
    "id_mantenimiento" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "Manteniemiento_pkey" PRIMARY KEY ("id_mantenimiento")
);

-- CreateTable
CREATE TABLE "EmavaTransparente" (
    "id_transparencia" SERIAL NOT NULL,
    "Nombre" TEXT NOT NULL,
    "Descripcion" VARCHAR(150),
    "multimediaId" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "multimedia" TEXT[],

    CONSTRAINT "EmavaTransparente_pkey" PRIMARY KEY ("id_transparencia")
);

-- CreateTable
CREATE TABLE "Post" (
    "id_post" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "Descripcion" VARCHAR(150),
    "contenido" VARCHAR(5000) NOT NULL,
    "estado" BOOLEAN NOT NULL DEFAULT true,
    "destacar" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ubicacion" TEXT NOT NULL,
    "multimedia" TEXT[],
    "autor" TEXT,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id_post")
);

-- AddForeignKey
ALTER TABLE "Proyectos" ADD CONSTRAINT "Proyectos_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id_post") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Noticias" ADD CONSTRAINT "Noticias_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id_post") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Manteniemiento" ADD CONSTRAINT "Manteniemiento_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id_post") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;
