import delay from './delay';

const contributors = [
    {
        'name': 'Carlos Toxtli',
        'login': 'toxtli',
        'location': 'United States , Mexico, Canada',
        'language': '',
        'gravatar': 'https://avatars0.githubusercontent.com/u/1299233?s=400&v=4',
        'followers': 1100,
        'contributions': 28287
    },
    {
        'name': 'Brian Chan',
        'login': 'brianchandotcom',
        'location': 'Los Angeles, CA',
        'language': '',
        'gravatar': 'https://avatars3.githubusercontent.com/u/282080?s=400&v=4',
        'followers': 1200,
        'contributions': 21085
    },
    {
        'name': 'Fabien Potencier',
        'login': 'fabpot',
        'location': 'San Francisco',
        'language': '',
        'gravatar': 'https://avatars0.githubusercontent.com/u/47313?s=400&v=4',
        'followers': 7700,
        'contributions': 12947
    },
    {
        'name': 'Andrew Nesbitt',
        'login': 'andrew',
        'location': 'Somerset, UK',
        'language': '',
        'gravatar': 'https://avatars3.githubusercontent.com/u/1060?s=400&v=4',
        'followers': 1500,
        'contributions': 10188
    },
    {
        'name': 'Taylor Otwell',
        'login': 'taylorotwell',
        'location': 'Little Rock, AR',
        'language': '',
        'gravatar': 'https://avatars1.githubusercontent.com/u/463230?s=400&v=4',
        'followers': 11000,
        'contributions': 8376
    },
    {
        'name': 'EGOIST',
        'login': 'egoist',
        'location': 'Chengdu, China',
        'language': '',
        'gravatar': 'https://avatars0.githubusercontent.com/u/8784712?s=400&v=4',
        'followers': 2400,
        'contributions': 7688
    },
    {
        'name': 'Hugo Giraudel',
        'login': 'HugoGiraudel',
        'location': 'Berlin',
        'language': '',
        'gravatar': 'https://avatars1.githubusercontent.com/u/1889710?s=400&v=4',
        'followers': 1700,
        'contributions': 7658
    },
    {
        'name': 'Thibault Duplessis',
        'login': 'ornicar',
        'location': 'Paris, France',
        'language': '',
        'gravatar': 'https://avatars3.githubusercontent.com/u/140370?s=400&v=4',
        'followers': 1200,
        'contributions': 7341
    },
    {
        'name': 'Juho Vepsäläinen',
        'login': 'bebraw',
        'location': 'Vienna, Austria',
        'language': '',
        'gravatar': 'https://avatars2.githubusercontent.com/u/166921?s=400&v=4',
        'followers': 1100,
        'contributions': 6895
    },
    {
        'name': 'Nelson',
        'login': 'nelsonic',
        'location': 'London',
        'language': '',
        'gravatar': 'https://avatars3.githubusercontent.com/u/194400?s=400&v=4',
        'followers': 1100,
        'contributions': 6501
    }
];


class ContributorApi {
    static getAllContributors() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], contributors));
            }, delay);
        });
    }
}

export default ContributorApi;
