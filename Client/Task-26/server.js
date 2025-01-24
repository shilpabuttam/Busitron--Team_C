app.get('/search', async (req, res) => {
    const { genre, language, minDuration, maxDuration, rating, releaseDate, sort } = req.query;

    const body = {
        query: {
            bool: {
                must: [
                    genre && { match: { genre } },
                    language && { match: { language } },
                    minDuration && maxDuration && { range: { duration: { gte: minDuration, lte: maxDuration } } },
                    rating && { range: { ratings: { gte: rating } } },
                ],
                filter: [
                    releaseDate && { range: { releaseDate: { gte: releaseDate } } }
                ]
            }
        },
        sort: sort ? [{ [sort]: { order: 'desc' } }] : []
    };

    try {
        const result = await esClient.search({ index: 'content', body });
        res.json(result.hits.hits);
    } catch (err) {
        res.status(500).send('Error occurred while searching');
    }
});
