import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-editor-profilo',
  templateUrl: './editor-profilo.component.html',
  styleUrls: ['./editor-profilo.component.css']
})
export class EditorProfiloComponent implements OnInit {

  formProfilo = this.fb.group({
    username: ['', Validators.required],
    password: [''],
    nome: [''],
    cognome: [''],
    aliases: this.fb.array([
      this.fb.control('')
    ])
  })


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  onSubmit() {
    console.warn(this.formProfilo.value);
  }
}
