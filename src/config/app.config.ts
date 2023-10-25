interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Restaurant Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Restaurant Owner', 'Restaurant Manager'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Edit your info.', 'Book a table.', 'Checkout the menus.', 'Manage bookings.'],
  ownerAbilities: [
    'Manage restaurant information',
    'Manage menus',
    'Manage bookings',
    'Manage restaurant tables',
    'Manage restaurant employees',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/c5b23a0c-c7bf-454d-bbb6-fcca9d429a56',
};
