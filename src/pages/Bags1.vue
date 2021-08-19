//src\pages\Index.vue
<template>
  <Layout>
    <div class="divide__between">
      <h1>Bag List</h1> 
      
    </div>
    <div class="d1-center">
    <div class="pagination">
        <a href="#">&laquo;</a>
        <a class="active" href="/bags1">1</a>
        <a href="/bags2">2</a>
        <a href="/bags3">3</a>
        <a href="/bags2">&raquo;</a>
    </div>
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
      products(first:3) {
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

<style>
.d1-center {
  text-align: center;
}

.pagination {
  display: inline-block;
  text-align: center;
}

.pagination a {
  color: black;
  float: center;
  text-align: center;
  padding: 8px 16px;
  text-decoration: none;
}

.pagination a.active {
  background-color: #4CAF50;
  color: white;
}

.pagination a:hover:not(.active) {background-color: #ddd;}

.divide__between{
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
}

.button{
    display: flex;
    align-items: center;
    text-decoration: none;
    border: 1px solid #5828e8;
    width: 10rem;
    text-align: center;
    justify-content: center;
    height: 3rem;
    margin-top: .75rem;
    margin-bottom: .75rem;
    border-radius: 5px;
}

.button:hover{
  background: #5828e8;
  color: #f5f5f5;
}
.product-content{
  padding-top: 1.5rem;
  text-align: center;
}
.img{
  width: 300px;
  transition-delay: 500ms;
  object-fit: cover;
}
.product-grid{
  display: flex;
  flex-wrap: wrap;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  justify-content: space-between;
}
.flex-col{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
}
.link{
  display: flex;
  width: 100%;
  text-decoration: none;
  height: 100%;
}
.product-wrapper{
  padding: 1.5rem;
  width: 300px;
  border-radius: .5rem;
  position: relative;
  background-color: #f5f5f5;
}

.product-name{
  font-size: 1.125rem;
  color: #101b42;
  font-weight: 700;
  margin-bottom: .5rem;
}
.product-name:hover{
   color: #5828e8;
}
.product-price{
  font-size: .875rem;
  color: #888;
  font-weight: bold;
}

@media(max-width: 760px){
  .product-grid{
    justify-content: center;   
     padding-right: 1rem;
  }
}
</style>