import { createInterface } from 'node:readline';
import { getCommands } from './commands';

export function startRepl() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'pokedex > ',
    });

    rl.prompt();

    rl.on('line', async (input) => {
        const words = cleanInput(input);
        if (words.length === 0) {
            rl.prompt();
            return;
        }

        const commandName = words[0];

        const commands = getCommands();
        const cmd = commands[commandName];
        if (!cmd) {
            console.log(
                `Unknown command: "${commandName}". Type "help" for a list of commands.`,
            );
            rl.prompt();
            return;
        }

        cmd.callback(commands);
        rl.prompt();
    });
}

export function cleanInput(input: string): string[] {
    return input
        .toLowerCase()
        .trim()
        .split(' ')
        .filter((word) => word !== '');
}
