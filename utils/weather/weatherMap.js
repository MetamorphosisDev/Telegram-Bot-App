require("dotenv").config({ quiet: true })

// ENV Required
module.exports = function mapsView(lon, lat) {
    return `https://maps.geoapify.com/v1/staticmap?style=osm-bright-smooth&width=900&height=600&center=lonlat:${lon},${lat}&zoom=8&marker=lonlat:${lon},${lat};type:awesome;color:%23ff0000&apiKey=${process.env.GEOAPIFY_KEY}`
}
