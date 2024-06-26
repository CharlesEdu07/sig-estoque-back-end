import { PrismaManagerRepository } from "../../../repositories/prisma/prisma-manager-repository";
import { FindManagerByIdService } from "../../manager/find-manager-by-id";

export function makeFindManagerByIdService() {
  const prismaManagerRepository = new PrismaManagerRepository();
  const findManagerByIdService = new FindManagerByIdService(prismaManagerRepository);

  return findManagerByIdService;
}