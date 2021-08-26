const express = require(`express`);
const chalk = require('chalk');
const fs = require('fs').promises;

const DEFAULT_PORT = 3000;
const FILENAME = `mocks.json`;

const HttpCode = {
    OK: 200,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401,
};

module.exports =
{
    name: `--server`,
    run(args)
    {
        const [customPort] = args;
        const port = Number.parseInt(customPort, 10) || DEFAULT_PORT;

        const app = express();
        app.use(express.json());

        app.get(`/offers`, async (_req, res) =>
        {
            try
            {
                const fileContent = await fs.readFile(FILENAME);
                const mocks = JSON.parse(fileContent);
                res.json(mocks);
            } catch (_err)
            {
                res.send([]);
            }
        });

        app.use((_req, res) => res
            .status(HttpCode.NOT_FOUND)
            .send(`Not found`));

        app.listen(port, () => console.log(chalk.green(`Сервер запущен на порту: ${DEFAULT_PORT}`)));
    }
}