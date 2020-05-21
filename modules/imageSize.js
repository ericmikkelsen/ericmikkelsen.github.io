const Calipers = require('calipers')('png', 'jpeg', 'svg');

const imageSize = async filePath => {
    const imageObject = await Calipers.measure(filePath)
    const imageInfo = imageObject.pages[0]
    imageInfo.ratios = {
        xy: imageInfo.width / imageInfo.height,
        yx: imageInfo.height / imageInfo.width
    }
    return imageInfo
}
module.exports = imageSize