export default {
  name: 'order',
  type: 'document',
  title: 'Order',
  fields: [
    { name: 'orderId', type: 'string', title: 'Order ID' },
    { name: 'customer', type: 'reference', title: 'Customer', to: [{ type: 'customer' }] },
    { name: 'products', type: 'array', title: 'Products', of: [{ type: 'reference', to: [{ type: 'product' }] }] },
    { name: 'totalAmount', type: 'number', title: 'Total Amount' },
    
  ],
};
