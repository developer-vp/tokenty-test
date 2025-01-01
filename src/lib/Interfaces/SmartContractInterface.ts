import { Time } from "../enums/utils";

export interface SmartContractData {
  percent: number;
  isRevenue: boolean;
  stream: string;
  owner: string;
  first_payment_after_number: number;
  first_payment_after_unit: Time;
  payment_frequency_unit: Time;
  payment_duration_number: number;
  payment_duration_unit: Time;
}
