export const createEntries = async models => {
  await models.Location.create(
    {
      name: 'Emory at Buford',
      street_address: '3425 Buford Dr',
      city: 'Buford',
      state: 'Georgia',
      postal_code: '30519',
      telephone: '5555555555',
      users: [
        {
          type: 'Administrator',
          first_name: 'Jackson',
          last_name: 'Hermitt',
          email: 'action@mobileapphero.com',
          password: 'testpass',
          telephone: '5559831220'
        },
        {
          type: 'Doctor',
          first_name: 'Rebecca',
          last_name: 'Sanders',
          email: 'malika_stros@gmail.com',
          password: 'testpass',
          telephone: '5553357153'
        },
        {
          type: 'Nurse',
          first_name: 'Gregory',
          last_name: 'Karim',
          email: 'bailee.pfannersti@yahoo.com',
          password: 'testpass',
          telephone: '5552130900'
        }
      ]
    },
    {
      include: [models.User, models.Patient, models.Message]
    }
  );

  await models.Location.create(
    {
      name: 'Northeast Georgia Medical Center',
      street_address: '1400 River Pl',
      city: 'Braselton',
      state: 'Georgia',
      postal_code: '30517',
      telephone: '5554444444',
      users: [
        {
          type: 'Administrator',
          first_name: 'Test',
          last_name: 'Admin',
          email: 'test@admin.com',
          password: 'testpass',
          telephone: '5554444444'
        },
        {
          type: 'Doctor',
          first_name: 'Patricia',
          last_name: 'Smith',
          email: 'alize_runolfsdott@gmail.com',
          password: 'testpass',
          telephone: '5556698292'
        },
        {
          type: 'Nurse',
          first_name: 'Genevie',
          last_name: 'Hopkins',
          email: 'camila1995@yahoo.com',
          password: 'testpass',
          telephone: '5555156889'
        }
      ]
    },
    {
      include: [models.User]
    }
  );

  await models.Patient.create(
    {
      locationId: 1,
      assigned: 5,
      first_name: 'Kurt',
      last_name: 'Branscome',
      street_address: '441 Hampton Meadows',
      city: 'Savannah',
      state: 'Georgia',
      postal_code: '31401',
      email: 'anya.koelpi1@yahoo.com',
      telephone: '5552345832',
      messages: [
        {
          locationId: 1,
          message_audio_url: 'https://aws.server.com/message1',
          message_transcript: 'Testing, Testing, 1 2 3.',
          status: 'complete'
        },
        {
          locationId: 1,
          message_audio_url: 'https://aws.server.com/message2',
          message_transcript: 'Testing, Testing, 1 2 3.',
          status: 'complete'
        },
        {
          locationId: 1,
          message_audio_url: 'https://aws.server.com/message4',
          message_transcript: 'Testing, Testing, 1 2 3.',
          status: 'complete'
        }
      ]
    },
    {
      include: [models.Message]
    }
  );

  await models.Patient.create(
    {
      locationId: 2,
      assigned: 5,
      first_name: 'Audrey',
      last_name: 'Chaney',
      street_address: '2792 Layman Court',
      city: 'Atlanta',
      state: 'Georgia',
      postal_code: '30303',
      email: 'harold1996@gmail.com',
      telephone: '5552858116',
      messages: [
        {
          locationId: 2,
          message_audio_url: 'https://aws.server.com/message3',
          message_transcript: 'Testing, Testing, 1 2 3.',
          status: 'complete'
        },
        {
          locationId: 2,
          message_audio_url: 'https://aws.server.com/message5',
          message_transcript: 'Testing, Testing, 1 2 3.',
          status: 'complete'
        },
        {
          locationId: 2,
          message_audio_url: 'https://aws.server.com/message6',
          message_transcript: 'Testing, Testing, 1 2 3.',
          status: 'complete'
        }
      ]
    },
    {
      include: [models.Message]
    }
  );
};
