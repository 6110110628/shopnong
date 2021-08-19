// gridsome.config.js

module.exports = {
  siteName: 'Shopnong',
  siteUrl: 'https://6110110628.github.io',
  pathPrefix: '/shopnong',
  

  plugins: [
    {
      use: '@gridsome/source-graphql',
      options: {
        url:
        'https://api-ap-northeast-1.graphcms.com/v2/ckrp219ot004501xhf1zqa4ei/master',
        fieldName: 'gcms',
        typeName: 'gcmsTypes',
        headers: {
          Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Mjc1NzE0ODIsImF1ZCI6WyJodHRwczovL2FwaS1hcC1ub3J0aGVhc3QtMS5ncmFwaGNtcy5jb20vdjIvY2tycDIxOW90MDA0NTAxeGhmMXpxYTRlaS9tYXN0ZXIiLCJodHRwczovL21hbmFnZW1lbnQtbmV4dC5ncmFwaGNtcy5jb20iXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LmdyYXBoY21zLmNvbS8iLCJzdWIiOiI0NmQwYzk1OC02ZWVhLTRjZmItODljMy00ODQ2ZDZhMDZhNjIiLCJqdGkiOiJja2c4MzVvYXByNGZpMDF3ZTk4amw3ODB0In0.oZ8bXvbYw6yfitUlkkZ97mT0HBGpNJzOCY19eRLX8umKTLDxzueIpyUGGMtong8fa8NHy1Za_rBbnMDJBmc9Ohc42VYHpZ23zLPiRY9lZaYVN4j5inMYVcd-cb3JWZJ1o6C4PloG5E0qmxfou0VUS2hKekvqpx9Kq7eopfNhVSgyrabIpq8oKaMGoWdPHY-aTLmxsTF-74OyEFJGA4HqMkl9RhX7wVdwt7GxVLnSvEf172uBRU1V8vhhvsOmmUhj2qDeAyq6aqysxQ8FXnW52887a9_IFipXxteLmsIObzxtRYpzBTXAZNcQkuhQvxOiMYUyIL-MgHujUc8dbc_PDFHk-hz-CPSZz726lBJuVI4m2RoPQ6KBTHoce-mvOosUuOGuUXhXRN8qFuJn_xnkuktEju4P-05e7LlOx_TOwEEhULAG-_TPb9s_HCWggM_SRoTJ536pd5Ave0drRQTWoJrw0ThfVR30y3KzYZt1_J0T7Sez7igWjrjhSE9Qxv6Jvd6om-9DrP5YydlVd553jy7rudfFdvya_WPjBMcxOE9-KEK7tx3lqfB2yDvIuSshjA5tYxerqDtcbrJZennqrLuT4j8cohUXxQBSv8wCd55c3MhxZtwvvIv0BzzKQjOR9BCUo3xT5OVLfPMF-ETjJ3PiHrL7uVKgxXRKGR9mTco"
        }
      }
    }
  ]
}