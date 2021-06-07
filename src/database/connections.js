import sql from 'mssql';

const dbSettings = {
  user: 'dante1989_SQLLogin_1',
  password: 'an4s4ilyhh',
  server: 'apinode.mssql.somee.com',
  database: 'apinode',
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

export async function getConnection() {
  //  const result = await pool.request().query('SELECT 1');
  //  console.log(result, 'weo');
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.log(error, 'Error');
  }
}
export { sql };
