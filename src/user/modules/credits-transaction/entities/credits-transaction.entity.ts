export class CreditsTransaction {
  id: string;
  transactionHash: string;
  currency: "BTC" | "ETH" | "CREDITS";
  bet: number;
  multiplier: number;
  changeInCredits: number;
  player: string;
  date: number;
}
