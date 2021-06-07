import { getConnection, sql } from '../database/connections';

export const getProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query('SELECT * FROM Products ');

    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewProduct = async (req, res) => {
  const { name, description } = req.body;
  let { quantity } = req.body;

  if (name == null || description == null) {
    return res.status(400).json({ msg: 'Bad request. Please fill all fields' });
  }
  if (quantity == null) {
    quantity = 0;
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input('name', sql.VarChar, name)
      .input('description', sql.VarChar, description)
      .input('quantity', sql.Int, quantity)
      .query(
        'INSERT INTO Products (name, description , quantity) VALUES (@name, @description , @quantity)'
      );

    res.json({ name, description, quantity });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
