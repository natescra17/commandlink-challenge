export const fields = [
    [{
      id: 'firstName',
      placeholder: 'First name',
      type: 'text',
      validation: {
        required: {
          value: true,
          message: "Field required"
        }
      }
    },
    {
      id: 'lastName',
      placeholder: 'Last name',
      type: 'text',
      validation: {
        required: {
          value: true,
          message: "Field required"
        }
      }
    }],
    {
      id: 'Email',
      validation: {
        required: {
          value: true,
          message: "Field required"
        },
        pattern: {
          value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: 'Email not valid',
        }
      },
      type: 'text',
    },
    {
      id: 'address1',
      placeholder: 'Address 1',
      type: 'text',
    },
    [{
      id: 'city',
      type: 'text',
    },
    {
      id: 'state',
      type: 'text',
    },
    {
      id: 'zip',
      type: 'text',
    }],
    {
      id: 'phone',
      validation: {
        required: {
          value: true,
          message: "Field required"
        },
        pattern: {
          value: /^(\d{1,3})(\d{3,4})?[ .-]?(\d{0,4})$/,
          message: "Phone format not valid"
        }
      },
      type: 'text',
    },
    {
      id: 'jobTitle',
      options: [
        'Engineer - lead',
        'Engineer - mid level',
        'Engineer - junion',
        'Engineer - front end focused',
        'Engineer - backend focused',
        'Engineer - full stack',
      ],
      placeholder: 'Please select job title',
      type: 'select',
    },
    {
      id: 'reason',
      placeholder: 'Describe why you are a good fit for the job you are applying for.',
      type: 'textarea',
    }
  ]
  