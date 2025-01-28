export default {
  name: 'shipment',
  type: 'document',
  title: 'Shipment',
  fields: [
    { name: 'shipmentId', type: 'string', title: 'Shipment ID' },
    { name: 'order', type: 'reference', title: 'Order', to: [{ type: 'order' }] },
    { name: 'shipmentDate', type: 'datetime', title: 'Shipment Date' },
    { name: 'deliveryZone', type: 'reference', title: 'Delivery Zone', to: [{ type: 'deliveryZone' }] },
    { 
      name: 'status', 
      type: 'string', 
      title: 'Shipment Status', 
      options: {
        list: ['In Transit', 'Delivered', 'Delayed', 'Cancelled']
      },
    },
  ],
};
