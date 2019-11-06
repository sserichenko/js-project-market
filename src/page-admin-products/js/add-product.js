export default function addNewProduct(obj) {
  fetch('http://localhost:3000/api/products', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYzJhNjMyOWQ0ZDU2ODM5MDJlM2E2ZCIsImlhdCI6MTU3MzA0ODQzOCwiZXhwIjoxNTczNjUzMjM4fQ.oIVNWXUo7GwiDt2o1xXf4r1wqffjEUyBerjZF6b_F-k',
    },
    body: JSON.stringify(obj),
  })
    .then(res => res.json())
    .then(data => console.log('data', data));
}
