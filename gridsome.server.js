//gridsome.server.js
module.exports = function(api) {
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`
      {
        gcms {
          products {
            id
          }
        }
      }
    `);
    data.gcms.products.forEach(node => {
      createPage({
        path: `/product/${node.id}`,
        component: './src/templates/Product.vue',
        context: {
          id: node.id,
        },
      });
    });
  });
};
