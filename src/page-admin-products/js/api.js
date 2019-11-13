const API = {
  refs: {
    products: "http://localhost:3000/api/products/"
  },
  token: localStorage.getItem("token"),

  addNewProduct(obj) {
    return fetch(this.refs.products, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.token}`
      },
      body: obj
    }).then(res => res.json());
  },

  getProducts() {
    return fetch(this.refs.products, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYzJhNjMyOWQ0ZDU2ODM5MDJlM2E2ZCIsImlhdCI6MTU3MzA0ODQzOCwiZXhwIjoxNTczNjUzMjM4fQ.oIVNWXUo7GwiDt2o1xXf4r1wqffjEUyBerjZF6b_F-k"
      }
    })
      .then(res => res.json())
      .then(data => data.products);
  },

  getProduct(prodId) {
    return fetch(this.refs.products + prodId, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYzJhNjMyOWQ0ZDU2ODM5MDJlM2E2ZCIsImlhdCI6MTU3MzA0ODQzOCwiZXhwIjoxNTczNjUzMjM4fQ.oIVNWXUo7GwiDt2o1xXf4r1wqffjEUyBerjZF6b_F-k"
      }
    })
      .then(res => res.json())
      .then(data => data.product);
  },

  getPopular() {
    return this.getProducts().then(products => {
      return products.filter(item => item.popular);
    });
  },

  getGenderProducts(gender) {
    return this.getProducts().then(products => {
      return products.filter(item => item.gender === gender);
    });
  },

  delProduct(prodId) {
    return fetch(this.refs.products + prodId, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    })
      .then(res => res.json())
      .then(data => data.products);
  },

  changeProduct(prodId, obj) {
    return fetch(this.refs.products + prodId, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${this.token}`,
        "content-type": "application/json"
      },
      body: JSON.stringify(obj)
    })
      .then(res => res.json())
      .then(data => {
        console.log("ответ", data.products);
      });
  }
};

export default API;
