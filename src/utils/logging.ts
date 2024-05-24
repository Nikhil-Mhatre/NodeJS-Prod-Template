// src/library/logging.ts
import chalk from 'chalk';
export default class Logging {
  public static info = (args: string): void => {
    console.log(
      chalk.blue(`
[${new Date().toLocaleString()}]
[Info]:`),
      typeof args === 'string' ? chalk.blueBright(args) : args,
    );
  };

  public static warn = (args: string): void => {
    console.log(
      chalk.yellow(`
[${new Date().toLocaleString()}]
[Warning]:`),
      typeof args === 'string' ? chalk.yellowBright(args) : args,
    );
  };

  public static error = (args: string) => {
    console.log(
      chalk.red(`
[${new Date().toLocaleString()}]
[Error]:`),
      typeof args === 'string' ? chalk.redBright(args) : args,
    );
  };

  public static success = (args: string): void => {
    console.log(
      chalk.magenta(`
[${new Date().toLocaleString()}]
[Success]:`),
      typeof args === 'string' ? chalk.magentaBright(args) : args,
    );
  };
}
