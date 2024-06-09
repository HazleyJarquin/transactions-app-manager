// types/Account.ts

export interface Institution {
  name: string;
  type: string;
}

export interface Balance {
  current: number;
  available: number;
}

export interface LoanData {
  fees: any; // Define un tipo más específico si sabes la estructura
  limit_day: string;
  loan_type: any; // Define un tipo más específico si sabes la estructura
  principal: any; // Define un tipo más específico si sabes la estructura
  limit_date: string;
  cutting_day: string;
  collected_at: string;
  credit_limit: number;
  cutting_date: string;
  interest_rate: any; // Define un tipo más específico si sabes la estructura
  interest_rates: any; // Define un tipo más específico si sabes la estructura
  contract_number: any; // Define un tipo más específico si sabes la estructura
  monthly_payment: any; // Define un tipo más específico si sabes la estructura
  payment_due_day: any; // Define un tipo más específico si sabes la estructura
  last_payment_date: string;
  next_payment_date: string;
  contract_start_date: any; // Define un tipo más específico si sabes la estructura
  last_period_balance: any; // Define un tipo más específico si sabes la estructura
  no_interest_payment: any; // Define un tipo más específico si sabes la estructura
  outstanding_balance: any; // Define un tipo más específico si sabes la estructura
  outstanding_principal: any; // Define un tipo más específico si sabes la estructura
  number_of_installments_total: any; // Define un tipo más específico si sabes la estructura
  number_of_installments_outstanding: any; // Define un tipo más específico si sabes la estructura
}

export interface CreditData {
  collected_at: string;
  credit_limit: number;
  cutting_date: string;
  interest_rate: number;
  minimum_payment: number;
  monthly_payment: number;
  last_payment_date: string;
  next_payment_date: string;
  last_period_balance: number;
  no_interest_payment: number;
}

export interface Account {
  id: string;
  link: string;
  institution: Institution;
  created_at: string;
  name: string;
  type: string;
  agency: string;
  number: string;
  balance: Balance;
  category: string;
  currency: string;
  loan_data: LoanData | null;
  credit_data: CreditData | null;
  balance_type: string;
  collected_at: string;
  bank_product_id: string;
  last_accessed_at: string;
  internal_identification: string;
  public_identification_name: string;
  public_identification_value: string;
}

export interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Account[];
}
