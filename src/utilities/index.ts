import { v4 as uuid } from 'uuid';

export const generatorId = () => {
    const id = uuid();
    return id;
};