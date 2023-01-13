import { Injectable } from "@nestjs/common";

@Injectable()
export class GameService {
  findOne(id: string) {
    return `This action returns a #${id} game`;
  }

  findTopThreePayouts() {
    return `This action returns top three payouts`;
  }

  findTopThreeCrashpoints() {
    return `This action returns top three crashpoints`;
  }
}
