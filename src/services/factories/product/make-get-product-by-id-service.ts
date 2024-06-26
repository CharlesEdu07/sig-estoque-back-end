import { PrismaProductRepository } from "../../../repositories/prisma/prisma-product-repository";
import { GetProductByIdService } from "../../product/get-product-by-id";

export function makeGetProductByIdService() {
    const prismaProductRepository = new PrismaProductRepository();
    const useCase = new GetProductByIdService(prismaProductRepository);

    return useCase;
}