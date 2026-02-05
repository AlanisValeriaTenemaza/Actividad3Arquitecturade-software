import { AuthorsService } from './authors.service';
import { Author } from './entities/author.entity';
export declare class AuthorsController {
    private readonly service;
    constructor(service: AuthorsService);
    create(author: Author): Promise<Author>;
    findOne(id: number): Promise<Author | null>;
    findAll(): Promise<Author[]>;
}
