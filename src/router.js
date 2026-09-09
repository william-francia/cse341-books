import express from 'express';
import { getBooksHandler, getBookByIdHandler } from './controllers/books.js';

const router = express.Router();
/**
 * @openapi
 * /books:
 *   get:
 *     summary: Get all books
 */
router.get('/books', getBooksHandler);
/**
 * @openapi
 * /books:
 *   get:
 *     summary: Get one book by Id
 */
router.get('/books/:id', getBookByIdHandler);

export default router;