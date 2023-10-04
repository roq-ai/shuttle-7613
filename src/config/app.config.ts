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
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Operations Manager', 'Passenger', 'Driver', 'Customer Service Representative'],
  tenantName: 'Company',
  applicationName: 'shuttle',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Book future rides.', 'View past rides.', 'View driver details.', 'View vehicle details.'],
  ownerAbilities: ['Manage future bookings', 'Manage routes', 'Manage drivers', 'Manage vehicles'],
  getQuoteUrl: 'https://app.roq.ai/proposal/170baa16-385f-4268-ab08-0884d43fc23e',
};
