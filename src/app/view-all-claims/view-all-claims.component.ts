import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Claim } from '../Claim';
import { ClaimService } from '../claim.service';
@Component({
  selector: 'app-view-all-claims',
  templateUrl: './view-all-claims.component.html',
  styleUrls: ['./view-all-claims.component.css']
})
export class ViewAllClaimsComponent implements OnInit {

  constructor(private claimService: ClaimService, private router: Router) { }


  claims:Claim[]=[];
  ngOnInit(): void {
    this.claimService.getAllClaims().subscribe(
      data=>{
        if(data==null){
          console.log("no claims");
        }else{
          console.log(JSON.stringify(data));
          this.claims=data;
        }
      }
    );
  }
  viewData(claim:Claim){
    sessionStorage.setItem('policyId',String(claim.policyId));
    sessionStorage.setItem('response',claim.response);
    sessionStorage.setItem('reason',claim.reason);
    sessionStorage.setItem('claimId',String(claim.claimId));
    sessionStorage.setItem('claimDate',claim.claimDate);
    sessionStorage.setItem('amount',String(claim.amount));
    // console.log('selectedId');
    console.log(claim.policyId);
    console.log(claim.response);
    this.router.navigate(['claimLink']);
  }

}
