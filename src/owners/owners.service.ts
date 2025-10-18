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
        this.list.push({
            ...newOwner,
            id: this.list.length,
            active: true,
        });
        newOwner.id = this.list.length;
        newOwner.active = true;
        this.list.push(newOwner);
    }

    public update(id:Number, newOwner: any) 
    {
        let userIndex = this.list.findIndex(item => item.id === parseInt(id.toString()));
        const ow = this.list[userIndex];
        if (newOwner.name?.trim() !== '') { ow.name = newOwner.name?.trim(); }
        if (newOwner.age?.trim() !== '') { ow.age = parseInt(newOwner.age); }
        this.list[userIndex] = (ow);
        return true
    }

    public delete(id:Number) 
    {
        const index = this.list.findIndex(item => item.id === parseInt(id.toString()));
        this.list.splice(index, 1);
        return true
    }
}
