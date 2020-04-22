const contentfulManagement = require("contentful-management")

module.exports = function() {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: 'umBqS0BQVwcLJligZB6bCzeBcCQzQfb5DYbyltSo4Fc',
  })

  return contentfulClient
    .getSpace('54jjpmdqxiqf')
    .then(space => space.getEnvironment('master'))
}