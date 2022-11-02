import express from 'express';

const assignment = express();
import * as myRoutes from './modules/index.route.js'
import connection from './DB/connection.js'

assignment.use(express.json())

assignment.use("/api/v1/user", myRoutes.userRouter)

connection();
assignment.listen(3000, () => {
    console.log("server running");
})