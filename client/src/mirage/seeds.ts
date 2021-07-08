const seeds = async (server: any) => {
    server.createList('user', 8).forEach((user: any) => {
        server.createList('resume', Math.floor(Math.random() * 2) + 1, {
            user,
        });
        server.createList('social', Math.floor(Math.random() * 5) + 1, {
            user,
        });
        server.createList('refreshSession', 1, { user });

        server.createList('university', Math.floor(Math.random() * 5) + 1, {
            user,
            dataScope: server.create('dataScope'),
        });
        server.createList('course', Math.floor(Math.random() * 5) + 1, {
            user,
            dataScope: server.create('dataScope'),
        });
        server.createList('placeWork', Math.floor(Math.random() * 5) + 1, {
            user,
            dataScope: server.create('dataScope'),
        });
    });

    server.createList('user', 4).forEach((user: any) => {
        const group = server.create('group', {
            vacancies: server.createList(
                'vacancy',
                Math.floor(Math.random() * 5) + 1
            ),
            socials: server.createList(
                'social',
                Math.floor(Math.random() * 5) + 1
            ),
        });

        server.create('user_group', { user, group, type: 'owner' });
    });

    server.createList('user', 4).forEach((user: any, index: number) => {
        server.create('user_group', {
            user,
            group: server.schema.all('group').models[index],
            type: 'participant',
        });
    });
};
export default seeds;
