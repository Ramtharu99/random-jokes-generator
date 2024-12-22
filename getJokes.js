import https from 'https';
import chalk from 'chalk';

const getJokes = () => {
    const url = "https://v2.jokeapi.dev/joke/Any";

    https.get(url, (res) => {
        let data = "";
        res.on('data', (chunk) => {
            data += chunk;
        });
        res.on('end', () => {
            const joke = JSON.parse(data);
            console.log(`Here is a random joke: `);
            console.log(chalk.yellow(`${joke.setup}`));
            console.log(chalk.bgRed.bold(`${joke.delivery}`));
        });
        res.on('error', () => {
            console.log(`Failed to fetching data: ${error.message}`);
        });
    });
}
getJokes();