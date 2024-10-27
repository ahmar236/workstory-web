import React from 'react';

const GoogleMap = () => {
  return (
    <div className='w-full m-0 p-0 h-96'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13623.023483963465!2d73.12315824999999!3d31.393294349999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1723629422648!5m2!1sen!2s"
        width="100%"
        height="384"
        style={{ border: 0 }}
        // allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
