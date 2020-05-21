module.exports = function({collections}) {
    
    return `<ul>
        ${collections.art.map( async post => {
            const imageSize = await this.imageSize(post.data.image)
            console.log(imageSize);
            return `<li>${ post.data.title }</li>`}
        ).join("\n")}
    </ul>`;
};
