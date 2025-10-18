import { Injectable } from '@nestjs/common';
import { standarFilter } from 'src/utils/types/TypesForServices';

@Injectable()
export class OwnersService {


    private list = [
        { id: 1, name: 'Luigi Calabazini', age:20, active: true}
    ];

    public findAll(filters:standarFilter<any> = {}) 
    {
        return this.sharedFilters(filters);
    }

    public count(filters:standarFilter<any> = {}) : Number
    {
        return this.sharedFilters(filters).length;
    }

    private sharedFilters(filters:standarFilter<any>) 
    {
        const list = this.list;
        if (filters) {
            list.filter(item => {
                let pass = true
                if (filters.name?.trim() !== '') {
                    pass = pass && (item.name === filters.name?.trim());
                }
                return pass;
            });
        }
        return list;
    }

    public find(id:Number) 
    {
        let user = this.list.find(item => item.id === parseInt(id.toString()));
        return user || null;
    }

    public save(newOwner: any) 
    {
        newOwner.id = this.list.length;
        newOwner.active = true;
        this.list.push(newOwner);
    }
}
