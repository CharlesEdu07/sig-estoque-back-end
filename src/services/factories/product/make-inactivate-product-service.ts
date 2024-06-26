import { PrismaProductRepository } from "../../../repositories/prisma/prisma-product-repository";
import { InactivateProductService } from "../../product/inactivate-product";

export function makeInactivateProductService() {
    const productRepository = new PrismaProductRepository();
    const useCase = new InactivateProductService(productRepository);

    return useCase;
}