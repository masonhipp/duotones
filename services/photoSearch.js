import algoliasearch from 'algoliasearch'

class SearchOptions {
  constructor () {
    this.indexName = 'photoSearch'
    this.params = {
      hitsPerPage: 24
    }
  }
}

const client = algoliasearch('9PHUE6ZRRE', '2a85057811c1d65825cbd4a8ab3e0602')

async function getPhotos (query) {
  let searchOptions = new SearchOptions
  searchOptions.query = query

  try {
    var response = await client.search([searchOptions])
    var res = response.results[0]
  } catch (e) {
    console.log('error: ', e)
  }

  return res.hits.map(hitMap)
}

export default getPhotos

function hitMap (hit) {
  let url = btoa('http://s3.glyphs.co/stock/' + hit.filename)
  hit.url = 'https://img.glyphs.co/img/?w=2400&q=85&src=' + url 
  hit.urlSmall = 'https://img.glyphs.co/img/?w=400&h=250&crop=true&enlarge=true&q=70&src=' + url
  hit.urlMedium = 'https://img.glyphs.co/img/?w=1200&q=75&src=' + url 

  return hit
}