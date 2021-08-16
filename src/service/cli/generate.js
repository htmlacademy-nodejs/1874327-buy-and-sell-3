'use strict';

const fs = require(`fs`);
const {getRandomInt, shuffle} = require(`../utils`);

const DEFAULT_COUNT = 1;
const MAX_OFFERS_COUNT = 1000;
const MAX_SENTENCES_COUNT = 5;
const FILE_NAME = `mocks.json`;

const TITLES =
[
    `Продам книги Стивена Кинга`,
    `Продам новую приставку Sony Playstation 5`,
    `Продам отличную подборку фильмов на VHS`,
    `Куплю антиквариат`,
    `Куплю породистого кота`,
    `Продам коллекцию журналов «Огонёк»`,
    `Отдам в хорошие руки подшивку «Мурзилка»`,
    `Продам советскую посуду. Почти не разбита`,
    `Куплю детские санки`
];

const SENTENCES =
[
    `Товар в отличном состоянии.`,
    `Пользовались бережно и только по большим праздникам.`,
    `Продаю с болью в сердце...`,
    `Бонусом отдам все аксессуары.`,
    `Даю недельную гарантию.`,
    `Если товар не понравится — верну всё до последней копейки.`,
    `Это настоящая находка для коллекционера!`,
    `Если найдёте дешевле — сброшу цену.`,
    `Таких предложений больше нет!`,
    `При покупке с меня бесплатная доставка в черте города.`,
    `Кажется, что это хрупкая вещь.`,
    `Мой дед не мог её сломать.`,
    `Кому нужен этот новый телефон, если тут такое...`,
    `Не пытайтесь торговаться. Цену вещам я знаю.`
];

const CATEGORIES =
[
    `Книги`,
    `Разное`,
    `Посуда`,
    `Игры`,
    `Животные`,
    `Журналы`,
];

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

const generateOffers = (count) => {
    return Array(count).fill({}).map(() => (
    {
        title: TITLES[getRandomInt(0, TITLES.length - 1)],
        picture: getPictureFileName(getRandomInt(PictureRestrict.MIN, PictureRestrict.MAX)),
        description: shuffle(SENTENCES).slice(0, getRandomInt(0, MAX_SENTENCES_COUNT - 1)).join(` `),
        type: OfferType[Object.keys(OfferType)[Math.floor(Math.random() * Object.keys(OfferType).length)]],
        sum: getRandomInt(SumRestrict.MIN, SumRestrict.MAX),
        category: shuffle(CATEGORIES).slice(0, getRandomInt(0, CATEGORIES.length - 1))
    }));
};

module.exports =
{
    name: `--generate`,
    run(args) {
        const [count] = args;
        const countOffer = Number.parseInt(count, 10) || DEFAULT_COUNT;

        if (countOffer > MAX_OFFERS_COUNT) {
        console.error(`Не больше 1000 объявлений`);
        return 1;
        }

        const content = JSON.stringify(generateOffers(countOffer));

        fs.writeFile(FILE_NAME, content, (err) => {
        if (err) {
            console.error(`Ошибка при записи в файл...`);
            return 1;
        }

        console.info(`Операция выполнена успешно. Файл ${FILE_NAME} создан`);
        return 0;
        });
    }
};
