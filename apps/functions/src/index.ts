import * as functions from "firebase-functions";
import { logger } from 'firebase-functions/v1'

import type { Product } from 'shared/types'
import { base64Encode } from 'shared/utils'

/** Our example hello world function */
export const helloWorld = functions.https.onRequest((request, response) => {
  // e.g. use something from a subpackage ('firebase-functions/v1')
  logger.info("Hello logs!")

  // e.g. use type from shared/types
  const product: Product = {
    id: "293482039",
    name: "Function Product",
    price: 100,
    description: "A product from a function"
  }

  // e.g. use function from shared/utils
  const encodedString = base64Encode("Encode me!");

  response.send({
    product,
    encodedString
  });
});