import { Controller, Get, Param } from "@nestjs/common";
import { GameService } from "./game.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Game Stats")
@Controller("game")
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.gameService.findOne(id);
  }

  @Get("/top3payouts")
  findTopThreePayouts() {
    return this.gameService.findTopThreePayouts();
  }

  @Get("/top3crashpoints")
  findTopThreeCrashpoints() {
    return this.gameService.findTopThreeCrashpoints();
  }
}
