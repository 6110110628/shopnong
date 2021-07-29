//src\pages\Index.vue
<template>
  <Layout>
    <div class="divide__between">
      <h1>Product List</h1>
    </div>
  <div>
    <div v-if="$page.gcms.products" class="product-grid">
      <div
        v-for="(product) in products"
        :key="product.id"
        class="flex-col"
      >
        <g-link :to="'product/' + product.id" class="link" >
        <div class="product-wrapper">
          <g-image v-for="(images, slug) in product.images" class="img" :key="slug" :src="images.url" />   
           <div class="product-content">
          <p class="product-name"> {{ product.name }}</p>
          <p class="product-price">  &#x20A6;{{ product.price * 10 }}</p>
        </div>    
        </div>
       
        </g-link>  
      </div>
    </div>
  </div>
  </Layout>
</template>
<script>
export default {
  data() {
    return {
      products: [{
        name: '',
        description: '',
        category: {
          name: ''
        },
        price: '',
        images: [{
          url: ''
        }]
      }],
    }
  },
 created(){
  this.products = this.$page.gcms.products
 },
}
</script>
<page-query>
  {
    gcms{
      products {
        id
        name
        description
        categories {
          name
        }
        price
        images {
          url
        }
        slug
      }
    }
  }
</page-query>