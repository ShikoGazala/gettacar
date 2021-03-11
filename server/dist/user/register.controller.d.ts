import { User } from './interfaces/user.interface';
import { UserService } from './user.service';
export declare class RegisterController {
    private userService;
    constructor(userService: UserService);
    create(user: User): Promise<any>;
}
