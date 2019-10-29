export interface IPayment {
    date: Date | string | number,
    amount: number,
    note?: string
}