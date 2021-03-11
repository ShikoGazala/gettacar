import { Model } from 'mongoose';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<any>);
    findAll(): Promise<any[]>;
    create(user: any): Promise<{
        userExists: boolean;
    }>;
}
