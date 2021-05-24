import { UserBase } from "../../official-base-authentication/classes/UserBase";

export abstract class EventForm {}

export abstract class Event
{
    private name: string;
    private description: string;

    constructor(_name: string, _description: string = "")
    {
        this.name = _name;
        this.description = _description;
    }

    public abstract DisplayForm() : EventForm;
    public abstract Action(_user: UserBase, _form: EventForm) : boolean;
}