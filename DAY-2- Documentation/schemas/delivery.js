export default {
  name: 'deliveryZone',
  type: 'document',
  title: 'Delivery Zone',
  fields: [
    { name: 'zoneName', type: 'string', title: 'Zone Name' },
    { name: 'region', type: 'string', title: 'Region' },
    { name: 'deliveryTime', type: 'string', title: 'Delivery Time Estimate' },
    { name: 'contact', type: 'string', title: 'Contact Info' },
  ],
};
