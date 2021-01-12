import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLogin } from '../adminLogin';
import { ClaimService } from '../claim.service';

@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html', 
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  adminLogin:AdminLogin=new AdminLogin();
  userName:string="";
  pass:string="";
  checkLogin(){
    if(this.userName=="LTI" && this.pass=="lti@123"){
      this.router.navigate(['/homeLink']);
    }else{
      alert("wrong password or adminname");
    }
    console.log(this.userName+this.pass);
  }
  constructor(private router:Router,private claimService:ClaimService) {
    if(sessionStorage.getItem('targetPage')==null) {
      sessionStorage.setItem('targetPage','/home');
    }
   }


  ngOnInit(): void {
  }

  loginUser(): void{
    this.claimService.loginUser(this.adminLogin).subscribe(
      data=>{
        if (data.status=="SUCCESS")
        {
          alert("Logged in!");
          sessionStorage.setItem("loggedInId",data.message);
          this.router.navigateByUrl(sessionStorage.getItem('targetPage')!);
        }
        if (data.status=="FAILED")
        {
          alert("check console for error")
          console.log(data.message);
          return;
        }
      }
    )
  }

}
