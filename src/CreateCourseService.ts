
interface Course {
 name:string,
 duration?: number, 
 educator: string
}

class CreateCourseService {
    execute({ duration = 8, name, educator}: Course){
        console.log()
    };
}

export default new CreateCourseService;