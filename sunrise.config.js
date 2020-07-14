export default {
  ct: {
    auth: {
      host: process.env.VUE_APP_CT_AUTH_HOST,
      projectKey: process.env.VUE_APP_CT_PROJECT_KEY,
      credentials: {
        clientId: process.env.VUE_APP_CT_CLIENT_ID,
        clientSecret: process.env.VUE_APP_CT_CLIENT_SECRET,
      },
      scopes: [process.env.VUE_APP_CT_SCOPE],
    },
    api: process.env.VUE_APP_CT_API_HOST,
  },
  languages: {
    en: 'English',
    de: 'Deutsch',
  },
  countries: {
    DE: 'Deutschland',
    US: 'United States',
  },
  formats: {
    number: {
      DE: {
        currency: {
          style: 'currency',
          currency: 'EUR',
          currencyDisplay: 'symbol',
        },
      },
      US: {
        currency: {
          style: 'currency',
          currency: 'USD',
        },
      },
    },
    datetime: {
      US: {
        short: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        },
      },
      DE: {
        short: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        },
      },
    },
  },
  categories: {
    salesExternalId: '6',
  },
  facetSearches: [
    { name: 'size', type: 'text' },
    { name: 'color', type: 'lnum', component: 'colors' },
    { name: 'designer', type: 'enum', component: 'designer' },
  ],
};
