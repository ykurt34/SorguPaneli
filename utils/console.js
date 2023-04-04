import chalk from 'chalk';
const init = async () => {
    console.log(chalk.yellow.bold(`
        /$$       /$$                              
        | $$      |__/                              
        | $$       /$$ /$$   /$$  /$$$$$$   /$$$$$$ 
        | $$      | $$| $$  | $$ /$$__  $$ |____  $$
        | $$      | $$| $$  | $$| $$  \ $$  /$$$$$$$
        | $$      | $$| $$  | $$| $$  | $$ /$$__  $$
        | $$$$$$$$| $$|  $$$$$$/|  $$$$$$$|  $$$$$$$
        |________/|__/ \______/  \____  $$ \_______/
                                    | $$          
                                    | $$          
                                    |__/
    `))
    console.log(chalk.green.bold('                  Aile Sorgulama Sistemi'));
    console.log(chalk.red.bold('Uygulamadan doğacak herhangi bir sorumluluk kabul edilmemektedir.'));
    console.log(chalk.blue.bold(`               Uygulama geliştiricisi: @FurkanGods`));
}

export default {
    init
}