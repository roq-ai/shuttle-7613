const mapping: Record<string, string> = {
  companies: 'company',
  drivers: 'driver',
  'future-bookings': 'future_booking',
  'past-rides': 'past_ride',
  routes: 'route',
  users: 'user',
  vehicles: 'vehicle',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
