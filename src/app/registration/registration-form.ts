export class PersonalForm {
    constructor( 
        public last_name: string,
        public first_name: string,
        public birth_date: string,
        public gender: string,
        public rank: string
    ){}
}

export class LocationForm {
    constructor(
        public address: string,
        public unit: number,
        public city: string,
        public province: string,
        public postal_code: string
    ){}
}

export class ContactForm {
    constructor(
        public email: string,
        public home_number: string,
        public cell_number: string,
        public work_number: string
    ){}
}

export class HealthForm {
    constructor(
        public doctor_last: string,
        public doctor_first: string,
        public allergies: string,
        public medical_conditions: string,
        public current_medications: string,
        public health_number: string
    ){}
}

export class FinancialForm {
    constructor(
        public family_rate: string,
        public kids_sport: string,
        public jump_start: string,
        public date_approved: string,
        public date_paid_in_full: string,
        public amount_paid: number,
        public payment_recieved_by: string
    ){}
}