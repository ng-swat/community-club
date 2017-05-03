import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  public profileForm: FormGroup;
  public Email: string;
  public Image: string;
  public balance: number;

  constructor(builder: FormBuilder) {
    this.Email = 'Yziv95@gmail.com';
    this.Image = `https://scontent.ftlv1-1.fna.fbcdn.net/v/t1.0-9/13895111_10205121212668670_4075659053528365697_n.j
              pg?oh=408bdb23bf87b22d3b6b222f70cb483c&oe=599553B4`;
    this.balance = 1500;
    this.profileForm = builder.group({
      firstName: ['Yona'],
      lastName: null,
      email: [this.Email],
      phone: null,
      balance: null,
      agreement: null,
      biography: null,
    });
  }

  ngOnInit() {
  }


  SaveProfile() {
    console.log('works');
  }
}

