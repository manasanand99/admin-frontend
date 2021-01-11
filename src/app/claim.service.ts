import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import {HttpClient} from "@angular/common/http"
import { Claim } from "./Claim";
@Injectable({
    providedIn:'root'
})
export class ClaimService {

    constructor(private http:HttpClient){

    }

    setClaimAmount(claim:Claim):Observable<any>{
        return this.http.post("http://localhost:8080/setClaim",claim);
    }
    getAllData():Observable<any>{
        return this.http.get("http://localhost:8080/viewClaims");
    }
    getVehicle(num:number):Observable<any>{
        return this.http.get("http://localhost:8080/vehicle/"+num);
    }
    getPlan(num:number):Observable<any>{
        return this.http.get("http://localhost:8080/plan/"+num);
    }
    getClaim(num:number):Observable<any>{
        return this.http.get("http://localhost:8080/claim"+num);
    }
    getAllClaims():Observable<any>{
        return this.http.get("http://localhost:8080/viewClaims");
    }

}