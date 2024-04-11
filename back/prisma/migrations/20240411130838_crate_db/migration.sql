-- CreateTable
CREATE TABLE "User" (
    "id_user" SERIAL NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(150) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id_categoria" SERIAL NOT NULL,
    "nombre_categoria" VARCHAR(150) NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id_categoria")
);

-- CreateTable
CREATE TABLE "Sub_Categoria" (
    "id_sub_categoria" SERIAL NOT NULL,
    "categoriaId" INTEGER NOT NULL,

    CONSTRAINT "Sub_Categoria_pkey" PRIMARY KEY ("id_sub_categoria")
);

-- CreateTable
CREATE TABLE "Multimedia" (
    "id_multimedia" SERIAL NOT NULL,
    "url_recurso" VARCHAR(200) NOT NULL,

    CONSTRAINT "Multimedia_pkey" PRIMARY KEY ("id_multimedia")
);

-- CreateTable
CREATE TABLE "Post" (
    "id_post" SERIAL NOT NULL,
    "sub_categoriaId" INTEGER NOT NULL,
    "multimediaId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "Descripcion" VARCHAR(150),
    "contenido" VARCHAR(5000) NOT NULL,
    "estado" BOOLEAN NOT NULL DEFAULT true,
    "prioridad" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ubicacion" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id_post")
);

-- AddForeignKey
ALTER TABLE "Sub_Categoria" ADD CONSTRAINT "Sub_Categoria_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id_categoria") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_sub_categoriaId_fkey" FOREIGN KEY ("sub_categoriaId") REFERENCES "Sub_Categoria"("id_sub_categoria") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_multimediaId_fkey" FOREIGN KEY ("multimediaId") REFERENCES "Multimedia"("id_multimedia") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;
