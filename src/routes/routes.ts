import { Router } from "express";
import * as apiController from '../controllers/apiControllers';
import multer, { diskStorage, memoryStorage } from "multer";

const storageConfig = diskStorage({
    destination: (req, file, cb) => {
        cb(null, './tmp');
    },
    filename: (req, file, cb) => {
        let randomName = Math.floor(Math.random() * 999);
        cb(null, `${randomName+Date.now()}.jpg`);
    }
    
});

const upload = multer({
    storage: memoryStorage(),
    fileFilter: (req, file, cb)=> {
        const allowedFile: string[] = ['image/jpg', 'image/png','image/jpeg'];

        if(allowedFile.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(null, false);
        }

        console.log('INFO FILE: ', file);
    },
    limits: {
        fileSize: 2000000
    }
});

export const routes = Router();

routes.get('/', apiController.allData);
routes.post('/', apiController.add);
routes.put('/:id', apiController.update);
routes.delete('/:id', apiController.remove);
routes.post('/upload', upload.single('avatar'), apiController.uploadFile);

