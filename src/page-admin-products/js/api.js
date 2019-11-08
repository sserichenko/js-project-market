const API = {
  refs: {
    products: 'http://localhost:3000/api/products/',
  },

  addNewProduct(obj) {
    fetch(this.refs.products, {
      method: 'POST',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYzJhNjMyOWQ0ZDU2ODM5MDJlM2E2ZCIsImlhdCI6MTU3MzA0ODQzOCwiZXhwIjoxNTczNjUzMjM4fQ.oIVNWXUo7GwiDt2o1xXf4r1wqffjEUyBerjZF6b_F-k',
      },
      body: obj,
    })
      .then(res => res.json())
      .then(data => console.log('data', data));
  },

  getProducts() {
    return fetch(this.refs.products, {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYzJhNjMyOWQ0ZDU2ODM5MDJlM2E2ZCIsImlhdCI6MTU3MzA0ODQzOCwiZXhwIjoxNTczNjUzMjM4fQ.oIVNWXUo7GwiDt2o1xXf4r1wqffjEUyBerjZF6b_F-k',
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log('data.products', data.products);
        return data.products;
      });
  },

  getProduct(prodId) {
    return fetch(this.refs.products + prodId, {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYzJhNjMyOWQ0ZDU2ODM5MDJlM2E2ZCIsImlhdCI6MTU3MzA0ODQzOCwiZXhwIjoxNTczNjUzMjM4fQ.oIVNWXUo7GwiDt2o1xXf4r1wqffjEUyBerjZF6b_F-k',
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log('product', data.product);
        return data.product;
      });
  },

  getPopular() {
    this.getProducts().then(products => {
      const popularProduct = products.filter(item => item.popular);
      console.log('popularProduct', popularProduct);
      return popularProduct;
    });
  },

  delProduct(prodId) {
    return fetch(this.refs.products + prodId, {
      method: 'DELETE',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYzJhNjMyOWQ0ZDU2ODM5MDJlM2E2ZCIsImlhdCI6MTU3MzA0ODQzOCwiZXhwIjoxNTczNjUzMjM4fQ.oIVNWXUo7GwiDt2o1xXf4r1wqffjEUyBerjZF6b_F-k',
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log('data', data);
        return data.products;
      });
  },
};

export default API;
