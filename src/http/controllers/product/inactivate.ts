import { FastifyRequest, FastifyReply } from "fastify"
import { makeInactivateProductService } from "../../../services/factories/product/make-inactivate-product-service";

export async function inactivateProduct(request: FastifyRequest, reply: FastifyReply) {
    const inactivateProductService = makeInactivateProductService();

    const { id } = request.params as { id: string };

    await inactivateProductService.execute({
        productId: id
    });

    reply.code(204).send();
}