import { EventTypeModel } from "./model"

export const eventTypes = async () => {
    const eventTypes = await EventTypeModel.query()
    return eventTypes.slice(0, 20)
}