export interface Ticket {
    id : number ,
    title : string ,
    description : string ,
    create_date : Date ,
    status : 'open' | 'in-progress' | 'closed' | 'deferred'
}
