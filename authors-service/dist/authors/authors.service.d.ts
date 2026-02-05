import { Repository } from 'typeorm';
import { Author } from './entities/author.entity';
export declare class AuthorsService {
    private repo;
    constructor(repo: Repository<Author>);
    create(author: Author): Promise<Author>;
    findOne(id: number): Promise<Author | null>;
    findAll(): Promise<Author[]>;
}
