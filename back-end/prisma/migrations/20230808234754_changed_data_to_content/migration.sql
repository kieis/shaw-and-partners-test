/*
  Warnings:

  - You are about to drop the column `data` on the `File` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "File" DROP COLUMN "data",
ADD COLUMN     "content" JSONB;