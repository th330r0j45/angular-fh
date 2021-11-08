import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';


@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent  {

  form: FormGroup;
  websiteList: any = [
    { id: 1, name: 'Google.com' },
    { id: 2, name: 'Angular.com' },
    { id: 3, name: 'Tutsmake.com' }
  ];
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      website: this.formBuilder.array([],[Validators.required])
    })
   }
   onCheckboxChange(e:any){
     const website:FormArray = this.form.get('website') as FormArray;

     if (e.target.checked) {
       website.push(new FormControl(e.target.value));
     } else {
       const index = website.controls.findIndex(x => x.value === e.target.value);
       website.removeAt(index);
     }
   }
   submit(){
     console.log(this.form.value);
   }

  ngOnInit(): void {
  }

}
