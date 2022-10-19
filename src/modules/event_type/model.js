import { Model } from 'objection';

export class EventTypeModel extends Model {
    static get tableName(){
        return 'event_type'
    }

    static get idColumn(){
        return 'id_event_type'
    }
}