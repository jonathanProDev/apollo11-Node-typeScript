import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function CreateCourse (request: Request, response: Response) {


    CreateCourseService.execute({
        name: "NodeJs",
        educator: "jhon",
        duration: 10
    });
}