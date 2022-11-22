export const ProfileData = {
  profileServiceCreate: {
    status: 200,
    data: {
      vendorProfile: {
        contact_name: 'vendor',
        created_at: '2022-11-21T10:18:34.351Z',
        email_id: 'vendor@gmail.com',
        established_year: '1999',
        full_address: 'Main bus stand near location',
        gst: 'SDE345566755432',
        id: 48,
        image_url: 'undefined',
        landline_number: '04656-3456789',
        language_id: 1,
        location: 'location',
        map_url: '',
        mobile_number: '919791389928',
        name: 'Vendor Waste Recycles',
        order_management_id: [1, 2, 3],
        pincode: '654321',
        status_id: 2,
        updated_at: '2022-11-21T10:18:34.351Z',
        vehicle_owned: [2, 3],
        vendor_id: 88,
        website: 'www.name.com'
      }
    }
  }
};

export const generateOtpData = {
  mobileNumberGet: {
    status: 200,
    data: {
      phoneNumber: '9791389928'
    }
  }
};

export const createData = {
  createGet: {
    status: 200,
    data: {
      created_at: '2022-11-21T10:18:34.351Z',
      mobile_number: '9791389928',
      id: 48,
      updated_at: '2022-11-21T10:18:34.351Z'
    }
  }
};
