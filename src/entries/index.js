export const createEntries = async models => {
  await models.Location.create(
    {
      name: 'Emory at Buford',
      street_address: '3425 Buford Dr',
      city: 'Buford',
      state: 'Georgia',
      postal_code: '30519',
      telephone: '555-555-5555',
      users: [
        {
          type: 'Administrator',
          first_name: 'Jackson',
          last_name: 'Hermitt',
          email: 'action@mobileapphero.com',
          password: 'testpass',
          telephone: '555-983-1220'
        },
        {
          type: 'Doctor',
          first_name: 'Rebecca',
          last_name: 'Sanders',
          email: 'malika_stros@gmail.com',
          password: 'testpass',
          telephone: '555-335-7153'
        },
        {
          type: 'Nurse',
          first_name: 'Gregory',
          last_name: 'Karim',
          email: 'bailee.pfannersti@yahoo.com',
          password: 'testpass',
          telephone: '555-213-0900'
        }
      ]
    },
    {
      include: [models.User]
    }
  );

  await models.Patient.create(
    {
      userId: 2,
      first_name: 'Kurt',
      last_name: 'Branscome',
      street_address: '441 Hampton Meadows',
      city: 'Savannah',
      state: 'Georgia',
      postal_code: '31401',
      email: 'anya.koelpi1@yahoo.com',
      telephone: '555-234-5832',
      messages: [
        {
          patient_telephone: '555-234-5832',
          message_audio_url: 'https://aws.server.com/message1',
          message_transcript: 'Testing, Testing, 1 2 3.',
          status: 'complete'
        },
        {
          patient_telephone: '555-234-5832',
          message_audio_url: 'https://aws.server.com/message2',
          message_transcript: 'Testing, Testing, 1 2 3.',
          status: 'complete'
        },
        {
          patient_telephone: '555-234-5832',
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
      userId: 2,
      first_name: 'Audrey',
      last_name: 'Chaney',
      street_address: '2792 Layman Court',
      city: 'Atlanta',
      state: 'Georgia',
      postal_code: '30303',
      email: 'harold1996@gmail.com',
      telephone: '555-285-8116',
      messages: [
        {
          patient_telephone: '555-234-5832',
          message_audio_url: 'https://aws.server.com/message3',
          message_transcript: 'Testing, Testing, 1 2 3.',
          status: 'complete'
        },
        {
          patient_telephone: '555-234-5832',
          message_audio_url: 'https://aws.server.com/message5',
          message_transcript: 'Testing, Testing, 1 2 3.',
          status: 'complete'
        },
        {
          patient_telephone: '555-234-5832',
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

  await models.Location.create(
    {
      name: 'Northeast Georgia Medical Center',
      street_address: '1400 River Pl',
      city: 'Braselton',
      state: 'Georgia',
      postal_code: '30517',
      telephone: '555-444-4444',
      users: [
        {
          type: 'Administrator',
          first_name: 'Test',
          last_name: 'Admin',
          email: 'test@admin.com',
          password: 'testpass',
          telephone: '555-444-4444'
        },
        {
          type: 'Doctor',
          first_name: 'Patricia',
          last_name: 'Smith',
          email: 'alize_runolfsdott@gmail.com',
          password: 'testpass',
          telephone: '555-669-8292'
        },
        {
          type: 'Nurse',
          first_name: 'Genevie',
          last_name: 'Hopkins',
          email: 'camila1995@yahoo.com',
          password: 'testpass',
          telephone: '555-515-6889'
        }
      ]
    },
    {
      include: [models.User]
    }
  );
};