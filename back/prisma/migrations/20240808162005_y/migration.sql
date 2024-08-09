-- CreateTable
CREATE TABLE "Reglamentos" (
    "id_reglamento" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "multimedia" TEXT[],

    CONSTRAINT "Reglamentos_pkey" PRIMARY KEY ("id_reglamento")
);
