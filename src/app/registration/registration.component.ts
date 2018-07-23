import { Component, OnInit } from '@angular/core';
import { PersonalForm, LocationForm, ContactForm, HealthForm, FinancialForm } from './registration-form';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  submitted = false;
  onSubmit(){ this.submitted = true; }

  registration_defaults = {
    province: ['AB','BC','MB','NB','NL','NS','NT','NU','ON','PE','QC','SK','YT'],
    gender: ['Male','Female','Other'],
    rank: ['White','Yellow','Orange','Green','Blue','Brown','Black'],
    funding_type: ['None','Kids Sport','Jump Start']
  }

  personal_values = {
    first_name: null,
    last_name: null,
    date_of_birth: null,
    gender: null,
    rank: null
  }

  personal_form = new PersonalForm (
    this.personal_values.first_name, 
    this.personal_values.last_name,
    this.personal_values.date_of_birth,
    this.personal_values.gender,
    this.personal_values.rank
  );

  get PersonalForm(){
    return this.personal_form
  }

  location_values = {
    address: null,
    unit: null,
    city: null,
    province: null,
    postal_code: null
  }

  location_form = new LocationForm (
    this.location_values.address,
    this.location_values.unit,
    this.location_values.city,
    this.location_values.province,
    this.location_values.postal_code
  );

  contact_values = {
    email: null,
    home_number: null,
    work_number: null,
    cell_number: null
  }

  contact_form = new ContactForm(
    this.contact_values.email,
    this.contact_values.home_number,
    this.contact_values.cell_number,
    this.contact_values.work_number
  );

  health_values = {
    doctor_last: null,
    doctor_first: null,
    allergies: null,
    medical_conditions: null,
    current_medications: null,
    health_number: null
  }

  health_form = new HealthForm(
    this.health_values.doctor_last,
    this.health_values.doctor_first,
    this.health_values.allergies,
    this.health_values.medical_conditions,
    this.health_values.current_medications,
    this.health_values.health_number
  );

  financial_values = {
    family_rate: null,
    kids_sport: null,
    jump_start: null,
    date_approved: null,
    date_paid_in_full: null,
    amount_paid: null,
    payment_recieved_by: null
  }

  financial_form = new FinancialForm(
    this.financial_values.family_rate,
    this.financial_values.kids_sport,
    this.financial_values.jump_start,
    this.financial_values.date_approved,
    this.financial_values.date_paid_in_full,
    this.financial_values.amount_paid,
    this.financial_values.payment_recieved_by
  );

  constructor() { }

  ngOnInit() {}
}