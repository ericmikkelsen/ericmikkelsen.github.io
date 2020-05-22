const card = (postData, h_level = 3) => {
    return `
        <h${h_level} style="font-size: 3ex; line-height: 3ex; margin: 1ex 0">
            ${postData.title}
        </h${h_level}>
        <img 
            height="${postData.image.height}"
            src="${postData.image.src}" 
            width="${postData.image.width}"
            style="
                width: 100%;
                height: auto;
                image-rendering: pixelated;
            "
        />
    `
}
module.exports = async function({collections}) {
    
    const posts = collections.art.map( async post => {
        const image = await this.imageSize(post.data.image)
        post.data.image = Object.assign(image, {src:post.data.image})
        return post
    });

    return await Promise.all(posts).then( posts => { 
        

        return posts.reduce((previousValue, post) => {
            const size = 25;
            const li_css = `
                width: ${post.data.image.ratios.xy * size }ex;
                flex-grow: ${post.data.image.ratios.xy / 2 * size };
                margin: 4ex 1ex;
                padding: 0;
                list-style: none;
                display: inline-block;
                max-width: 100%;
            `

            return previousValue + `<li style="${li_css}" id="${post.data.page.fileSlug}">`+card(post.data)+'</li>'

        },'<ul style="display: flex; flex-wrap: wrap; padding: 0 1ex; margin:0;">') + '</ul>'
    })

};
