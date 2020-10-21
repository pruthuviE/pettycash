import { Observable } from 'rxjs';


export class PettyCash {
    id: number;
    employeeId: string;
    employeeName: string;
    reason: string;
    amount: string;
    date: string;
}
export abstract class PettycashData {
    abstract getPettyCash(): Observable<PettyCash[]>;
    abstract addPettyCash(pettycash: PettyCash): Observable<PettyCash>;
    abstract updatePettyCash(pettycash: PettyCash): Observable<PettyCash>;
    abstract deletePettyCash(pettycash: PettyCash): Observable<any>;
    abstract getPettyCashReport(date): Observable<any>;
}
