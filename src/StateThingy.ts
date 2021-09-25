export interface StateThingy{
    SetState(newState:string) : void
    GetState() : string
    Changed(callback : Function) : void
}