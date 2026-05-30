import express, { Request, Response } from "express";
import {CreateUserSchema} from "@repo/common/types";

const app = express();

app.post('/signup', (req: Request, res: Response) => {
    const data = CreateUserSchema.safeParse(req.body);
    if(!data.success) {
        res.json({
            message: "Incorrect inputs"
        })
    }

})

app.post('/signin', (req, res) => {
    
})

app.post('/room', (req, res) => {
    
})

app.listen(3000, () => {
    console.log("Server is listening on port: " + 3000);
})