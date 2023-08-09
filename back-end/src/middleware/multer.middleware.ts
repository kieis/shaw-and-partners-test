import multer from "fastify-multer";

export const multerUpload = multer({ 
    dest: "uploads/" 
});

export const multerContentParser = multer.contentParser;