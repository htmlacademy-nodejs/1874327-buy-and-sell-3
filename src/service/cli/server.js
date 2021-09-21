const express = require(`express`);
const chalk = require(`chalk`);
const routes = require(`../api`);
const { HttpCode } = require(`../../constants`);

const DEFAULT_PORT = 3000;

module.exports =
{
    name: `--server`,
    run(args)
    {
        const [customPort] = args;
        const port = Number.parseInt(customPort, 10) || DEFAULT_PORT;

        const app = express();
        app.use(express.json());
        app.use(`/api`, routes);

        app.use((_req, res) => res
            .status(HttpCode.NOT_FOUND)
            .send(`Not found`));

        app.listen(port, () => console.log(chalk.green(`Сервер запущен на порту: ${DEFAULT_PORT}`)));
    }
}