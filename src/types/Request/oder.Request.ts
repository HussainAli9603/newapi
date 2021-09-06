export interface SaveReqOder{
    IteamName: string;
    Price: number;
    
    }
    export interface UpdateReqOder {
        Iteam_id:string;
        IteamName: string;
        Price: number;
       
       
    }
    export interface GetOder {
      id: string
    }
    export interface DeleteOder {
      id: string
    }