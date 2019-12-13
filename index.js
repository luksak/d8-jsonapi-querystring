/**
 * Helper to create a JSON API query string from a nested Object.
 * @see https://www.drupal.org/docs/8/modules/json-api/json-api
 * 
 * USAGE :
 * To create the following query string :
 * "sort[sortCreated][path]=created&sort[sortCreated][direction]=DESC&fields[recipes]=title&include=tags,image&filter[categoryName][condition][path]=category.name&filter[categoryName][condition][value]=Main%20course&page[offset]=0&page[limit]=4"
 *  
 *  import {buildQueryString} from 'DrupalJSONAPIQueryString'
 * 
 *  buildQueryString({
 *    sort: {
 *      sortCreated: {
 *        path: 'created',
 *        direction: 'DESC'
 *      }
 *    },
 *    fields: {
 *      recipes: ['title']
 *    },
 *    include: ['tags', 'image'],
 *    filter: {
 *      categoryName: {
 *        condition: {
 *          path: 'category.name',
 *          value: "Main course"
 *        }
 *      },
 *    },
 *    page: {
 *      offset: 0,
 *      limit: 4
 *    }
 *  })
 * 
 * @param {object} queryParams as an object.
 */

const qs = require('qs');

function buildQueryString (object) {
  const query = qs.stringify(object, { indices: false });
  return query
}

module.exports.buildQueryString = buildQueryString
