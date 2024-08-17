import { Log } from '@core/interfaces';
import { Injectable, Logger } from '@nestjs/common';
import chalk from 'chalk';

@Injectable()
export class LoggerService {
  show(log: Log): void {
    const message = this.format(log);
    Logger.log(message);
  }

  format(log: Log): string {
    const statusColorMap = {
      1: chalk.yellow,
      2: chalk.green,
      3: chalk.yellow,
      4: chalk.red,
      5: chalk.red,
    };
    const statusColor = statusColorMap[Math.floor(log.statusCode / 100)];
    return (
      chalk.yellow(`[${log.method}] `) +
      chalk.magenta(`${log.url} `) +
      statusColor(`${log.statusCode} `) +
      chalk.green(`${log.userAgent} ${log.ip} `) +
      chalk.yellow(`+${log.responseTime}ms`)
    );
  }
}
