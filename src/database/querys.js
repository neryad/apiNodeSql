export const queries = {
  getAllProducts: 'SELECT * FROM Products',
  createProduct:
    'INSERT INTO Products (name, description , quantity) VALUES (@name, @description , @quantity)',
  getProductById: 'SELECT * FROM Products Where Id = @Id',
  deleteProduct: 'DELETE  FROM Products Where Id = @Id',
  getTotalProduct: 'SELECT COUNT(*) FROM Products',
  updateProductById:
    'UPDATE Products SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @Id ',
};
