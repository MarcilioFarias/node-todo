import { Request, Response } from "express";
import { dbData } from "../models/model";

export const allData = async (req: Request, res: Response) => {

    let allTasks = await dbData.findAll();

    res.json({All: allTasks});
};

export const add = async (req: Request, res: Response) => {
    
    let { task_title, done } = req.body;
    //console.log(req.body);
    
    await dbData.create({
        task_title,
        done
    });

    res.status(201);
    res.json({task: req.body});
    
};

export const update = async (req: Request, res: Response) => {

    let {id} = req.params;
    let { task_title, done } = req.body;
    let newTodo = await dbData.findByPk(id);

    if(newTodo){
        newTodo.task_title = task_title;
        newTodo.done = done;
        await newTodo.save();

        res.json({newTodo});
    } else {
        res.json({error: 'enpoint not found'});
    }
    

};

export const remove = async (req: Request, res: Response) => {

    let {id} = req.params;
    await dbData.destroy({
        where: {id}
    });

    res.json({deleted: 'task was deleted!'});
};

export const uploadFile =async (req: Request, res: Response) => {
    
    console.log('Arquivo: ', req.file);
    console.log('Arquivos: ', req.files);

    res.json({});

}