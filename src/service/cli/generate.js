'use strict';

const chalk = require('chalk');
const fs = require(`fs`).promises;

const {getRandomInt, shuffle} = require(`../utils`);

const DEFAULT_COUNT = 1;
const MAX_OFFERS_COUNT = 1000;
const MAX_SENTENCES_COUNT = 5;
const FILE_NAME = `mocks.json`;

const FILE_SENTENCES_PATH = `./data/sentences.txt`;
const FILE_TITLES_PATH = `./data/titles.txt`;
const FILE_CATEGORIES_PATH = `./data/categories.txt`;

const OfferType =
{
    OFFER: `offer`,
    SALE: `sale`,
};


const SumRestrict =
{
    MIN: 1000,
    MAX: 100000,
};

const PictureRestrict =
{
    MIN: 1,
    MAX: 16,
};

const getPictureFileName = (index) => (`item${index.toString().padStart(2, '0')}.jpg`);

const generateOffers = (count, titles, categories, sentences) =>
{
    return Array(count).fill({}).map(() => (
    {
        title: titles[getRandomInt(0, titles.length - 1)],
        picture: getPictureFileName(getRandomInt(PictureRestrict.MIN, PictureRestrict.MAX)),
        description: shuffle(sentences).slice(0, getRandomInt(0, MAX_SENTENCES_COUNT - 1)).join(` `),
        type: OfferType[Object.keys(OfferType)[Math.floor(Math.random() * Object.keys(OfferType).length)]],
        sum: getRandomInt(SumRestrict.MIN, SumRestrict.MAX),
        category: shuffle(categories).slice(0, getRandomInt(0, categories.length - 1))
    }));
};

const readContent = async (filePath) =>
{
    try
    {
        const content = await fs.readFile(filePath, `utf8`);
        return content.trim().split(`\n`);
    }
    catch (err)
    {
        console.error(chalk.red(err));
        return [];
    }
};

module.exports =
{
    name: `--generate`,
    async run(args)
    {
        const sentences = await readContent(FILE_SENTENCES_PATH);
        const titles = await readContent(FILE_TITLES_PATH);
        const categories = await readContent(FILE_CATEGORIES_PATH);

        const [count] = args;
        const countOffer = Number.parseInt(count, 10) || DEFAULT_COUNT;

        if (countOffer > MAX_OFFERS_COUNT) {
            console.error(chalk.red(`Не больше 1000 объявлений`));
            return 1;
        }

        const content = JSON.stringify(generateOffers(countOffer, titles, categories, sentences));

        try {
            await fs.writeFile(FILE_NAME, content);
            console.info(chalk.green(`Операция выполнена успешно. Файл ${FILE_NAME} создан`));
        }
        catch {
            console.error(chalk.red(`Ошибка при записи в файл...`));
            return 1;
        }

        return 0;
    }
};
