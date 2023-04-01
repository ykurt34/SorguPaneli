import chalk from 'chalk';

export default function response(status, message) {
    const log = console.log;
    if (status === 'error') {
        log(chalk.red.bold(message));
    } else if (status === 'success') {
        log(chalk.green.bold(message));
    } else if (status === 'warning') {
        log(chalk.yellow.bold(message));
    }
}
