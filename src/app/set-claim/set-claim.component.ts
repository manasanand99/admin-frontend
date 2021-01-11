import { Component, OnInit } from '@angular/core';
import { Claim } from '../Claim';
import { ClaimService } from '../claim.service';

@Component({
  selector: 'app-set-claim',
  templateUrl: './set-claim.component.html',
  styles: [
  ]
})
export class SetClaimComponent implements OnInit {

  constructor(private claimService:ClaimService){

  } 

  fetchData:any[]=[];
  fetchVehicle:any[]=[];
  fetchPolicy:any[]=[];
  fetchClaim:any[]=[];

  display:boolean=false;
  num:number=0;
  claim=new Claim();
  ngOnInit(): void {
    this.claim.claimId=parseInt(sessionStorage.getItem('claimId')!);
    this.claim.claimDate=sessionStorage.getItem('claimDate')!;
    this.claim.policyId=parseInt(sessionStorage.getItem('policyId')!);
    this.claim.reason=sessionStorage.getItem('reason')!;
  }
  
  claimApprove(){
    
    this.claim.response="approved";
    this.claimService.setClaimAmount(this.claim).subscribe(
      data=>{
        console.log(JSON.stringify(this.claim));
      }
    );
    console.log(this.claim.response);
  }
  claimDecline(){
    
    this.claim.response="rejected";
    this.claimService.setClaimAmount(this.claim).subscribe(
    data=>{
      console.log(JSON.stringify(this.claim));
    }
  );
  console.log(this.claim.response);
  }
  viewAllData(){
    
    this.num=parseInt(sessionStorage.getItem('policyId')!);
    this.display=true;
    console.log(this.num);
    this.claimService.getAllData().subscribe(
      data=>{this.fetchData=data}
    );
    this.claimService.getVehicle(Number(this.num)).subscribe(
      data=>{this.fetchVehicle=data}
    );
    this.claimService.getPlan(Number(this.num)).subscribe(
      data=>{this.fetchPolicy=data}
    );
    this.claimService.getClaim(parseInt(sessionStorage.getItem('claimId')!)).subscribe(
      data=>{this.fetchClaim=data}
    );
  }
}
