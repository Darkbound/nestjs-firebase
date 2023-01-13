export type CurrencyType = "ETH" | "BTC" | "Free";

export class User {
  id: string;
  email: string;
  emailVerified: boolean;
  acceptedCookies: boolean;
  acceptedCookiesAt: number;
  image: string;
  firstName: string;
  lastName: string;
  fullName: string;
  credits: number;
  bets: {
    [key in CurrencyType]: { count: number; value: number };
  };
}
