import {  Request, Response, NextFunction } from 'express';

import UserController from '../controllers/user'

const userController = new UserController();


class UserHttpHandler {

    async getUsers(request: Request, response: Response, next: NextFunction) {
        try {
            const users = await userController.getAllUsers();
            response.json(users)
        } catch (error) {
            next(error)
        }
    }

    async getUserById(request: Request, response: Response, next: NextFunction) {
        
    }

    async updateUser(request: Request, response: Response, next: NextFunction) {
        
    }

    async deleteUser(request: Request, response: Response, next: NextFunction) {
        
    }

}

export default UserHttpHandler;