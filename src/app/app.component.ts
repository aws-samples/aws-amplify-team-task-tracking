import { Component } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teamtasks';
  signedIn: boolean;
  loggedinuser: string;
  user: any;
  
  constructor(private amplifyService: AmplifyService, private router: Router) {
    this.amplifyService.authStateChange$
      .subscribe(authState => {
        this.signedIn = authState.state === 'signedIn';
        if (!authState.user) {
          this.user = null;

        } else {
          this.user = authState.user;
          this.loggedinuser = this.user.attributes.email;
          console.log('Loggedin User', this.user);
          this.router.navigate(['/dashboard']);
        }
      });
  }
  async logout() {
    await Auth.signOut().then((res) => {
      this.router.navigate(['']);
    });
  }
}
