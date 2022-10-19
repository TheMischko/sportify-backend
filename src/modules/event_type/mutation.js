import { EventTypeModel } from "./model"

export const addEventType = async(_, { key, name }) => {
    return await EventTypeModel.query().insert({
        key,
        name
    });
}

export const deleteEventType = async(_, { id_event_type }) => {
    await EventTypeModel.query().deleteById(id_event_type);
    return "success";
}

export const updateEventType = async(_, {id_event_type, ...others}) => {
    return await EventTypeModel.query().patchAndFetchById(id_event_type, {
        ...others
    });
}