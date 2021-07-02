export const getVideos = async () => {
    const videos = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&part=player&maxResults=10&key=${process.env.REACT_APP_GOOGLE_API}`
    )
        .then((r) => r.json())
        .then((d) => d.items.map((item: any) => item.player.embedHtml));

    return videos;
};
