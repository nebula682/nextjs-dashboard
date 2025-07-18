import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function listInvoices() {
  // Corrected SQL query
  const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;
  
  return data;
}

export async function GET() {
  try {
    // Returns the actual data from the database (list of invoices)
    return Response.json(await listInvoices());
  } catch (error) {
    // If an error occurs, return the error with a 500 status code
    return Response.json({ error }, { status: 500 });
  }
}
