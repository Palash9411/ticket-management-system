export interface Ticket {
    id : number ,
    title : string ,
    description : string ,
    createDate : Date ,
    status : 'Open' | 'In-progress' | 'Closed' | 'Deferred'
}
