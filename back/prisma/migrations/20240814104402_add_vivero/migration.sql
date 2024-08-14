-- CreateTable
CREATE TABLE "Viveros" (
    "id_vivero" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "Viveros_pkey" PRIMARY KEY ("id_vivero")
);

-- AddForeignKey
ALTER TABLE "Viveros" ADD CONSTRAINT "Viveros_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id_post") ON DELETE RESTRICT ON UPDATE CASCADE;
