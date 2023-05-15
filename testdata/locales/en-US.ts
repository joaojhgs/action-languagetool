/* eslint-disable prettier/prettier */
interface iLanguage {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }
  
  const en: iLanguage = {
    translations: {
      languages: {
        ptBR: 'Portuguese',
        enUS: 'English',
      },
      headerMenu: {
        logOut: 'Log out',
        partners: 'Partners',
        gyms: 'Event venues',
        myEvents: 'My events',
        organization: 'Organization',
      },
      tab: {
        breadcrumb: {
          organization: 'Organization',
          event: 'Event',
          partners: 'Partners',
        },
        authentication: 'Authentication',
        dashboard: 'Dashboard',
        futsal: 'Gyms',
        eventVenue: {
          default: 'Event venue',
          futsal: 'Gyms',
        },
        partners: 'Partners',
        icons: 'Icons',
        leaguePartners: 'Partnerships',
        events: {
          eventsList: 'Events',
          createEvent: 'Create event',
          editEvent: 'Edit event',
          editEventTicket: 'Edit ticket',
          eventDetails: 'Event details',
          createEventTicket: 'Create event ticket',
          eventReport: 'Event report',
          ticketsReport: 'Tickets report',
          partnersReport: 'Partners report',
          salesmenReport: 'Salesmen report',
        },
        organization: 'Organization',
      },
    },
  };
  export default en;
  