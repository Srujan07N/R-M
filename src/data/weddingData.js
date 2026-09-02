// Central configuration for the wedding invitation.
// Update names, dates, venue and contact details here.

export const wedding = {
  groom: {
    honorific: 'Chi.',
    name: 'Rithesh',
    parentage: 'S/o Late Jeekinamane Achutha Chowta',
    family: '',
  },
  bride: {
    honorific: 'Chi. Sou.',
    name: 'Madhura ',
    parentage: 'D/o Late Manappuguthu K. P. Moorthy Shetty, Kasaragodu',
    family: '',
  },
  invocation: 'Shri Kuladevata Prasanna',
  weddingDate: '2026-09-27T11:15:00+05:30',
  weddingDateDisplay: '27 September 2026',
  weddingDay: 'Sunday',
  muhurtam: {
    time: '11:15 AM to 12:00 PM',
    lagna: 'Vrischika Lagna',
  },
  venue: {
    name: 'St. Sebastian Centenary Auditorium',
    area: 'Bendoor - Mangaluru',
    mapsUrl: 'https://maps.google.com/?q=St.+Sebastian+Centenary+Auditorium+Bendoor+Mangaluru',
  },
  mehendi: {
    date: '2026-09-25T18:00:00+05:30',
    dateDisplay: '25 September 2026',
    day: 'Friday',
    time: '6:00 PM',
    place: 'Udyavara',
  },
  contacts: [
    { label: 'Sudhakar', number: '9449573011' },
    { label: 'Ashok', number: '9449188530' },
  ],
  // Replace with the couple's own number, country code included, no plus or spaces.
  rsvpWhatsAppNumber: '919483614080',
  music: {
    src: '/audio/wedding-music.mp3',
  },
}
