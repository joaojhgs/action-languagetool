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
      forgetPassword: {
        text: 'Forgot your password?',
        redirect: 'Click here',
      },
      sidebar: {
        options: {
          dashboard: 'Dashboard',
          eventVenue: {
            default: 'Event venue',
            futsal: 'Gyms',
          },
          eventTickets: 'Tickets',
          configurations: {
            default: 'Configurations',
            eventEdit: 'Edit event',
            checkoutForm: 'Checkout form',
          },
          partners: 'Partners',
          reports: {
            default: 'Reports',
            general: 'General',
            tickets: 'Tickets',
            partners: 'Partners',
            salesmen: 'Salesmen',
          },
          icons: 'Icons',
          events: 'Events',
          organization: 'Organization',
        },
      },
      general: {
        yes: 'Yes',
        no: 'No',
        copy: 'Copy',
        copied: 'Copied!',
        search: 'Search',
        reset: 'Reset',
        tickets: 'Tickets',
        thisMonth: 'This Month',
        thisYear: 'This year',
        today: 'Today',
        save: 'Save',
      },
      input: {
        sectors: {
          options: {
            bleachers: 'Bleachers',
            enumerated: 'Enumerated',
            row: 'Row',
          },
        },
        ticketTypes: {
          half: 'Half ticket',
          full: 'Full ticket',
        },
        partnershipTypes: {
          options: {
            supporter: 'Supporter',
            fan_member: 'Fan club member',
            sponsor: 'Sponsor',
            partner: 'Partner',
          },
        },
        rules: {
          required: 'Required field',
          invalidEmail: 'Invalid email',
          minPassword: 'Min 6 characters',
          minCharacteres: 'The minimum amount of characters is: ',
          maxCharacteres: 'The maximum amount of characters is: ',
          imgFormat: 'Invalid file format',
          imgRepeat: 'Duplicated image',
          fileMaxSize: 'Max size of files reached',
          maximumImages:
            'You have already reached the maximum limit of 20 images!',
          maxAmountOfImages:
            'It was not possible to load all images because you have already reached the maximum limit of 20 images!',
          invalidStateInitial: 'Invalid state initials',
          invalidDocument: 'Invalid CPF/CNPJ',
          invalidPhoneNumber: 'Invalid phone number',
          invalidDate: 'Invalid date',
          invalidTime: 'Invalid time',
          invalidDateTime: 'Invalid date and/or time',
          dateMustBeAfterToday: 'Date must be after today',
          dateTimeMustBeAfterNow: 'Date time must be after now',
          maxAmount: 'The maximum amount is',
        },
      },
    },
  };
  export default en;
  