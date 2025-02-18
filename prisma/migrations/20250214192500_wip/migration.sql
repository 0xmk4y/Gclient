/*
  Warnings:

  - You are about to drop the column `amount` on the `Learner` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Learner" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "program" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "disabled" BOOLEAN NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Learner" ("createdAt", "description", "disabled", "email", "firstName", "gender", "id", "image", "lastName", "location", "phone", "program", "updatedAt") SELECT "createdAt", "description", "disabled", "email", "firstName", "gender", "id", "image", "lastName", "location", "phone", "program", "updatedAt" FROM "Learner";
DROP TABLE "Learner";
ALTER TABLE "new_Learner" RENAME TO "Learner";
CREATE UNIQUE INDEX "Learner_email_key" ON "Learner"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
